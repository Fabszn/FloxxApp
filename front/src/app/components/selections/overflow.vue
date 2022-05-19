

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
   
   <vue-final-modal v-model="showModal"  name="overflowModal">
      <div class="talkdetails">
        <p>
          {{ confTitle }}
        </p>
        <p>Type : {{ confKind }}</p>
        <p>Salle : {{ room }}</p>

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
          <p>{{ twitterMessage }}</p>
        </div>
      </div>  
    </vue-final-modal>


    
    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter" v-on:click="show('b_amphi')">
        <circle-progress
          ref="_amphiB"
          progress="0"
          :size="115"
          :reverse="false"
          line-cap="round"
          empty-fill="rgba(0, 0, 0, .1)"
          :animation-start-value="0.0"
          :start-angle="380"
          insert-mode="append"
          :thickness="5"
          :show-percent="true"
          :percent="0"
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
            :percent="0"
            @vue-circle-progress="progress"
            @vue-circle-end="progress_end"
            />
          <span>253</span>
        </div>

        <div class="space" v-on:click="show('f_neu252')">
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
            :percent="0"
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
            :percent="0"
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
            :percent="0"
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
            :percent="0"
            @vue-circle-progress="progress"
            @vue-circle-end="progress_end"
            />
            <span>Paris 242AB</span>
        </div>
        <div class="space" v-on:click="show('241')">
          <circle-progress
            ref="_241"
            progress="0"
            :size="115"
            :reverse="false"
            line-cap="round"

            empty-fill="rgba(0, 0, 0, .1)"
            :animation-start-value="0.0"
            :start-angle="380"
            insert-mode="append"
            :thickness="5"
            :percent="0"
            :show-percent="true"
            
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
          empty-fill="rgba(0, 0, 0, .1)"
          :animation-start-value="0.0"
          :start-angle="380"
          insert-mode="append"
          :thickness="5"
          :show-percent="true"
          :percent="0"
          />
          <span>Maillot</span>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import VueFinalModal from 'vue-final-modal';

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import _ from "lodash";
import shared from "../../shared";
import {TrackHitInfo} from "../../models";
import { defineComponent } from '@vue/runtime-core';



export default defineComponent( {
  components: {
    CircleProgress,
    VueFinalModal
  },
  data: () => ({
    showModal: false,
      hits : [],
      fill: { gradient: ["green"] },
      confTitle: "",
      confAbstract: "",
      confKind: "",
      room: "",
      twitterMessage: ""
  }),
  created: function() {
    shared.securityAccess(this.$router, (p) => {
      currentTracksWitHitInfo.bind(this)();
  })},
  methods: {
    show:function (idSlot:string){
      beforeOpen.bind(this)(idSlot);
      console.log(this.showModal);
      this.showModal = true;
    },
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
    refresh: function(){currentTracksWitHitInfo.bind(this)()}
    ,
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
      let tis:TrackHitInfo[] = r;
      this.hits = tis;
      _.forEach(_.values(tis), (value) => {
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

function beforeOpen(idSlot){
      let  currentr = (id:string) => {
        _.find(this.hits,  (key) =>{
    return key.hitSlotId.value.includes(id);
  });};
let current = currentr(idSlot)
  console.log("cuurrent" + current)
      if (!_.isUndefined(current)) {
        /*this.confTitle = current.slot.talk.title;
        this.confKind = current.slot.talk.talkType;
        this.room = current.slot.roomId.value;
        this.fromTime = current.slot.fromTime;
        this.toTime = current.slot.toTime;*/
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
        this.confTitle = "No talk currently in this room " + idSlot ;
      }
    }



</script>

<style  scoped>


.talkdetails {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  background-color: #343a40;;
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
