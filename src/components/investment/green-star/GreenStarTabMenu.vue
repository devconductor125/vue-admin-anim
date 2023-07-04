<template>
  <div class="flex flex-wrap justify-center gap-4 mx-auto font-bold">
    <div
      ref="content__wrapper"
      class="content__tabs flex flex-wrap bg-white items-center rounded-lg sm:rounded-full h-10 shadow lg:mt-0 sm:w-max"
    >
      <div
        :class="
          activeComponentMenu === 'wells-fargo-information-menu' ? 'active' : ''
        "
        class="tab cursor-pointer rounded-full text-center h-full px-4 py-2"
        @click="showTabMenu('information')"
        data-index="0"
      >
        <span class="pointer-events-none">Information</span>

        <span
          class="background__circle pointer-events-none"
          :class="getAnimationClass(0)"
        ></span>
      </div>
      <div
        :class="
          activeComponentMenu === 'wells-fargo-move-money-menu' ? 'active' : ''
        "
        class="tab cursor-pointer rounded-full text-center h-full px-4 py-2"
        @click="showTabMenu('move-money')"
        data-index="1"
      >
        <span class="pointer-events-none">Move Money</span>

        <span
          class="background__circle pointer-events-none"
          :class="getAnimationClass(1)"
        ></span>
      </div>
    </div>
    <component :is="activeComponentMenu" @change="getContent"></component>
    <div class="cashflow__access__button rounded-full bg-white h-10">
      <button
        class="tab rounded-full h-full font-bold px-4"
        :class="directAccess === true ? 'active' : ''"
        @click="directAccess = !directAccess"
      >
        <span class="pointer-events-none">Direct Accss</span>

        <span class="background__circle pointer-events-none slide-left"></span>
      </button>
    </div>
  </div>
</template>

<script>
import WellsFargoInformationMenu from "@/components/cashflow/wells-fargo/information/WellsFargoInformationMenu";
import WellsFargoMoveMoneyMenu from "@/components/cashflow/wells-fargo/move-money/WellsFargoMoveMoneyMenu";

export default {
  components: {
    WellsFargoInformationMenu,
    WellsFargoMoveMoneyMenu,
  },
  data() {
    return {
      menu: {
        information: "wells-fargo-information-menu",
        "move-money": "wells-fargo-move-money-menu",
      },
      activeComponent: "wells-fargo-information-menu",
      activeComponentMenu: "wells-fargo-information-menu",
      activeOldIndex: 0,
      activeCurrentIndex: 0,
      activeContent: "wells-fargo-details",
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

    showTabMenu(componentName) {
      const tabWrapper = event.target.closest(".content__tabs");
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (componentName === "information") {
        this.activeOldIndex = oldActiveTab.dataset.index;
        const activeCurrentIndex = event.target.dataset.index;

        setTimeout(() => {
          this.activeCurrentIndex = activeCurrentIndex;
          this.activeComponentMenu = "wells-fargo-information-menu";
          this.activeComponent = "information";
          this.activeContent = "wells-fargo-details";
          this.$emit("change", {
            tab: this.activeComponent,
            content: this.activeContent,
          });
        }, 500);
      } else {
        this.activeOldIndex = oldActiveTab.dataset.index;

        setTimeout(() => {
          this.activeCurrentIndex = 1;
          this.activeComponent = "move-money";
          this.activeContent = "wells-fargo-transfer";
          this.activeComponentMenu = "wells-fargo-move-money-menu";
          this.$emit("change", {
            tab: this.activeComponent,
            content: this.activeContent,
          });
        }, 500);
      }
      // this.$emit("change", {
      //   tab: this.activeComponent,
      //   content: this.activeContent,
      // });
    },

    getContent(contentName) {
      this.activeContent = contentName;
      this.$emit("change", {
        tab: this.activeComponent,
        content: this.activeContent,
      });
    },
  },
};
</script>

<style scoped lang="scss">
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
