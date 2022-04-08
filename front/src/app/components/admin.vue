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
    <!--<div>
      <button
        type="button"
        v-on:click="navToList"
        class="btn btn-primary btn-lg block"
      >
        Tops Lists
      </button>
    </div> -->
    <div>
      <button
        type="button"
        v-on:click="navToStats"
        class="btn btn-primary btn-lg block"
      >
        Statistiques
      </button>
    </div>
    <!--<div>
      <button
        type="button"
        v-on:click="navToRCMng"
        class="btn btn-primary block"
      >
        RedCoats
      </button>
    </div>-->
    <div>
      <button
        type="button"
        v-on:click="navToMapping"
        class="btn btn-primary block"
      >
        Rooms mapping
      </button>
    </div>
    <button
      type="button"
      class="btn btn-primary block"
      v-on:click="navToDesktopMenu"
    >
      Desktop.
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
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
    navToDesktopMenu: function () {
      this.$router.push("/planning");
    },
  },
};
</script>

<style  scoped>
.block {
  display: block;
  width: 100%;
  border: none;
  background-color: #3399ff;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>