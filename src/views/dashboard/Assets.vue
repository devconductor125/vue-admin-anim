<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      <div class="lg:col-span-2 flex flex-col">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-4 text-white text-xl font-medium"
        >
          <div class="bg-blue-light rounded-xl p-4 font-serif">
            <h4>Assets</h4>
            <div class="flex justify-between">
              <h3>$145,000,000</h3>
              <span> +2.10% </span>
            </div>
          </div>
          <div class="bg-red-default rounded-xl p-4 font-serif">
            <h4>Liabilities</h4>
            <div class="flex justify-between">
              <h3>$460,000</h3>
              <span> -1.32% </span>
            </div>
          </div>
          <div class="bg-lime-default rounded-xl p-4 font-serif">
            <h4>Equity</h4>
            <div class="flex justify-between">
              <h3>$460,000</h3>
              <span> -1.32% </span>
            </div>
          </div>
        </div>
        <div class="card flex-grow">
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

      <!-- Composition -->
      <div class="card bg-gray-100 overflow-auto text-center relative">
        <div class="card__title text-center">
          <h3 class="text-4xl text-gray-dark font-bold">Composition</h3>
        </div>
        <CompositionDoughnut
          :data="composition.doughnut.data"
          :options="composition.doughnut.options"
          :style="{ height: '200px' }"
          class="mb-5"
        ></CompositionDoughnut>
        <CompositionLine
          :data="composition.line.data"
          :options="composition.line.options"
          :style="{ height: '250px' }"
        ></CompositionLine>
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
              data: [16, 13, 25, 33, 40, 33, 45, 20, 30, 40, 50],
            },
            {
              label: "Net Cash",
              fill: true,
              backgroundColor: "#3DBB61",
              pointBackgroundColor: "#3DBB61",
              borderColor: "#3DBB61",
              pointHighlightStroke: "#3DBB61",
              borderCapStyle: "butt",
              data: [34, 44, 33, 24, 25, 28, 25, 10, 50, 60, 30],
            },
            {
              label: "MiscEquity",
              fill: true,
              backgroundColor: "#D93535",
              pointBackgroundColor: "#D93535",
              borderColor: "#D93535",
              pointHighlightStroke: "#D93535",
              data: [26, 36, 42, 38, 40, 30, 12, 100, 150, 20, 200],
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
                stacked: true,
              },
            ],
          },
          animation: {
            duration: 750,
          },
        },
      },
      composition: {
        doughnut: {
          data: {
            labels: [
              "House Equity ",
              "Investments ",
              "Net Cash ",
              "Misc Equity ",
            ],
            datasets: [
              {
                backgroundColor: ["#0A82D5", "#FCBB0A", "#3DBB61", "#D93535"],
                data: [10, 17, 28, 45],
              },
            ],
          },
          options: {
            labels: {
              // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
              render: function (args) {
                // args will be something like:
                // { label: 'Label', value: 123, percentage: 50, index: 0, dataset: {...} }
                return args.label + "\n" + args.value + "%";

                // return object if it is image
                // return { src: 'image.png', width: 16, height: 16 };
              },
              // precision for percentage, default is 0
              precision: 0,
              // identifies whether or not labels of value 0 are displayed, default is false
              showZero: true,

              // font size, default is defaultFontSize
              fontSize: 14,

              // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
              fontColor: ["#0A82D5", "#FCBB0A", "#3DBB61", "#D93535"],

              // font style, default is defaultFontStyle
              fontStyle: "500",

              // font family, default is defaultFontFamily
              fontFamily: "'Neuton', serif",

              // draw text shadows under labels, default is false
              textShadow: false,

              // text shadow intensity, default is 6
              shadowBlur: 6,

              // text shadow X offset, default is 3
              shadowOffsetX: -5,

              // text shadow Y offset, default is 3
              shadowOffsetY: 10,

              // text shadow color, default is 'rgba(0,0,0,0.3)'
              // shadowColor: "rgba(255,0,0,0.75)",

              // draw label in arc, default is false
              // bar chart ignores this
              arc: false,

              // position to draw label, available value is 'default', 'border' and 'outside'
              // bar chart ignores this
              // default is 'default'
              position: "outside",

              // draw label even it's overlap, default is true
              // bar chart ignores this
              overlap: true,

              // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
              showActualPercentages: true,

              // set images when `render` is 'image'
              images: [
                {
                  src: "image.png",
                  width: 16,
                  height: 16,
                },
              ],

              // add padding when position is `outside`
              // default is 2
              outsidePadding: 5,

              // add margin of text when position is `outside` or `border`
              // default is 2
              textMargin: 8,
            },

            tooltips: { enabled: false },
            // cutoutPercentage: 50,
            // rotation: 180,
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            elements: {
              center: {
                text: "Equity",
                color: "#1C262F", // Default is #000000
                fontStyle: "Neuton", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 18, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 18, // Default is 25 (in px), used for when text wraps
                backgroundColor: "red",
              },
              //   height: 200,
              //   width: 200,
            },
          },
        },
        line: {
          data: {
            labels: [2016, 2017, 2018, 2019, 2020],
            datasets: [
              {
                label: "House Equity",
                fill: true,
                backgroundColor: "#0A82D5",
                pointBackgroundColor: "#0A82D5",
                borderColor: "#0A82D5",
                pointHighlightStroke: "#0A82D5",
                borderCapStyle: "butt",
                data: [26, 36, 42, 38, 40],
              },
              {
                label: "Investments",
                fill: true,
                backgroundColor: "#FCBB0A",
                pointBackgroundColor: "#FCBB0A",
                borderColor: "#FCBB0A",
                pointHighlightStroke: "#FCBB0A",
                borderCapStyle: "butt",
                data: [34, 44, 33, 24, 25],
              },
              {
                label: "Net Cash",
                fill: true,
                backgroundColor: "#3DBB61",
                pointBackgroundColor: "#3DBB61",
                borderColor: "#3DBB61",
                pointHighlightStroke: "#3DBB61",
                borderCapStyle: "butt",
                data: [16, 13, 25, 33, 40],
              },
              {
                label: "MiscEquity",
                fill: true,
                backgroundColor: "#D93535",
                pointBackgroundColor: "#D93535",
                borderColor: "#D93535",
                pointHighlightStroke: "#D93535",
                data: [5, 9, 10, 9, 18],
              },
            ],
          },
          options: {
            tooltips: { enabled: false },
            hover: { mode: null },
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 0,
              },
              //   height: 200,
              //   width: 200,
            },
            legend: {
              display: false,
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
                  stacked: true,
                },
              ],
            },
            animation: {
              duration: 750,
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.doughnut__chart,
.line__chart {
  max-height: 200px;
}
</style>