<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button
          v-on:click="backMenu"
          type="button"
          class="btn btn-secondary navbtn"
        >
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div class="screen-title">Planning</div>
    <div>
      <tabs>
        <div v-for="item in items" :key="item.day">
          <tab :name="item.day">
            <p class="kindTitle">Amphi bleu / Maillot</p>
            <div class="grid">
              <div
                class="track"
                v-for="room in composeFilter(
                  filterByGpr('Maillot', item.rooms),
                  filterByGpr('Amphi', item.rooms)
                )"
                :key="room.roomId"
              >
                <div class="header">{{ room.roomId }}</div>

                <div
                  v-on:click="show(slot.slot.slotId, slot.user)"
                  v-bind:class="isAffectedClass(slot.user)"
                  class="block"
                  v-for="slot in room.slots"
                  :key="slot.slot.slotId"
                >
                  <div v-if="isSlotShouldBeDisplay(slot.user)">
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}

                    <div class="affected">{{ displayUser(slot.user) }}</div>
                  </div>
                  <div v-else></div>
                </div>
              </div>
            </div>

            <p class="kindTitle">Neuilly</p>
            <div class="grid">
              <div
                class="track"
                v-for="room in filterByGpr('Neuilly 25', item.rooms)"
                :key="room.roomId"
              >
                <div class="header">{{ cleanHeader(room.roomId) }}</div>

                <div
                  v-on:click="show(slot.slot.slotId, slot.user)"
                  v-bind:class="isAffectedClass(slot.user)"
                  class="block"
                  v-for="slot in room.slots"
                  :key="slot.slot.slotId"
                >
                  <div v-if="isSlotShouldBeDisplay(slot.user)">
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}

                    <div class="affected">{{ displayUser(slot.user) }}</div>
                  </div>
                  <div v-else></div>
                </div>
              </div>
            </div>
            <p class="kindTitle">Labs Neuilly</p>
            <div class="grid">
              <div
                class="track"
                v-for="room in filterByGpr('Neuilly 23', item.rooms)"
                :key="room.roomId"
              >
                <div class="header">{{ cleanHeader(room.roomId) }}</div>

                <div
                  v-on:click="show(slot.slot.slotId, slot.user)"
                  v-bind:class="isAffectedClass(slot.user)"
                  class="block"
                  v-for="slot in room.slots"
                  :key="slot.slot.slotId"
                >
                  <div v-if="isSlotShouldBeDisplay(slot.user)">
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}

                    <div class="affected">{{ displayUser(slot.user) }}</div>
                  </div>
                  <div v-else></div>
                </div>
              </div>
            </div>
            <p class="kindTitle">Paris</p>
            <div class="grid">
              <div
                class="track"
                v-for="room in filterByGpr('Paris 24', item.rooms)"
                :key="room.roomId"
              >
                <div class="header">{{ cleanHeader(room.roomId) }}</div>

                <div
                  v-on:click="show(slot.slot.slotId, slot.user)"
                  v-bind:class="isAffectedClass(slot.user)"
                  class="block"
                  v-for="slot in room.slots"
                  :key="slot.slot.slotId"
                >
                  <div v-if="isSlotShouldBeDisplay(slot.user)">
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}

                    <div class="affected">{{ displayUser(slot.user) }}</div>
                  </div>
                  <div v-else></div>
                </div>
              </div>
            </div>
            <p class="kindTitle">Labs Paris</p>
            <div class="grid">
              <div
                class="track"
                v-for="room in composeFilter(
                  filterByGpr('Paris 22', item.rooms),
                  filterByGpr('Paris 20', item.rooms)
                )"
                :key="room.roomId"
              >
                <div class="header">{{ cleanHeader(room.roomId) }}</div>

                <div
                  v-on:click="show(slot.slot.slotId, slot.user)"
                  v-bind:class="isAffectedClass(slot.user)"
                  class="block"
                  v-for="slot in room.slots"
                  :key="slot.slot.slotId"
                >
                  <div v-if="isSlotShouldBeDisplay(slot.user)">
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}

                    <div class="affected">{{ displayUser(slot.user) }}</div>
                  </div>
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
          <div v-if="adminState">
            <v-select :options="users" v-model="selectedUser"></v-select>
          </div>
        </div>

        <div class="buttonmodal">
          <button type="button" v-on:click="hide" class="btn btn-secondary">
            Close
          </button>
          <button
            type="button"
            v-on:click="remove"
            class="btn btn-secondary"
            v-if="adminState"
          >
            Remove
          </button>
          <button
            type="button"
            v-on:click="saveMapping"
            class="btn btn-secondary"
            v-if="adminState"
          >
            Save
          </button>
        </div>
      </div>
    </GDialog>
  </div>
</template>

<script lang="ts">
import shared from "../shared";
import { User, Conference, Mapping } from "../models";
import _ from "lodash";
import { defineComponent, ref } from "vue";
import { Tabs, Tab } from "vue3-tabs-component";
import { useToast } from "vue-toastification";

export default defineComponent({
  setup() {
    const toast = useToast();
    const selectedUser = ref(null);
    const users = ref(new Array<User>());
    const adminState = false;

    return {
      selectedUser,
      users,
      toast,
      adminState,
    };
  },
  components: {
    Tabs,
    Tab,
  },
  data: function () {
    return {
      dialogState: false,
      items: {}, //todo -> add type
      actualUserNameSelected: "",
      currentConf: new Conference(),
    };
  },
  mounted() {
    this.adminState = shared.readAdminEtat();
  },
  created: function () {
    loadPlanning.bind(this)();
  },
  methods: {
    backMenu: function () {
      this.$router.push("/menu");
    },
    getUserId: function (user) {
      if (_.isNull(user)) {
        return "";
      } else {
        user.userId;
      }
    },
    isAffectedClass: function (user) {
      var userIdVal = "NoData";
      if (!_.isNull(user)) {
        userIdVal = user.userId;
      }
      return {
        affectedBox: !_.isNull(user),
        userIdVal: !_.isNull(user),
        blockColor: _.isNull(user) && this.adminState,
      };
    },
    isSlotShouldBeDisplay: function (user) {
      //if no user and mode admin then hide block
      return (_.isNull(user) && this.adminState) || !_.isNull(user);
    },
    displayUser: function (user) {
      if (_.isNull(user)) {
        return "-";
      } else {
        return user.prenom + " " + _.upperCase(user.nom.substring(0, 1)) + ".";
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
      fetch("/api/set-user", {
        body: JSON.stringify({ slotId: this.currentConf.slotId }),
        method: "POST",
        headers: shared.tokenHandle(),
      })
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
        let mapping = new Mapping(
          this.selectedUser.id,
          this.currentConf.slotId
        );
        fetch("/api/set-user", {
          body: JSON.stringify(mapping),
          method: "POST",
          headers: shared.tokenHandle(),
        }).then((p) => {
          this.selectedUser = null;
          loadPlanning.bind(this)();
          this.dialogState = false;
          this.toast.success("Mapping done!");
        });
      }
    },
    refresh: function () {
      loadPlanning.bind(this)();
    },
    composeFilter: (arr1: [], arr2: []) => {
      return _.concat(arr1, arr2);
    },
    filterByGpr: (groupName: String, rooms) => {
      return _.filter(rooms, (ro) => {
        return _.startsWith(ro.roomId, groupName);
      });
    },
    cleanHeader: (roomId: String) => {
      return _.split(roomId, " ")[1];
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
        this.currentConf.updateInfo(
          p.title,
          p.kind,
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
    })
      .then((response) => response.json())
      .then((r) => {
        this.items = r;
      });
  });
}
</script>

<style  scoped>
.header {
  display: flex;
  background-color: #61bf9b;
  padding: 14px 28px;
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
  justify-content: center;
}

.blockColor {
  background-color: #3399ff;
}
.block {
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
  justify-content: center;
}

.affectedBox {
  font-weight: bold;
  background-color: rgb(4, 55, 38) !important;
}

.affected {
  font-weight: bold;
  color: aquamarine;
}

.kindTitle {
  display: flex;
  font-size: 24px;
  text-transform: capitalize !important ;
  color: cornsilk;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  .header {
    display: flex;
    background-color: #61bf9b;
    padding: 7px 14px;
    font-size: 10px;
    cursor: pointer;
    margin: 2px;
    justify-content: center;
  }

  .block {
    padding: 7px 14px;
    font-size: 13px;
    cursor: pointer;
    margin: 2px;
  }
}
</style>