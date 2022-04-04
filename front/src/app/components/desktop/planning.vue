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
                <div
                  class="block"
                  v-for="slot in room.slots"
                  :key="slot.slot.slotId.value"
                >
                  {{ slot.slot.fromTime.value}}
                  {{ slot.slot.toTime.value}}
                </div>
              </div>
            </div>
          </tab>
        </div>
      </tabs>
    </div>
  </div>
</template>

<script>
import shared from "../../shared";
import _ from "lodash";
export default {
  data: function () {
    return {
      items: {},
    };
  },
  created: function () {
    this.$http
      .get("/api/planning", {
        headers: shared.tokenHandle(),
      })
      .then((p) => {
        console.log("test" + p.data);
        this.items = p.data;
      });
  },
  methods: {
    backMenu: function () {
      this.$router.push("/menu");
    }
  },
};
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
</style>