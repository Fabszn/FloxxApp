<template>
  <div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div>
        <button
          v-on:click="backAdminMenu"
          type="button"
          class="btn btn-secondary"
        >
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div class="screen-title">Statistics</div>
    <div>
      <v-select
        :options="days"
        v-model="selectedDay"
        @option:selected="setSelectedDay"
      ></v-select>
      <v-select
        :options="currentTimeSlots"
        v-model="selectedSlot"
        @option:selected="setSelectedSlot"
      ></v-select>
    </div>

    <apexchart
      width="1000"
      height="350"
      type="bar"
      :options="chartOptions1"
      :series="series"
    ></apexchart>
  </div>

  <hr />
  <div class="chartGlobalFilling">
    <apexchart
      :options="chartOptions2"
      :series="perseries"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import shared from "../../shared";
import { defineComponent, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { StatItem } from "../../models";
import _ from "lodash";

class Day {
  id: string;
  label: string;
  constructor(dayId, day) {
    this.label = day;
    this.id = dayId;
  }
}

class SlotItem {
  id: string;
  label: string;
  constructor(dayId, day) {
    this.label = day;
    this.id = dayId;
  }
}

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const categories = ref([]);
    const series = ref([]);
    const perseries = ref([]);
    const perlabel = ref([]);
    const selectedDay = ref(null);
    const selectedSlot = ref(null);
    const currentTimeSlots = ref(new Array<string>());

    return {
      categories,
      series,
      perseries,
      perlabel,
      selectedDay,
      currentTimeSlots,
      selectedSlot,
    };
  },
  created() {
    this.initData();
  },
  data() {
    return {
      days: [
        new Day(1, "wednesday"),
        new Day(2, "thursday"),
        new Day(3, "friday"),
      ], // to make dynamique
      stats: new Array<StatItem>(),
      chartOptions1: {
        title: {
          text: "Repartition of filling by slot time",
          align: "center",
          margin: 40,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#FFF",
          },
        },
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        chart: {
          id: "compareShart",
        },
        yaxis: {
          labels: {
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 500,
            style: {
              colors: "#FFF",
              fontSize: "20px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },
        xaxis: {
          categories: this.categories,
          labels: {
            show: true,
            style: {
              colors: "#FFF",
              fontSize: "11px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
            },
          },
        },
      },
      chartOptions2: {
        title: {
          text: "Repartition of filling on whole conference",
          align: "center",
          margin: 40,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#FFF",
          },
        },
        legend: {
          labels: { useSeriesColors: true },
          position: "bottom",
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          width: 700,
          type: "pie",
        },
        labels: this.perlabel,
      },
      series: [
        {
          name: "%",
          data: this.perseries,
        },
      ],
    };
  },
  methods: {
    setSelectedDay() {
      const current = this.stats[this.selectedDay.label];
      this.currentTimeSlots = _.map(_.keys(current), (v) => new SlotItem(v, v));
    },
    setSelectedSlot() {
      const dataToDisplay =
        this.stats[this.selectedDay.label][this.selectedSlot.label];
      this.chartOptions1 = {
        ...this.chartOptions1,
        ...{
          xaxis: {
            categories: _.map(dataToDisplay, (i) => i["talk"].title),
          },
        },
      };
      const s = _.map(dataToDisplay, (i) => i["percentage"]);
      this.series = [
        {
          name: "test",
          data: s,
        },
      ];
    },
    backAdminMenu: function () {
      this.$router.push("/adminMenu");
    },
    initData() {
      shared.securityAccess(this.$router, (v) => {
        fetch("/api/stats/slots", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            this.stats = p;
          });
      });
      shared.securityAccess(this.$router, (v) => {
        fetch("/api/stats/slots/_filling", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            (this.perseries = p["percentages"]),
              (this.chartOptions2 = {
                ...this.chartOptions2,
                ...{
                  labels: _.map(p["labels"], (i) => "Filled at " + i + "%"),
                },
              });
          });
      });
    },
  },
});
</script>
<style scoped>
.chartGlobalFilling {
  display: flex;
  justify-content: center;
}
</style>