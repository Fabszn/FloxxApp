<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button
          v-on:click="backMySlots"
          type="button"
          class="btn btn-secondary navbtn"
        >
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
        &nbsp;
        <button
          v-on:click="sendPicture"
          type="button"
          class="btn btn-secondary navbtn"
        >
          <font-awesome-icon icon="photo-film" />
        </button>
      </div>
    </div>

    <div class="d-flex flex-column justify-content-center">
      <div class="title separate">{{ title }}</div>
      <div>{{ talkType }} - {{ room }}</div>
    </div>

    <div class="d-flex justify-content-center">
      <div>
        <circle-progress
          :size="100"
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
            v-if="overflow"
            type="button"
            class="btn btn-secondary btn-lg block bred"
            v-on:click="hit(100)"
          >
            Over
          </button>
          <button
            v-else
            type="button"
            class="btn btn-secondary btn-lg block bred"
            v-on:click="hit(100)"
          >
            100%
          </button>
        </div>
      </div>
    </div>

    <GDialog v-model="dialogState">
      <div class="floxxmodal over">
        <div class="modalinfo">
          <div class="slider">
            Give more details.
            <br>
            <br>
            <vue-slider
              v-model="value"
              :adsorb="true"
              :data="data"
              :marks="true"
              @change="ch"
            ></vue-slider>
          </div>
        </div>
        <div class="buttonmodal">
          <button type="button" v-on:click="hide" class="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </GDialog>
  </div>
</template>

<script>
import shared from "../shared";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { defineComponent, ref } from "@vue/runtime-core";
import { useToast } from "vue-toastification";
import _ from "lodash";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default defineComponent({
  components: {
    CircleProgress,
    VueSlider,
  },
  setup() {
    const toast = useToast();
    const currentFill = ref(0);
    const currentColor = ref("green");
    const overflow = ref(false);
    const overflowIndex = {
      1: "Full",
      2: "Moderate",
      3: "Required",
    };

    return {
      currentFill,
      currentColor,
      toast,
      overflow,
      overflowIndex,
    };
  },
  data: function () {
    return {
      dialogState: false,
      id: this.$route.params.slotid,
      fill: { gradient: ["green"] },
      title: "",
      talkType: "",
      room: "",
      data: ["Full", "Moderate", "Required"],
      value: "",
    };
  },
  created() {
    shared.securityAccess(this.$router, (p) => {
      var itemId = this.$route.params.slotid;
      fetch("/api/tracks-infos/" + itemId, {
        headers: shared.tokenHandle(),
      })
        .then((response) => response.json())
        .then((p) => {
          this.title = p.slot.talk.title;
          this.talkType = p.slot.talk.talkType;
          this.room = p.slot.roomId;
          this.day = p.slot.day;
          this.fromTime = p.slot.fromTime;
          initPercentage.bind(this)(p.hitInfo.percentage);
          if (_.isNull(p.overflow)) {
            this.value = 0;
          } else {
            this.value = this.overflowIndex[p.overflow.level];
          }
        });
    });
  },
  methods: {
    progress_end: function () {},
    progress: function () {},
    hit: function (perc) {
      fetch("/api/hit", {
        body: JSON.stringify({
          hitSlotId: this.$route.params.slotid,
          percentage: perc,
        }),
        method: "POST",
        headers: shared.tokenHandle(),
      }).then((p) => {
        this.currentFill = _.toInteger(perc);
        this.currentColor = shared.colorByPercentage(perc);
        this.toast.success("Percentage has been registered");
        this.switchOverflow.bind(this)(perc);
        // DELETE Overflow value
      });
      fetch("/api/overflow/" + this.$route.params.slotid, {
        method: "DELETE",
        headers: shared.tokenHandle(),
      });
    },
    switchOverflow: function (perc) {
      if (perc == 100 && this.overflow == true) {
        this.dialogState = true;
      } else if (perc != 100) {
        this.overflow = false;
      } else {
        this.overflow = true;
      }
    },
    hide() {
      this.dialogState = false;
    },
    backMySlots: function () {
      this.$router.push("/myslots");
    },
    sendPicture: function () {
      var day = this.day;
      var room = this.room;
      var start = this.fromTime;
      var subject = `${day} ${room} ${start}`;
      var encodedSubject = encodeURIComponent(subject);
      var mailtoLink = "mailto:photos@devoxx.fr?subject=" + encodedSubject;
      window.open(mailtoLink, "_blank");
    },
    ch: function (va) {
      fetch("/api/overflow", {
        body: JSON.stringify({
          slotId: this.$route.params.slotid,
          level: _.invert(this.overflowIndex)[va],
        }),
        method: "POST",
        headers: shared.tokenHandle(),
      });
    },
  },
});

function initPercentage(perc) {
  if (!_.isNull(perc)) {
    this.currentFill = perc;
    this.currentColor = shared.colorByPercentage(perc);
    if (perc == 100) {
      this.switchOverflow.bind(this)(perc);
    }
  }
}
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

.bpurple {
  background-color: red;
}
.bred {
  background-color: #8b0000;
}
.borange {
  background-color: DarkOrange;
}
.bgreen {
  background-color: #006400;
}
.slider {
  padding: 18px 90px;
}

@media (max-width: 375px) {
  .slider {
    padding: 18px 20px;
  }
}
</style>
