<template>
  <div class="content font-sans">
    <div class="flex flex-col lg:flex-row gap-4">
      <balance-dropdown @expand="collapse"></balance-dropdown>
      <div class="mt-4 router-view" ref="router-view">
        <router-view></router-view>
      </div>
      <div class="mx-auto">
        <div class="flex justify-center gap-4">
          <div
            ref="cashflow__content__wrapper"
            class="cashflow__content__tabs rounded-full font-bold bg-white grid grid-flow-col grid-cols-2 h-auto justify-between"
          >
            <div
              :class="activeComponent === 'information' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1 px-4"
              @click="showContentTab('information')"
              data-index="0"
            >
              <span class="pointer-events-none">Information</span>

              <span
                class="background__circle pointer-events-none"
                :class="getAnimationClass(0)"
              ></span>
            </div>
            <div
              :class="activeComponent === 'move_money' ? 'active' : ''"
              class="tab cursor-pointer rounded-full text-center py-1"
              @click="showContentTab('move_money')"
              data-index="1"
            >
              <span class="pointer-events-none">Move Money</span>

              <span
                class="background__circle pointer-events-none"
                :class="getAnimationClass(1)"
              ></span>
            </div>
          </div>
          <wells-fargo-menu></wells-fargo-menu>
          <div class="cashflow__access__button rounded-full bg-white h-full">
            <button
              class="tab rounded-full h-full font-bold px-4 py-1"
              :class="directAccess === true ? 'active' : ''"
              @click="directAccess = !directAccess"
            >
              
              <span class="pointer-events-none">Direct Accss</span>

              <span
                class="background__circle pointer-events-none slide-left"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="mt-4 router-view" ref="router-view">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import BalanceDropdown from "@/components/layouts/BalanceDropdown";
import WellsFargoMenu from "@/components/layouts/WellsFargoMenu";

export default {
  components: {
    BalanceDropdown,
    WellsFargoMenu,
  },
  data() {
    return {
      activeComponent: "information",
      activeOldIndex: 0,
      activeCurrentIndex: 0,
      directAccess: true,
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
  },
};
</script>

<style scoped lang="scss">
.content {
  min-height: 100%;
}
.router-view {
  min-height: 100%;
  transition: margin 500ms;
}
.tab > span,
.cashflow__access__button > button {
  line-height: 30px;
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
