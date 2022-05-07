<template>
  <div class="d-flex flex-column">
    <router-view />
    <div class="version">
      {{ version }} <span> {{ this.$store.state.username }} </span>
    </div>
    <div id="username"></div>
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
    fetch("/infos").then(
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