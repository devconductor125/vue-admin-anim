<template>
  <div class="report__content__wrapper text-base text-gray-100">
    <div
      ref="reports__content__wrapper"
      class="report__content__tabs rounded-full font-bold border-gray-100 border-2 bg-transparent grid grid-flow-col grid-cols-3 w-full justify-between"
    >
      <div
        :class="activeComponent === 'reports' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center py-1"
        @click="showTab('reports')"
        data-index="0"
      >
        <span class="pointer-events-none">Reports</span>

        <span
          class="background__circle pointer-events-none"
          :class="getAnimationClass(0)"
        ></span>
      </div>
      <div
        :class="activeComponent === 'plans' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center py-1"
        @click="showTab('plans')"
        data-index="1"
      >
        <span class="pointer-events-none">Plans</span>

        <span
          class="background__circle pointer-events-none"
          :class="getAnimationClass(1)"
        ></span>
        <!-- <span
          class="background__circle pointer-events-none"
          :class="activeCurrentIndex === 1 && activeOldIndex < 1 ? 'slide-left' : activeCurrentIndex === 1 && activeOldIndex > 1 ? 'slide-right' : activeOldIndex < 1 ? 'slide-left' : 'slide-right'"
        ></span> -->
      </div>
      
      <div
        :class="activeComponent === 'goals' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center py-1"
        @click="showTab('goals')"
        data-index="2"
      >
        <span class="pointer-events-none">Goals</span>

        <span
          class="background__circle pointer-events-none"
          :class="getAnimationClass(2)"
        ></span>
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
import Reports from "@/components/drawers/reports/home/Reports";
import Goals from "@/components/drawers/reports/home/Goals";
import Plans from "@/components/drawers/reports/home/Plans";
export default {
  components: {
    Reports,
    Goals,
    Plans,
  },
  data() {
    return {
      activeComponent: "reports",
      activeOldIndex: 0,
      activeCurrentIndex: 0,
    };
  },
  computed: {
    // const tabWrapper = this.$refs.reports__content__wrapper;
  },
  mounted() {},
  methods: {
    getAnimationClass(index) {
      let animationClass = '';
      if (this.activeCurrentIndex === index && this.activeOldIndex < index) {
        animationClass = 'slide-left';
      } else if (this.activeCurrentIndex === index && this.activeOldIndex > index) {
        animationClass = 'slide-right';
      } else if (this.activeCurrentIndex < index) {
        animationClass = 'slide-left';
      } else if (this.activeCurrentIndex > index) {
        animationClass = 'slide-right';
      }
      return animationClass;
    },
    showTab(name) {
      const tabWrapper = this.$refs.reports__content__wrapper;
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      console.log(oldActiveTab.dataset.index);
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
      @apply text-gray-100;
    }
    .background__circle {
      top: 0px;
      left: 0px;
      // transform: translateX(-101%);
      // -ms-transform: translateX(-101%); /* IE 9 */
      // -webkit-transform: translateX(-101%);
      transition: transform 0.5s ease-in-out;
      z-index: 1;
      @apply absolute h-full w-full rounded-full inline-block bg-gray-100 text-gray-dark;
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