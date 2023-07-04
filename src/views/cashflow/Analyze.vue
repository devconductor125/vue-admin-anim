<template>
  <div>
    <!-- <div class="flex flex-col lg:flex-row">
      <balance-dropdown @expand="collapse"></balance-dropdown>
      <div class="flex-grow flex justify-center">
        <cashflow-menu></cashflow-menu>
      </div>
    </div>
    <div class="mt-4 router-view" ref="router-view"> -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      <div class="lg:col-span-2 flex flex-col">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-4 text-white font-medium"
        >
          <div
            ref="cashflow__content__wrapper"
            class="cashflow__content__tabs rounded-full font-bold bg-white grid grid-flow-col grid-cols-2 w-full justify-between"
          >
            <div
              :class="activeComponent === 'flow' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1"
              @click="showContentTab('flow')"
              data-index="0"
            >
              <span class="pointer-events-none">Flow</span>

              <span
                class="background__circle pointer-events-none"
                :class="getAnimationClass(0)"
              ></span>
            </div>
            <div
              :class="activeComponent === 'balance' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1"
              @click="showContentTab('balance')"
              data-index="1"
            >
              <span class="pointer-events-none">Balance</span>

              <span
                class="background__circle pointer-events-none"
                :class="getAnimationClass(1)"
              ></span>
            </div>
          </div>

          <div class="dropdown relative">
            <button
              class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500"
              @click.self="expand($event)"
            >
              <span class="pointer-events-none">Month</span>
              <i
                class="fas fa-caret-down dropdown-icon pointer-events-none self-center"
              ></i>
            </button>
            <div class="dropdown__menu absolute bg-orange-900">
              <ul>
                <li>July</li>
                <li>June</li>
                <li>May</li>
                <li>April</li>
                <li>March</li>
              </ul>
            </div>
          </div>

          <div
            ref="cashflow__type__wrapper"
            class="cashflow__type__tabs rounded-full font-bold bg-white grid grid-flow-col grid-cols-2 w-full justify-between"
          >
            <div
              :class="activeContentType === 'normal' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1"
              @click="showTypeTab('normal')"
              data-index="0"
            >
              <span class="pointer-events-none">Normal</span>

              <span
                class="background__circle pointer-events-none"
                :class="getTypeAnimationClass(0)"
              ></span>
            </div>

            <div
              :class="activeContentType === 'adjusted' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1"
              @click="showTypeTab('adjusted')"
              data-index="1"
            >
              <span class="pointer-events-none">Adjusted</span>

              <span
                class="background__circle pointer-events-none"
                :class="getTypeAnimationClass(1)"
              ></span>
            </div>
          </div>
        </div>

        <div class="card flex-grow bg-white">
          <div class="card__title flex text-center gap-4">
            <div
              ref="charts__content__wrapper"
              class="chart__content__tabs rounded-full font-bold bg-orange-light grid grid-flow-col grid-cols-3 w-full justify-between"
            >
              <div
                :class="activeChartContent === 'bar' ? 'active' : ''"
                class="tab cursor-pointer rounded-full text-center py-1"
                @click="showChartContentTab('bar')"
                data-index="0"
              >
                <span class="pointer-events-none">Bar</span>

                <span
                  class="background__circle pointer-events-none"
                  :class="getChartContentAnimationClass(0)"
                ></span>
              </div>
              <div
                :class="activeChartContent === 'waterfall' ? 'active' : ''"
                class="tab cursor-pointer rounded-full text-center py-1"
                @click="showChartContentTab('waterfall')"
                data-index="1"
              >
                <span class="pointer-events-none">Waterfall</span>

                <span
                  class="background__circle pointer-events-none"
                  :class="getChartContentAnimationClass(1)"
                ></span>
              </div>

              <div
                :class="activeChartContent === 'candlestick' ? 'active' : ''"
                class="tab cursor-pointer rounded-full text-center py-1"
                @click="showChartContentTab('candlestick')"
                data-index="3"
              >
                <span class="pointer-events-none">Candlestick</span>

                <span
                  class="background__circle pointer-events-none"
                  :class="getChartContentAnimationClass(2)"
                ></span>
              </div>
            </div>
            <div
              ref="chart__trend__type__wrapper"
              class="chart__trend__type__tabs rounded-full font-bold bg-orange-light grid grid-flow-col grid-cols-2 w-full justify-between"
            >
              <div
                :class="activeChartTrendType === 'plus_minus' ? 'active' : ''"
                class="tab cursor-pointer rounded-full text-center py-1"
                @click="showChartTrendTypeTab('plus_minus')"
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
                  :class="getChartTrendTypeAnimationClass(0)"
                ></span>
              </div>

              <div
                :class="activeChartTrendType === 'trend' ? 'active' : ''"
                class="tab cursor-pointer rounded-full text-center py-1"
                @click="showChartTrendTypeTab('trend')"
                data-index="1"
              >
                <span class="pointer-events-none">Trend</span>

                <span
                  class="background__circle pointer-events-none"
                  :class="getChartTrendTypeAnimationClass(1)"
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
          <div
            class="card__footer flex items-start text-sm flex-wrap font-sans mt-5"
          >
            <radio-button name="chart-filter">Current</radio-button>
            <radio-button name="chart-filter">1 Month</radio-button>
            <radio-button name="chart-filter">6 Months</radio-button>
            <radio-button name="chart-filter">Ytd</radio-button>
            <radio-button name="chart-filter">1 Year</radio-button>
            <radio-button name="chart-filter">3 Years</radio-button>
            <radio-button name="chart-filter">5 Years</radio-button>
            <radio-button name="chart-filter">Maximum</radio-button>
            <radio-button name="chart-filter"
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
      </div>
      <!-- Composition -->
      <div class="lg:col-span-1 flex flex-col">
        <div
          ref="cashflow__gridtype__wrapper"
          class="cashflow__type__tabs rounded-full font-bold bg-white grid grid-flow-col grid-cols-2 w-full justify-between mb-4"
        >
          <div
            :class="activeGridType === 'graph' ? 'active' : ''"
            class="tab cursor-pointer rounded-full text-center py-1"
            @click="showGridTypeTab('graph')"
            data-index="0"
          >
            <span class="pointer-events-none">Graph</span>

            <span
              class="background__circle pointer-events-none"
              :class="getGridTypeAnimationClass(0)"
            ></span>
          </div>

          <div
            :class="activeGridType === 'list' ? 'active' : ''"
            class="tab cursor-pointer rounded-full text-center py-1"
            @click="showGridTypeTab('list')"
            data-index="1"
          >
            <span class="pointer-events-none">List</span>

            <span
              class="background__circle pointer-events-none"
              :class="getGridTypeAnimationClass(1)"
            ></span>
          </div>
        </div>

        <div
          class="card flex-grow overflow-auto bg-white text-center relative font-sans text-orange-900"
        >
          <div class="flex font-bold text-center justify-between">
            <h4 class="text-2xl">Cash Balance</h4>
            <h5 class="text-xl text-right">$216,819</h5>
          </div>
          <div class="flex flex-col overflow-auto">
            <table class="w-full">
              <thead class="text-left border-gray-300 font-bold">
                <td class="py-2 w-2/4">Name</td>
                <td class="py-2 w-1/4">Rate</td>
                <td class="py-2 w-1/4">Balance</td>
              </thead>
              <tbody class="border-b-2 border-orange-900">
                <!-- each row -->
                <tr class="">
                  <td class="py-1 text-left">
                    <div
                      class="w-3 h-3 inline-flex bg-orange-default border-2 border-orange-900 rounded-sm"
                    ></div>
                    Wells Fargo
                  </td>
                  <td class="py-1">-0.61%</td>
                  <td class="py-1">$216,819</td>
                </tr>
                <!-- each row -->
                <tr class="">
                  <td class="py-1 text-left">
                    <div
                      class="w-3 h-3 inline-flex bg-green-default border-2 border-orange-900 rounded-sm"
                    ></div>
                    Bank of America
                  </td>
                  <td class="py-1">11.62%</td>
                  <td class="py-1">$641,423</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="font-bold">
                  <td class="py-2 w-2/4 text-left">Total</td>
                  <td class="py-2 w-1/4">5.91%</td>
                  <td class="py-2 w-1/4">$1,494,863</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="flex font-bold text-center mt-3 justify-between">
            <h4 class="text-2xl">Cashflow</h4>
          </div>
          <div class="flex flex-col overflow-y-auto my-2 overflow-x-auto">
            <table class="w-full">
              <thead class="border-gray-300 font-bold">
                <td class="py-2 w-2/3 text-left">Current</td>
                <td class="py-2 w-1/3 text-right text-orange-100">
                  <switch-button
                    v-model="options"
                    color="#805124"
                    background="#FED788"
                  >
                    Options
                  </switch-button>
                </td>
              </thead>
              <tbody class="border-b-2 border-orange-900">
                <!-- each row -->
                <tr class="">
                  <td class="py-1 text-left">Income</td>
                  <td class="py-1 text-right">$216,819</td>
                </tr>
                <!-- each row -->
                <tr class="">
                  <td class="py-1 text-left">Expense</td>
                  <td class="py-1 text-right">$641,423</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="font-bold">
                  <td class="py-2 w-2/4 text-left">Cashflow</td>
                  <td class="py-2 w-1/4 text-right">$1,494,863</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="flex flex-col overflow-y-auto overflow-x-auto mt-2">
            <table class="w-full">
              <thead class="border-gray-300 font-bold">
                <td class="py-2 w-2/3 text-left">Optimized</td>
                <td class="py-2 w-1/3 text-right text-orange-100"></td>
              </thead>
              <tbody class="border-b-2 border-orange-900">
                <!-- each row -->
                <tr class="">
                  <td class="py-1 text-left">Income</td>
                  <td class="py-1 text-right">$216,819</td>
                </tr>
                <!-- each row -->
                <tr class="">
                  <td class="py-1 text-left">Expense</td>
                  <td class="py-1 text-right">$641,423</td>
                </tr>
              </tbody>
              <tfoot class="font-bold">
                <tr class="">
                  <td class="py-1 w-2/3 text-left">Improvement</td>
                  <td class="py-1 w-1/3 text-right">$1,494,863</td>
                </tr>
                <tr class="">
                  <td class="w-2/3 text-left">Potential Cash flow</td>
                  <td class="w-1/3 text-right">$1,494,863</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import AnalyzeChart from "@/components/charts/AnalyzeChart";
import SwitchButton from "@/components/forms/SwitchButton";
import CashflowMenu from "@/components/layouts/CashflowMenu";
import BalanceDropdown from "@/components/layouts/BalanceDropdown";

export default {
  components: {
    AnalyzeChart,
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

      activeComponent: "flow",
      activeOldIndex: 0,
      activeCurrentIndex: 0,

      activeContentType: "normal",
      oldActiveTypeIndex: 0,
      currentActiveTypeIndex: 0,

      activeGridType: "graph",
      oldActiveGridTypeIndex: 0,
      currentActiveGridTypeIndex: 0,

      activeChartContent: "bar",
      oldActiveChartContentIndex: 0,
      currentActiveChartContentIndex: 0,

      activeChartTrendType: "plus_minus",
      oldActiveChartTrendTypeIndex: 0,
      currentActiveChartTrendTypeIndex: 0,

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
          this.activeComponent = "reports";
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
      if (name != this.activeContentType) {
        this.oldActiveTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveTypeIndex = event.target.dataset.index;
        const currentActiveTypeIndex = event.target.dataset.index;

        setTimeout(() => {
          this.currentActiveTypeIndex = currentActiveTypeIndex;
          this.activeContentType = name;
        }, 500);
      } else {
        this.oldActiveTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveTypeIndex = 0;

        setTimeout(() => {
          this.currentActiveTypeIndex = 0;
          this.activeContentType = "reports";
        }, 500);
      }
    },

    getGridTypeAnimationClass(index) {
      let animationClass = "";
      if (
        this.currentActiveGridTypeIndex === index &&
        this.oldActiveGridTypeIndex < index
      ) {
        animationClass = "slide-left";
      } else if (
        this.currentActiveGridTypeIndex === index &&
        this.oldActiveGridTypeIndex > index
      ) {
        animationClass = "slide-right";
      } else if (this.currentActiveGridTypeIndex < index) {
        animationClass = "slide-left";
      } else if (this.currentActiveGridTypeIndex > index) {
        animationClass = "slide-right";
      }
      return animationClass;
    },
    showGridTypeTab(name) {
      const tabWrapper = this.$refs.cashflow__type__wrapper;
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (name != this.activeGridType) {
        this.oldActiveGridTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveGridTypeIndex = event.target.dataset.index;
        const currentActiveGridTypeIndex = event.target.dataset.index;

        setTimeout(() => {
          this.currentActiveGridTypeIndex = currentActiveGridTypeIndex;
          this.activeGridType = name;
        }, 500);
      } else {
        this.oldActiveGridTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveGridTypeIndex = 0;

        setTimeout(() => {
          this.currentActiveGridTypeIndex = 0;
          this.activeGridType = "reports";
        }, 500);
      }
    },

    getChartContentAnimationClass(index) {
      let animationClass = "";
      if (
        this.currentActiveChartContentIndex === index &&
        this.oldActiveChartContentIndex < index
      ) {
        animationClass = "slide-left";
      } else if (
        this.currentActiveChartContentIndex === index &&
        this.oldActiveChartContentIndex > index
      ) {
        animationClass = "slide-right";
      } else if (this.currentActiveChartContentIndex < index) {
        animationClass = "slide-left";
      } else if (this.currentActiveChartContentIndex > index) {
        animationClass = "slide-right";
      }
      return animationClass;
    },
    showChartContentTab(name) {
      const tabWrapper = this.$refs.cashflow__type__wrapper;
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (name != this.activeChartContent) {
        this.oldActiveChartContentIndex = oldActiveTab.dataset.index;
        // this.currentActiveChartContentIndex = event.target.dataset.index;
        const currentActiveChartContentIndex = event.target.dataset.index;

        setTimeout(() => {
          this.currentActiveChartContentIndex = currentActiveChartContentIndex;
          this.activeChartContent = name;
        }, 500);
      } else {
        this.oldActiveChartContentIndex = oldActiveTab.dataset.index;
        // this.currentActiveChartContentIndex = 0;

        setTimeout(() => {
          this.currentActiveChartContentIndex = 0;
          this.activeChartContent = "bar";
        }, 500);
      }
    },

    getChartTrendTypeAnimationClass(index) {
      let animationClass = "";
      if (
        this.currentActiveChartTrendTypeIndex === index &&
        this.oldActiveChartTrendTypeIndex < index
      ) {
        animationClass = "slide-left";
      } else if (
        this.currentActiveChartTrendTypeIndex === index &&
        this.oldActiveChartTrendTypeIndex > index
      ) {
        animationClass = "slide-right";
      } else if (this.currentActiveChartTrendTypeIndex < index) {
        animationClass = "slide-left";
      } else if (this.currentActiveChartTrendTypeIndex > index) {
        animationClass = "slide-right";
      }
      return animationClass;
    },
    showChartTrendTypeTab(name) {
      const tabWrapper = this.$refs.chart__trend__type__wrapper;
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (name != this.activeChartTrendType) {
        this.oldActiveChartTrendTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveChartTrendTypeIndex = event.target.dataset.index;
        const currentActiveChartTrendTypeIndex = event.target.dataset.index;

        setTimeout(() => {
          this.currentActiveChartTrendTypeIndex = currentActiveChartTrendTypeIndex;
          this.activeChartTrendType = name;
        }, 500);
      } else {
        this.oldActiveChartTrendTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveChartTrendTypeIndex = 0;

        setTimeout(() => {
          this.currentActiveChartTrendTypeIndex = 0;
          this.activeChartTrendType = "plus_minus";
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
.cashflow__type__tabs,
.chart__content__tabs,
.chart__trend__type__tabs,
.cashflow__gridtype__tabs {
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