<template>
  <div class="bg-dark flex items-center header px-6 md:px-10 relative z-300">
    <div class="text-gray-100 text-3xl hidden md:inline-block">Dashboard</div>
    <div
      class="text-gray-100 text-3xl md:hidden"
      role="button"
      @click="$emit('showSidebar')"
    >
      <i class="fa fa-bars"></i>
    </div>
    <div class="nav ml-auto flex items-center">
      <div class="hidden lg:block">
        <search-box></search-box>
      </div>
      <div class="flex">
        <!-- Reports Menu -->
        <div
          class="nav__item"
          :class="[activeComponent == 'Reports' ? 'active' : '']"
          @click="showDrawer({ name: 'Reports' })"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 34.253"
            class="fill-current text-gray-500"
          >
            <path
              id="Union_3"
              data-name="Union 3"
              d="M4.933,34.253a2.441,2.441,0,0,1-2.44-2.44L0,9.787a.808.808,0,0,1,.814-.814h38.36A.8.8,0,0,1,40,9.787v9.266a2.788,2.788,0,0,0-.933-.266c0-.227-.013-.466-.013-.706l-.014-.293a8.026,8.026,0,0,0-.16-1.72,8.162,8.162,0,0,0-7.987-6.333,8.8,8.8,0,0,0-1.76.186,7.73,7.73,0,0,0-6.467,8.053c.014.267.014.547.014.827a2.81,2.81,0,0,0-2.547,3.013L20.12,30.88s-.014,1.213,0,1.627a3.156,3.156,0,0,0,.84,1.746Zm19.32-.36A2.474,2.474,0,0,1,21.8,31.586h-.026V27.8c0-2,0-3.987.013-5.987a1.23,1.23,0,0,1,1.387-1.387h.614c.6,0,.533.067.546-.52,0-.666.013-1.319-.014-1.986a6.1,6.1,0,0,1,5.161-6.373,6.521,6.521,0,0,1,7.773,4.906,7.95,7.95,0,0,1,.133,1.694c.026.667.014,1.32,0,1.986,0,.24.106.32.333.307a9.371,9.371,0,0,1,1.066-.014,1.176,1.176,0,0,1,1.2,1.187c.013,2.066.013,4.133,0,6.187v3.614a2.484,2.484,0,0,1-2.48,2.479Zm5.2-4.706a1.444,1.444,0,0,0,.814,1.306v1.013a.4.4,0,0,0,.4.4h.44a.393.393,0,0,0,.4-.4v-1a1.5,1.5,0,0,0,.854-1.319,1.453,1.453,0,0,0-2.907,0Zm.053-14.734a3.267,3.267,0,0,0-2.373,3.307c-.014.76-.014,1.507,0,2.267a3.246,3.246,0,0,0,.027.36.653.653,0,0,0,.12.026c2.36.014,4.72.014,7.094.014.213,0,.239-.12.239-.28,0-.427,0-.853-.014-1.266a8.838,8.838,0,0,0-.04-1.573,3.709,3.709,0,0,0-3.679-3.1A4.066,4.066,0,0,0,29.507,14.453Zm9.68-7.12H2.493V2.44A2.441,2.441,0,0,1,4.933,0h7.334C13.347,0,14,1.027,14.613,2.013c.253.413.72,1.16.947,1.24H37.546A2.455,2.455,0,0,1,40,5.707V7.333Z"
            />
          </svg>
        </div>

        <!-- Notification -->
        <div
          class="nav__item"
          :class="[activeComponent == 'Notification' ? 'active' : '']"
          @click="showDrawer({ name: 'Notification' })"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 35.346 40"
            class="fill-current text-gray-500"
          >
            <path
              id="Union_4"
              data-name="Union 4"
              d="M11.193,35.014h12.96a6.7,6.7,0,0,1-12.96,0Zm-8.227-1.24c-2.867,0-3.987-3.12-1.867-5.36,3.986-4.24,5.24-8.48,5.24-14.333A11.516,11.516,0,0,1,14.313,3.24a3.362,3.362,0,0,1,6.72,0,11.516,11.516,0,0,1,7.973,10.84c0,5.854,1.24,10.094,5.24,14.333,2.12,2.24,1,5.36-1.867,5.36Z"
            />
          </svg>
        </div>

        <!-- Chat -->
        <div
          class="nav__item"
          :class="[activeComponent == 'Chat' ? 'active' : '']"
          @click="showDrawer({ name: 'Chat' })"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="30"
            viewBox="0 0 53.698 40"
            class="fill-current text-gray-500"
          >
            <path
              id="Union_5"
              data-name="Union 5"
              d="M8.748,39.989c-1.432-.107-1.664-.322-.59-1.325,2.309-2.147,2.255-3.007,2.166-4.94A13.717,13.717,0,0,1,6.17,24.361,13.077,13.077,0,1,1,19.238,37.429a12.39,12.39,0,0,1-3.455-.483C14.1,38.079,11.352,40,9.045,40,8.945,40,8.846,40,8.748,39.989ZM22.8,27.637a1.8,1.8,0,0,0,1.79,1.808,1.823,1.823,0,0,0,1.808-1.79,1.8,1.8,0,0,0-3.6-.018Zm-5.406-.018a1.8,1.8,0,1,0,1.808-1.79A1.8,1.8,0,0,0,17.394,27.619Zm-5.388,0a1.8,1.8,0,1,0,1.808-1.79A1.8,1.8,0,0,0,12.006,27.619ZM32.45,30.412A13.766,13.766,0,0,0,34.222,23.7a12.174,12.174,0,0,0-.125-1.808,6.123,6.123,0,0,0,6.641-.268l2.183-1.486L52.606,30.2a1.742,1.742,0,0,1-.7.215ZM44.425,19.134,53.7,12.958V28.694Zm-9.756.985-1.164-.77a13.559,13.559,0,0,0-12.047-9.184L34.669.786a4.334,4.334,0,0,1,4.976,0L53.7,10.757,39.753,20.012a4.323,4.323,0,0,1-5.084.107ZM35.08,6.46a4.193,4.193,0,0,0-1.718,1.629,4.489,4.489,0,0,0-.608,2.345,4.73,4.73,0,0,0,.608,2.363,4.3,4.3,0,0,0,1.7,1.647,5.255,5.255,0,0,0,2.524.591,5.752,5.752,0,0,0,1.235-.126,4.182,4.182,0,0,0,1.075-.358l-.322-.931a4.252,4.252,0,0,1-1.969.447,3.958,3.958,0,0,1-1.933-.465,3.122,3.122,0,0,1-1.307-1.289,3.869,3.869,0,0,1-.465-1.9,3.783,3.783,0,0,1,.465-1.862,3.128,3.128,0,0,1,1.307-1.289A4.08,4.08,0,0,1,37.623,6.8a4.292,4.292,0,0,1,1.951.429,3.187,3.187,0,0,1,1.307,1.218,3.464,3.464,0,0,1,.465,1.79,3.246,3.246,0,0,1-.2,1.271c-.125.286-.286.43-.519.43-.322,0-.465-.215-.465-.644V8.053H38.786v.609A2.126,2.126,0,0,0,37.229,8a2.19,2.19,0,0,0-1.164.322,2.383,2.383,0,0,0-.841.895,3,3,0,0,0,0,2.632,2.385,2.385,0,0,0,.841.9,2.154,2.154,0,0,0,1.164.322,1.89,1.89,0,0,0,1.719-.877,1.252,1.252,0,0,0,.518.644,1.613,1.613,0,0,0,.86.215,1.816,1.816,0,0,0,1.074-.322,2.4,2.4,0,0,0,.734-.967,4.275,4.275,0,0,0-2.041-5.317,5.692,5.692,0,0,0-5.012.018ZM3.432,20.584A4.068,4.068,0,0,1,.049,15.948,14.437,14.437,0,0,1,16.535,3.937a4,4,0,0,1,2.9,5.979.507.507,0,0,1-.448.232l-5.836.376a.8.8,0,0,1-.411-.2,3.412,3.412,0,0,1-.608-1.092,9.085,9.085,0,0,0-3.2,1.522,9.017,9.017,0,0,0-2.435,2.578,3.335,3.335,0,0,1,.9.913.44.44,0,0,1,.071.483L5.294,20.209c-.159.329-.731.426-1.238.426A3.7,3.7,0,0,1,3.432,20.584Zm33.206-9.058a1.434,1.434,0,0,1-.34-1.021,1.387,1.387,0,0,1,.34-1,1.17,1.17,0,0,1,.895-.358,1.126,1.126,0,0,1,.9.375,1.374,1.374,0,0,1,.358,1,1.446,1.446,0,0,1-.358,1.021,1.2,1.2,0,0,1-.9.358A1.147,1.147,0,0,1,36.638,11.526Z"
              transform="translate(0)"
            />
          </svg>
        </div>

        <!-- Profile -->
        <div
          class="nav__item"
          :class="[activeComponent == 'Profile' ? 'active' : '']"
          @click="showDrawer({ name: 'Profile' })"
        >
          <img src="@/assets/images/profile.png" alt />
        </div>
      </div>
      <!-- <div class="toolbar text-3xl text-gray-100 md:hidden">
        <header-dropdown @onShowDrawer="handleShowDrawer"></header-dropdown>
      </div> -->
    </div>
    <!-- <transition name="drawer">
      <component :is="activeComponent" @closeDrawer="activeComponent = null"></component>
    </transition> -->
    <!-- <transition name="drawer"> -->
    <div
      ref="drawerWrapper"
      :class="activeComponent ? 'open' : ''"
      class="drawer-wrapper md:flex justify-end"
    >
      <transition name="drawer">
        <component
          :is="activeComponent"
          :theme="theme"
          :secondary="secondary"
          @closeDrawer="activeComponent = null"
          @openSubDrawer="showSubDrawer($event)"
          @openDrawer="showDrawer($event)"
        ></component>
      </transition>
      <!-- <component
          :is="activeComponent"
          @closeDrawer="activeComponent = null"
        ></component> -->
      <transition name="subdrawer">
        <component
          class="absolute sm:relative secondary-component"
          :is="secondaryComponent"
          :theme="theme"
          :secondary="secondary"
          @closeDrawer="secondaryComponent = null"
          @openSubDrawer="showSubDrawer($event)"
          @openDrawer="showDrawer($event)"
        ></component>
      </transition>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";
import Reports from "@/components/drawers/Reports";
import Notification from "@/components/drawers/Notification";
import Chat from "@/components/drawers/Chat";
import ChatProfile from "@/components/drawers/chat/ChatProfile";
import ChatHistory from "@/components/drawers/chat/ChatHistory";
import ChatSingle from "@/components/drawers/chat/ChatSingle";
import Profile from "@/components/drawers/Profile";
import HeaderDropdown from "./HeaderDropdown.vue";

export default {
  components: {
    SearchBox,
    Reports,
    Notification,
    Chat,
    Profile,
    HeaderDropdown,
    ChatProfile,
    ChatHistory,
    ChatSingle,
  },
  data() {
    return {
      activeComponent: null,
      secondaryComponent: null,
      secondary: false,
      theme: "gray",
    };
  },

  methods: {
    showDrawer(event) {
      if (event.name !== this.activeComponent) {
        this.secondaryComponent = null;
        if (this.activeComponent !== null) {
          this.activeComponent = null;
          this.theme = null;
          setTimeout(() => {
            this.activeComponent = event.name;
            this.theme = event.theme;
            this.secondary = false;
          }, 500);
        } else {
          this.activeComponent = event.name;
          this.theme = event.theme;
          this.secondary = false;
        }
      } else {
        // const drawerWrapper = this.$refs.drawerWrapper;
        // drawerWrapper.classList.add('drawer-leave-active drawer-leave-to');
        // setTimeout(() => {
        this.secondaryComponent = null;
        this.activeComponent = null;
        this.theme = null;
        this.secondary = false;
        // }, 500);
      }
    },
    showSubDrawer(event) {
      if (event.name !== this.secondaryComponent) {
        if (this.secondaryComponent !== null) {
          this.secondaryComponent = null;
          this.theme = null;
          this.secondary = false;
          setTimeout(() => {
            this.secondaryComponent = event.name;
            this.theme = event.theme;
            this.secondary = true;
          }, 100);
        } else {
          this.secondaryComponent = event.name;
          this.theme = event.theme;
          this.secondary = true;
        }
      } else {
        this.secondaryComponent = null;
        this.secondary = false;
      }
    },
    handleShowDrawer(value) {
      this.showDrawer(value);
    },
  },
};
</script>

<style lang="scss">
.header {
  height: 100px;
}

.nav {
  &__item {
    @apply w-14 h-14 rounded-full flex justify-center items-center mx-0 md:mx-2 lg:mx-5;
    cursor: pointer;
    transition: all 1s ease-in-out;
    img {
      height: 30px;
    }
  }

  &__item.active {
    @apply bg-gray-500;
    svg {
      @apply text-dark;
    }
  }
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.5s ease-in-out;
}

.drawer-enter,
.drawer-leave-to {
  transform: translateX(100%);
}

.drawer-enter-to,
.drawer-leave {
  transform: translateX(0);
}

.subdrawer-enter-active,
.subdrawer-leave-active {
  transition: all 1s ease-in-out;
}

.subdrawer-enter,
.subdrawer-leave-to {
  // max-width: 0%;
  transform: translateX(100%);
}

.subdrawer-enter-to,
.subdrawer-leave {
  // max-width: 100%;
  transform: translateX(0);
}

.drawer-wrapper {
  position: absolute;
  height: calc(100vh - 100px);
  top: 100%;
  right: 0;
  max-width: 100%;

  // animation
  z-index: 300;
  // transition: all 1s ease-in-out;
  // transform: translateX(100%);
  &.open {
    // max-width: 100%;
    // transform: translateX(0%);
  }

  overflow-y: auto;
  overflow-x: hidden;
  /* this will hide the scrollbar in mozilla based browsers */
  overflow: -moz-scrollbars-none;
  /* this will hide the scrollbar in internet explorers */
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  .drawer {
    @apply bg-gray-800 rounded-tl-3xl rounded-bl-3xl;
    min-width: 500px;
    max-width: 500px;
    overflow-y: auto;
    height: 100%;
    overflow-x: hidden;
    /* this will hide the scrollbar in mozilla based browsers */
    overflow: -moz-scrollbars-none;
    /* this will hide the scrollbar in internet explorers */
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none; /* Firefox 64 */
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
    @media (max-width: 640px) {
      top: 0;
      right: 0;
      min-width: unset;
      max-width: 100vw;
    }
    &__top {
      @apply flex p-6;
    }
  }
}
</style>