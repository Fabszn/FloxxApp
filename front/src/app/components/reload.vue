<template>

</template>
<script>

export default {
  created: function () {
    console.log(this.$route.params.pathRoute)
    thiq.$router.push("/" + this.$route.params.pathRoute)
  },
};
</script>