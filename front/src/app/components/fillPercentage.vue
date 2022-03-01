<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backRoom" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      &nbsp;
      &nbsp;
    </div>

    <div class="d-flex flex-column justify-content-center">
      <div class="title separate">{{title}}</div>
      <div>{{talkType}} - {{room}}</div>
    </div>

    <div class="d-flex justify-content-center">
      <div>
        <vue-circle
          ref="lastValue"
          v-bind:progress="0"
          :size="100"
          :reverse="false"
          line-cap="round"
          :fill="fill"
          empty-fill="rgba(0, 0, 0, .1)"
          :animation-start-value="0.0"
          :start-angle="380"
          insert-mode="append"
          :thickness="5"
          :show-percent="true"
          @vue-circle-progress="progress"
          @vue-circle-end="progress_end"
        ></vue-circle>
      </div>
    </div>
    <div class="d-flex flex-column align-content-center">
      <div class="d-flex flex-row justify-content-center justify-content-around">
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block-green position"
            v-on:click="hit(10)"
          >10%</button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block-green position"
            v-on:click="hit(20)"
          >20%</button>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-center justify-content-around">
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block-green"
            v-on:click="hit(30)"
          >30%</button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block-green"
            v-on:click="hit(40)"
          >40%</button>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-center justify-content-around">
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block-orange"
            v-on:click="hit(50)"
          >50%</button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block-orange"
            v-on:click="hit(60)"
          >60%</button>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-center justify-content-around">
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block-orange"
            v-on:click="hit(70)"
          >70%</button>
        </div>
        <div>
          <button type="button" class="btn btn-secondary btn-lg block-red" v-on:click="hit(80)">80%</button>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-center justify-content-around">
        <div>
          <button type="button" class="btn btn-secondary btn-lg block-red" v-on:click="hit(90)">90%</button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block-red"
            v-on:click="hit(100)"
          >Full</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shared from "../shared";
import VueCircle from "vue2-circle-progress";

export default {
  components: {
    VueCircle
  },
  data: function() {
    return {
      id: this.$route.params.slotid,
      fill: { gradient: ["green"] },
      title: "",
      talkType: "",
      room: ""
    };
  },
  created() {
    shared.securityAccess(this.$router, p => {
      var itemId = this.$route.params.slotid;
      this.$http
        .get(BACKEND_URL + "api/slots/" + itemId, {
          headers: shared.tokenHandle()
        })
        .then(p => {
          this.title = p.data.slot.talk.title;
          this.talkType = p.data.slot.talk.talkType;
          this.room = p.data.slot.roomId;
        });
    });
  },
  methods: {
    progress_end: function() {},
    progress: function() {},
    hit: function(perc) {
      this.$http
        .post(
          BACKEND_URL + "api/hit",
          {
            hitSlotId: this.$route.params.slotid,
            percentage: perc
          },
          {
            headers: shared.tokenHandle()
          }
        )
        .then(p => {
          this.$refs.lastValue.updateProgress(perc);
          this.$refs.lastValue.updateFill({
            gradient: shared.colorByPercentage(perc)
          });
          this.$notify({
            group: "floxx",
            type: "success",
            title: "Success",
            text: "Percentage has been registered"
          });
        });
    },
    backRoom: function() {
      this.$router.push("/rooms");
    }
  }
};
</script>

<style  scoped>
.limit {
  width: 50%;
}

.block-green {
  display: block;
  width: 100%;
  border: none;
  background-color: #4caf50;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin: 6px 0px 0px 10px;
}

.block-orange {
  display: block;
  width: 100%;
  border: none;
  background-color: #ffa500;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin: 6px 0px 0px 10px;
}

.block-red {
  display: block;
  width: 100%;
  border: none;
  background-color: red;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin: 6px 0px 0px 10px;
}
</style>
