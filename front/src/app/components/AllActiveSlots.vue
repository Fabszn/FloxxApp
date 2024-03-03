<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary navbtn">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div class="screen-title">All actives slots</div>
    <div v-for="item in slotItems" :key="item.slotId">
      <button type="button" class="btn btn-secondary btn-lg block" v-on:click="selectSlot(item.slotId)">
        {{ getRoomNameById(item.roomId) }} : {{ item.fromTime }} - {{ item.toTime }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import shared from "../shared";
import _ from "lodash";
import { onBeforeMount, defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {

    const router = useRouter();
    const store = useStore();
    const slotItems = ref([]);
    const rooms = computed(() => store.state.rooms)

    onBeforeMount(async () => {

      if (_.isEmpty(store.state.rooms)) {
        await store.dispatch('fetchRooms');
      }

      fetch("/api/slots/_current", {
        headers: shared.tokenHandle(),
      })
        .then((response) => response.json())
        .then((p) => {
          slotItems.value = p;
        });
    })

    function selectSlot(idSlot) {
      router.push("fill/" + idSlot);
    }

    function backMenu() {
      router.push("/menu");
    }

    function getRoomNameById(roomId:number){
      return shared.getRoomName(roomId, rooms.value)
    }

    return {
      slotItems,
      selectSlot,
      backMenu,
      getRoomNameById
    }
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
</style>