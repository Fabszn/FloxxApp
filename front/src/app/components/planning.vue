<template>

  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary navbtn">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
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
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }} -
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />
                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <p class="kindTitle">Neuilly floor 1</p>
            <div class="grid">
              <div class="track"
                v-for="room in composeFilter(filterByGpr(1702, item.rooms), filterByGpr(1051, item.rooms))"
                :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }} -
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />

                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <p class="kindTitle">Neuilly floor 2</p>
            <div class="grid">
              <div class="track"
                v-for="room in composeFilter(filterByGpr(1707, item.rooms), filterByGpr(1706, item.rooms))"
                :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }} -
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />

                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <p class="kindTitle">Labs Neuilly</p>
            <div class="grid">
              <div class="track" v-for="room in composeFilter(
          filterByGpr(1708, item.rooms),
          filterByGpr(1701, item.rooms)
        )" :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }} -
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />
                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <p class="kindTitle">Labs Paris</p>
            <div class="grid">
              <div class="track" v-for="room in composeFilter(
          filterByGpr(1704, item.rooms),
          filterByGpr(1712, item.rooms)
        )" :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }} -
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />
                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <p class="kindTitle">Paris floor 1</p>
            <div class="grid">
              <div class="track" v-for="room in composeFilter(
          filterByGpr(1705, item.rooms),
          filterByGpr(1703, item.rooms)
        )" :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />
                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="kindTitle">Paris floor 2</p>
            <div class="grid">
              <div class="track" v-for="room in composeFilter(
          filterByGpr(1711, item.rooms),
          filterByGpr(1710, item.rooms)

        )" :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />
                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="kindTitle">Logistique Accueil</p>
            <div class="grid">
              <div class="track" v-for="room in 
          filterByGpr(1, item.rooms)" :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />
                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="kindTitle">Logistique Etage 1</p>
            <div class="grid">
              <div class="track" v-for="room in composeFilter(
          filterByGpr(2, item.rooms),
          filterByGpr(4, item.rooms)

        )" :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />
                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="kindTitle">Logistique Etage 2</p>
            <div class="grid">
              <div class="track" v-for="room in composeFilter(
          filterByGpr(5, item.rooms),
          filterByGpr(3, item.rooms)

        )" :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />
                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="kindTitle">Logistique Soutien</p>
            <div class="grid">
              <div class="track" v-for="room in composeFilter(
          filterByGpr(6, item.rooms),
          filterByGpr(7, item.rooms)

        )" :key="room.roomId">
                <div class="header">
                  <showRoom :roomId=toNumber(room.roomId) />
                </div>

                <div v-on:click="show(slot.slot.slotId, slot.users)" v-bind:class="isAffectedClass(slot.users)"
                  class="block" v-for="slot in room.slots" :key="slot.slot.slotId">
                  <div>
                    {{ slot.slot.fromTime }}
                    {{ slot.slot.toTime }}
                    <displayKind :kind="slot.slot.kind" :activate="isSlotShouldBeDisplay(slot.users)" />
                    <div class="affected">
                      <showRc :red-coats=slot.users :slot-id=slot.slot.slotId />
                    </div>
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
        <div class="d-flex flex-row justify-content-around">
          <div class="info-talk">
            <p>{{ currentConf.confTitle }}</p>
            <p>{{ currentConf.room }} / {{ currentConf.confKind }}</p>
            <p>
              {{ currentConf.fromTime }} -> {{ currentConf.toTime }}
            </p>
            <p>
              RedCoat(s) :
              <showRc :red-coats=actualUserNameSelected :is-edit="adminState" :slot-id=currentConf.slotId.toString() />
            </p>
            <div v-if="adminState">
              <v-select :options="userList" v-model="selectedUser"></v-select>
            </div>
          </div>
          <div class="speaker-list">
            <p>
            <p>Speaker(s)</p>
            <speaker :slotId=currentConf.slotId.toString() :withPicture="false" :externalSource=true
              :externalSpeaker=currentSpeakers />
            </p>

          </div>

        </div>

        <div class="buttonmodal">
          <button type="button" v-on:click="hide" class="btn btn-secondary">
            Close
          </button>
          <!--<button type="button" v-on:click="remove" class="btn btn-secondary" v-if="adminState">
            Remove
          </button>-->
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
import { User, Conference, Mapping, ISpeaker, UserSlot } from "../models";
import _ from "lodash";
import { defineComponent, onBeforeMount, ref, computed } from "vue";
import { Tabs, Tab } from "vue3-tabs-component";
import { useToast } from "vue-toastification";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import showRoom from "./sub/show-room.vue";
import showRc from "./sub/show-rc.vue";
import displayKind from "./sub/displayKind.vue";
import speaker from "./sub/speaker.vue";



export default defineComponent({
  components: {
    Tabs,
    Tab,
    showRoom,
    displayKind,
    speaker,
    showRc
  },
  setup() {

    const router = useRouter();
    const store = useStore();
    const toast = useToast();
    const selectedUser = ref(null);
    const userList = ref(new Array<User>());
    const adminState = ref(false);
    const dialogState = ref(false);
    const items = computed(() => store.state.planning);
    const rooms = computed(() => store.state.rooms)
    const actualUserNameSelected = ref(Array<UserSlot>);
    const currentConf = ref(new Conference());
    const currentSpeakers = ref(new Array<ISpeaker>());

    function toNumber(roomId: String): number {
      return _.toNumber(roomId)
    }

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

    function isAffectedClass(users: Array<UserSlot>) {
      var userIdVal = "NoData";
      if ((_.size(users) != 0)) {
        userIdVal = "users.userId";
      }
      return {
        affectedBox: (_.size(users) != 0),
        userIdVal: (_.size(users) != 0),
        blockColor: (_.size(users) == 0) && this.adminState,
        deactivate: (_.size(users) == 0) && !this.adminState
      };
    }

    function isSlotShouldBeDisplay(users) {
      //if no user and mode admin then hide block
      return (_.size(users) == 0 && this.adminState) || !(_.size(users) == 0);
    }
    function displayUsers(users: Array<UserSlot>): Array<String> {
      if (_.size(users) == 0) {
        return ["-"];
      } else {
        return _.map(users, (u: UserSlot) => u.prenom + " " + _.upperCase(u.nom.substring(0, 1)) + ".")
      }
    }

    function show(idSlot, currentUsers: Array<UserSlot>) {
      this.actualUserNameSelected = currentUsers;
      beforeOpen.bind(this)(idSlot);
      this.dialogState = true;
    }

    function hide() {
      this.selectedUser = null;
      this.refresh();
      this.$forceUpdate();
      this.dialogState = false;
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
    function getRoomNameById(roomId: number) {
      return shared.getRoomName(roomId, rooms.value)
    }

    function composeFilter3(arr1: [], arr2: [], arr3: []) {
      return _.concat(composeFilter(arr1, arr2), arr3);
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
          .then((response) => response.json()) //TODO  to be refactor with interface
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

        fetch("/api/speakers/" + slotId, {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p: Array<ISpeaker>) => {
            currentSpeakers.value = p;
          });

        fetch("/api/users", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            this.userList = _.map(p, (u) => {
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
      userList,
      toast,
      adminState,
      dialogState,
      items,
      actualUserNameSelected,
      currentConf,
      currentSpeakers,
      rooms,
      toNumber,
      backMenu,
      refresh,
      getUserId,
      isAffectedClass,
      isSlotShouldBeDisplay,
      displayUsers,
      show,
      hide,
      //remove,
      saveMapping,
      getRoomNameById,
      composeFilter,
      composeFilter3,
      filterByGpr,
      cleanHeader,
      computeUser,
      beforeOpen
    };
  }


});




</script>

<style scoped>
.header {
  display: flex;
  background-color: #044169;
  padding: 14px 28px;
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
  justify-content: center;
}

.blockColor {
  background-color: #3399ff;
}

.deactivate {
  background-color: #2a2e31;

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
  background-color: #022b53 !important;
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

  .info-talk {
    font-size: 12px;
  }

  .speaker-list {
    font-size: 12px;
  }

  .header {
    display: flex;
    background-color: #044169;
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