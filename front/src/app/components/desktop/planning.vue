<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div>
      <br />
    </div>
    <div>
      <tabs>
        <div v-for="item in items" :key="item.day">
          <tab :name="item.day">
            <div class="grid">
              <div class="track" v-for="room in item.rooms" :key="room.roomId">
                <div class="header">{{ room.roomId }}</div>

                <div v-on:click="show(slot.slot.slotId, slot.user)" v-bind:class="isAffected(slot.user)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  {{ slot.slot.fromTime }}
                  {{ slot.slot.toTime }}

                  <div class="affected">{{ displayUser(slot.user) }}</div>
                </div>
              </div>
            </div>
          </tab>
        </div>
      </tabs>
    </div>

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
            <v-select :options="users" v-model="selectedUser"></v-select>
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
import { User, Conference, Mapping } from "../../models";
import _ from "lodash";
import { defineComponent, ref } from 'vue'
import { Tabs, Tab } from 'vue3-tabs-component';
import { useToast } from "vue-toastification";




export default defineComponent({
  setup() {
    const toast = useToast();
    const selectedUser = ref(null)
    const users = ref(new Array<User>())

    return {
      selectedUser,
      users,
      toast
    }
  },
  components: {
    Tabs,
    Tab
  },
  data: function () {
    return {
      dialogState: false,
      items: {}, //todo -> add type
      actualUserNameSelected: "",
      currentConf: new Conference()
    };
  },
  created: function () {
    loadPlanning.bind(this)();

  },
  methods: {
    backMenu: function () {
      this.$router.push("/admin");
    },
    getUserId: function (user) {

      if (_.isNull(user)) {
        return "";
      } else {
        user.userId;
      }
    },
    isAffected: function (user) {
      var userIdVal = "NoData";
      if (!_.isNull(user)) {
        userIdVal = user.userId;
      }
      return {
        affectedBox: !_.isNull(user),
        userIdVal: !_.isNull(user)
      };

      //
    },
    displayUser: function (user) {
      if (_.isNull(user)) {
        return "-";
      } else {
        return (
          user.prenom +
          " " +
          _.upperCase(user.nom.substring(0, 1)) +
          "."
        );
      }
    },

    show(idSlot, currentUser: User) {
      this.actualUserNameSelected = computeUser(currentUser);
      beforeOpen.bind(this)(idSlot);
      this.dialogState = true;
    },

    hide() {
      this.selectedUser = null;
      this.$forceUpdate();
      this.dialogState = false;
    },
    remove() {
      fetch(
        "/api/set-user",
        {
          body: JSON.stringify({ "slotId":  this.currentConf.slotId}),
          method: "POST",
          headers: shared.tokenHandle(),
        }
      )
        //.then((response) => response.json())
        .then((p) => {
          loadPlanning.bind(this)();
          this.dialogState = false;
          this.toast.success("Red coat removed!");
        });
    },
    saveMapping() {
      if (_.isNull(this.selectedUser)) {
        this.toast.error("Red coat must be filled");
      } else {
        let mapping = new Mapping(this.selectedUser.id, this.currentConf.slotId)
        fetch(
          "/api/set-user",
          {
            body: JSON.stringify(mapping),
            method: "POST",
            headers: shared.tokenHandle(),
          }
        ).then((p) => {
          this.selectedUser = null;
          loadPlanning.bind(this)();
          this.dialogState = false
          this.toast.success("Mapping done!");
        });
      }
    },
    refresh: function () {
      loadPlanning.bind(this)();
    },
  },
});

function beforeOpen(slotId) {
  shared.securityAccess(this.$router, (p) => {
    fetch("/api/slots/" + slotId, {
      headers: shared.tokenHandle(),
    })
      .then((response) => response.json())
      .then((p) => {
        this.currentConf.updateInfo(p.talk.title,
          p.talk.talkType,
          p.roomId,
          p.fromTime,
          p.toTime,
          p.slotId
        );
      });

    fetch("/api/users", {
      headers: shared.tokenHandle(),
    })
      .then((response) => response.json())
      .then((p) => {
        this.users = _.map(p, (u) => {
          return new User(u.userId, u.nom, u.prenom);
        });
      });
  });
}


/*function reInitModal(thisref) {
  thisref.selectedUserId = "";
  thisref.selectedSlotId = "";
  thisref.actualUserNameSelected = "";
}*/

function computeUser(user) {
  if (_.isNull(user)) {
    return "-";
  } else {
    return user.prenom + " " + user.nom;
  }
}

function loadPlanning() {
  shared.securityAccess(this.$router, (p) => {
    fetch("/api/planning", {
      headers: shared.tokenHandle(),
    }).then((response) => response.json())
      .then((r) => {
        this.items = r;
      });
  }
  )
}


</script>

<style  scoped>
.header {
  background-color: #61bf9b;
  padding: 14px 28px;
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
}

.block {
  background-color: #3399ff;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
}

.track {
  display: flex;
  flex-direction: column;
}

.grid {
  display: flex;
  flex-direction: row;
}

.affectedBox {
  font-weight: bold;
  background-color: rgb(4, 55, 38) !important;
}

.affected {
  font-weight: bold;
  color: aquamarine;
}
</style>