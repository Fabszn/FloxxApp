<template>
  <div class="d-flex flex-column">
    <div>
      <router-view></router-view>
    </div>
    <div class="version">v.{{version}}</div>
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