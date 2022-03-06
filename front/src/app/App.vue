<template>
  <div class="d-flex flex-column">
    <router-view></router-view>
    <div class="version">{{version}}</div>
    <notifications group="foo"/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      version: FLOXX_VERSION
    };
  }
};
</script>