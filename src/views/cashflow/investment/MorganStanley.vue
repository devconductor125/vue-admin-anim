<template>
  <div class="h-full flex flex-col">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <!-- <h1>Investment Account</h1> -->
    </div>
    <div class="flex-grow flex items-center justify-center h-full">
        <h1 class="text-center text-5xl">Investment Account</h1>
    </div>
  </div>
</template>

<script>
import AnalyzeChart from "@/components/charts/AnalyzeChart";
import CompositionDoughnut from "@/components/charts/CompositionDoughnut";
import CompositionLine from "@/components/charts/CompositionLine";
import AssetTable from "@/components/tables/dashboard/AssetTable.vue";
import LiabilitiesTable from "@/components/tables/dashboard/LiabilitiesTable.vue";
import EquityTable from "@/components/tables/dashboard/EquityTable.vue";
import SwitchButton from "@/components/forms/SwitchButton";

export default {
  components: {
    AnalyzeChart,
    CompositionLine,
    CompositionDoughnut,
    AssetTable,
    LiabilitiesTable,
    EquityTable,
    SwitchButton,
  },

  data() {
    return {
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