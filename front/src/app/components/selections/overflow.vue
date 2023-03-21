

<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-around separate-headfooter">
      <div>
        <button v-on:click="backRooms" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>

      <div>
        <button v-on:click="refresh" type="button" class="btn btn-secondary">
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

        <div class="buttonmodal">
          <button
            type="button"
            v-on:click="
              setOverflowRoomNeuilly(selectedConf.slotId, selectedConf.room)
            "
            class="btn btn-secondary"
          >
            Overflow Neuilly
          </button>
          <button
            type="button"
            v-on:click="
              setOverflowRoomParis(selectedConf.slotId, selectedConf.room)
            "
            class="btn btn-secondary"
          >
            Overflow Paris
          </button>
        </div>
        <div class="buttonmodal">
          <button
            type="button"
            v-on:click="hideDetailsTalk"
            class="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </GDialog>

    <GDialog v-model="dialogOverflowState">
      <div class="gdialog">
    
        <div class="buttonmodal">
          <button
            type="button"
            v-on:click="unsetOverflowRoomNeuilly.bind(this)()"
            class="btn btn-secondary"
          >
            Clear Overflow Neuilly
          </button>
          <button
            type="button"
            v-on:click="unsetOverflowRoomParis.bind(this)()"
            class="btn btn-secondary"
          >
            Clear Overflow Paris
          </button>
        </div>
        <div class="buttonmodal">
          <button
            type="button"
            v-on:click="hideOverflowAction"
            class="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </GDialog>

    <div class="d-flex justify-content-around separate-headfooter">
      <div
        v-bind:class="{
          overflowMedium: stateAmphiB.dataOS.overflowMedium,
          overflowRequiered: stateAmphiB.dataOS.overflowRequiered,
        }"
        v-on:click="showDetailsTalk('b_amphi')"
      >
        <circle-progress
          :size="globalSize"
          :reverse="false"
          line-cap="round"
          :animation-start-value="0.0"
          :start-angle="380"
          insert-mode="append"
          :thickness="5"
          :show-percent="true"
          :percent="stateAmphiB.data.per"
          :fill-color="stateAmphiB.data.color"
        />
        <div class="roomTitleCenter">Amphi B.</div>
      </div>
    </div>

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
        <div
          class="space"
          v-bind:class="{
            overflowMedium: state253.dataOS.overflowMedium,
            overflowRequiered: state253.dataOS.overflowRequiered,
          }"
          v-on:click="showDetailsTalk('neu253')"
        >
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="state253.data.color"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            :percent="state253.data.per"
          />
          <div class="roomTitleCenter">Neuilly 253</div>
        </div>

        <div
          class="space"
          v-bind:class="{
            overflowMedium: state252.dataOS.overflowMedium,
            overflowRequiered: state252.dataOS.overflowRequiered,
          }"
          v-on:click="showDetailsTalk('neu252')"
        >
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="state252.data.color"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            :percent="state252.data.per"
          />
          <div class="roomTitleCenter">Neuilly 252</div>
        </div>
        <div
          class="space"
          v-bind:class="{
            overflowMedium: state251.dataOS.overflowMedium,
            overflowRequiered: state251.dataOS.overflowRequiered,
          }"
          v-on:click="showDetailsTalk('neu251')"
        >
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="state251.data.color"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            :percent="state251.data.per"
          />
          <div class="roomTitleCenter">Neuilly 251</div>
        </div>
      </div>
      <div class="flex-column separate">
        <div
          class="space"
          v-bind:class="{
            overflowMedium: state243.dataOS.overflowMedium,
            overflowRequiered: state243.dataOS.overflowRequiered,
          }"
          v-on:click="showDetailsTalk('par243')"
        >
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :start-angle="380"
            :fill-color="state243.data.color"
            :show-percent="true"
            :percent="state243.data.per"
            :viewport="true"
          />
          <div class="roomTitleCenter">Paris 243</div>
        </div>
        <div
          class="space"
          v-bind:class="{
            overflowMedium: state242.dataOS.overflowMedium,
            overflowRequiered: state242.dataOS.overflowRequiered,
          }"
          v-on:click="showDetailsTalk('par242AB')"
        >
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="state242.data.color"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            :percent="state242.data.per"
          />
          <div class="roomTitleCenter">Paris 242AB</div>
        </div>
        <div
          class="space"
          v-bind:class="{
            overflowMedium: state241.dataOS.overflowMedium,
            overflowRequiered: state241.dataOS.overflowRequiered,
          }"
          v-on:click="showDetailsTalk('241')"
        >
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="state241.data.color"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :percent="state241.data.per"
            :show-percent="true"
          />
          <div class="roomTitleCenter">Paris 241</div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div
        v-bind:class="{
          overflowMedium: stateMaillot.dataOS.overflowMedium,
          overflowRequiered: stateMaillot.dataOS.overflowRequiered,
        }"
        v-on:click="showDetailsTalk('c_maillot')"
      >
        <circle-progress
          :size="globalSize"
          :reverse="false"
          line-cap="round"
          :animation-start-value="0.0"
          :fill-color="stateMaillot.data.color"
          :start-angle="380"
          insert-mode="append"
          :thickness="5"
          :show-percent="true"
          :percent="stateMaillot.data.per"
        />
        <div class="roomTitleCenter">Maillot</div>
      </div>
    </div>
  </div>
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
    const stateAmphiB = new StateRoom();
    const stateMaillot = new StateRoom();
    const state243 = new StateRoom();
    const state241 = new StateRoom();
    const state242 = new StateRoom();
    const state251 = new StateRoom();
    const state252 = new StateRoom();
    const state253 = new StateRoom();
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
      globalSize,
      infoOverflowNeuilly,
      infoOverflowParis,
      showOverflow,
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
  }),
  mounted: function () {
    shared.securityAccess(this.$router, (p) => {
      currentTracksWitHitInfo.bind(this)();
    });
  },
  methods: {
    showDetailsTalk: function (idSlot: string) {
      beforeOpen.bind(this)(idSlot);
      this.dialogDetailsTalkState = true;
    },
    showOverflowAction: function () {
      this.dialogOverflowState = true;
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
    progress_end: function () {},
    progress: function () {},
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
          let currentState: StateRoom = getState.bind(this)(
            value.hitInfo.hitSlotId
          );
          currentState.data.per = _.toInteger(value.hitInfo.percentage);
          currentState.data.color = shared.colorByPercentage(
            value.hitInfo.percentage
          );
          currentState.data.selected = value.selected;
          currentState.data.affectedRoom = value.affectedRoom;
          if (!_.isNull(value.overflow)) {
            currentState.data.overflowState = value.overflow.level;
            currentState.computeRoomState(value.overflow.level);
            
            initOverflowAffectedRoom.bind(this)(value.overflow.affectedRoom, value);
          }
        }
      });
    });
}

function getState(key: String) {
  if (key.includes("par243")) {
    return this.state243;
  } else if (key.includes("c_maillot")) {
    return this.stateMaillot;
  } else if (key.includes("b_amphi")) {
    return this.stateAmphiB;
  } else if (key.includes("par242AB")) {
    return this.state242;
  } else if (key.includes("par241")) {
    return this.state241;
  } else if (key.includes("neu251")) {
    return this.state251;
  } else if (key.includes("neu252")) {
    return this.state252;
  } else if (key.includes("neu253")) {
    return this.state253;
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
  if(this.infoOverflowNeuilly.data.slotId == "" && this.infoOverflowParis.data.slotId == ""){
    this.showOverflow = false;
  }

  fetch("/api/overflow/_affectedRoom", {
    body: JSON.stringify({
      slotId: slotId
    }),
    method: "POST",
    headers: shared.tokenHandle(),
  });
}

function beforeOpen(idSlot) {
  let currentr = (id: string) => {
    return _.find(this.hits, function (hit) {
      return hit.hitSlotId.includes(id);
    });
  };
  let current = currentr(idSlot);
  if (!_.isUndefined(current)) {
    let currentState: StateRoom = getState.bind(this)(current.slot.slotId);
    this.selectedConf.updateInfo(
      current.slot.talk.title,
      current.slot.talk.talkType,
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
  border: 1px solid rgba(246, 141, 55, 60%);
  display: flex;
  justify-content: space-around;
}
</style>
