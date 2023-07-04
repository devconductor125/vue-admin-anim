<template>
  <div
    ref="content__wrapper"
    class="content__tabs flex flex-wrap bg-white items-center rounded-lg sm:rounded-full h-auto shadow lg:mt-0 sm:w-max"
  >
    <div
      :class="activeComponent === 'wells-fargo-details' ? 'active' : ''"
      class="tab cursor-pointer rounded-full text-center h-auto px-4 py-2"
      @click="showTabMenu('wells-fargo-details')"
      data-index="0"
    >
      <span class="pointer-events-none">Details</span>

      <span
        class="background__circle pointer-events-none"
        :class="getAnimationClass(0)"
      ></span>
    </div>
    <div
      :class="activeComponent === 'wells-fargo-documents' ? 'active' : ''"
      class="tab cursor-pointer rounded-full text-center h-auto px-4 py-2"
      @click="showTabMenu('wells-fargo-documents')"
      data-index="1"
    >
      <span class="pointer-events-none">Documents</span>

      <span
        class="background__circle pointer-events-none"
        :class="getAnimationClass(1)"
      ></span>
    </div>
    <div
      :class="activeComponent === 'wells-fargo-analyze' ? 'active' : ''"
      class="tab cursor-pointer rounded-full text-center h-auto px-4 py-2"
      @click="showTabMenu('wells-fargo-analyze')"
      data-index="2"
    >
      <span class="pointer-events-none">Analyze</span>

      <span
        class="background__circle pointer-events-none"
        :class="getAnimationClass(2)"
      ></span>
    </div>
    <div
      :class="activeComponent === 'wells-fargo-cost-value' ? 'active' : ''"
      class="tab cursor-pointer rounded-full text-center h-auto px-4 py-2"
      @click="showTabMenu('wells-fargo-cost-value')"
      data-index="3"
    >
      <span class="pointer-events-none">Cost Value</span>

      <span
        class="background__circle pointer-events-none"
        :class="getAnimationClass(3)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComponent: "wells-fargo-details",
      activeOldIndex: 0,
      activeCurrentIndex: 0,
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

    showTabMenu(componentName) {
      const tabWrapper = event.target.closest(".content__tabs");
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (componentName != this.activeComponent) {
        this.activeOldIndex = oldActiveTab.dataset.index;
        const activeCurrentIndex = event.target.dataset.index;

        setTimeout(() => {
          this.activeCurrentIndex = activeCurrentIndex;
          this.activeComponent = componentName;
          this.$emit("change", this.activeComponent);
        }, 500);
      } else {
        this.activeOldIndex = oldActiveTab.dataset.index;

        setTimeout(() => {
          this.activeCurrentIndex = 0;
          this.activeComponent = "wells-fargo-details";
          this.$emit("change", this.activeComponent);
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content__tabs {
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
        @apply text-gray-100;
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
.cashflow__access__button,
.cashflow__content__tabs {
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
</style>