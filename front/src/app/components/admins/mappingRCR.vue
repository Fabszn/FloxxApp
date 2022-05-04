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
    <b-input-group size="sm">
      <b-form-input
        v-model="filter"
        type="search"
        id="filterInput"
        placeholder="Type to Search"
      ></b-form-input>
      <b-input-group-append>
        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
      </b-input-group-append>
    </b-input-group>

    <b-table
      head-variant="light"
      details-td-class="cell"
      responsive="true"
      dark
      striped
      hover
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :fields="fields"
      :items="items"
      :filter="filter"
    >
      <template v-slot:head(slotId)>Slot</template>
      <template v-slot:head(RedCoat)>Red Coat</template>
      <template v-slot:cell(slotId)="data">{{
        data.item.slot.slotId.value
      }}</template>
      <template v-slot:cell(RedCoat)="data">
        <div v-on:click="show(data.item.slot.slotId.value, data.item.user)">
          {{ handleUser(data.item.user) }}
        </div></template
      >
    </b-table>

    <modal name="map-user-modal" @before-open="beforeOpen" :adaptive="true">
      <div class="floxxmodal over">
        <div class="modalinfo">
          <div>
            <p>{{ confTitle }}</p>
            <p>{{ room }} / {{ confKind }}</p>
            <p>
              {{ fromTime }} -> {{ toTime }} - RedCoat :
              {{ actualUserNameSelected }}
            </p>
          </div>
          <div class="over">
            <dropdown
              :options="users"
              v-on:selected="validateSelection"
              :disabled="false"
              :maxItem="4"
              placeholder="Search by name"
            >
            </dropdown>
          </div>
        </div>

        <div class="buttonmodal">
          <button type="button" v-on:click="hide" class="btn btn-secondary">
            Cancel
          </button>
          <button type="button" v-on:click="remove" class="btn btn-secondary">
            Remove
          </button>
          <button
            type="button"
            v-on:click="saveMapping"
            class="btn btn-secondary"
          >
            Save
          </button>
        </div>
      </div>
    </modal>
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
      selectedSlotId: "",
      selectedUserId: "",
      actualUserNameSelected: "",
      users: [],
      items: [],
      sortBy: "slotId",
      sortDesc: false,
      fields: [
        { key: "slotId", sortable: true },
        { key: "RedCoat", sortable: true },
      ],
      filter: null,
      filterOn: ["slotId"],
    };
  },
  created: function () {
    reloadData(this);
  },
  methods: {
    handleUser(user) {
      return computeUser(user);
    },
    backAdminMenu: function () {
      this.$router.push("/admin");
    },
    validateSelection: function (value) {
      this.selectedUserId = value.id;
    },
    show(idSlot, currentUser) {
      this.actualUserNameSelected = computeUser(currentUser);
      this.$modal.show("map-user-modal", { slotId: idSlot });
    },
    beforeOpen(event) {
      var slotId = event.params.slotId;

      shared.securityAccess(this.$router, (p) => {
        fetch("/api/slots/" + slotId, {
          headers: shared.tokenHandle(),
        }).then((p) => {
          this.confTitle = p.data.talk.title;
          this.confKind = p.data.talk.talkType;
          this.room = p.data.roomId.value;
          this.fromTime = p.data.fromTime.value;
          this.toTime = p.data.toTime.value;
          this.selectedSlotId = p.data.slotId.value;
        });
      });

      fetch("/api/users", {
        headers: shared.tokenHandle(),
      }).then((p) => {
        this.users = _.map(p.data, (user) => {
          var uName = user.prenom + " " + user.nom;
          return { id: user.userId, name: uName };
        });
      });
    },
    hide() {
      reInitModal(this);
      this.$modal.hide("map-user-modal");
    },
    remove() {
      fetch(
          "/api/set-user",
          {
            slotId: { value: this.selectedSlotId },
          },
          {
            method: "POST",
            headers: shared.tokenHandle(),
          }
        )
        .then((p) => {
          reInitModal(this);
          reloadData(this);
          this.$modal.hide("map-user-modal");
          this.$notify({ type: "success", text: "Red coat removed!" });
        });
    },
    saveMapping() {
      if (_.isUndefined(this.selectedUserId)) {
        this.$notify({ type: "error", text: "Red coat must be filled" });
      } else {
        fetch(
            "/api/set-user",
            {
              userId: { value: this.selectedUserId },
              slotId: { value: this.selectedSlotId },
            },
            {
              method: "POST",
              headers: shared.tokenHandle(),
            }
          )
          .then((p) => {
            reloadData(this);
            this.$modal.hide("map-user-modal");
            this.$notify({ type: "success", text: "Mapping done!" });
          });
      }
    },
    refresh: function () {
      reloadData(this);
    },
  },
};

function reInitModal(thisref) {
  thisref.selectedUserId = "";
  thisref.selectedSlotId = "";
  thisref.actualUserNameSelected = "";
}

function computeUser(user) {
  if (_.isNull(user)) {
    return "-";
  } else {
    return user.prenom.value + " " + user.nom.value;
  }
}

function reloadData(thisref) {
  shared.securityAccess(thisref.$router, (p) => {
    fetch("/api/mapping", {
        headers: shared.tokenHandle(),
      })
      .then((p) => {
        thisref.items = p.data;
      });
  });
}
</script>

<style scoped>
</style>