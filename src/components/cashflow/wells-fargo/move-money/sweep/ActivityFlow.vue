<template>
  <div class="report__content__wrapper text-base text-orange-900 w-full">
    <div
      class="report__content__tabs rounded-full mx-auto bg-orange-light grid grid-flow-col grid-cols-3 justify-between font-bold w-96"
    >
      <div
        :class="activeComponent === 'sweep-round-up' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center py-1"
        @click="showTab('sweep-round-up')"
      >
        <span>Round Up</span>
        
        <span class="background__circle"></span>
      </div>
      <div
        :class="activeComponent === 'sweep-amount' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center py-1"
        @click="showTab('sweep-amount')"
      >
        <span>Amount</span>
        
        <span class="background__circle"></span>
      </div>
      <div
        :class="activeComponent === 'sweep-percentage' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center py-1"
        @click="showTab('sweep-percentage')"
      >
        <span>Percentage</span>
        
        <span class="background__circle"></span>
      </div>
    </div>
    <div class="tab__content overflow-x-hidden scrollbar-none mt-4 w-full">
      <transition name="slideIn" mode="out-in">
        <component :is="activeComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import SweepRoundUp from "@/components/cashflow/wells-fargo/move-money/sweep/activity/SweepRoundUp";
import SweepAmount from "@/components/cashflow/wells-fargo/move-money/sweep/activity/SweepAmount";
import SweepPercentage from "@/components/cashflow/wells-fargo/move-money/sweep/activity/SweepPercentage";
export default {
  components: {
    SweepRoundUp,
    SweepAmount,
    SweepPercentage,
  },
  data() {
    return {
      activeComponent: "sweep-round-up",
    };
  },

  methods: {
    showTab(name) {
      if (name != this.activeComponent) {
        this.activeComponent = name;
      } else {
        this.activeComponent = "sweep-round-up";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.scrollbar-none {
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
.report__content__tabs {
  .tab {
    @apply relative overflow-hidden;
    transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
    > span {
      position: relative;
      transition: color 0.5s ease-in-out;
      z-index: 10;
      @apply px-2 text-orange-900;
    }
    .background__circle {
      top: 0px;
      left: 0px;
      transform: translateX(-101%);
      -ms-transform: translateX(-101%); /* IE 9 */
      -webkit-transform: translateX(-101%);
      transition: transform 0.5s ease-in-out;
      z-index: 1;
      @apply absolute h-full w-full rounded-full inline-block bg-orange-900 text-gray-dark;
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
</style>