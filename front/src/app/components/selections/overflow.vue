

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
    <GDialog v-model="dialogState">
      <div class="talkdetails">
        <p>
          {{ selectedConf.confTitle }}
        </p>
        <p>Type : {{ selectedConf.confKind }}</p>
        <p>Salle : {{ selectedConf.room }}</p>

        <!--<button
          type="button"
          v-clipboard:copy="twitterMessage"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          class="btn btn-secondary"
        >
          Copy to clipboard
          <font-awesome-icon icon="copy" />
        </button>-->

        <div class="separate_b space">
          <p>{{ selectedConf.twitterMessage() }}</p>
        </div>
      </div>
    </GDialog>

    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter" v-on:click="show('b_amphi')">
        <circle-progress
          :size="globalSize"
          :reverse="false"
          line-cap="round"
          :animation-start-value="0.0"
          :start-angle="380"
          insert-mode="append"
          :thickness="5"
          :show-percent="true"
          :percent="perAmphiB"
          :fill-color="colAmphiB"
        />
        <div class="roomTitleCenter">Amphi B.</div>
      </div>
    </div>
    <div class="d-flex justify-content-around">
      <div class="flex-column separate">
        <div class="space" v-on:click="show('neu253')">
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="col253"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            :percent="per253"
          />
          <div class="roomTitleCenter">Neuilly 253</div>
        </div>

        <div class="space" v-on:click="show('f_neu252')">
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="col252"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            :percent="per252"
          />
          <div class="roomTitleCenter">Neuilly 252</div>
        </div>
        <div class="space" v-on:click="show('f_neu251')">
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="col251"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            :percent="per251"
          />
          <div class="roomTitleCenter">Neuilly 251</div>
        </div>
      </div>
      <div class="flex-column separate">
        <div class="space" v-on:click="show('par243')">
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :start-angle="380"
            :fill-color="col243"
            :show-percent="true"
            :percent="per243"
            :viewport="true"
          />
          <div class="roomTitleCenter">Paris 243</div>
        </div>
        <div class="space" v-on:click="show('par242AB')">
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="col242"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :show-percent="true"
            :percent="per242"
          />
          <div class="roomTitleCenter">Paris 242AB</div>
        </div>
        <div class="space" v-on:click="show('241')">
          <circle-progress
            :size="globalSize"
            :reverse="false"
            line-cap="round"
            :fill-color="col241"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :percent="per241"
            :show-percent="true"
          />
          <div class="roomTitleCenter">Paris 241</div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter" v-on:click="show('c_maillot')">
        <circle-progress
          :size="globalSize"
          :reverse="false"
          line-cap="round"
          :animation-start-value="0.0"
          :fill-color="colMaillot"
          :start-angle="380"
          insert-mode="append"
          :thickness="5"
          :show-percent="true"
          :percent="perMaillot"
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
import { TrackHitInfo, Conference } from "../../models";
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  components: {
    CircleProgress,
  },
  setup() {
    const perAmphiB = ref(0);
    const perMaillot = ref(0);
    const per243 = ref(0);
    const per241 = ref(0);
    const per242 = ref(0);
    const per251 = ref(0);
    const per252 = ref(0);
    const per253 = ref(0);

    const colAmphiB = ref("green");
    const colMaillot = ref("green");
    const col243 = ref("green");
    const col241 = ref("green");
    const col242 = ref("green");
    const col251 = ref("green");
    const col252 = ref("green");
    const col253 = ref("green");

    const globalSize = ref(100);

    return {
      perAmphiB,
      perMaillot,
      per241,
      per242,
      per243,
      per251,
      per252,
      per253,
      col243,
      col241,
      col242,
      col251,
      col252,
      col253,
      colMaillot,
      colAmphiB,
      globalSize,
    };
  },
  data: () => ({
    dialogState: false,
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
    show: function (idSlot: string) {
      beforeOpen.bind(this)(idSlot);
      this.dialogState = true;
    },
    progress_end: function () {},
    progress: function () {},
    refresh: function () {
      currentTracksWitHitInfo.bind(this)();
    },
    backRooms: function () {
      this.$router.push("/menu");
    },
    update: function () {
      this.percentage = 30;
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
          shared.computeHit.bind(this)(
            value.hitInfo.percentage,
            value.hitInfo.hitSlotId
          );
        }
      });
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
    this.selectedConf.updateInfo(
      current.slot.talk.title,
      current.slot.talk.talkType,
      current.slot.roomId,
      current.slot.fromTime,
      current.slot.toTime,
      current.slot.slotId
    );
  } else {
    this.selectedConf.updateInfo(
      "No talk currently in this room " + idSlot,
      "",
      "",
      "",
      "",
      ""
    );
  }
}
</script>

<style  scoped>
.talkdetails {
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

.roomTitleCenter {
  display: flex;
  justify-content: center;
}
</style>
