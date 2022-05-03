<template>
  <div class="d-flex flex-column">
    <router-view></router-view>
    <div class="version">
      {{ version }} <span> - {{ $store.state.username }}</span>
    </div>
    <div id="username"></div>
    <notifications/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      version: "",
    };
  },
  mounted() {
    this.$http.get("/infos").then(
      (p) => {
        this.version = p.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>