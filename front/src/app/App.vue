<template>
  <div class="d-flex flex-column">
    <router-view />
    <div class="version">
      {{ version }} - <span> {{ username }} </span>
    </div>
    <div id="username"></div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      version: "",
      username: this.$store.username
    };
  },
  mounted() {
    fetch("/infos")
    .then((response) => response.text())
    .then(
      (v) => {
        this.version = v;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>