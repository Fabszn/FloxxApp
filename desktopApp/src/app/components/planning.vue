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
        <div v-for="item in items" :key="item.day">
          <tab :name="item.day">
            {{ item.rooms }} 
          </tab>
        </div>
      </tabs>
    </div>

    <!-- <div class="grid">
     
        <div class="track">
          <div class="header">{{item.day}}</div>
          <div class="block">slot</div>
          <div class="block">slot</div>
          <div class="block">slot</div>
          <div class="block">slot</div>
          <div class="block">slot</div>
          <div class="block">slot</div>
          <div class="block">slot</div>
          <div class="block">slot</div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import shared from "../shared";
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
        console.log(p.data);
        this.items = p.data;
      });
  },
  methods: {
    backMenu: function () {
      this.$router.push("/menu");
    },
    navToList: function () {
      this.$router.push("/tops-list");
    },
    navToRCMng: function () {
      this.$router.push("/redcoatmng");
    },
    navToStats: function () {
      this.$router.push("/statistiques");
    },
    navToMapping: function () {
      this.$router.push("/mappingRC");
    },
  },
};
</script>

<style  scoped>



.header {
  background-color: #61bf9b;
  padding: 14px 28px;
  font-size: 24px;
  cursor: pointer;
  margin: 5px;
}

.block {
  background-color: #3399ff;
  padding: 14px 28px;
  font-size: 24px;
  cursor: pointer;
  margin: 5px;
}

.track {
  display: flex;
  flex-direction: column;
}

.grid {
  display: flex;
}
</style>