<template>
  <div class="flex flex-wrap justify-center gap-4 font-bold">
    <div
      ref="content__wrapper"
      class="content__tabs flex flex-wrap  bg-white items-center rounded-lg sm:rounded-full h-10 shadow lg:mt-0 sm:w-max"
    >
      <div
        :class="activeComponent === 'information' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center h-full px-4 py-2"
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
        :class="activeComponent === 'move-money' ? 'active' : ''"
        class="tab cursor-pointer rounded-full text-center h-full px-4 py-2"
        @click="showContentTab('move-money')"
        data-index="1"
      >
        <span class="pointer-events-none">Move Money</span>

        <span
          class="background__circle pointer-events-none"
          :class="getAnimationClass(1)"
        ></span>
      </div>
    </div>
    <green-star-information-menu @change="$emit('change', $event)"></green-star-information-menu>
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
import WellsFargoInformationMenu from './WellsFargoInformationMenu.vue';

export default {
  components: {
    WellsFargoInformationMenu
  },
  data() {
    return {
      menu: {'information' : 'green-star-information-menu', 'move-money' : 'green-star-move-money-menu'},
      activeComponent: "information",
      activeComponentMenu: "green-star-information-menu",
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
    
    showContentTab(componentName) {
      // const tabWrapper = this.$refs.cashflow__content__wrapper;
      const tabWrapper = event.target.closest('.content__tabs');
      const oldActiveTab = tabWrapper.querySelector(".tab.active");
      if (componentName != this.activeComponent) {
        this.activeOldIndex = oldActiveTab.dataset.index;
        // this.activeCurrentIndex = event.target.dataset.index;
        const activeCurrentIndex = event.target.dataset.index;

        setTimeout(() => {
          this.activeCurrentIndex = activeCurrentIndex;
          this.activeComponentMenu = this.menu[componentName];
          this.activeComponent = componentName;
        }, 500);
      } else {
        this.activeOldIndex = oldActiveTab.dataset.index;
        // this.activeCurrentIndex = 0;

        setTimeout(() => {
          this.activeCurrentIndex = 0;
          this.activeComponent = "green-star-information";
          this.activeComponentMenu = "green-star-information-menu";
        }, 500);
      }
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
