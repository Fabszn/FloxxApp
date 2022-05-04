<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div>My Slots</div>
    <div v-for="item in items" :key="item.day.value">
      <p class="dayTitle">{{ item.day.value }}</p>

      <div v-for="slot in item.slots" :key="slot.slotId.value">
        <button
          type="button"
          :class="{ active: isCurrentActiveSlot(item.currentActiveSlot, slot) }"
          class="btn btn-secondary btn-lg block"
          v-on:click="selectSlot(slot.slotId.value)"
        >
          {{ slot.roomId.value }} : {{ slot.fromTime.value }} -
          {{ slot.toTime.value }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import shared from "../shared";
import _ from "lodash";
export default {
  data: function () {
    return {
      items: [],
    };
  },
  created: function () {
    fetch("/api/slots/_currentUser", {
        headers: shared.tokenHandle(),
      })
      .then((p) => {
        this.items = p.data;
      });
  },
  methods: {
    isCurrentActiveSlot: function (currentActiveSlot, currentSlot) {
      function toSlotIdVal(slot){return slot.slotId.value}
      
      return _.includes(_.map(currentActiveSlot, toSlotIdVal),currentSlot.slotId.value)
      
      /*if (_.isNull(currentActiveSlot)) {
        return false;
      } else {
        return currentActiveSlot.slotId.value == currentSlot.slotId.value;
      }*/
    },
    selectSlot: function (idSlot) {
      this.$router.push("fill/" + idSlot);
    },
    backMenu: function () {
      this.$router.push("/menu");
    },
  },
};
</script>


<style  scoped>
.block {
  width: 100%;
  background-color: #4caf50;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.active {
  background-color: rgb(212, 112, 31) !important;
}

.dayTitle {
  font-size: 24px;
  text-transform: capitalize;
  color: cornsilk;
}
</style>