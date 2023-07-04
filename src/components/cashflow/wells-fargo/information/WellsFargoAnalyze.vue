<template>
  <div>
    <div class="flex flex-col">
      <div class="flex gap-8 w-full mb-4 text-white font-medium">
        <div
          ref="cashflow__content__wrapper"
          class="cashflow__content__tabs rounded-full font-bold bg-white grid grid-flow-col grid-cols-2 w-full justify-between"
        >
          <div
            :class="activeComponent === 'analyze-flow' ? 'active' : ''"
            class="tab cursor-pointer rounded-full text-center py-1"
            @click="showTypeTab('analyze-flow')"
            data-index="0"
          >
            <span class="pointer-events-none">Flow</span>

            <span
              class="background__circle pointer-events-none"
              :class="getAnimationClass(0)"
            ></span>
          </div>
          <div
            :class="activeComponent === 'analyze-balance' ? 'active' : ''"
            class="tab cursor-pointer rounded-full text-center py-1"
            @click="showTypeTab('analyze-balance')"
            data-index="1"
          >
            <span class="pointer-events-none">Balance</span>

            <span
              class="background__circle pointer-events-none"
              :class="getAnimationClass(1)"
            ></span>
          </div>
        </div>

        <template v-if="activeComponent === 'analyze-flow'">
          <div class="dropdown relative">
            <button
              class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500 gap-4"
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
        </template>

        <template v-if="activeComponent === 'analyze-balance'">
          <div
            ref="cashflow__filter__type__wrapper"
            class="cashflow__filter__type__wrapper rounded-full font-bold bg-white text-orange-900 grid grid-flow-col grid-cols-4 w-full justify-between"
          >
            <div
              :class="activeFilterType === 'E' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1"
              @click="showFilterTypeTab('E')"
              data-index="0"
            >
              <span class="pointer-events-none">E</span>

              <span
                class="background__circle pointer-events-none"
                :class="getFilterTypeAnimationClass(0)"
              ></span>
            </div>
            <div
              :class="activeFilterType === 'A' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1"
              @click="showFilterTypeTab('A')"
              data-index="1"
            >
              <span class="pointer-events-none">A</span>

              <span
                class="background__circle pointer-events-none"
                :class="getFilterTypeAnimationClass(1)"
              ></span>
            </div>

            <div
              :class="activeFilterType === 'L' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1"
              @click="showFilterTypeTab('L')"
              data-index="2"
            >
              <span class="pointer-events-none">L</span>

              <span
                class="background__circle pointer-events-none"
                :class="getFilterTypeAnimationClass(2)"
              ></span>
            </div>
            <div
              :class="activeFilterType === 'C' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1"
              @click="showFilterTypeTab('C')"
              data-index="3"
            >
              <span class="pointer-events-none">C</span>

              <span
                class="background__circle pointer-events-none"
                :class="getFilterTypeAnimationClass(3)"
              ></span>
            </div>
          </div>
        </template>

        <div
          ref="cashflow__type__wrapper"
          class="cashflow__type__tabs rounded-full font-bold bg-white grid grid-flow-col grid-cols-2 w-full justify-between"
        >
          <div
            :class="activeContentType === 'normal' ? 'active' : ''"
            class="tab cursor-pointer rounded-full text-center py-1"
            @click="showContentTab('normal')"
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
            @click="showContentTab('adjusted')"
            data-index="1"
          >
            <span class="pointer-events-none">Adjusted</span>

            <span
              class="background__circle pointer-events-none"
              :class="getTypeAnimationClass(1)"
            ></span>
          </div>
        </div>

        <div
          ref="cashflow__gridtype__wrapper"
          class="cashflow__gridtype__tabs rounded-full font-bold bg-white grid grid-flow-col grid-cols-2 w-full justify-between"
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
      </div>

      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import AnalyzeChart from "@/components/charts/AnalyzeChart";
import CashflowMenu from "@/components/layouts/CashflowMenu";
import BalanceDropdown from "@/components/layouts/BalanceDropdown";
import AnalyzeFlow from "@/components/reports/cashflow/analyze/AnalyzeFlow";
import AnalyzeBalance from "@/components/reports/cashflow/analyze/AnalyzeBalance";

export default {
  components: {
    AnalyzeChart,
    CashflowMenu,
    BalanceDropdown,
    AnalyzeBalance,
    AnalyzeFlow,
  },

  data() {
    return {
      activeComponent: "analyze-flow",
      activeOldIndex: 0,
      activeCurrentIndex: 0,

      activeContentType: "normal",
      oldActiveTypeIndex: 0,
      currentActiveTypeIndex: 0,

      activeFilterType: "E",
      oldActiveFilterTypeIndex: 0,
      currentActiveFilterTypeIndex: 0,

      activeGridType: "graph",
      oldActiveGridTypeIndex: 0,
      currentActiveGridTypeIndex: 0,
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

    showTypeTab(name) {
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
          this.activeComponent = "analyze-flow";
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

    showContentTab(name) {
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
          this.activeContentType = "normal";
        }, 500);
      }
    },

    getFilterTypeAnimationClass(index) {
      let animationClass = "";
      if (
        this.currentActiveFilterTypeIndex === index &&
        this.oldActiveFilterTypeIndex < index
      ) {
        animationClass = "slide-left";
      } else if (
        this.currentActiveFilterTypeIndex === index &&
        this.oldActiveFilterTypeIndex > index
      ) {
        animationClass = "slide-right";
      } else if (this.currentActiveFilterTypeIndex < index) {
        animationClass = "slide-left";
      } else if (this.currentActiveFilterTypeIndex > index) {
        animationClass = "slide-right";
      }
      return animationClass;
    },

    showFilterTypeTab(name) {
      const tabWrapper = this.$refs.cashflow__filter__type__wrapper;
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (name != this.activeFilterType) {
        this.oldActiveFilterTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveFilterTypeIndex = event.target.dataset.index;
        const currentActiveFilterTypeIndex = event.target.dataset.index;

        setTimeout(() => {
          this.currentActiveFilterTypeIndex = currentActiveFilterTypeIndex;
          this.activeFilterType = name;
        }, 500);
      } else {
        this.oldActiveFilterTypeIndex = oldActiveTab.dataset.index;
        // this.currentActiveFilterTypeIndex = 0;

        setTimeout(() => {
          this.currentActiveFilterTypeIndex = 0;
          this.activeFilterType = "bar";
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
      const tabWrapper = this.$refs.cashflow__gridtype__wrapper;
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
          this.activeGridType = "plus_minus";
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
// Tabs menu
.cashflow__content__tabs,
.cashflow__type__tabs,
.cashflow__filter__type__wrapper,
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