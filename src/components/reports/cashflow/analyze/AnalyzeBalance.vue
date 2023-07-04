<template>
  <div class="card flex-grow bg-white">
    <div class="card__title flex justify-between text-center gap-4">
      <div class="switch font-bold py-1" style="color: #4898D7;">
        <switch-button v-model="budget" color="#4898D7" background="#CCE2F0">Rolling Average</switch-button>
      </div>
      <div class="switch font-bold py-1" style="color: #F67878;">
        <switch-button v-model="budget" color="#F67878" background="#FCD6D6">Recommended Liquidity</switch-button>
      </div>
    </div>
    <div class="card__body text-center relative w-full">
      <CostChart :data="balance.data" :options="balance.options"></CostChart>
    </div>
    <div class="card__footer flex items-start text-sm flex-wrap font-sans mt-5">
      <radio-button name="chart-filter" background="#805124">Current</radio-button>
      <radio-button name="chart-filter" background="#805124">1 Month</radio-button>
      <radio-button name="chart-filter" background="#805124">6 Months</radio-button>
      <radio-button name="chart-filter" background="#805124" :checked="true">Ytd</radio-button>
      <radio-button name="chart-filter" background="#805124">1 Year</radio-button>
      <radio-button name="chart-filter" background="#805124">3 Years</radio-button>
      <radio-button name="chart-filter" background="#805124">5 Years</radio-button>
      <radio-button name="chart-filter" background="#805124">Maximum</radio-button>
      <radio-button name="chart-filter" background="#805124"
        ><span>Date Range <i class="fas fa-calendar-alt"></i></span
      ></radio-button>
      <div class="self-center ml-auto">
        <button
          class="bg-gray-500 text-gray-100 px-2 py-1 rounded-l-full focus:outline-none mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              id="ic_forward_24px"
              d="M14,9V4L4,14,14,24V19H24V9Z"
              transform="translate(-4 -4)"
            />
          </svg>
        </button>

        <button
          class="bg-gray-500 text-gray-100 px-2 py-1 focus:outline-none rounded-r-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              id="ic_forward_24px"
              d="M14,9V4L24,14,14,24V19H4V9Z"
              transform="translate(-4 -4)"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CostChart from "@/components/charts/CostChart";
import SwitchButton from "@/components/forms/SwitchButton";

export default {
  components: {
    CostChart,
    SwitchButton,
  },

  data() {
    return {
      balance: {
        data: {
          labels: [
            "2019-09-01",
            "2019-09-02",
            "2019-09-03",
            "2019-09-04",
            "2019-09-05",
            "2019-09-06",
            "2019-09-07",
            "2019-09-08",
            "2019-09-09",
            "2019-09-10",
            "2019-09-11",
            "2019-09-12",
            "2019-09-13",
            "2019-09-14",
            "2019-09-15",
            "2019-09-16",
            "2019-09-17",
            "2019-09-18",
            "2019-09-19",
            "2019-09-20",
            "2019-09-21",
            "2019-09-22",
            "2019-09-23",
            "2019-09-24",
            "2019-09-25",
            "2019-09-26",
            "2019-09-27",
            "2019-09-28",
            "2019-09-29",
            "2019-09-30",

            "2019-10-01",
            "2019-10-02",
            "2019-10-03",
            "2019-10-04",
            "2019-10-05",
            "2019-10-06",
            "2019-10-07",
            "2019-10-08",
            "2019-10-09",
            "2019-10-10",
            "2019-10-11",
            "2019-10-12",
            "2019-10-13",
            "2019-10-14",
            "2019-10-15",
            "2019-10-16",
            "2019-10-17",
            "2019-10-18",
            "2019-10-19",
            "2019-10-20",
            "2019-10-21",
            "2019-10-22",
            "2019-10-23",
            "2019-10-24",
            "2019-10-25",
            "2019-10-26",
            "2019-10-27",
            "2019-10-28",
            "2019-10-29",
            "2019-10-30",

            "2019-11-01",
            "2019-11-02",
            "2019-11-03",
            "2019-11-04",
            "2019-11-05",
            "2019-11-06",
            "2019-11-07",
            "2019-11-08",
            "2019-11-09",
            "2019-11-10",
            "2019-11-11",
            "2019-11-12",
            "2019-11-13",
            "2019-11-14",
            "2019-11-15",
            "2019-11-16",
            "2019-11-17",
            "2019-11-18",
            "2019-11-19",
            "2019-11-20",
            "2019-11-21",
            "2019-11-22",
            "2019-11-23",
            "2019-11-24",
            "2019-11-25",
            "2019-11-26",
            "2019-11-27",
            "2019-11-28",
            "2019-11-29",
            "2019-11-30",

            "2019-12-01",
            "2019-12-02",
            "2019-12-03",
            "2019-12-04",
            "2019-12-05",
            "2019-12-06",
            "2019-12-07",
            "2019-12-08",
            "2019-12-09",
            "2019-12-10",
            "2019-12-11",
            "2019-12-12",
            "2019-12-13",
            "2019-12-14",
            "2019-12-15",
            "2019-12-16",
            "2019-12-17",
            "2019-12-18",
            "2019-12-19",
            "2019-12-20",
            "2019-12-21",
            "2019-12-22",
            "2019-12-23",
            "2019-12-24",
            "2019-12-25",
            "2019-12-26",
            "2019-12-27",
            "2019-12-28",
            "2019-12-29",
            "2019-12-30",

            "2020-01-01",
            "2020-01-02",
            "2020-01-03",
            "2020-01-04",
            "2020-01-05",
            "2020-01-06",
            "2020-01-07",
            "2020-01-08",
            "2020-01-09",
            "2020-01-10",
            "2020-01-11",
            "2020-01-12",
            "2020-01-13",
            "2020-01-14",
            "2020-01-15",
            "2020-01-16",
            "2020-01-17",
            "2020-01-18",
            "2020-01-19",
            "2020-01-20",
            "2020-01-21",
            "2020-01-22",
            "2020-01-23",
            "2020-01-24",
            "2020-01-25",
            "2020-01-26",
            "2020-01-27",
            "2020-01-28",
            "2020-01-29",
            "2020-01-30",

            "2020-02-01",
            "2020-02-02",
            "2020-02-03",
            "2020-02-04",
            "2020-02-05",
            "2020-02-06",
            "2020-02-07",
            "2020-02-08",
            "2020-02-09",
            "2020-02-10",
            "2020-02-11",
            "2020-02-12",
            "2020-02-13",
            "2020-02-14",
            "2020-02-15",
            "2020-02-16",
            "2020-02-17",
            "2020-02-18",
            "2020-02-19",
            "2020-02-20",
            "2020-02-21",
            "2020-02-22",
            "2020-02-23",
            "2020-02-24",
            "2020-02-25",
            "2020-02-26",
            "2020-02-27",
            "2020-02-28",

            "2020-03-01",
            "2020-03-02",
            "2020-03-03",
            "2020-03-04",
            "2020-03-05",
            "2020-03-06",
            "2020-03-07",
            "2020-03-08",
            "2020-03-09",
            "2020-03-10",
            "2020-03-11",
            "2020-03-12",
            "2020-03-13",
            "2020-03-14",
            "2020-03-15",
            "2020-03-16",
            "2020-03-17",
            "2020-03-18",
            "2020-03-19",
            "2020-03-20",
            "2020-03-21",
            "2020-03-22",
            "2020-03-23",
            "2020-03-24",
            "2020-03-25",
            "2020-03-26",
            "2020-03-27",
            "2020-03-28",
            "2020-03-29",
            "2020-03-30",

            "2020-04-01",
            "2020-04-02",
            "2020-04-03",
            "2020-04-04",
            "2020-04-05",
            "2020-04-06",
            "2020-04-07",
            "2020-04-08",
            "2020-04-09",
            "2020-04-10",
            "2020-04-11",
            "2020-04-12",
            "2020-04-13",
            "2020-04-14",
            "2020-04-15",
            "2020-04-16",
            "2020-04-17",
            "2020-04-18",
            "2020-04-19",
            "2020-04-20",
            "2020-04-21",
            "2020-04-22",
            "2020-04-23",
            "2020-04-24",
            "2020-04-25",
            "2020-04-26",
            "2020-04-27",
            "2020-04-28",
            "2020-04-29",
            "2020-04-30",

            "2020-05-01",
            "2020-05-02",
            "2020-05-03",
            "2020-05-04",
            "2020-05-05",
            "2020-05-06",
            "2020-05-07",
            "2020-05-08",
            "2020-05-09",
            "2020-05-10",
            "2020-05-11",
            "2020-05-12",
            "2020-05-13",
            "2020-05-14",
            "2020-05-15",
            "2020-05-16",
            "2020-05-17",
            "2020-05-18",
            "2020-05-19",
            "2020-05-20",
            "2020-05-21",
            "2020-05-22",
            "2020-05-23",
            "2020-05-24",
            "2020-05-25",
            "2020-05-26",
            "2020-05-27",
            "2020-05-28",
            "2020-05-29",
            "2020-05-30",

            "2020-06-01",
            "2020-06-02",
            "2020-06-03",
            "2020-06-04",
            "2020-06-05",
            "2020-06-06",
            "2020-06-07",
            "2020-06-08",
            "2020-06-09",
            "2020-06-10",
            "2020-06-11",
            "2020-06-12",
            "2020-06-13",
            "2020-06-14",
            "2020-06-15",
            "2020-06-16",
            "2020-06-17",
            "2020-06-18",
            "2020-06-19",
            "2020-06-20",
            "2020-06-21",
            "2020-06-22",
            "2020-06-23",
            "2020-06-24",
            "2020-06-25",
            "2020-06-26",
            "2020-06-27",
            "2020-06-28",
            "2020-06-29",
            "2020-06-30",

            "2020-07-01",
            "2020-07-02",
            "2020-07-03",
            "2020-07-04",
            "2020-07-05",
            "2020-07-06",
            "2020-07-07",
            "2020-07-08",
            "2020-07-09",
            "2020-07-10",
            "2020-07-11",
            "2020-07-12",
            "2020-07-13",
            "2020-07-14",
            "2020-07-15",
            "2020-07-16",
            "2020-07-17",
            "2020-07-18",
            "2020-07-19",
            "2020-07-20",
            "2020-07-21",
            "2020-07-22",
            "2020-07-23",
            "2020-07-24",
            "2020-07-25",
            "2020-07-26",
            "2020-07-27",
            "2020-07-28",
            "2020-07-29",
            "2020-07-30",

            "2020-08-01",
            "2020-08-02",
            "2020-08-03",
            "2020-08-04",
            "2020-08-05",
            "2020-08-06",
            "2020-08-07",
            "2020-08-08",
            "2020-08-09",
            "2020-08-10",
            "2020-08-11",
            "2020-08-12",
            "2020-08-13",
            "2020-08-14",
            "2020-08-15",
            "2020-08-16",
            "2020-08-17",
            "2020-08-18",
            "2020-08-19",
            "2020-08-20",
            "2020-08-21",
            "2020-08-22",
            "2020-08-23",
            "2020-08-24",
            "2020-08-25",
            "2020-08-26",
            "2020-08-27",
            "2020-08-28",
            "2020-08-29",
            "2020-08-30",
          ],
          datasets: [
            
            {
              label: "Wells Fargo",
              fill: false,
              backgroundColor: "#40CCF9",
              // backgroundColor: "rgba(255,255,255,.8)",
              pointBackgroundColor: "#40CCF9",
              borderColor: "#40CCF9",
              pointHighlightStroke: "#40CCF9",
              borderCapStyle: "butt",
              data: [
                {x: '2019-09-01', y: 70000},
                {x: '2019-10-01', y: 80500},
                {x: '2019-11-01', y: 90000},
                {x: '2019-12-01', y: 100000},
                {x: '2020-01-01', y: 110000},
                {x: '2020-02-01', y: 120000},
                {x: '2020-03-01', y: 130000},
                {x: '2020-04-01', y: 140000},
                {x: '2020-05-01', y: 160000},
                {x: '2020-06-01', y: 160000},
                {x: '2020-07-01', y: 170000},
                {x: '2020-08-01', y: 180000},
                {x: '2020-08-30', y: 180000},
              ],
            },

            {
              label: "Bank of America",
              fill: true,
              backgroundColor: "#FFD35A",
              // backgroundColor: "rgba(255,255,255,.8)",
              pointBackgroundColor: "#FFD35A",
              borderColor: "#FFD35A",
              pointHighlightStroke: "#FFD35A",
              borderCapStyle: "butt",
              data: [
                70000,
                69500,
                69400,
                69600,
                68500,

                50000,
                59500,
                59400,
                59600,
                58500,
                50000,
                59500,
                59400,
                59600,
                58500,
                50000,
                59500,
                59400,
                59600,
                58500,
                50000,
                59500,
                59400,
                59600,
                58500,
                50000,
                59500,
                59400,
                59600,
                58500,

                80000,
                79500,
                79400,
                79600,
                78500,

                65000,
                69500,
                69400,
                69600,
                68500,
                60000,
                69500,
                69400,
                69600,
                68500,
                60000,
                69500,
                69400,
                69600,
                68500,
                60000,
                69500,
                69400,
                69600,
                68500,
                60000,
                69500,
                69400,
                69600,
                68500,

                90000,
                89500,
                89400,
                89600,
                88500,

                80000,
                79500,
                79400,
                79600,
                78500,
                75000,
                79500,
                79400,
                79600,
                78500,
                75000,
                79500,
                79400,
                79600,
                78500,
                75000,
                79500,
                79400,
                79600,
                78500,
                75000,
                79500,
                79400,
                79600,
                78500,

                100000,
                99500,
                99400,
                99600,
                98500,

                90000,
                89500,
                89400,
                89600,
                88500,
                86000,
                89500,
                89400,
                89600,
                88500,
                86000,
                89500,
                89400,
                89600,
                88500,
                86000,
                89500,
                89400,
                89600,
                88500,
                86000,
                89500,
                89400,
                89600,
                88500,

                110000,
                109500,
                109400,
                109600,
                108500,

                100000,
                99500,
                99400,
                99600,
                98500,
                96000,
                99500,
                99400,
                99600,
                98500,
                96000,
                99500,
                99400,
                99600,
                98500,
                96000,
                99500,
                99400,
                99600,
                98500,
                96000,
                99500,
                99400,
                99600,
                98500,

                120000,
                119500,
                119400,
                119600,
                118500,

                110000,
                109500,
                109400,
                109600,
                108500,
                106000,
                109500,
                109400,
                109600,
                108500,
                106000,
                109500,
                109400,
                109600,
                108500,
                106000,
                109500,
                109400,
                109600,
                108500,
                106000,
                109500,
                109400,
                109600,
                108500,

                130000,
                129500,
                129400,
                129600,
                128500,

                120000,
                119500,
                119400,
                119600,
                118500,
                116000,
                119500,
                119400,
                119600,
                118500,
                116000,
                119500,
                119400,
                119600,
                118500,
                116000,
                119500,
                119400,
                119600,
                118500,
                116000,
                119500,
                119400,
                119600,
                118500,

                140000,
                139500,
                139400,
                139600,
                138500,

                130000,
                129500,
                129400,
                129600,
                128500,
                126000,
                129500,
                129400,
                129600,
                128500,
                126000,
                129500,
                129400,
                129600,
                128500,
                126000,
                129500,
                129400,
                129600,
                128500,
                126000,
                129500,
                129400,
                129600,
                128500,

                150000,
                159500,
                159400,
                159600,
                158500,

                150000,
                139500,
                139400,
                139600,
                138500,
                136000,
                139500,
                139400,
                139600,
                138500,
                136000,
                139500,
                139400,
                139600,
                138500,
                136000,
                139500,
                139400,
                139600,
                138500,
                136000,
                139500,
                139400,
                139600,
                138500,

                160000,
                159500,
                159400,
                159600,
                158500,

                150000,
                149500,
                149400,
                149600,
                148500,
                146000,
                149500,
                149400,
                149600,
                148500,
                146000,
                149500,
                149400,
                149600,
                148500,
                146000,
                149500,
                149400,
                149600,
                148500,
                146000,
                149500,
                149400,
                149600,
                148500,

                170000,
                169500,
                169400,
                169600,
                168500,

                160000,
                159500,
                159400,
                159600,
                158500,
                156000,
                159500,
                159400,
                159600,
                158500,
                156000,
                159500,
                159400,
                159600,
                158500,
                156000,
                159500,
                159400,
                159600,
                158500,
                156000,
                159500,
                159400,
                159600,
                158500,

                180000,
                179500,
                179400,
                179600,
                178500,

                170000,
                169500,
                169400,
                169600,
                168500,
                166000,
                169500,
                169400,
                169600,
                168500,
                166000,
                169500,
                169400,
                169600,
                168500,
                166000,
                169500,
                169400,
                169600,
                168500,
                166000,
                169500,
                169400,
                169600,
                168500,
              ],
            },

          ],
        },
        options: {
          borderWidth: 0,
          pointRadius: 0,
          showPoints: false,
          showLine: false,
          stacked: true,
          tooltips: { enabled: false },
          responsive: true,
          maintainAspectRatio: false,
          // legendCallback: function (chart) {
          //   for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
          //     console.log(chart.data.labels[i]);
          //     // return `<p><span class="lineLegend"></span>${chart.data.labels[0]}</p>`;
          //   }
          //   return 'legend'
          // },
          line: {
            borderWidth: 0,
            showLine: false,
          },
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
                  beginAtZero: false,
                  fontColor: "black",
                  max: 200000,
                  callback: function (value, index, values) {
                    if (value > -1) {
                      return `$${Intl.NumberFormat("en-US", {
                        maximumSignificantDigits: 3,
                      }).format(Math.abs(value))}`;
                    }
                  },
                },
                stacked: false,
                display: true,
              },
            ],
            xAxes: [
              {
                type: "time",
                time: {
                  unit: "month",
                },
                beginAtZero: true,
                ticks: {
                  steps: 12,
                  reverse: false,
                  beginAtZero: true,
                  stacked: true,
                },
                display: true,
                stacked: true,
                scaleLabel: {
                  display: true,
                },
              },
            ],
          },
          animation: {
            duration: 750,
          },
        },
      },

      activeContentType: "bar",
      oldActiveContentTypeIndex: 0,
      currentActiveContentTypeIndex: 0,

      activeTrendType: "plus_minus",
      oldActiveTrendTypeIndex: 0,
      currentActiveTrendTypeIndex: 0,

      budget: true,
      options: false,
    };
  },
  methods: {
    getContentTypeAnimationClass(index) {
      let animationClass = "";
      if (
        this.currentActiveContentTypeIndex === index &&
        this.oldActiveContentTypeIndex < index
      ) {
        animationClass = "slide-left";
      } else if (
        this.currentActiveContentTypeIndex === index &&
        this.oldActiveContentTypeIndex > index
      ) {
        animationClass = "slide-right";
      } else if (this.currentActiveContentTypeIndex < index) {
        animationClass = "slide-left";
      } else if (this.currentActiveContentTypeIndex > index) {
        animationClass = "slide-right";
      }
      return animationClass;
    },
    showContentTypeTab(name) {
      const tabWrapper = this.$refs.charts__type__wrapper;
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (name != this.activeContentType) {
        this.oldActiveContentTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveContentTypeIndex = event.target.dataset.index;
        const currentActiveContentTypeIndex = event.target.dataset.index;

        setTimeout(() => {
          this.currentActiveContentTypeIndex = currentActiveContentTypeIndex;
          this.activeContentType = name;
        }, 500);
      } else {
        this.oldActiveContentTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveContentTypeIndex = 0;

        setTimeout(() => {
          this.currentActiveContentTypeIndex = 0;
          this.activeContentType = "bar";
        }, 500);
      }
    },

    getTrendTypeAnimationClass(index) {
      let animationClass = "";
      if (
        this.currentActiveTrendTypeIndex === index &&
        this.oldActiveTrendTypeIndex < index
      ) {
        animationClass = "slide-left";
      } else if (
        this.currentActiveTrendTypeIndex === index &&
        this.oldActiveTrendTypeIndex > index
      ) {
        animationClass = "slide-right";
      } else if (this.currentActiveTrendTypeIndex < index) {
        animationClass = "slide-left";
      } else if (this.currentActiveTrendTypeIndex > index) {
        animationClass = "slide-right";
      }
      return animationClass;
    },

    showTrendTypeTab(name) {
      const tabWrapper = this.$refs.charts__trend__type__wrapper;
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (name != this.activeTrendType) {
        this.oldActiveTrendTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveTrendTypeIndex = event.target.dataset.index;
        const currentActiveTrendTypeIndex = event.target.dataset.index;

        setTimeout(() => {
          this.currentActiveTrendTypeIndex = currentActiveTrendTypeIndex;
          this.activeTrendType = name;
        }, 500);
      } else {
        this.oldActiveTrendTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveTrendTypeIndex = 0;

        setTimeout(() => {
          this.currentActiveTrendTypeIndex = 0;
          this.activeTrendType = "plus_minus";
        }, 500);
      }
    },
    expand(event) {
      // const dropdown = event.target.nextElementSibling;
      const dropdown = event.target.parentElement;
      dropdown.classList.toggle("expand");
      if (dropdown.classList.contains("expand")) {
        event.target.classList.add("rounded-t-full");
        event.target.classList.remove("rounded-full");
      } else {
        event.target.classList.remove("rounded-t-full");
        event.target.classList.add("rounded-full");
      }
      // const targetDropdown = event.target.parentElement;
      // targetDropdown.classList.toggle("expand");
    },
  },
};
</script>

<style lang="scss" scoped>
.charts__type__tabs,
.charts__trend__type__tabs {
  .tab {
    @apply relative overflow-hidden;
    transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
    > span {
      position: relative;
      transition: color 0.5s ease-in-out;
      z-index: 10;
      @apply text-orange-900;
    }
    .background__circle {
      top: 0px;
      left: 0px;
      // transform: translateX(-101%);
      // -ms-transform: translateX(-101%); /* IE 9 */
      // -webkit-transform: translateX(-101%);
      transition: transform 0.5s ease-in-out;
      z-index: 1;
      @apply absolute h-full w-full rounded-full inline-block bg-orange-900 text-gray-dark;
      &.slide-left {
        transform: translateX(-101%);
        -ms-transform: translateX(-101%); /* IE 9 */
        -webkit-transform: translateX(-101%);
      }
      &.slide-right {
        transform: translateX(101%);
        -ms-transform: translateX(101%); /* IE 9 */
        -webkit-transform: translateX(101%);
      }
    }

    &.active {
      > span {
        @apply text-white;
      }
      .background__circle {
        transform: translateX(0%);
        -ms-transform: translateX(0%); /* IE 9 */
        -webkit-transform: translateX(0%);
      }
    }
  }
}

// dropdown menu
.dropdown {
  button {
    outline: none;
  }
  .dropdown-icon {
    pointer-events: none;
  }
  .dropdown__menu {
    @apply w-full rounded-b-3xl;
    overflow-y: auto;
    /* this will hide the scrollbar in mozilla based browsers */
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
    /* this will hide the scrollbar in internet explorers */
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none; /* Firefox 64 */
    max-height: 0;
    // transform: scaleY(0);
    transform-origin: top;
    z-index: 100;
    transition: transform 0.5s linear, max-height 0.5s linear;
    @apply px-4 text-gray-100;
  }

  &.expand {
    .dropdown__menu {
      max-height: 200px;
      // transform:scaleY(1);
    }
    .dropdown-icon {
      transform: rotate(180deg) !important;
    }
  }
}
</style>