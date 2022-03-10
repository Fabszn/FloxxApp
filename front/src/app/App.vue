<template>
  <div class="d-flex flex-column">
    <router-view></router-view>
    <div class="version">{{version}}</div>
    <notifications group="foo"/>
  </div>
</template>
<script>
import shared from "./shared";
export default {
    data: function() {
    return {
      version: ""
    };
  },
  mounted() {
    this.$http
      .get("/infos", {
        headers: shared.tokenHandle()
      })
      .then(
        p => {
          this.version = p.data;
        },
        error => {
          console.log(error);
        }
      );
    }
};
</script>