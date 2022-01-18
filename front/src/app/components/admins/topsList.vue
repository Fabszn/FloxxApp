<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backAdminMenu" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>TopsList
  </div>
</template>

<script>
export default {
  methods: {
    backAdminMenu: function() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
</style>