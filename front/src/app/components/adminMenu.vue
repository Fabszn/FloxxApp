<template>
  <div>
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary navbtn">
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
        v-on:click="navToFilling"
        class="btn btn-primary btn-lg block"
      >
        Rooms filling
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
    <div>
      <button
        type="button"
        v-on:click="navToStats"
        class="btn btn-primary block"
      >
        Statistics
      </button>
    </div>
    <button
      type="button"
      class="btn btn-primary block"
      v-on:click="navToDesktopMenu"
    >
      Planning
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
    navToFilling: function () {
      this.$router.push("/filling");
    },
    navToMapping: function () {
      this.$router.push("/mappingRC");
    },
    navToDesktopMenu: function () {
      this.$router.push("/planning");
    },
    navToStats: function () {
      this.$router.push("/statistics");
    },
  },
};
</script>

<style  scoped>
.block {
  display: block;
  width: 100%;
  border: 1px solid #f6f2c9;
  background-color: #202bbb;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>