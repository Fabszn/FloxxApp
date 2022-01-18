<template>
  <div id="app">
    <p>
      A Vue.js component to draw animated circular progress bars!
    </p>
      <vue-circle
        :progress="val3"
        :size="100"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="380"
        insert-mode="append"
        :thickness="5"
        :show-percent="true"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <p>Maillot</p>
      </vue-circle>
      <vue-circle
        :progress="val2"
        :size="100"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="380"
        insert-mode="append"
        :thickness="5"
        :show-percent="true"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <p>Maillot</p>
      </vue-circle>
      <vue-circle
        :progress="val1"
        :size="100"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="380"
        insert-mode="append"
        :thickness="5"
        :show-percent="true"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <p>Maillot</p>
      </vue-circle>
  </div>
</template>

<script>
  import VueCircle from 'vue2-circle-progress'
  export default {
    components: {
      VueCircle
    },
    data(){
      return{
        fill : { gradient: ["red"] },
        val1:10,
        val2:90,
        val3:43
      }
    },
    methods:{
      progress(event,progress,stepValue){
        console.log(stepValue);
      },
      progress_end(event){
        console.log("Circle progress end");
      }
    }
  }
</script>