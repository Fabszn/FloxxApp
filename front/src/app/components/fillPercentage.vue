<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button
          v-on:click="backMySlots"
          type="button"
          class="btn btn-secondary"
        >
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>

    <div class="d-flex flex-column justify-content-center">
      <div class="title separate">{{ title }}</div>
      <div>{{ talkType }} - {{ room.value }}</div>
    </div>

    <div class="d-flex justify-content-center">
      <div>
        <circle-progress
          :size=100
          :reverse="false"
          line-cap="round"
          :fill-color="currentColor"
          :animation-start-value="0.0"
          :start-angle="380"
          insert-mode="append"
          :thickness="5"
          :percent="currentFill"
          :show-percent="true"
        />
      </div>
    </div>
    <div class="d-flex flex-column align-content-center">
      <div
        class="d-flex flex-row justify-content-center justify-content-around"
      >
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block bgreen position"
            v-on:click="hit(10)"
          >
            10%
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block bgreen position"
            v-on:click="hit(20)"
          >
            20%
          </button>
        </div>
      </div>
      <div
        class="d-flex flex-row justify-content-center justify-content-around"
      >
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block bgreen"
            v-on:click="hit(30)"
          >
            30%
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block bgreen"
            v-on:click="hit(40)"
          >
            40%
          </button>
        </div>
      </div>
      <div
        class="d-flex flex-row justify-content-center justify-content-around"
      >
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block borange"
            v-on:click="hit(50)"
          >
            50%
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block borange"
            v-on:click="hit(60)"
          >
            60%
          </button>
        </div>
      </div>
      <div
        class="d-flex flex-row justify-content-center justify-content-around"
      >
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block borange"
            v-on:click="hit(70)"
          >
            70%
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block bred"
            v-on:click="hit(80)"
          >
            80%
          </button>
        </div>
      </div>
      <div
        class="d-flex flex-row justify-content-center justify-content-around"
      >
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block bred"
            v-on:click="hit(90)"
          >
            90%
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block bred"
            v-on:click="hit(100)"
          >
            Over
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shared from "../shared";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { defineComponent, ref } from "@vue/runtime-core";
import { useToast } from "vue-toastification";
import _ from "lodash";

export default defineComponent({
  components: {
    CircleProgress,
  },
  setup() {
    const toast = useToast();
    const currentFill = ref(0);
    const currentColor = ref("green");

    return {
      currentFill,
      currentColor,
      toast,
    };
  },
  data: function () {
    return {
      id: this.$route.params.slotid,
      fill: { gradient: ["green"] },
      title: "",
      talkType: "",
      room: "",
    };
  },
  created() {
    shared.securityAccess(this.$router, (p) => {
      var itemId = this.$route.params.slotid;
      fetch("/api/slots/" + itemId, {
        headers: shared.tokenHandle(),
      })
        .then((response) => response.json())
        .then((p) => {
          this.title = p.talk.title;
          this.talkType = p.talk.talkType;
          this.room = p.roomId;
        });
    });
  },
  methods: {
    progress_end: function () {},
    progress: function () {},
    hit: function (perc) {
      fetch("/api/hit", {
        body: JSON.stringify({
          "hitSlotId": this.$route.params.slotid,
          "percentage": perc,
        }),
        method: "POST",
        headers: shared.tokenHandle(),
      }).then((p) => {
        this.currentFill = _.toInteger(perc);
        this.currentColor = shared.colorByPercentage(perc);
        this.toast.success("Percentage has been registered");
      });
    },
    backMySlots: function () {
      this.$router.push("/myslots");
    },
  },
});
</script>

<style  scoped>
.limit {
  width: 50%;
}

.block {
  display: block;
  width: 100%;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin: 6px 0px 0px 10px;
}

.bred {
  background-color: red;
}
.borange {
  background-color: #ffa500;
}
.bgreen {
  background-color: #4caf50;
}
</style>
