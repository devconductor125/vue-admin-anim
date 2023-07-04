<template>
  <div class="content font-sans">
    <div class="flex flex-col lg:flex-row gap-4">
      <balance-dropdown @expand="collapse"></balance-dropdown>
      <div class="mx-auto">
        <router-view name="navigation-bar"></router-view>
        <!-- <div class="flex flex-wrap justify-center gap-4 font-bold">
          <div
            class="flex flex-wrap bg-white items-center rounded-lg sm:rounded-full h-10 shadow lg:mt-0 sm:w-max"
          >
            <router-link
              to="/cash-flows/assets/cash/wells-fargo/information"
              class="router-link px-4 xl:px-4 text-lg"
              :class="
                $route.matched.find((r) =>
                  r.path.split('/').includes('information')
                )
                  ? 'router-link-exact-active'
                  : ''
              "
            >
              <span>Information</span>
              <span class="background__circle bg-orange-900"></span>
            </router-link>
            <router-link
              to="/cash-flows/assets/cash/wells-fargo/move-money"
              class="router-link px-4 xl:px-4 text-lg"
              :class="
                $route.matched.find((r) =>
                  r.path.split('/').includes('move-money')
                )
                  ? 'router-link-exact-active'
                  : ''
              "
            >
              <span>Move Money</span>
              <span class="background__circle bg-orange-900"></span>
            </router-link>
          </div>
          <wells-fargo-information-menu></wells-fargo-information-menu>
          <div class="cashflow__access__button rounded-full bg-white h-10">
            <button
              class="tab rounded-full h-full font-bold px-4 text-lg"
              :class="directAccess === true ? 'active' : ''"
              @click="directAccess = !directAccess"
            >
              <span class="pointer-events-none">Direct Accss</span>

              <span
                class="background__circle pointer-events-none slide-left"
              ></span>
            </button>
          </div>
        </div> -->
      </div>
    </div>
    <div class="mt-4 router-view" ref="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BalanceDropdown from "@/components/layouts/BalanceDropdown";
import WellsFargoInformationMenu from "@/components/layouts/WellsFargoInformationMenu";

export default {
  components: {
    BalanceDropdown,
    WellsFargoInformationMenu,
  },
  data() {
    return {
      activeComponent: "wells-fargo-information",
      activeOldIndex: 0,
      activeCurrentIndex: 0,

      directAccess: true,
    };
  },
  mounted() {
    // console.log(this.$route.matched);
    // console.log(!!this.$route.matched.find(r => r.path.split('/').includes('information')));
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
          this.activeComponent = "wells-fargo-information";
        }, 500);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.router-link {
  outline: none;
  position: relative;
  overflow: hidden;
  @apply rounded-full h-full flex items-center justify-center sm:py-0;
  > svg,
  > span {
    position: relative;
    transition: color 0.5s ease-in-out;
    z-index: 10;
    @apply text-orange-900;
  }

  .background__circle {
    top: 0px;
    left: 0px;
    transform: translateX(-101%);
    -ms-transform: translateX(-101%); /* IE 9 */
    -webkit-transform: translateX(-101%);
    transition: transform 0.5s ease-in-out;
    z-index: 1;
    @apply absolute h-full w-full rounded-full inline-block;
  }
  //   &:hover,
  &.router-link-exact-active {
    > svg,
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

.content {
  min-height: 100%;
}
.router-view {
  min-height: 100%;
  transition: margin 500ms;
}
.tab > span,
.cashflow__access__button > button {
  // line-height: 30px;
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
