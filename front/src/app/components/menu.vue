<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backDisconnect" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="sign-out-alt" />
        </button>
      </div>
    </div>
    <div>
          <br>
        </div>
      <!--<div>
          <button
          type="button"
          class="btn btn-secondary btn-lg block"
          v-on:click="navToConf"
          >Current slot</button>
      </div>-->
      <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block"
            v-on:click="navToMySlots"
          >All slots</button>
      </div>
      <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg block"
            v-on:click="navToOverf"
          >Overflow</button>
      </div>
      <div v-if="adminState" >
          <button  type="button"
          class="btn btn-secondary btn-lg block"
          v-on:click="navToStat"
          >Admin.</button>
      </div>
    </div>
  </div>
</template>
<script>
import shared from "../shared";
export default {
  data() {
    return {
      adminState: true,
    };
  },
  mounted() {
    console.debug("state admin " + shared.readAdminEtat());
    this.adminState = shared.readAdminEtat();
  },
  created() {
    shared.securityAccess(this.$router, (p) => {});
  },
  methods: {
    navToOverf: function () {
      this.$router.push("/overflow");
    },
    navToMySlots: function () {
      this.$router.push("/mySlots");
    },
    navToStat: function () {
      this.$router.push("/admin");
    },
    backDisconnect: function () {
      shared.cleanToken();
      this.$router.push("/");
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
</style>



