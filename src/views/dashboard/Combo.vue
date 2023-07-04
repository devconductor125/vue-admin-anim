<template>
  <div>
    <div class="grid grid-cols-1 gap-4 w-full">
      <div class="card bg-gray-100 flex-grow">
        <div class="card__title text-center">
          <h3 class="text-4xl text-gray-dark font-bold">Balances</h3>
        </div>
        <div class="card__body text-center relative w-full">
          <BalanceChart
            :data="balance.data"
            :options="balance.options"
          ></BalanceChart>
        </div>
      </div>
    </div>

    <div class="card bg-gray-100 mt-10">
      <div class="card-title">
        <div class="card__title text-center">
          <h3 class="text-4xl text-gray-dark font-bold mb-8">
            Household Balance Sheet
          </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div class="bg-blue-light rounded-xl px-5 h-full">
              <asset-table></asset-table>
            </div>
          </div>
          <div>
            <div class="bg-red-default rounded-xl px-5">
              <liabilities-table></liabilities-table>
            </div>
            <div class="bg-lime-default rounded-xl px-5 mt-4">
              <equity-table></equity-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BalanceChart from "@/components/charts/BalanceChart";
import CompositionDoughnut from "@/components/charts/CompositionDoughnut";
import CompositionLine from "@/components/charts/CompositionLine";
import AssetTable from "@/components/tables/dashboard/AssetTable.vue";
import LiabilitiesTable from "@/components/tables/dashboard/LiabilitiesTable.vue";
import EquityTable from "@/components/tables/dashboard/EquityTable.vue";
export default {
  components: {
    BalanceChart,
    CompositionLine,
    CompositionDoughnut,
    AssetTable,
    LiabilitiesTable,
    EquityTable,
  },
  data() {
    return {
      balance: {
        data: {
          labels: [
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
          ],
          datasets: [
            {
              label: "House Equity",
              fill: true,
              backgroundColor: "#0A82D5",
              pointBackgroundColor: "#0A82D5",
              borderColor: "#0A82D5",
              pointHighlightStroke: "#0A82D5",
              borderCapStyle: "butt",
              data: [-5, -9, -10, -9, -18, -19, -20, -5, -10, -30, -30],
            },
            {
              label: "House Equity",
              fill: true,
              backgroundColor: "#0A82D5",
              pointBackgroundColor: "#0A82D5",
              borderColor: "#0A82D5",
              pointHighlightStroke: "#0A82D5",
              borderCapStyle: "butt",
              data: [5, 9, 10, 9, 18, 19, 20, 5, 10, 30, 30],
            },
            {
              label: "Investments",
              fill: true,
              backgroundColor: "#FCBB0A",
              pointBackgroundColor: "#FCBB0A",
              borderColor: "#FCBB0A",
              pointHighlightStroke: "#FCBB0A",
              borderCapStyle: "butt",
              data: [-10, -18, -20, -18, -36, -38, -40, -10, -20, -60, -60],
            },
            {
              label: "Investments",
              fill: true,
              backgroundColor: "#FCBB0A",
              pointBackgroundColor: "#FCBB0A",
              borderColor: "#FCBB0A",
              pointHighlightStroke: "#FCBB0A",
              borderCapStyle: "butt",
              data: [10, 18, 20, 18, 36, 38, 40, 10, 20, 60, 60],
            },
            {
              label: "Net Cash",
              fill: true,
              backgroundColor: "#3DBB61",
              pointBackgroundColor: "#3DBB61",
              borderColor: "#3DBB61",
              pointHighlightStroke: "#3DBB61",
              borderCapStyle: "butt",
              data: [-15, -36, -40, -36, -72, -76, -80, -20, -40, -120, -120],
            },
            {
              label: "Net Cash",
              fill: true,
              backgroundColor: "#3DBB61",
              pointBackgroundColor: "#3DBB61",
              borderColor: "#3DBB61",
              pointHighlightStroke: "#3DBB61",
              borderCapStyle: "butt",
              data: [15, 36, 40, 36, 72, 76, 80, 20, 40, 120, 120],
            },
            {
              label: "MiscEquity",
              fill: true,
              backgroundColor: "#D93535",
              pointBackgroundColor: "#D93535",
              borderColor: "#D93535",
              pointHighlightStroke: "#D93535",
              data: [-30, -72, -80, -72, -144, -152, -160, -40, -80, -240, -240],
            },
            {
              label: "MiscEquity",
              fill: true,
              backgroundColor: "#D93535",
              pointBackgroundColor: "#D93535",
              borderColor: "#D93535",
              pointHighlightStroke: "#D93535",
              data: [30, 72, 80, 72, 144, 152, 160, 40, 80, 240, 240],
            },
          ],
        },
        options: {
          tooltips: { enabled: false },
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 0,
            },
          },
          legend: {
            position: "bottom",
            align: "center",
            labels: {
              fontSize: 15,
              boxWidth: 12,
            },
          },
          // Can't just just `stacked: true` like the docs say
          scales: {
            yAxes: [
              {
                ticks: {
                  reverse: false,
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  reverse: true,
                  beginAtZero: true,
                },
              },
            ],
          },
          animation: {
            duration: 750,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
</style>