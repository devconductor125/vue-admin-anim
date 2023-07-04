<template>
  <div class="card flex-grow bg-white">
    <div class="card__title flex text-center gap-4">
      <div
        ref="charts__type__wrapper"
        class="charts__type__tabs rounded-full font-bold bg-orange-light grid grid-flow-col grid-cols-3 w-full justify-between"
      >
        <div
          :class="activeContentType === 'bar' ? 'active' : ''"
          class="tab cursor-pointer rounded-full text-center py-1"
          @click="showContentTypeTab('bar')"
          data-index="0"
        >
          <span class="pointer-events-none">Bar</span>

          <span
            class="background__circle pointer-events-none"
            :class="getContentTypeAnimationClass(0)"
          ></span>
        </div>
        <div
          :class="activeContentType === 'waterfall' ? 'active' : ''"
          class="tab cursor-pointer rounded-full text-center py-1"
          @click="showContentTypeTab('waterfall')"
          data-index="1"
        >
          <span class="pointer-events-none">Waterfall</span>

          <span
            class="background__circle pointer-events-none"
            :class="getContentTypeAnimationClass(1)"
          ></span>
        </div>

        <div
          :class="activeContentType === 'candlestick' ? 'active' : ''"
          class="tab cursor-pointer rounded-full text-center py-1"
          @click="showContentTypeTab('candlestick')"
          data-index="3"
        >
          <span class="pointer-events-none">Candlestick</span>

          <span
            class="background__circle pointer-events-none"
            :class="getContentTypeAnimationClass(2)"
          ></span>
        </div>
      </div>
      <div
        ref="charts__trend__type__wrapper"
        class="charts__trend__type__tabs rounded-full font-bold bg-orange-light grid grid-flow-col grid-cols-2 w-full justify-between"
      >
        <div
          :class="activeTrendType === 'plus_minus' ? 'active' : ''"
          class="tab cursor-pointer rounded-full text-center py-1"
          @click="showTrendTypeTab('plus_minus')"
          data-index="0"
        >
          <!-- <span class="pointer-events-none"><i class="fa fa-plus"></i>/<i class="fa fa-minus"></i></span> -->
          <span
            class="pointer-events-none font-bold"
            style="font-size: 1.25rem; line-height: 1.25rem"
            >+ / -</span
          >

          <span
            class="background__circle pointer-events-none"
            :class="getTrendTypeAnimationClass(0)"
          ></span>
        </div>

        <div
          :class="activeTrendType === 'trend' ? 'active' : ''"
          class="tab cursor-pointer rounded-full text-center py-1"
          @click="showTrendTypeTab('trend')"
          data-index="1"
        >
          <span class="pointer-events-none">Trend</span>

          <span
            class="background__circle pointer-events-none"
            :class="getTrendTypeAnimationClass(1)"
          ></span>
        </div>
      </div>
      <div class="switch text-green-default font-bold py-1">
        <switch-button v-model="budget" color="#3DBB61" background="#AEDEBC"
          >Budget</switch-button
        >
      </div>
    </div>
    <div class="card__body text-center relative w-full">
      <AnalyzeChart
        :data="balance.data"
        :options="balance.options"
      ></AnalyzeChart>
    </div>

    <div class="card__footer flex items-start text-sm flex-wrap font-sans mt-5">
      <radio-button name="chart-filter" background="#805124">
        Current
      </radio-button>
      <radio-button name="chart-filter" background="#805124">
        1 Month
      </radio-button>
      <radio-button name="chart-filter" background="#805124" :checked="true">
        6 Months
      </radio-button>
      <radio-button name="chart-filter" background="#805124">Ytd</radio-button>
      <radio-button name="chart-filter" background="#805124">
        1 Year
      </radio-button>
      <radio-button name="chart-filter" background="#805124">
        3 Years
      </radio-button>
      <radio-button name="chart-filter" background="#805124">
        5 Years
      </radio-button>
      <radio-button name="chart-filter" background="#805124">
        Maximum
      </radio-button>
      <radio-button name="chart-filter" background="#805124">
        <span>Date Range <i class="fas fa-calendar-alt"></i> </span>
      </radio-button>

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
import AnalyzeChart from "@/components/charts/AnalyzeChart";
import SwitchButton from "@/components/forms/SwitchButton";

export default {
  components: {
    AnalyzeChart,
    SwitchButton,
  },

  data() {
    return {
      chartLegend: null,
      balance: {
        data: {
          labels: [
            "Sep",
            "oct",
            "Nov",
            "Dec",
            2020,
            "Feb",
            "Mar",
            "Apr",
            "May",
            "jun",
            "Jul",
            "Aug",
          ],
          datasets: [
            {
              order: 1,
              type: "line",
              label: "Budget",
              fill: false,
              backgroundColor: "rgba(235,172,0,.8)",
              // backgroundColor: "#7DE893",
              pointBackgroundColor: "#7DE893",
              borderColor: "#7DE893",
              pointHighlightStroke: "#7DE893",
              borderCapStyle: "butt",
              // stacked: true,
              data: [
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
              ],
              pointRadius: 0,
              options: {
                legend: {
                  position: "bottom",
                  align: "center",
                  labels: {
                    fontSize: 15,
                    boxWidth: 12,
                  },
                },
              },
            },
            {
              order: 2,
              type: "line",
              label: "Cashflow",
              backgroundColor: "rgba(235,172,0,.8)",
              // backgroundColor: "#FCBB0A",
              pointBackgroundColor: "#FCBB0A",
              borderColor: "#FCBB0A",
              pointHighlightStroke: "#FCBB0A",
              borderCapStyle: "butt",
              fill: false,
              // stacked: true,
              data: [
                200,
                -100,
                130,
                200,
                230,
                -130,
                320,
                500,
                200,
                300,
                200,
                230,
              ],
              beginAtZero: true,
              lineTension: 0,
              options: {
                legend: {
                  position: "bottom",
                  align: "center",
                  labels: {
                    fontSize: 15,
                    boxWidth: 12,
                  },
                },
              },
            },
            {
              label: "Income",
              fill: true,
              // backgroundColor: "#3DBB61",
              backgroundColor: "rgba(61, 187, 97, 0.8)",
              pointBackgroundColor: "rgba(26,199,75,.8)",
              // pointBackgroundColor: "#3DBB61",
              borderColor: "#3DBB61",
              pointHighlightStroke: "#3DBB61",
              borderCapStyle: "butt",
              data: [
                200,
                400,
                500,
                550,
                300,
                480,
                650,
                150,
                800,
                200,
                200,
                520,
              ],
              // data: [[20, -20], [40, -40], [50, -50], [55, -55], [30, -30], [48, -48], [65, -65], [15, -15], [80, -80], [20, -20], [-30, 30]],
              order: 3,
            },
            {
              label: "Expenses",
              fill: true,
              // backgroundColor: "#D93535",
              backgroundColor: "rgba(217, 53, 53, 0.8)",
              pointBackgroundColor: "rgba(242, 46, 46, .8)",
              // pointBackgroundColor: "#D93535",
              borderColor: "#D93535",
              pointHighlightStroke: "#D93535",
              borderCapStyle: "butt",
              data: [
                -150,
                -450,
                -530,
                -220,
                -50,
                -250,
                -300,
                -220,
                -320,
                -150,
                -150,
                -520,
              ],
              order: 4,
            },
          ],
        },
        
        options: {
          bezierCurve: true,
          tooltips: { enabled: false },
          responsive: true,
          maintainAspectRatio: false,
          // legendCallback: function (chart) {
          //   for (const i = 0; i < chart.data.datasets[0].data.length; i++) {
          //     console.log(chart.data.labels[i]);
          //     // return `<p><span class="lineLegend"></span>${chart.data.labels[0]}</p>`;
          //   }
          //   return 'legend'
          // },
          legendCallback: function (chart) {
            let text = [];
            text.push("<ul>");
            for (const i = 0; i < chart.data.datasets.length; i++) {
              console.log(chart.data.datasets[i]); // see what's inside the obj.
              text.push("<li>");
              text.push(
                '<span style="background-color:' +
                  chart.data.datasets[i].borderColor +
                  '">' +
                  chart.data.datasets[i].label +
                  "</span>"
              );
              text.push("</li>");
            }
            text.push("</ul>");
            return text.join("");
          },
          legend: {
            display: true,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li class="chapter__item"><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
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
                  max: 1000,
                  min: -1000,
                  // fontColor: function(value, index, values) {
                  //   if (value > -1) {
                  //     return '12px Roboto black';
                  //   } else {
                  //     return '12px Roboto red';
                  //   }
                  // },

                  callback: function (value, index, values) {
                    if (value > -1) {
                      return `$${Intl.NumberFormat("en-US", {
                        maximumSignificantDigits: 3,
                      }).format(Math.abs(value))}`;
                    }
                    return `($${Intl.NumberFormat("en-US", {
                      maximumSignificantDigits: 3,
                    }).format(Math.abs(value))})`;
                  },
                },
                display: true,
                // Include a dollar sign in the ticks
              },
              // {
              //   id: "timeline",
              //   stacked: false,
              //   display: false,
              //   ticks: {
              //     beginAtZero: true,
              //   },
              // },
            ],
            xAxes: [
              {
                ticks: {
                  backgroundColor: "red",
                  color: "red",
                  fontColor: "#000",
                  reverse: false,
                  beginAtZero: true,
                },
                fill: true,
                backgroundColor: "red",
                color: "red",
                fontColor: "#000",
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
          chartArea: {
            backgroundColor: "rgb(255, 201, 201)",
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
    setLegend (html) {
        this.chartLegend = html
    },
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