<template>
  <v-col cols="12" sm="12">
    <v-card elevation="0">
      <v-card-title> Кредитная история </v-card-title>
      <div class="chart-container" style="position: relative; height: 30vh">
        <canvas ref="canvas"></canvas>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import { Bar } from "vue-chartjs";
import moment from "moment";
export default {
  name: "barchart",
  extends: Bar,
  props: ["closedCreditData", "openCreditData"],

  mounted() {
    console.log("DATA", this.closedCreditData);
    this.renderChart(
      {
        //labels: [new Date(2010, 1, 1)],
        datasets: [
          {
            type: "bar",
            label: "Закрытые",
            backgroundColor: "#ff6384",
            borderColor: "#ff6384",
            data: [
              {
                t: new Date(2010, 1, 1),
                y: 70,
              },
              {
                t: new Date(2000, 1, 1),
                y: 40,
              },
              {
                t: new Date(2005, 1, 1),
                y: 30,
              },
              {
                t: new Date(2007, 1, 1),
                y: 90,
              },
              {
                t: new Date(2007, 12, 12),
                y: 900,
              },
              {
                t: new Date(2015, 1, 1),
                y: 70,
              },
              {
                t: new Date(2011, 10, 1),
                y: 70,
              },
            ],
          },
          {
            type: "bar",
            label: "Нет информации",
            backgroundColor: "#36a2eb",

            borderColor: "#36a2eb",
            data: [
              {
                t: new Date(2002, 2, 2),
                y: 75,
              },
              {
                t: new Date(2006, 12, 11),
                y: 170,
              },
              {
                t: new Date(1999, 10, 1),
                y: 100,
              },
              {
                t: new Date(2013, 12, 12),
                y: 600,
              },
            ],
          },
        ],
      },
      {
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "linear",

              bounds: "data",
              time: {
                unit: "quarter",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        maintainAspectRatio: false,
        responsive: true,
      }
    );
  },
};
</script>