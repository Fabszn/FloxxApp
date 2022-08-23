<template>
  <div>
    <div>
      <div class="global-parent separate-headfooter">
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

      <div class="selector-item">
        <label>Select day</label>
        <v-select
          :options="days"
          v-model="selectedDay"
          @option:selected="setSelectedDay"
        ></v-select>
      </div>
      <div class="selector-item">
        <label>Select time</label>
        <v-select
          :options="currentTimeSlots"
          v-model="selectedSlot"
          @option:selected="setSelectedSlot"
        ></v-select>
      </div>
    </div>

    <div>
      <apexchart
        type="bar"
        :options="chartOptionsBySlotTime"
        :series="series"
      ></apexchart>
    </div>

    <hr />
    
    <div class="chartGlobalFilling">
      <apexchart
        :options="chartOptionsGlobalFilling"
        :series="perseries"
      ></apexchart>
    </div>
    <hr />
    <div class="chartDayFilling">
      <div class="chartDayFilling-item">
        <apexchart :options="chartOptionsDay1" :series="perseries"></apexchart>
      </div>
      <div class="chartDayFilling-item">
        <apexchart :options="chartOptionsDay2" :series="perseries"></apexchart>
      </div>
      <div class="chartDayFilling-item">
        <apexchart :options="chartOptionsDay3" :series="perseries"></apexchart>
      </div>
    </div>
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
      chartOptionsBySlotTime: {
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
      chartOptionsGlobalFilling: {
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
      chartOptionsDay1: {
        title: {
          text: "Repartition of filling on whole conference D1",
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
          width: 100,
          type: "donut",
        },
        labels: this.perlabel,
      },
      chartOptionsDay2: {
        title: {
          text: "Repartition of filling on whole conference D2",
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
          width: 100,
          type: "donut",
        },
        labels: this.perlabel,
      },
      chartOptionsDay3: {
        title: {
          text: "Repartition of filling on whole conference D3",
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
          width: 100,
          type: "donut",
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
      this.chartOptionsBySlotTime = {
        ...this.chartOptionsBySlotTime,
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
              (this.chartOptionsGlobalFilling = {
                ...this.chartOptionsGlobalFilling,
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


.selector-item {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.params-selector {
  width: 32%;
}

.chartGlobalFilling {
  display: flex;
  justify-content: center;
}
.chartDayFilling {
  display: flex;
  flex-direction: column;
}

/*.chartDayFilling-item {
 
}*/
</style>