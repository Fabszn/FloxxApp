<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button
          v-on:click="backDisconnect"
          type="button"
          class="btn btn-secondary navbtn"
        >
          <font-awesome-icon icon="sign-out-alt" />
        </button>
      </div>
    </div>
    <div>
      <br />
    </div>
    <div>
      <button
        type="button"
        class="btn btn-secondary btn-lg block m-1"
        v-on:click="navToMySlots"
      >
        My slots
      </button>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-secondary btn-lg block m-1"
        v-on:click="navToAllActSlots"
      >
        All actives' slots
      </button>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-secondary btn-lg block m-1"
        v-on:click="navToOverf"
      >
        Live rooms attendances
      </button>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-secondary btn-lg block m-1"
        v-on:click="navToInformations"
      >
        Informations
        <span
          :class="{ 'text-bg-danger': this.isUnreadMessage }"
          class="badge text-bg-secondary"
          >{{ this.nbUnreadMessage }}</span
        >
      </button>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-secondary btn-lg block m-1"
        v-on:click="navToPlanning"
      >
        Planning
       
      </button>
    </div>
    <div v-if="adminState">
      <button
        type="button"
        class="btn btn-secondary btn-lg block m-1"
        v-on:click="navToStat"
      >
        Admin.
      </button>
    </div>
  </div>
</template>
<script>
import shared from "../shared";
import _ from "lodash";
export default {
  data() {
    return {
      adminState: false,
      isUnreadMessage: false,
      nbUnreadMessage: 0,
    };
  },
  mounted() {
    this.adminState = shared.readAdminEtat();
  },
  created() {
    shared.securityAccess(this.$router, (p) => {
      fetch("/api/informations/_unread", {
        method: "GET",
        headers: shared.tokenHandle(),
      })
        .then((response) => response.json())
        .then((p) => {
          this.nbUnreadMessage = _.size(p);
          this.isUnreadMessage = this.nbUnreadMessage > 0;
        });
    });
  },
  methods: {
    navToOverf: function () {
      this.$router.push("/overflow");
    },
    navToMySlots: function () {
      this.$router.push("/mySlots");
    },
    navToStat: function () {
      this.$router.push("/adminMenu");
    },
    navToAllActSlots: function () {
      this.$router.push("/allactivesslots");
    },
    navToInformations: function () {
      this.$router.push("/informations");
    },
    navToPlanning: function () {
      this.$router.push("/planning");
    },
    
    backDisconnect: function () {
      shared.cleanToken();
      this.$store.commit("setUsername", "");
      this.$router.push("/login");
    },
  },
};
</script>


<style  scoped>
button:hover {
  background-color: #3b8a4b;
}
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



