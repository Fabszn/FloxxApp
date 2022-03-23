<template>
  <div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div>
        <button
          v-on:click="backAdminMenu"
          type="button"
          class="btn btn-secondary"
        >
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
      <div>
        <button v-on:click="refresh" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="sync" />
        </button>
      </div>
    </div>
    <!--<b-input-group size="sm">
      <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
      <b-input-group-append>
        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
      </b-input-group-append>
    </b-input-group>-->

    <modal name="map-user-modal" @before-open="beforeOpen" :adaptive="true">
      <div class="floxxmodal">
        <div>
          <p>{{ confTitle }}</p>
          <p>{{ room }} / {{ confKind }} - ({{ fromTime }} -> {{ toTime }})</p>
        </div>
        <div>
          <dropdown
            :options="users"
            v-on:selected="validateSelection"
            :disabled="false"
            :maxItem="10"
            placeholder="Select one redCoat"
          >
          </dropdown>
        </div>

        <div>
          <button type="button" v-on:click="" class="btn btn-secondary">
            Save
          </button>
        </div>
      </div>
    </modal>

    <button
      v-on:click="show('wednesday_c_maillot_09:30-12:30')"
      type="button"
      class="btn btn-secondary"
    >
      Open modal
    </button>
  </div>
</template>



<script>
import shared from "../../shared";
import _ from "lodash";
export default {
  data() {
    return {
      confTitle: "",
      confKind: "",
      room: "",
      fromTime: "",
      toTime: "",
      users: [],
    };
  },
  created: function () {},
  methods: {
    backAdminMenu: function () {
      this.$router.push("/admin");
    },
    validateSelection: function (value) {
      console.log(value.id);
    },
    show(idSlot) {
      this.$modal.show("map-user-modal", { slotId: idSlot });
    },
    beforeOpen(event) {
      var slotId = event.params.slotId;
      shared.securityAccess(this.$router, (p) => {
        this.$http
          .get("/api/slots/" + slotId, {
            headers: shared.tokenHandle(),
          })
          .then((p) => {
            this.confTitle = p.data.slot.talk.title;
            this.confKind = p.data.slot.talk.talkType;
            this.room = p.data.slot.roomId;
            this.fromTime = p.data.slot.fromTime;
            this.toTime = p.data.slot.toTime;
          });
      });

      this.$http
        .get("/api/users", {
          headers: shared.tokenHandle(),
        })
        .then((p) => {
          this.users = _.map(p.data, (user) => {
            var uName = user.prenom + " " + user.nom;
            return { id: user.userId, name: uName };
          });
        });
    },
    hide() {
      this.$modal.hide("map-user-modal");
    },
    refresh: function () {
      shared.securityAccess(this.$router, (p) => {
        this.$http
          .get("/api/stats/slots", {
            headers: shared.tokenHandle(),
          })
          .then((p) => {
            console.log("to be implement");
          });
      });
    },
  },
};
</script>

<style scoped>
.floxxmodal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #343a40;
  color: #fff!;
  border: 1px solid #fff;
}

.buttonmodal {
}
</style>