<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary navbtn">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div class="screen-title">
      All actives slots
    </div>
    <div v-for="item in items" :key="item.slotId">
      <button
        type="button"
        class="btn btn-secondary btn-lg block"
        v-on:click="selectSlot(item.slotId)"
      >
        {{ item.roomId }} : {{ item.fromTime }} - {{ item.toTime }} {{item.day}}
      </button>
    </div>
  </div>
</template>

<script>
import shared from "../shared";
import _ from "lodash";
export default {
  data: function () {
    return { items: [] };
  },
  created: function () {
    fetch("/api/slots/_current", {
        headers: shared.tokenHandle(),
      })
      .then((response) => response.json())
      .then((p) => {
        this.items = p;
      });
  },
  methods: {
      selectSlot: function(idSlot) {
    console.log(idSlot);
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
    border: 1px solid #f6f2c9;
    background-color: #218233;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
}
 


</style>