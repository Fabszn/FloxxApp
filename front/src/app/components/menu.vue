<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backDisconnect" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="sign-out-alt" />
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      
    </div>
    <div>
      <p>What do you want do to ?</p>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <button type="button" class="btn btn-secondary btn-lg block" v-on:click="navToConf">Conf.</button>
        </div>
      </div>
      <div class="row"></div>
      <div class="row">
        <div class="col-12">
          <button
            type="button"
            class="btn btn-secondary btn-lg block"
            v-on:click="navToOverf"
          >Overflow</button>
        </div>
      </div>
      <!-- add admin rules for displaying-->

      <div class="row"></div>
      <div class="row">
        <div class="col-12">
          <button type="button" class="btn btn-secondary btn-lg block" v-on:click="navToStat">admin.</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shared from "../shared";
export default {
  created() {
    shared.securityAccess(this.$router, p => {});
  },
  methods: {
    navToConf: function() {
      this.$router.push("/rooms");
    },
    navToOverf: function() {
      this.$router.push("/overflow");
    },
    navToStat: function() {
      this.$router.push("/admin");
    },
    backDisconnect: function() {
      shared.cleanToken();
      this.$router.push("/");
    }
  }
};
</script>


<style  scoped>
.block {
  display: block;
  width: 100%;
  border: none;
  background-color: #4caf50;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>



