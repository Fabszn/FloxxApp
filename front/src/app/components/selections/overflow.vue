

<template>
  <div class="d-flex justify-content-around separate-headfooter">
    <div>
      <button v-on:click="backRooms" type="button" class="btn btn-secondary navbtn">
        <font-awesome-icon icon="arrow-circle-left" />
      </button>
    </div>

    <div>
      <button v-on:click="refresh" type="button" class="btn btn-secondary navbtn">
        <font-awesome-icon icon="sync" />
      </button>
    </div>
  </div>


  <div class="screen-title">Overflow</div>
  <GDialog v-model="dialogDetailsTalkState">
    <div class="gdialog">
      <p>
        {{ selectedConf.confTitle }}
      </p>
      <p>Type : {{ selectedConf.confKind }}</p>
      <p>Salle : {{ selectedConf.room }}</p>

      <div class="separate_b space">
        <p>{{ selectedConf.twitterMessage() }}</p>
      </div>

      <div class="buttonmodal" v-if="this.adminState">
        <button type="button" v-on:click="
          setOverflowRoomNeuilly(selectedConf.slotId, selectedConf.room)
          " class="btn btn-secondary">
          Overflow Neuilly
        </button>
        <button type="button" v-on:click="
          setOverflowRoomParis(selectedConf.slotId, selectedConf.room)
          " class="btn btn-secondary">
          Overflow Paris
        </button>
      </div>
      <div class="buttonmodal">
        <button type="button" v-on:click="hideDetailsTalk" class="btn btn-secondary">
          Close
        </button>
      </div>
    </div>
  </GDialog>

  <GDialog v-model="dialogOverflowState">
    <div class="gdialog">
      <div class="buttonmodal">
        <button type="button" v-on:click="unsetOverflowRoomNeuilly.bind(this)()" class="btn btn-secondary">
          Clear Overflow Neuilly
        </button>
        <button type="button" v-on:click="unsetOverflowRoomParis.bind(this)()" class="btn btn-secondary">
          Clear Overflow Paris
        </button>
      </div>
      <div class="buttonmodal">
        <button type="button" v-on:click="hideOverflowAction" class="btn btn-secondary">
          Close
        </button>
      </div>
    </div>
  </GDialog>
  <!-- top
  <b-carousel id="carousel-1" v-model="slide" controls indicators background="rgba(var(--bs-dark-rgb)" img-width="450"
    img-height="800" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
  -->
  <b-tabs content-class="mt-3">
    <b-tab title="First floor">

      <div class="d-flex justify-content-around separate-headfooter">
        <div v-bind:class="{
          overflowMedium: stateAmphiB.dataOS.overflowMedium,
          overflowRequiered: stateAmphiB.dataOS.overflowRequiered,
        }" v-on:click="showDetailsTalk(1709)">
          <circle-progress :size="globalSize" :reverse="false" line-cap="round" :animation-start-value="0.0"
            :start-angle="380" insert-mode="append" :thickness="5" :show-percent="true" :percent="stateAmphiB.data.per"
            :fill-color="stateAmphiB.data.color" />
          <div class="roomTitleCenter">Amphi B.</div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div v-bind:class="{ overflowinfo: showOverflow }" v-on:click="showOverflowAction()">
          <div class="overflow-info-room">
            {{ infoOverflowNeuilly.data.roomId }}
          </div>
          <div class="overflow-info-room">
            {{ infoOverflowParis.data.roomId }}
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <div class="flex-column separate">
            <div class="space" v-bind:class="{
              overflowMedium: state253.dataOS.overflowMedium,
              overflowRequiered: state253.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1708)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state253.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5" :show-percent="true"
                :percent="state253.data.per" />
              <div class="roomTitleCenter">Neuilly 253</div>
            </div>

            <div class="space" v-bind:class="{
              overflowMedium: state252.dataOS.overflowMedium,
              overflowRequiered: state252.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1707)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state252.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5" :show-percent="true"
                :percent="state252.data.per" />
              <div class="roomTitleCenter">Neuilly 252</div>
            </div>
            <div class="space" v-bind:class="{
              overflowMedium: state251.dataOS.overflowMedium,
              overflowRequiered: state251.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1706)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state251.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5" :show-percent="true"
                :percent="state251.data.per" />
              <div class="roomTitleCenter">Neuilly 251</div>
            </div>
          </div>
          <div class="flex-column separate">
            <div class="space" v-bind:class="{
              overflowMedium: state243.dataOS.overflowMedium,
              overflowRequiered: state243.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1712)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :start-angle="380"
                :fill-color="state243.data.color" :show-percent="true" :percent="state243.data.per" :viewport="true" />
              <div class="roomTitleCenter">Paris 243</div>
            </div>
            <div class="space" v-bind:class="{
              overflowMedium: state242.dataOS.overflowMedium,
              overflowRequiered: state242.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1711)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state242.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5" :show-percent="true"
                :percent="state242.data.per" />
              <div class="roomTitleCenter">Paris 242AB</div>
            </div>
            <div class="space" v-bind:class="{
              overflowMedium: state241.dataOS.overflowMedium,
              overflowRequiered: state241.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1710)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state241.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5"
                :percent="state241.data.per" :show-percent="true" />
              <div class="roomTitleCenter">Paris 241</div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-around separate-headfooter">
        <div v-bind:class="{
          overflowMedium: stateMaillot.dataOS.overflowMedium,
          overflowRequiered: stateMaillot.dataOS.overflowRequiered,
        }" v-on:click="showDetailsTalk(1713)">
          <circle-progress :size="globalSize" :reverse="false" line-cap="round" :animation-start-value="0.0"
            :fill-color="stateMaillot.data.color" :start-angle="380" insert-mode="append" :thickness="5"
            :show-percent="true" :percent="stateMaillot.data.per" />
          <div class="roomTitleCenter">Maillot</div>
        </div>
      </div>
    </b-tab>
    <b-tab title="Second floor" >
      <div class="d-flex justify-content-center">
        <div v-bind:class="{ overflowinfo: showOverflow }" v-on:click="showOverflowAction()">
          <div class="overflow-info-room">
            {{ infoOverflowNeuilly.data.roomId }}
          </div>
          <div class="overflow-info-room">
            {{ infoOverflowParis.data.roomId }}
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <div class="flex-column separate">
            <div class="space" v-bind:class="{
              overflowMedium: state253.dataOS.overflowMedium,
              overflowRequiered: state253.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1708)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state253.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5" :show-percent="true"
                :percent="state253.data.per" />
              <div class="roomTitleCenter">Neuilly 153</div>
            </div>

            <div class="space" v-bind:class="{
              overflowMedium: state252.dataOS.overflowMedium,
              overflowRequiered: state252.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1707)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state252.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5" :show-percent="true"
                :percent="state252.data.per" />
              <div class="roomTitleCenter">Neuilly 152</div>
            </div>
            <div class="space" v-bind:class="{
              overflowMedium: state251.dataOS.overflowMedium,
              overflowRequiered: state251.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1706)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state251.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5" :show-percent="true"
                :percent="state251.data.per" />
              <div class="roomTitleCenter">Neuilly 151</div>
            </div>
          </div>
          <div class="flex-column separate">
            <div class="space" v-bind:class="{
              overflowMedium: state243.dataOS.overflowMedium,
              overflowRequiered: state243.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1705)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :start-angle="380"
                :fill-color="state243.data.color" :show-percent="true" :percent="state243.data.per" :viewport="true" />
              <div class="roomTitleCenter">Paris 143</div>
            </div>
            <div class="space" v-bind:class="{
              overflowMedium: state242.dataOS.overflowMedium,
              overflowRequiered: state242.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1704)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state242.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5" :show-percent="true"
                :percent="state242.data.per" />
              <div class="roomTitleCenter">Paris 142AB</div>
            </div>
            <div class="space" v-bind:class="{
              overflowMedium: state241.dataOS.overflowMedium,
              overflowRequiered: state241.dataOS.overflowRequiered,
            }" v-on:click="showDetailsTalk(1703)">
              <circle-progress :size="globalSize" :reverse="false" line-cap="round" :fill-color="state241.data.color"
                :animation-start-value="0.0" :start-angle="380" insert-mode="append" :thickness="5"
                :percent="state241.data.per" :show-percent="true" />
              <div class="roomTitleCenter">Paris 141</div>
            </div>
          </div>
        </div>
      </div>
      <div class="box d-flex justify-content-around separate-headfooter"></div>
    </b-tab>
  </b-tabs>
</template>



<script lang="ts">
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import _ from "lodash";
import shared from "../../shared";



import {
  TrackHitInfo,
  Conference,
  StateRoom,
  OverflowRoomState,
} from "../../models";
import { defineComponent, ref, reactive } from "@vue/runtime-core";

export default defineComponent({
  components: {
    CircleProgress,
  },
  setup() {
    const adminState = ref(false)
    const stateAmphiB = new StateRoom();
    const stateMaillot = new StateRoom();
    const state243 = new StateRoom();
    const state241 = new StateRoom();
    const state242 = new StateRoom();
    const state251 = new StateRoom();
    const state252 = new StateRoom();
    const state253 = new StateRoom();
    const state143 = new StateRoom();
    const state141 = new StateRoom();
    const state142 = new StateRoom();
    const state151 = new StateRoom();
    const state152 = new StateRoom();
    const state153 = new StateRoom();
    const infoOverflowNeuilly = new OverflowRoomState();
    const infoOverflowParis = new OverflowRoomState();
    const showOverflow = ref(false);
    const globalSize = ref(100);




    return {
      stateAmphiB,
      stateMaillot,
      state241,
      state242,
      state243,
      state251,
      state252,
      state253,
      state143,
      state141,
      state142,
      state151,
      state152,
      state153,
      globalSize,
      infoOverflowNeuilly,
      infoOverflowParis,
      showOverflow,
      adminState,

    };
  },
  data: () => ({
    dialogDetailsTalkState: false,
    dialogOverflowState: false,
    overflowRoomParis: "O.Paris",
    overflowRoomNeuilly: "O.Neuilly",
    hits: [],
    fill: { gradient: ["green"] },
    selectedConf: new Conference(),
    slide: 0,
    sliding: null
  }),
  mounted: function () {
    shared.securityAccess(this.$router, (p) => {
      currentTracksWitHitInfo.bind(this)();
    });
    this.adminState = shared.readAdminEtat();
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    showDetailsTalk: function (idSlot: number) {
      beforeOpen.bind(this)(idSlot);
      this.dialogDetailsTalkState = true;
    },
    showOverflowAction: function () {
      //can access only by admin
      this.dialogOverflowState = this.adminState;
    },
    setOverflowRoomNeuilly(slotId: String, roomId: String) {
      this.showOverflow = true;
      this.infoOverflowNeuilly.data.roomId = roomId;
      this.infoOverflowNeuilly.data.slotId = slotId;
      setAffectedRoom.bind(this)(slotId, this.overflowRoomNeuilly);
    },
    setOverflowRoomParis(slotId: String, roomId: String) {
      this.showOverflow = true;
      this.infoOverflowParis.data.roomId = roomId;
      this.infoOverflowParis.data.slotId = slotId;
      setAffectedRoom.bind(this)(slotId, this.overflowRoomParis);
    },
    unsetOverflowRoomNeuilly() {
      unsetAffectedRoom.bind(this)(this.overflowRoomNeuilly);
    },
    unsetOverflowRoomParis() {
      unsetAffectedRoom.bind(this)(this.overflowRoomParis);
    },
    hideDetailsTalk() {
      this.dialogDetailsTalkState = false;
    },
    hideOverflowAction() {
      this.dialogOverflowState = false;
    },
    progress_end: function () { },
    progress: function () { },
    refresh: function () {
      currentTracksWitHitInfo.bind(this)();
    },
    backRooms: function () {
      this.$router.push("/menu");
    },
  },
});

function currentTracksWitHitInfo() {
  fetch("api/tracks-infos", {
    headers: shared.tokenHandle(),
  })
    .then((response) => response.json())
    .then((r) => {
      let tis: TrackHitInfo[] = r;
      this.hits = tis;
      _.forEach(_.values(tis), (value) => {
        if (!_.isNull(value.hitInfo)) {

          var currentState: StateRoom = getState.bind(this)(value.slot.roomId);

          if (!_.isUndefined(currentState)) {
            currentState.data.per = _.toInteger(value.hitInfo.percentage);
            currentState.data.color = shared.colorByPercentage(
              value.hitInfo.percentage
            );
            currentState.data.selected = value.selected;
            currentState.data.affectedRoom = value.affectedRoom;
            if (!_.isNull(value.overflow)) {
              currentState.data.overflowState = value.overflow.level;
              currentState.computeRoomState(value.overflow.level);

              initOverflowAffectedRoom.bind(this)(
                value.overflow.affectedRoom,
                value
              );
            }
          }
        }
      });
    });
}

function getState(key: number) {
  if (key == 1712) {
    return this.state243;
  } else if (key == 1713) {
    return this.stateMaillot;
  } else if (key == 1709) {
    return this.stateAmphiB;
  } else if (key == 1711) {
    return this.state242;
  } else if (key == 1710) {
    return this.state241;
  } else if (key == 1706) {
    return this.state251;
  } else if (key == 1707) {
    return this.state252;
  } else if (key == 1708) {
    return this.state253;
  } else if (key == 1051) {
    return this.state151;
  } else if (key == 1701) {
    return this.state152;
  } else if (key == 1702) {
    return this.state153;
  } else if (key == 1703) {
    return this.state141;
  } else if (key == 1704) {
    return this.state142;
  } else if (key == 1705) {
    return this.state143;
  }
}

function setAffectedRoom(slotId: String, ar: String) {
  fetch("/api/overflow/_affectedRoom", {
    body: JSON.stringify({
      slotId: slotId,
      affectedRoom: ar,
    }),
    method: "POST",
    headers: shared.tokenHandle(),
  });
}

function unsetAffectedRoom(ar: String) {
  let slotId = undefined;
  if (ar == this.overflowRoomNeuilly) {
    slotId = this.infoOverflowNeuilly.data.slotId;
    this.infoOverflowNeuilly = new OverflowRoomState();
  } else {
    slotId = this.infoOverflowParis.data.slotId;
    this.infoOverflowParis = new OverflowRoomState();
  }
  if (
    this.infoOverflowNeuilly.data.slotId == "" &&
    this.infoOverflowParis.data.slotId == ""
  ) {
    this.showOverflow = false;
  }

  fetch("/api/overflow/_affectedRoom", {
    body: JSON.stringify({
      slotId: slotId,
    }),
    method: "POST",
    headers: shared.tokenHandle(),
  });
}

function beforeOpen(idSlot) {
  let currentr = (id: number) => {
    return _.find(this.hits, function (hit) {
      return hit.slot.roomId == id;
    });
  };
  let current = currentr(idSlot);
  if (!_.isUndefined(current)) {
    let currentState: StateRoom = getState.bind(this)(current.slot.slotId);
    this.selectedConf.updateInfo(
      current.slot.title,
      current.slot.kind,
      current.slot.roomId,
      current.slot.fromTime,
      current.slot.toTime,
      current.slot.slotId,
      currentState
    );
  } else {
    this.selectedConf.updateInfo(
      "No talk currently in this room " + idSlot,
      "",
      "",
      "",
      "",
      "",
      new StateRoom()
    );
  }
}
function initOverflowAffectedRoom(affectedRoom, data) {
  if (!_.isNull(affectedRoom)) {
    this.showOverflow = true;
    if (affectedRoom == this.overflowRoomParis) {
      this.infoOverflowParis.data.roomId = data.slot.roomId;
      this.infoOverflowParis.data.slotId = data.hitInfo.hitSlotId;
    } else {
      this.infoOverflowNeuilly.data.roomId = data.slot.roomId;
      this.infoOverflowNeuilly.data.slotId = data.hitInfo.hitSlotId;
    }
  }
}
</script>

<style  scoped>



.gdialog {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  background-color: #343a40;
  color: #fff !;
  border: 1px solid #fff;
}

.swiper {
  width: 100%;
  height: 100%;
}

.space {
  margin: 20px;
}

.overflowJustFull {
  background-color: rgba(221, 247, 119, 0.817);
  border-radius: 10px;
}

.overflowMedium {
  background-color: rgba(246, 141, 55, 60%);
  border-radius: 10px;
}

.overflowRequiered {
  background-color: rgba(72, 14, 14, 60%);
  border-radius: 10px;
}

.roomTitleCenter {
  display: flex;
  justify-content: center;
}

.overflow-info-room {
  display: flex;
  flex-direction: row;
}

.overflowinfo {
  border: 4px solid rgba(246, 141, 55, 60%);
  display: flex;
  justify-content: space-around;
}

.box {
  height: 126px;
}
</style>
