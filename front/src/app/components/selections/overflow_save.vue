

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
   
    <Modal  @before-enter="beforeEnter"  v-model="isShow" :close="closeModal">
      <div class="talkdetails">
        <p>
          {{ confTitle }}
        </p>
        <p>Type : {{ confKind }}</p>
        <p>Salle : {{ room }}</p>

        <button
          type="button"
          v-clipboard:copy="twitterMessage"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          class="btn btn-secondary"
        >
          Copy to clipboard
          <font-awesome-icon icon="copy" />
        </button>

        <div class="separate_b space">
          <p>{{ twitterMessage }}</p>
        </div>
      </div>
    </modal>
    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter" v-on:click="show('b_amphi')">
        <circle-progress
          ref="_amphiB"
          progress="0"
          :size="115"
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
          />
<span>Amphi B.</span>
        
      </div>
    </div>
    <div class="d-flex justify-content-around">
      <div class="flex-column separate">
        <div class="space" v-on:click="show('neu253')">
          <circle-progress
            ref="_253"
            progress="0"
            :size="115"
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
            />
          <span>253</span>
        </div>

        <div class="space" v-on:click="show('e_neu252')">
          <circle-progress
            ref="_252"
            progress="0"
            :size="115"
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
            />
          <span>Neuilly 252</span>
        </div>
        <div class="space" v-on:click="show('f_neu251')">
          <circle-progress
            ref="_251"
            progress="0"
            :size="115"
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
            />
          <span>Neuilly 251</span>
        </div>
      </div>
      <div class="flex-column separate">
        <div class="space" v-on:click="show('par243')">
          <circle-progress
            ref="_243"
            progress="0"
            :size="115"
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
            />
            <span>Paris 243</span>
        </div>
        <div class="space" v-on:click="show('par242AB')">
          <circle-progress
            ref="_242"
            progress="0"
            :size="115"
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
            />
            <span>Paris 242AB</span>
        </div>
        <div class="space" v-on:click="show('par241')">
          <circle-progress
            ref="_241"
            progress="0"
            :size="115"
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
            /><span> 241</span>
          
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter" v-on:click="show('c_maillot')">
        <circle-progress
          ref="_maillot"
          :progress="0"
          :size="115"
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
          />
          <span>Maillot</span>
      </div>
    </div>
  </div>
</template>

<script>
import VueUniversalModal from 'vue-universal-modal'
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import _ from "lodash";
import shared from "../../shared";

function currentTracksWitHitInfo() {
  
  fetch("api/tracks-infos", {
      headers: shared.tokenHandle(),
    })
    .then((p) => {
      this.hits = p.data;
      _.forEach(_.values(p.data), (value) => {
        if (!_.isNull(value.hitInfo)) {
          shared.computeHit(
            value.hitInfo.percentage,
            value.hitInfo.hitSlotId,
            this.$refs
          );
        }
      }); 
    });
}

function findKey(idSlotComp, refComp) {
  return _.find(_.values(refComp.hits), function (key) {
    return key.hitSlotId.value.includes(idSlotComp);
  });
}

import { defineComponent, ref } from 'vue'




export default defineComponent({
  setup () {
    const isShow = ref(false)

    function showModal () {
      isShow.value = true
    }

    function closeModal () {
      isShow.value = false
    }

    function beforeEnter () {
      console.log('before enter')
    }

    return {
      isShow,
      showModal,
      closeModal
    }
  },
  components: {
    CircleProgress,
    VueUniversalModal
  },
  data: function () {
    return {
      hits: [],
      fill: { gradient: ["green"] },
      confTitle: "",
      confAbstract: "",
      confKind: "",
      room: "",
      twitterMessage: "",
    };
  },
  created: function () {
    shared.securityAccess(this.$router, (p) => {
      currentTracksWitHitInfo(this);
    });
  },
  methods: {
    onCopy: function (e) {
      this.$notify({
        group: "floxx",
        type: "success",
        title: "Success",
        text: "Text has been copied into clipboard!",
      });
    },
    onError: function (e) {
      //alert("Failed to copy texts");
    },
    progress_end: function () {},
    progress: function () {},
    refresh: function () {
      currentTracksWitHitInfo.bin(this)();
    },
    show(idslot) {
      this.$modal.show("slot-details", { idSlot: idslot });
    },
    hide: function () {
      this.$modal.hide("slot-details");
    },
    beforeOpen(event) {
      var current = findKey(event.params.idSlot, this);
      if (!_.isUndefined(current)) {
        this.confTitle = current.slot.talk.title;
        this.confKind = current.slot.talk.talkType;
        this.room = current.slot.roomId.value;
        this.fromTime = current.slot.fromTime;
        this.toTime = current.slot.toTime;
        this.twitterMessage =
          "La salle " +
          this.room +
          " [" +
          this.fromTime.value +
          " - " +
          this.toTime.value +
          "] " +
          this.confTitle +
          " est en OVERFLOW ....  @DevoxxFR";
      } else {
        this.confTitle = "No talk currently in this room";
      }
    },
    beforeClose: function () {
      this.confTitle = "";
      this.confKind = "";
      this.room = "";
      this.fromTime = "";
      this.toTime = "";
      this.twitterMessage = "";
    },
    backRooms: function () {
      this.$router.push("/menu");
    },
  },
});
</script>

<style  scoped>
.talkdetails {
  width: 100%;
  height: 100%;
  background-color: #343a40;
  color: #fff!;
  border: 1px solid #fff;
}
.space {
  margin: 20px;
}
.spacePopin {
  margin: 20px;
}
.line {
  border: 1px solid gray;
  width: 100%;
}
</style>
