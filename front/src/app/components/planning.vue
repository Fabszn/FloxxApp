<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary navbtn">
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
              <div class="track" v-for="room in composeFilter(
                filterByGpr(1713, item.rooms),/*'Maillot'*/
                filterByGpr(1709, item.rooms) /*'Amphi'*/
              )" :key="room.roomId">
                <div class="header">{{ getRoomNameById(room.roomId) }}</div>

                <div v-on:click="show(slot.slot.slotId, slot.user)" v-bind:class="isAffectedClass(slot.user)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
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
              <div class="track" v-for="room in composeFilter(
                filterByGpr(1706, item.rooms),
                filterByGpr(1708, item.rooms)
              )" :key="room.roomId">
                <div class="header">{{ getRoomNameById(room.roomId) }}</div>

                <div v-on:click="show(slot.slot.slotId, slot.user)" v-bind:class="isAffectedClass(slot.user)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
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
              <div class="track" v-for="room in composeFilter(
                filterByGpr(1707, item.rooms),
                filterByGpr(1701, item.rooms)
              )" :key="room.roomId">
                <div class="header">{{ getRoomNameById(room.roomId) }}</div>

                <div v-on:click="show(slot.slot.slotId, slot.user)" v-bind:class="isAffectedClass(slot.user)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
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
              <div class="track" v-for="room in composeFilter(
                filterByGpr(1710, item.rooms),
                filterByGpr(1712, item.rooms)
              )" :key="room.roomId">
                <div class="header">{{ getRoomNameById(room.roomId) }}</div>

                <div v-on:click="show(slot.slot.slotId, slot.user)" v-bind:class="isAffectedClass(slot.user)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
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
              <div class="track" v-for="room in composeFilter(
                filterByGpr(1711, item.rooms),
                filterByGpr(1705, item.rooms)
              )" :key="room.roomId">
                <div class="header">{{ getRoomNameById(room.roomId) }}</div>

                <div v-on:click="show(slot.slot.slotId, slot.user)" v-bind:class="isAffectedClass(slot.user)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
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
          <button type="button" v-on:click="remove" class="btn btn-secondary" v-if="adminState">
            Remove
          </button>
          <button type="button" v-on:click="saveMapping" class="btn btn-secondary" v-if="adminState">
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
import { defineComponent, onBeforeMount, ref, computed } from "vue";
import { Tabs, Tab } from "vue3-tabs-component";
import { useToast } from "vue-toastification";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';



export default defineComponent({
  setup() {



    const router = useRouter();
    const store = useStore();
    const toast = useToast();
    const selectedUser = ref(null);
    const users = ref(new Array<User>());
    const adminState = ref(false);
    const dialogState = ref(false);
    const items = computed(() => store.state.planning);
    const rooms = computed(() => store.state.rooms)
    const actualUserNameSelected = ref("");
    const currentConf = ref(new Conference());


    function backMenu() {
      router.push("/menu");
    }

    async function refresh() {
      await store.dispatch('fetchPlanning')
    }

    function getUserId(user) {
      if (_.isNull(user)) {
        return "";
      } else {
        user.userId;
      }
    }

    function isAffectedClass(user) {
      var userIdVal = "NoData";
      if (!_.isNull(user)) {
        userIdVal = user.userId;
      }
      return {
        affectedBox: !_.isNull(user),
        userIdVal: !_.isNull(user),
        blockColor: _.isNull(user) && this.adminState,
      };
    }

    function isSlotShouldBeDisplay(user) {
      //if no user and mode admin then hide block
      return (_.isNull(user) && this.adminState) || !_.isNull(user);
    }
    function displayUser(user) {
      if (_.isNull(user)) {
        return "-";
      } else {
        return user.prenom + " " + _.upperCase(user.nom.substring(0, 1)) + ".";
      }
    }

    function show(idSlot, currentUser: User) {
      this.actualUserNameSelected = computeUser(currentUser);
      beforeOpen.bind(this)(idSlot);
      this.dialogState = true;
    }

    function hide() {
      this.selectedUser = null;
      this.$forceUpdate();
      this.dialogState = false;
    }

    function remove() {
      fetch("/api/set-user", {
        body: JSON.stringify({ slotId: this.currentConf.slotId }),
        method: "POST",
        headers: shared.tokenHandle(),
      })
        //.then((response) => response.json())
        .then((p) => {
          refresh()
          this.dialogState = false;
          this.toast.success("Red coat removed!");
        });
    }
    function saveMapping() {
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
          this.dialogState = false;
          this.toast.success("Mapping done!");
          refresh();
        });
      }
    }
    function getRoomNameById(roomId:number){
      return shared.getRoomName(roomId, rooms.value)
    }

    function composeFilter(arr1: [], arr2: []) {
      return _.concat(arr1, arr2);
    }
    function filterByGpr(idRoomRef: Number, currentRooms) {
      return _.filter(currentRooms, (ro) => {
        return idRoomRef == ro.roomId;
      });
    }
    function cleanHeader(roomId: String) {
      return _.split(roomId, " ")[1];
    }

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

    onBeforeMount(async () => {
      adminState.value = shared.readAdminEtat();
      if (_.isEmpty(store.state.rooms)) {
            await store.dispatch('fetchRooms');
            await store.dispatch('fetchPlanning');
        }
    });



    return {
      selectedUser,
      users,
      toast,
      adminState,
      dialogState,
      items,
      actualUserNameSelected,
      currentConf,
      rooms,
      backMenu,
      refresh,
      getUserId,
      isAffectedClass,
      isSlotShouldBeDisplay,
      displayUser,
      show,
      hide,
      remove,
      saveMapping,
      getRoomNameById,
      composeFilter,
      filterByGpr,
      cleanHeader,
      computeUser,
      beforeOpen
    };
  },
  components: {
    Tabs,
    Tab,
  }

});




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
  text-transform: capitalize !important;
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