<template>
  <div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div>
        <button v-on:click="backAdminMenu" type="button" class="btn btn-secondary">
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
      <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
      <b-input-group-append>
        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
      </b-input-group-append>
    </b-input-group>

    <b-table head-variant="light" details-td-class="cell" responsive="true" dark striped hover v-model:sort-by="sortBy"
      v-model:sort-desc="sortDesc" :fields="fields" :items="items" :filter="filter">
      <template v-slot:head(slotId)>Slot</template>
      <template v-slot:head(RedCoat)>Red Coat</template>
      <template v-slot:cell(slotId)="data">{{
          data.item.slot.slotId.value
      }}</template>
      <template v-slot:cell(RedCoat)="data">
        <div v-on:click="show(data.item.slot.slotId.value, data.item.user)">
          {{ handleUser(data.item.user) }}
        </div>
      </template>
    </b-table>

    <GDialog v-model="dialogState">
      <div class="floxxmodal over">
        <div class="modalinfo">
          <div>
            <p>{{ currentConf.confTitle }}</p>
            <p>{{ currentConf.room }} / {{ currentConf.confKind }}</p>
            <p>
              {{ currentConf.fromTime }} -> {{ currentConf.toTime }} - RedCoat :
              {{ actualUserNameSelected }}
            </p>
          </div>
          <div>
            <v-select :options="options" v-model="selectedUser"></v-select>
          </div>
        </div>

        <div class="buttonmodal">
          <button type="button" v-on:click="hide" class="btn btn-secondary">
            Cancel
          </button>
          <button type="button" v-on:click="remove" class="btn btn-secondary">
            Remove
          </button>
          <button type="button" v-on:click="saveMapping" class="btn btn-secondary">
            Save
          </button>
        </div>
      </div>
    </GDialog>
  </div>
</template>



<script lang="ts">
import shared from "../../shared";
import { User, Conference } from "../../models";
import _ from "lodash";
import { defineComponent, ref } from 'vue'
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
 import { useToast } from "vue-toastification";

export default defineComponent({
  setup() {
    const toast = useToast();
    const selectedUser = ref(null);
    const options = ref(new Array<User>());

    return {
      selectedUser,
      options,
      toast
    }
  },
  data() {
    return {
      dialogState: false,
      currentConf: new Conference(),
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
    reloadData.bind(this)();
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
      beforeOpen.bind(this)(idSlot);
      this.actualUserNameSelected = computeUser(currentUser);
      this.dialogState = true;
    },
    hide() {
      this.dialogState = false;
    },
    remove() {
      fetch(
        "/api/set-user",
        {
          method: "POST",
          body: JSON.stringify({ slotId: { value: this.currentConf.slotId } }),
          headers: shared.tokenHandle(),
        }
      ).then((p) => {
        reloadData.bind(this)();
        this.dialogState = false;
        this.toast.info("Red coat removed!");
      });
    },
    saveMapping() {
      if (_.isNull(this.selectedUser)) {
        this.toast.error("Red coat must be filled");
      } else {
        fetch(
          "/api/set-user",
          {
            body: JSON.stringify({
              userId: { value: this.selectedUser.id },
              slotId: { value: this.currentConf.slotId },
            }),
            headers: shared.tokenHandle(),
            method: "POST"
          }
        )
          .then((p) => {
            reloadData.bind(this)();
            this.dialogState = false
            this.toast.success("Mapping done!");
          });
      }
    },
    refresh: function () {
      reloadData.bind(this)();
    },
  },
});

function beforeOpen(slotId) {
  shared.securityAccess(this.$router, (p) => {
    fetch("/api/slots/" + slotId, {
      headers: shared.tokenHandle(),
    }).then((response) => response.json())
      .then((p) => {
        this.currentConf.updateInfo(p.talk.title,
          p.talk.talkType,
          p.roomId.value,
          p.fromTime.value,
          p.toTime.value,
          p.slotId.value
        );
      }).catch(err => {
        console.log(err);
        this.toast.error("fetch data from server error");
      });
  });

  fetch("/api/users", {
    headers: shared.tokenHandle(),
  })
    .then((response) => response.json())
    .then((p) => {
      this.users = _.map(p, (user) => {
        var uName = user.prenom + " " + user.nom;
        return { id: user.userId, name: uName };
      });
    });
}

function computeUser(user) {
  if (_.isNull(user)) {
    return "-";
  } else {
    return user.prenom.value + " " + user.nom.value;
  }
}

function reloadData() {
  shared.securityAccess(this.$router, (v) => {
    fetch("/api/mapping", {
      headers: shared.tokenHandle(),
    })
      .then((response) => response.json())
      .then((p) => {
        this.items = p;
      });
  });
}
</script>

<style scoped>
</style>