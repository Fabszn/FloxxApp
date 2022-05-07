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
    <notifications group="floxx" />
    <modal
      name="slot-details"
      @before-open="beforeOpen"
      @before-close="beforeClose"
      :adaptive="true"
    >
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
        <vue-circle
          ref="_amphiB"
          v-bind:progress="0"
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
          >Amphi B.</vue-circle
        >
      </div>
    </div>
    <div class="d-flex justify-content-around">
      <div class="flex-column separate">
        <div class="space" v-on:click="show('neu253')">
          <vue-circle
            ref="_253"
            v-bind:progress="0"
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
            >Neuilly 253</vue-circle
          >
        </div>

        <div class="space" v-on:click="show('e_neu252')">
          <vue-circle
            ref="_252"
            v-bind:progress="0"
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
            >Neuilly 252</vue-circle
          >
        </div>
        <div class="space" v-on:click="show('f_neu251')">
          <vue-circle
            ref="_251"
            v-bind:progress="0"
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
            >Neuilly 251</vue-circle
          >
        </div>
      </div>
      <div class="flex-column separate">
        <div class="space" v-on:click="show('par243')">
          <vue-circle
            ref="_243"
            v-bind:progress="0"
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
            >Paris 243</vue-circle
          >
        </div>
        <div class="space" v-on:click="show('par242AB')">
          <vue-circle
            ref="_242"
            v-bind:progress="0"
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
            >Paris 242AB</vue-circle
          >
        </div>
        <div class="space" v-on:click="show('par241')">
          <vue-circle
            ref="_241"
            v-bind:progress="0"
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
            >Paris 241</vue-circle
          >
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter" v-on:click="show('c_maillot')">
        <vue-circle
          ref="_maillot"
          v-bind:progress="0"
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
          >Maillot</vue-circle
        >
      </div>
    </div>
  </div>
</template>

<script>
import VueCircle from "vue2-circle-progress";
import _ from "lodash";
import shared from "../../shared";

function currentTracksWitHitInfo(refComponent) {
  
  fetch("api/tracks-infos", {
      headers: shared.tokenHandle(),
    })
    .then((p) => {
      var vm=this;
      vm.hits = p.data;
      _.forEach(_.values(p.data), (value) => {
        if (!_.isNull(value.hitInfo)) {
          shared.computeHit(
            value.hitInfo.percentage,
            value.hitInfo.hitSlotId,
            vm.$refs
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

export default {
  components: {
    VueCircle,
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
      currentTracksWitHitInfo(this);
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
};
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
