<template>
  <div class="spinner">
    <div>Please wait while loading Floxx ....</div>
    <div><b-spinner label="Loading..."></b-spinner></div>
  </div>
</template>
<script>
import _ from "lodash";
import shared from "../shared";
export default {
  created: function () {
    fetch("try-reco", {
      headers: shared.tokenHandle(),
      method: "POST",
    })
      .then((response) => response.json())
      .then((p) => {
        shared.storeToken(p.token, p.isAdmin, p.name);
        this.$store.commit("setUsername", p.name);
        this.$router.push("/menu");
      })
      .catch((err) => {
        console.info("error");
        this.$router.push("/login");
      });
  },
};
</script>

<style  scoped>
.spinner {
  display: flex;
  justify-content: center;
}
</style>