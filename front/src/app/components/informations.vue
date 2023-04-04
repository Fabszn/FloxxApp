<template>
  
    <div>
      <div class="d-flex justify-space-between separate-headfooter">
        <button
          v-on:click="backMenu"
          type="button"
          class="btn btn-secondary navbtn"
        >
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
        <button
          v-on:click="addInformation"
          type="button"
          class="btn btn-secondary navbtn"
        >
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>

    
      <button
        type="button"
        class="btn btn-secondary btn-lg block"
        v-on:click="navToOverf">
        Info
      </button>
   
    <div>
      <button
        type="button"
        class="btn btn-secondary btn-lg block"
        v-on:click="navToOverf"
      >
        Info 2
      </button>
    </div>

    <GDialog v-model="dialogState">
      <div class="floxxmodal over">
        <div class="modalinfo">
          Create information
        </div>
        <div class="buttonmodal">
          <button type="button" v-on:click="hide" class="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </GDialog>
  
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
    hide() {
      this.dialogState = false;
    },
    backMenu: function () {
      this.$router.push("/menu");
    },
    addInformation: function () {
      this.dialogState = true;
      console.info("open information")
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


</script>

<style  scoped>
.block {
  width: 100%;
  border: 1px solid #f6f2c9;
  background-color: #30260f;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>
