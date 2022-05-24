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
        <div v-for="item in items" :key="item.day.value">
          <tab :name="item.day.value">
            <div class="grid">
              <div class="track" v-for="room in item.rooms" :key="room.roomId.value">
                <div class="header">{{ room.roomId.value }}</div>

                <div v-on:click="show(slot.slot.slotId.value, slot.user)" v-bind:class="isAffected(slot.user)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId.value">
                  {{ slot.slot.fromTime.value }}
                  {{ slot.slot.toTime.value }}

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
import { Tabs, Tab } from 'vue3-tabs-component';


class Mapping {
  userId: String;
  slotId: String;
  constructor(uId: String, sId: String) {
    this.userId = uId;
    this.slotId = sId;
  }
  toJSON() {
    return {
      "userId": this.userId,
      "slotId": this.slotId
    };
  }
}

export default defineComponent({
  setup() {
    const selectedUser = ref(null)
    const options = ref(new Array<User>())

    return {
      selectedUser,
      options
    }
  },
  components: {
    Tabs,
    Tab
  },
  data: function () {
    return {
      dialogState: false,
      items: {},
      actualUserNameSelected: "",
      currentConf: new Conference(),
      selectedSlotId: "",
      selectedUserId: "",
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
          user.prenom.value +
          " " +
          _.upperCase(user.nom.value.substring(0, 1)) +
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
      //reInitModal(this);
      this.selectedUser = null;
      this.$forceUpdate();
      this.dialogState = false;
    },
    remove() {
      fetch(
        "/api/set-user",
        {
          body: JSON.stringify({ "slotId": { "value": this.currentConf.slotId } }),
          method: "POST",
          headers: shared.tokenHandle(),
        }
      )
        .then((response) => response.json())
        .then((p) => {
          // reInitModal(this);
          loadPlanning.bind(this)();
          this.dialogState = false;
          this.$notify({ type: "success", text: "Red coat removed!" });
        });
    },
    saveMapping() {
      if (_.isNull(this.selectedUser)) {
        this.$notify({ type: "error", text: "Red coat must be filled" });
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
          this.$notify({ type: "success", text: "Mapping done!" });
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
          p.roomId.value,
          p.fromTime.value,
          p.toTime.value,
          p.slotId.value
        );
      });

    fetch("/api/users", {
      headers: shared.tokenHandle(),
    })
      .then((response) => response.json())
      .then((p) => {
        this.options = _.map(p, (u) => {
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
    return user.prenom.value + " " + user.nom.value;
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