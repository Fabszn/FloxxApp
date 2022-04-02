<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-secondary btn-lg block" v-on:click="navToConf">Conf.</button>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12">
        <button
          type="button"
          class="btn btn-secondary btn-lg block"
          v-on:click="navToOverf"
        >Overflow</button>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12">
        <button
          type="button"
          class="btn btn-secondary btn-lg block"
          v-on:click="navToStat"
        >statistiques</button>
      </div>
    </div>
  </div>
</template>