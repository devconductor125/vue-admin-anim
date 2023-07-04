<template>
  <div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full text-orange-900 mb-2"
    >
      <div>
        <div class="mb-2 py-0.5 flex items-center">
          <h2 class="text-xl font-bold">Wells Fargo</h2>
        </div>
        <div class="card flex-grow bg-white">
          <div class="card__body text-center relative w-full">
            <div class="table__wrapper flex flex-col h-full overflow-auto">
              <table class="w-full">
                <tbody>
                  <tr>
                    <td class="text-left">Ownership</td>
                    <th class="text-right">John Doe and John Doe</th>
                  </tr>
                  <tr>
                    <td class="text-left">Type</td>
                    <th class="text-right">
                      Joint tenancy with rights of supervisorship
                    </th>
                  </tr>
                  <tr>
                    <td class="text-left">Location</td>
                    <th class="text-right">Wells Fargo checking</th>
                  </tr>
                  <tr>
                    <td class="text-left">Date opened</td>
                    <th class="text-right">September 30, 1984</th>
                  </tr>
                  <tr>
                    <td class="text-left">Last Statement closing date</td>
                    <th class="text-right">September 30, 2021</th>
                  </tr>
                  <tr>
                    <td class="text-left">Account Number</td>
                    <th class="text-right">**********9876</th>
                  </tr>
                  <tr>
                    <td class="text-left">Routing</td>
                    <th class="text-right">123456</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="text-md flex justify-end items-center gap-4 mb-2">
          <div>(Last update <span class="font-bold">7 hours ago</span>)</div>
          <button
            class="rounded-full font-bold bg-orange-900 h-8 leading-none text-white px-4 py-1"
          >
            Update
          </button>
        </div>
        <div class="card flex-grow bg-white">
          <div class="card__body text-center relative w-full">
            <div class="table__wrapper flex flex-col h-full overflow-auto">
              <table class="w-full">
                <tbody>
                  <tr>
                    <td class="text-left">Available Balance</td>
                    <td class="text-left"></td>
                    <th class="text-right">$119,816</th>
                  </tr>
                  <tr>
                    <td class="text-left">Current Balance</td>
                    <td class="text-left"></td>
                    <th class="text-right">$115,574</th>
                  </tr>
                  <tr>
                    <td class="text-left">Average Balance</td>
                    <td class="text-left">
                      <div class="dropdown relative">
                        <button
                          class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500"
                          @click.self="expand($event)"
                        >
                          <span class="pointer-events-none">Three Month</span>
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
                    </td>
                    <th class="text-right">$95,000</th>
                  </tr>
                  <tr>
                    <td class="text-left">Current Interest Rate</td>
                    <td class="text-left"></td>
                    <th class="text-right">0.55%</th>
                  </tr>
                  <tr>
                    <td class="text-left">Average Interest Rate</td>
                    <td class="text-left">
                      <div class="dropdown relative">
                        <button
                          class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500"
                          @click.self="expand($event)"
                        >
                          <span class="pointer-events-none">Three Month</span>
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
                    </td>
                    <th class="text-right">0.41%</th>
                  </tr>
                  <tr>
                    <td class="text-left">Earned Interest</td>
                    <td class="text-left">
                      <div class="dropdown relative">
                        <button
                          class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500"
                          @click.self="expand($event)"
                        >
                          <span class="pointer-events-none">Year-to-Date</span>
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
                    </td>
                    <th class="text-right">$635</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="py-1 flex items-center">
        <h2 class="text-xl font-bold text-orange-900">Transactions</h2>
      </div>
      <div class="flex justify-between items-center">
        <div
          class="filters text-md flex justify-between items-center gap-4 my-2"
        >
          <input
            type="text"
            placeholder="Type here..."
            class="rounded-full text-orange-900 px-4 py-1"
          />
          <div class="dropdown relative">
            <button
              class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500"
              @click.self="expand($event)"
            >
              <span class="pointer-events-none">Year-to-Date</span>
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
          <div class="flex justify-between items-center gap-4">
            <div class="flex justify-between items-center gap-2">
              <label for="from">From: </label>
              <input
                id="from"
                type="text"
                placeholder="Type here..."
                value="999,999"
                class="rounded-full bg-orange-900 text-white w-32 text-center px-4 py-1"
              />
            </div>
            <div class="flex justify-between items-center gap-2">
              <label for="to">To: </label>
              <input
                id="to"
                type="text"
                placeholder="Type here..."
                value="999,999"
                class="rounded-full bg-orange-900 text-white w-32 text-center px-4 py-1"
              />
            </div>
          </div>
        </div>
        <button
          class="rounded-full font-bold bg-orange-900 h-full text-white px-4 py-1"
        >
          Clear Filter
        </button>
      </div>
      <div class="flex justify-between items-center">
        <div
          class="filters text-md flex justify-between items-center gap-4 my-2"
        >
          <div class="categiry-fileter flex gap-4">
            <switch-button
              v-model="budgetOption"
              color="#805124"
              background="#FED788"
            >
              Budget Category
            </switch-button>
            <div class="dropdown relative">
              <button
                class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500"
                @click.self="expand($event)"
              >
                <span class="pointer-events-none"> All Categories </span>
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
          </div>

          <div class="types-filter flex gap-4">
            <switch-button
              v-model="budgetOption"
              color="#805124"
              background="#FED788"
            >
              Types
            </switch-button>
            <div class="dropdown relative">
              <button
                class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500"
                @click.self="expand($event)"
              >
                <span class="pointer-events-none"> All Types </span>
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
          </div>
        </div>
        <input
          type="text"
          placeholder="Search all accounts"
          class="rounded-full text-orange-900 px-4 py-1"
        />
      </div>
      <div class="card flex-grow bg-white">
        <div class="card__body text-center relative w-full">
          <div class="table__wrapper flex flex-col h-full overflow-auto">
            <table class="w-full">
              <thead class="bg-orange-900 text-white">
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Budget Category</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody class="text-orange-900">
                <tr class="font-bold">
                  <th colspan="6" class="text-left">Pending Transactions</th>
                </tr>
                <tr>
                  <td class="text-left">September 1, 2020</td>
                  <td class="text-left">Paycheck</td>
                  <th class="text-left">Income</th>
                  <td class="text-left">Direct Deposit</td>
                  <td class="text-right">$5,000</td>
                  <th class="text-right">$121,819</th>
                </tr>
                <tr>
                  <td class="text-left">September 2, 2020</td>
                  <td class="text-left">Autoload</td>
                  <th class="text-left">Water</th>
                  <td class="text-left">Bill Pay</td>
                  <td class="text-right">$5,000</td>
                  <th class="text-right">$121,819</th>
                </tr>
                <tr>
                  <td class="text-left">September 3, 2020</td>
                  <td class="text-left">Water</td>
                  <th class="text-left">Utilities</th>
                  <td class="text-left">ACH</td>
                  <td class="text-right">$5,000</td>
                  <th class="text-right">$121,819</th>
                </tr>
                <tr class="font-bold">
                  <th colspan="6" class="text-left">Posted Transactions</th>
                </tr>
                <tr>
                  <td class="text-left">September 1, 2020</td>
                  <td class="text-left">Paycheck</td>
                  <th class="text-left">Income</th>
                  <td class="text-left">Direct Deposit</td>
                  <td class="text-right">$5,000</td>
                  <th class="text-right">$121,819</th>
                </tr>
                <tr>
                  <td class="text-left">September 2, 2020</td>
                  <td class="text-left">Autoload</td>
                  <th class="text-left">Water</th>
                  <td class="text-left">Bill Pay</td>
                  <td class="text-right">$5,000</td>
                  <th class="text-right">$121,819</th>
                </tr>
                <tr>
                  <td class="text-left">September 3, 2020</td>
                  <td class="text-left">Water</td>
                  <th class="text-left">Utilities</th>
                  <td class="text-left">ACH</td>
                  <td class="text-right">$5,000</td>
                  <th class="text-right">$121,819</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnalyzeChart from "@/components/charts/AnalyzeChart";
import SwitchButton from "@/components/forms/SwitchButton";
import InvestmentMenu from "@/components/layouts/InvestmentMenu";
import BalanceDropdown from "@/components/layouts/BalanceDropdown";

export default {
  components: {
    AnalyzeChart,
    SwitchButton,
    InvestmentMenu,
    BalanceDropdown,
  },

  data() {
    return {
      budgetOption: true,
      typeOption: true,
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
.table__wrapper,
.card table {
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
    @apply text-white;
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