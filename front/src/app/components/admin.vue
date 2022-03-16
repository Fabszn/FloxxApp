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
          <p>What do you want do to ?</p>
        </div>
        <div>
          <button
            type="button"
            v-on:click="navToList"
            class="btn btn-primary btn-lg block"
          >Tops Lists</button>
        </div>
        <div>
          <button
            type="button"
            v-on:click="navToStats"
            class="btn btn-primary btn-lg block"
          >Statistiques</button>
        </div>
        <div>
          <button type="button" v-on:click="navToRCMng" class="btn btn-primary block">RedCoats</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    backMenu: function() {
      this.$router.push("/menu");
    },
    navToList: function() {
      this.$router.push("/tops-list");
    },
    navToRCMng: function() {
      this.$router.push("/redcoatmng");
    },
    navToStats: function() {
      this.$router.push("/statistiques");
    }
  }
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