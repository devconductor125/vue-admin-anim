<template>
  <div class="report__content__wrapper text-base text-red-default">
    <div
      class="report__content__tabs rounded-full border-red-default border-2 bg-transparent grid grid-flow-col grid-cols-3 w-full justify-between font-bold"
    >
      <div
        :class="activeComponent === 'statements' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center py-1"
        @click="showTab('statements')"
      >
        <span>Statements</span>
        
        <span class="background__circle"></span>
      </div>
      <div
        :class="activeComponent === 'reports' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center py-1"
        @click="showTab('reports')"
      >
        <span>Reports</span>
        
        <span class="background__circle"></span>
      </div>
      <div
        :class="activeComponent === 'Other' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center py-1"
        @click="showTab('Other')"
      >
        <span>Other</span>
        
        <span class="background__circle"></span>
      </div>
    </div>
    <div class="tab__content overflow-x-hidden overflow-y-auto mt-4">
      <transition name="slideIn" mode="out-in">
        <component :is="activeComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Statements from "@/components/drawers/reports/real-state/Statements";
import Other from "@/components/drawers/reports/real-state/Other";
import Reports from "@/components/drawers/reports/real-state/Reports";
export default {
  components: {
    Statements,
    Other,
    Reports,
  },
  data() {
    return {
      activeComponent: "statements",
    };
  },

  methods: {
    showTab(name) {
      if (name != this.activeComponent) {
        this.activeComponent = name;
      } else {
        this.activeComponent = "statements";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.report__content__tabs {
  .tab {
    @apply relative overflow-hidden;
    transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
    > span {
      position: relative;
      transition: color 0.5s ease-in-out;
      z-index: 10;
      @apply text-red-default;
    }
    .background__circle {
      top: 0px;
      left: 0px;
      transform: translateX(-101%);
      -ms-transform: translateX(-101%); /* IE 9 */
      -webkit-transform: translateX(-101%);
      transition: transform 0.5s ease-in-out;
      z-index: 1;
      @apply absolute h-full w-full rounded-full inline-block bg-red-default text-gray-dark;
    }

    &.active {
      > span {
        @apply text-gray-dark;
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