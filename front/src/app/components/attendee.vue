<template>
  <div class="container-fluid">
    <div>
      <button v-on:click="refresh" type="button" class="btn btn-secondary">
        <font-awesome-icon icon="sync" />
      </button>
    </div>

    <modal
      name="slot-details"
      @before-open="beforeOpen"
      @before-close="beforeClose"
      :adaptive="true"
    >
      <div class="talkdetails bg-light text-muted">
        <p>Titre : {{confTitle}}</p>
        <p>Type conférence : {{confKind}}</p>
        <p>Salle : {{room}}</p>
      </div>
    </modal>
    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter" v-on:click="show('c_maillot')">
        <vue-circle
          ref="_maillot"
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
        >Maillot</vue-circle>
      </div>
    </div>
    <div class="d-flex justify-content-around">
      <div class="flex-column separate">
        <div class="d-flex justify-content-around side">Paris</div>
        <div class="space" v-on:click="show('par241')">
          <vue-circle
            ref="_241"
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
          >241</vue-circle>
        </div>
        <div class="space" v-on:click="show('par242AB')">
          <vue-circle
            ref="_242"
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
          >242</vue-circle>
        </div>
        <div class="space" v-on:click="show('par243')">
          <vue-circle
            ref="_243"
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
          >243</vue-circle>
        </div>
      </div>

      <div class="flex-column separate">
        <div class="d-flex justify-content-around side">Neuilly</div>
        <div class="space" v-on:click="show('f_neu251')">
          <vue-circle
            ref="_251"
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
          >251</vue-circle>
        </div>
        <div class="space" v-on:click="show('e_neu252')">
          <vue-circle
            ref="_252"
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
          >252</vue-circle>
        </div>
        <div class="space" v-on:click="show('neu253')">
          <vue-circle
            ref="_253"
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
          >253</vue-circle>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter" v-on:click="show('b_amphi')">
        <vue-circle
          ref="_amphiB"
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
        >Amphi B.</vue-circle>
      </div>
    </div>
  </div>
</template>

<script>
import VueCircle from "vue2-circle-progress";
import _ from "lodash";
import shared from "../shared";

function currentTracksWitHitInfo(refComponent) {
  refComponent.$http
    .get(BACKEND_URL + "api/all-tracks-infos-for-attendees")
    .then(p => {
      console.log(p.data);
      refComponent.hits = p.data;

      _.forEach(_.values(p.data), value => {
        if (!_.isNull(value.hitInfo)) {
          shared.computeHit(
            value.hitInfo.percentage,
            value.hitInfo.hitSlotId,
            refComponent.$refs
          );
        }
      });
    });
}

function findKey(idSlotComp, refComp) {
  return _.find(_.keys(refComp.hits), function(key) {
    return key.includes(idSlotComp);
  });
}

export default {
  components: {
    VueCircle
  },
  data: function() {
    return {
      hits: [],
      fill: { gradient: ["green"] },
      confTitle: "",
      confAbstract: "",
      confKind: "",
      room: ""
    };
  },
  created: function() {
    currentTracksWitHitInfo(this);
  },
  methods: {
    progress_end: function() {},
    progress: function() {},
    refresh: function() {
      currentTracksWitHitInfo(this);
    },
    show(idslot) {
      this.$modal.show("slot-details", { idSlot: idslot });
    },
    hide: function() {
      this.$modal.hide("hello-world");
    },
    beforeOpen(event) {
      var key = findKey(event.params.idSlot, this);
      var current = this.hits[key];
      if (!_.isUndefined(current)) {
        this.confTitle = current.slot.talk.title;
        this.confKind = current.slot.talk.talkType;
        this.room = current.slot.roomId;
      } else {
        this.confTitle = "no talk currently in this room";
      }
    },
    beforeClose: function() {
      this.confTitle = "";
      this.confKind = "";
      this.room = "";
    }
  }
};
</script>

<style  scoped>
.talkdetails {
  width: 100%;
  height: 100%;
}
.space {
  margin: 20px;
}
.line {
  border: 1px solid gray;
  width: 100%;
}
</style>
