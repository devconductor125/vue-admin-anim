<template>
  <div>
    <div class="flex justify-between">
      <div
        ref="cashflow__content__wrapper"
        class="cashflow__content__tabs w-64 rounded-full font-bold bg-white grid grid-flow-col grid-cols-2 justify-between mb-2"
      >
        <div
          :class="activeComponent === 'cost-cumulative' ? 'active' : ''"
          class="tab cursor-pointer rounded-full text-center py-1"
          @click="showContentTab('cost-cumulative')"
          data-index="0"
        >
          <span class="pointer-events-none">Cumulative</span>

          <span
            class="background__circle pointer-events-none"
            :class="getAnimationClass(0)"
          ></span>
        </div>
        <div
          :class="activeComponent === 'cost-rate' ? 'active' : ''"
          class="tab cursor-pointer rounded-full text-center py-1"
          @click="showContentTab('cost-rate')"
          data-index="1"
        >
          <span class="pointer-events-none">Rate</span>

          <span
            class="background__circle pointer-events-none"
            :class="getAnimationClass(1)"
          ></span>
        </div>
      </div>
      <div
        ref="cashflow__type__wrapper"
        class="cashflow__type__tabs w-64 rounded-full font-bold bg-white grid grid-flow-col grid-cols-2 justify-between mb-2"
      >
        <div
          :class="activeType === 'graph' ? 'active' : ''"
          class="tab cursor-pointer rounded-full text-center py-1"
          @click="showTypeTab('graph')"
          data-index="0"
        >
          <span class="pointer-events-none">Graph</span>

          <span
            class="background__circle pointer-events-none"
            :class="getTypeAnimationClass(0)"
          ></span>
        </div>

        <div
          :class="activeType === 'list' ? 'active' : ''"
          class="tab cursor-pointer rounded-full text-center py-1"
          @click="showTypeTab('list')"
          data-index="1"
        >
          <span class="pointer-events-none">List</span>

          <span
            class="background__circle pointer-events-none"
            :class="getTypeAnimationClass(1)"
          ></span>
        </div>
      </div>
    </div>
    <component :is="activeComponent"></component>
  </div>
</template>

<script>
import CostChart from "@/components/charts/CostChart";
import CostRate from "@/components/reports/cashflow/cost-value/CostRate";
import CostCumulative from "@/components/reports/cashflow/cost-value/CostCumulative";
import SwitchButton from "@/components/forms/SwitchButton";
import CashflowMenu from "@/components/layouts/CashflowMenu";
import BalanceDropdown from "@/components/layouts/BalanceDropdown";

export default {
  components: {
    CostChart,
    CostRate,
    CostCumulative,
    SwitchButton,
    CashflowMenu,
    BalanceDropdown,
  },

  data() {
    return {
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
          ],
          datasets: [
            {
              label: "Net Value",
              fill: true,
              backgroundColor: "#FCBB0A",
              backgroundColor: "rgba(255,255,255,.5)",
              pointBackgroundColor: "#59A7C4",
              borderColor: "#59A7C4",
              pointHighlightStroke: "#59A7C4",
              borderCapStyle: "butt",
              stacked: true,
              beginAtZero: true,
              data: [-200, 200, 230, -100, -200, 190, 220, 350, 180, -200, 0],
              options: {
                legend: {
                  position: "bottom",
                  align: "center",
                  labels: {
                    fontSize: 15,
                    boxWidth: 12,
                  },
                },
                scales: {
                  yAxes: [
                    {
                      stacked: true,
                    },
                  ],
                  xAxes: [
                    {
                      stacked: true,
                    },
                  ],
                },
              },
            },
            // {
            //   label: "Net Negative",
            //   backgroundColor: "#FCBB0A",
            //   pointBackgroundColor: "#FCBB0A",
            //   borderColor: "#FCBB0A",
            //   pointHighlightStroke: "#FCBB0A",
            //   borderCapStyle: "butt",
            //   borderWidth: 0,
            //   stacked: true,
            //   spanGaps: true,
            //   beginAtZero: true,
            //   data: [-200, 0, 0, -100, -200, 0, 0, 0, 0, -400, 0],
            //   options: {
            //     legend: {
            //       position: "bottom",
            //       align: "center",
            //       labels: {
            //         fontSize: 15,
            //         boxWidth: 12,
            //       },
            //     },
            //     scales: {
            //       yAxes: [
            //         {
            //           stacked: true,
            //         },
            //       ],
            //       xAxes: [
            //         {
            //           stacked: true,
            //         },
            //       ],
            //     },
            //   },
            // },
            // {
            //   label: "Net Poistive",
            //   backgroundColor: "#7DE893",
            //   pointBackgroundColor: "#7DE893",
            //   borderColor: "#7DE893",
            //   pointHighlightStroke: "#7DE893",
            //   borderCapStyle: "butt",
            //   // cubicInterpolationMode: 'monotone',
            //   borderWidth: 0,
            //   stacked: true,
            //   spanGaps: true,
            //   beginAtZero: true,
            //   data: [0, 200, 230, 0, 0, 190, 220, 350, 180, 0, 0],
            //   stacked: true,
            //   options: {
            //     legend: {
            //       position: "bottom",
            //       align: "center",
            //       labels: {
            //         fontSize: 15,
            //         boxWidth: 12,
            //       },
            //     },
            //     scales: {
            //       yAxes: [
            //         {
            //           stacked: true,
            //         },
            //       ],
            //       xAxes: [
            //         {
            //           stacked: true,
            //         },
            //       ],
            //     },
            //   },
            // },
            {
              label: "Income",
              backgroundColor: "#3DBB61",
              pointBackgroundColor: "#3DBB61",
              borderColor: "#3DBB61",
              pointHighlightStroke: "#3DBB61",
              borderCapStyle: "butt",
              borderWidth: 0,
              data: [200, 300, 400, 450, 300, 480, 550, 150, 600, 800, 700],
            },
            {
              label: "Expenses",
              backgroundColor: "#D93535",
              pointBackgroundColor: "#D93535",
              borderColor: "#D93535",
              pointHighlightStroke: "#D93535",
              borderCapStyle: "butt",
              borderWidth: 0,
              options: {
                legend: {
                  position: "bottom",
                  align: "center",
                  labels: {
                    fontSize: 15,
                    boxWidth: 12,
                  },
                },
                scales: {
                  yAxes: [
                    {
                      stacked: true,
                    },
                  ],
                  xAxes: [
                    {
                      stacked: true,
                    },
                  ],
                },
              },
              stacked: true,
              beginAtZero: true,
              data: [
                -150,
                -250,
                -330,
                -320,
                -400,
                -350,
                -420,
                -420,
                -450,
                -500,
                -520,
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
                  beginAtZero: true,
                  max: 1000,
                  min: -1000,
                  fontColor: "black",

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
                stacked: true,
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
                  reverse: false,
                  beginAtZero: true,
                },
                display: true,
                stacked: true,
                scaleLabel: {
                  display: true,
                },
              },
              // {
              //   id: "cash-flow",
              //   display: false,
              //   stacked: true,
              //   scaleLabel: {
              //     display: false,
              //   },
              //   ticks: {
              //     beginAtZero: true,
              //   },
              // },
            ],
          },
          animation: {
            duration: 750,
          },
        },
      },

      activeComponent: "cost-cumulative",
      activeOldIndex: 0,
      activeCurrentIndex: 0,

      activeType: "graph",
      oldActiveTypeIndex: 0,
      currentActiveTypeIndex: 0,

      budget: true,
      options: false,
    };
  },
  methods: {
    collapse() {
      this.$refs["router-view"].classList.toggle("lg:ml-72");
    },
    getAnimationClass(index) {
      let animationClass = "";
      if (this.activeCurrentIndex === index && this.activeOldIndex < index) {
        animationClass = "slide-left";
      } else if (
        this.activeCurrentIndex === index &&
        this.activeOldIndex > index
      ) {
        animationClass = "slide-right";
      } else if (this.activeCurrentIndex < index) {
        animationClass = "slide-left";
      } else if (this.activeCurrentIndex > index) {
        animationClass = "slide-right";
      }
      return animationClass;
    },
    showContentTab(name) {
      const tabWrapper = this.$refs.cashflow__content__wrapper;
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (name != this.activeComponent) {
        this.activeOldIndex = oldActiveTab.dataset.index;
        // this.activeCurrentIndex = event.target.dataset.index;
        const activeCurrentIndex = event.target.dataset.index;

        setTimeout(() => {
          this.activeCurrentIndex = activeCurrentIndex;
          this.activeComponent = name;
        }, 500);
      } else {
        this.activeOldIndex = oldActiveTab.dataset.index;
        // this.activeCurrentIndex = 0;

        setTimeout(() => {
          this.activeCurrentIndex = 0;
          this.activeComponent = "cost-cumulative";
        }, 500);
      }
    },

    getTypeAnimationClass(index) {
      let animationClass = "";
      if (
        this.currentActiveTypeIndex === index &&
        this.oldActiveTypeIndex < index
      ) {
        animationClass = "slide-left";
      } else if (
        this.currentActiveTypeIndex === index &&
        this.oldActiveTypeIndex > index
      ) {
        animationClass = "slide-right";
      } else if (this.currentActiveTypeIndex < index) {
        animationClass = "slide-left";
      } else if (this.currentActiveTypeIndex > index) {
        animationClass = "slide-right";
      }
      return animationClass;
    },
    showTypeTab(name) {
      const tabWrapper = this.$refs.cashflow__type__wrapper;
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (name != this.activeType) {
        this.oldActiveTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveTypeIndex = event.target.dataset.index;
        const currentActiveTypeIndex = event.target.dataset.index;

        setTimeout(() => {
          this.currentActiveTypeIndex = currentActiveTypeIndex;
          this.activeType = name;
        }, 500);
      } else {
        this.oldActiveTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveTypeIndex = 0;

        setTimeout(() => {
          this.currentActiveTypeIndex = 0;
          this.activeContentType = "graph";
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
.doughnut__chart,
.line__chart {
  max-height: 200px;
}

// Tabs menu
.cashflow__content__tabs,
.cashflow__type__tabs {
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

.slideIn-enter-active,
.slideIn-leave-active {
  transition: opacity 0.6s ease-out, transform 0.6s ease-in;
}

.slideIn-enter,
.slideIn-leave-to {
  opacity: 0.3;
  transform: translateX(100%);
}

.slideIn-enter-to,
.slideIn-leave {
  opacity: 1;
  transform: translateX(0);
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