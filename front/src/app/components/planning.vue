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
        <div v-for="item in items" :key=item.day>

          <tab :name="item.day">
            <div class="responsive-grid">
              <trackItem :showTrackDetails=curriedShow :trackItems="filterByGpr(1713, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1709, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1702, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1051, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1707, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1706, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1708, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1701, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1704, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1712, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1705, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1703, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1711, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1710, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(1, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(2, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(4, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(5, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(3, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(6, item.rooms)" />
              <trackItem :showTrackDetails=show :trackItems="filterByGpr(7, item.rooms)" />
            </div>
          </tab>
        </div>
      </tabs>
    </div>

    <GDialog :v-model=dialogState>
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

  <div class="overlay">
    <div class="content">
      <p>
        This screen must be visualized on landscape mode
      </p>
      <p>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary navbtn">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </p>
    </div>
  </div>



</template>

<script lang="ts">
import shared from "../shared";
import { User, Conference, Mapping, ISpeaker, UserSlot, IPlanning } from "../models";
import _ from "lodash";
import { defineComponent, onBeforeMount, ref, computed, Ref } from "vue";
import { Tabs, Tab } from "vue3-tabs-component";
import { useToast } from "vue-toastification";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import showRoom from "./sub/show-room.vue";
import showRc from "./sub/show-rc.vue";
import displayKind from "./sub/displayKind.vue";
import speaker from "./sub/speaker.vue";
import trackItem from "./sub/trackItem.vue";



export default defineComponent({
  components: {
    Tabs,
    Tab,
    showRoom,
    displayKind,
    speaker,
    showRc,
    trackItem
  },
  setup() {

    const router = useRouter();
    const store = useStore();
    const toast = useToast();
    const selectedUser = ref(null);
    const userList = ref(new Array<User>());
    const adminState = ref(false);
    const items: Ref<Array<IPlanning>> = computed(() => store.state.planning);
    const rooms = computed(() => store.state.rooms)
    const actualUserNameSelected = ref(Array<UserSlot>);
    const currentConf = ref(new Conference());
    const currentSpeakers = ref(new Array<ISpeaker>());
    const dialogState: Ref<Boolean> = ref(false)
    const showDetails = (fake, idSlot,currentUsers) => {
      show(idSlot, currentUsers)
    }

    const curriedShow = ref(showDetails.bind(null, null))


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
      return function () {
        console.error("show")
        /*this.actualUserNameSelected = currentUsers;
        beforeOpen.bind(this)(idSlot);
        this.dialogState = true;*/
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
        curriedShow,
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
        //beforeOpen,
        
      };
    }


  });




</script>

<style scoped>
.responsive-grid {
  display: flex;
}

.overlay {
  display: none;
}


@media only screen and (orientation:landscape) and (max-width: 900px) {
  .responsive-grid {
    display: flex;
    flex-wrap: wrap;
  }

}

@media only screen and (orientation:portrait) and (max-width: 600px) {


  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Fond semi-transparent pour l'effet d'overlay */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(187, 158, 158);
    padding: 20px;
    color: black;
    width: 80%;
    height: 80%;
    border-radius: 5px;
    /* Autres styles de votre choix */
  }

}
</style>