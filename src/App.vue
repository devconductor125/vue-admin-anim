<template>
    <div
        :class="$route.meta.background  ? $route.meta.background : 'flex bg-gray-500'"
        id="wrapper"
    >
        <the-sidebar></the-sidebar>
        <transition name="mobile-menu">
            <mobile-menu v-if="sidebar" @hideSidebar="hideSidebar"></mobile-menu>
        </transition>
        <div class="w-full h-full">
            <the-header @showSidebar="showSidebar"></the-header>
            <!-- Content goes here -->
            <div class="router-view p-4 main">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";
import TheSidebar from "@/components/layouts/TheSidebar";
import MobileMenu from "@/components/layouts/MobileMenu";

export default {
    name: "Home",
    components: {
        TheHeader,
        TheSidebar,
        MobileMenu,
        // TheHeaderNew,
    },
    data() {
        return {
            sidebar: false,
        };
    },
    methods: {
        showSidebar() {
            this.sidebar = true;
        },
        hideSidebar() {
            this.sidebar = false;
        },
    },
};
</script>

<style lang="scss">
html{
    overflow: hidden;
}

.main{
    // margin-top: 100px;
    height: calc(100vh - 100px);
    overflow: auto;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
    // border: none;
    outline: none;
}


.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity .5s;
}

.mobile-menu-enter-active > .mobile-menu, .mobile-menu-leave-active > .mobile-menu {
  transition: transform .5s;
}
.mobile-menu-enter > .mobile-menu, .mobile-menu-leave-to > .mobile-menu {
  transform: translateX(-250px);
}


</style>
