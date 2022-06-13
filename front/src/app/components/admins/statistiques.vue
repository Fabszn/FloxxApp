<template>
    <div>
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';  
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
    components: {
    apexchart: VueApexCharts,
  },
    setup() {
      const data = ref(new Array<Number>())
        
        return {
          data
        }
    },
    data() {
    return {
      chartOptions: {
        plotOptions: {
        bar: {
          horizontal: true,
        }},
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
})
</script>
