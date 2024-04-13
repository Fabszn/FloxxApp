<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary navbtn">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div class="screen-title">My Slots</div>
    <div v-for="item in slotItems" :key="item.day">
      <p class="dayTitle">{{ item.day }}</p>

      <div v-for="slot in item.slots" :key="slot.slotId">
        <button type="button" :class="{ active: isCurrentActiveSlot(item.currentActiveSlot, slot) }"
          class="btn btn-secondary btn-lg block m-1" v-on:click="selectSlot(slot.slotId)">
          {{ getRoomNameById(slot.roomId) }} : {{ slot.fromTime }} -
          {{ slot.toTime }}
          <p> <displayKind :kind="slot.kind" /></p>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import shared from "../shared";
import _ from "lodash";
import { onBeforeMount, defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import displayKind from "./sub/displayKind.vue";
export default defineComponent({
  components:{
    displayKind

  },
  setup() {

    const router = useRouter();
    const store = useStore();
    const slotItems = ref([]);
    const rooms = computed(() => store.state.rooms)

    

    onBeforeMount(async () => {
      if (_.isEmpty(store.state.rooms)) {
        await store.dispatch('fetchRooms');
      }

      fetch("/api/slots/_currentUser", {
        headers: shared.tokenHandle(),
      })
        .then((response) => response.json())
        .then((p) => {
          slotItems.value = p;
        });
    });

    function isCurrentActiveSlot(currentActiveSlot, currentSlot) {
      function toSlotIdVal(slot) {
        return slot.slotId;
      }

      return _.includes(
        _.map(currentActiveSlot, toSlotIdVal),
        currentSlot.slotId
      );
    }
    function selectSlot(idSlot: number) {
      router.push("/fill/" + idSlot);
    }

    function getRoomNameById(roomId:number){
      return shared.getRoomName(roomId, rooms.value)
    }

    function backMenu() {
      router.push("/menu");
    }


    return {
      slotItems,
      isCurrentActiveSlot,
      selectSlot,
      backMenu,
      getRoomNameById
    }
  },
  methods: {

  }

});
</script>


<style scoped>
.block {
  width: 100%;
  border: 1px solid #f6f2c9;
  background-color: #265830;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.active {
  border: 1px solid #f6f2c9;
  background-color: rgb(212, 112, 31) !important;
}

.dayTitle {
  font-size: 24px;
  text-transform: capitalize !important;
  color: cornsilk;
}
</style>