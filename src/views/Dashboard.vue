<template>
  <div class="content h-full flex flex-col font-sans relative">
    <div class="flex flex-col lg:flex-row justify-between gap-4 lg:gap-12">
      <balance-dropdown
        :active="modal"
        :height="parentHeight()"
        @expand="collapse"
        @select="toggleModal($event)"
      ></balance-dropdown>
      <div class="mx-auto flex-grow flex justify-between">
        <dashboard-menu> </dashboard-menu>
        <toolbar></toolbar>
      </div>
    </div>
    <div
      class="flex-grow page-content overflow-y-auto mt-4 relative"
      ref="page-content"
    >
      <router-view></router-view>
    </div>

    <!-- <transition name="slideTopIn"> -->
    <component
      :is="activeModuleName"
      ref="modal"
      @close="toggleModal"
      :collapse="balanceCollapse"
    ></component>
    <!-- </transition> -->
  </div>
</template>

<script>
import BalanceDropdown from "@/components/layouts/BalanceDropdown";
import DashboardMenu from "@/components/layouts/DashboardMenu";
import Toolbar from "@/components/layouts/Toolbar";
import WellsFargoModal from "@/components/cashflow/WellsFargoModal";
import BankSavingModal from "@/components/cashflow/BankSavingModal";
import GreenStarModal from "@/components/investment/GreenStarModal";
import FidelityModal from "@/components/investment/FidelityModal";

export default {
  components: {
    BalanceDropdown,
    DashboardMenu,
    Toolbar,
    FidelityModal,
    GreenStarModal,
    BankSavingModal,
    WellsFargoModal,
  },
  data() {
    return {
      modal: false,
      balanceCollapse: false,
      activeModuleName: "",
    };
  },
  computed: {
    // parentHeight() {
    //   // return this.$refs.modal.scrollHeight;
    //   const parent = document.querySelector('.content');
    //   console.log(parent ? parent.scrollHeight : 0);
    //   return parent ? parent.scrollHeight : 0;
    // }
  },
  methods: {
    parentHeight() {
      const parent = document.querySelector(".content");
      return parent ? parent.offsetHeight - 40 : 0;
    },
    toggleModal(name) {
      if (name !== "") {
        // console.log("inside", name);
        if (this.activeModuleName === name) {
          // this.$refs.modal.close();
          this.activeModuleName = name;
        } else {
          this.activeModuleName = name;
          this.$nextTick(() => (this.modal = true));
          // this.$refs.modal.close();
          // setTimeout(() => {
          //   this.activeModuleName = name;
          //   this.$nextTick(() => (this.modal = true));
          // }, 400);
        }
      } else {
        // if (this.modal === true) {
        //   this.$refs.modal.close();
        //   setTimeout(() => {
        //     this.activeModuleName = "";
        //     this.$nextTick(() => (this.modal = false));
        //   }, 400);
        // } else {
        // console.log("outside", name);
        this.$refs.modal.close();
        setTimeout(() => {
          this.activeModuleName = name;
          this.$nextTick(() => (this.modal = false));
        }, 400);
        // }
      }
      // this.modal = this.activeModuleName !== name;
      // this.activeModuleName = name;
    },
    collapse() {
      this.balanceCollapse = !this.balanceCollapse;
      this.$refs["page-content"].classList.toggle("lg:ml-72");
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  height: 100%;
  /* this will hide the scrollbar in mozilla based browsers */
  // overflow: -moz-scrollbars-none;
  /* this will hide the scrollbar in internet explorers */
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: 6px !important; /* Firefox 64 */
  scrollbar-color: #177294 #ececec; /* Firefox 64 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 5px #ECECEC;
    border-radius: 3px;
    background: #ececec;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #177294;
    border-radius: 3px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #00416b;
  }
}
.page-content {
  transition: margin 500ms;
}

.slideTopIn-enter-active,
.slideTopIn-leave-active {
  transition: opacity 0.6s ease-out, transform 0.6s ease-in;
}

.slideTopIn-enter,
.slideTopIn-leave-to {
  opacity: 0.3;
  transform: translateY(100%);
}

.slideTopIn-enter-to,
.slideTopIn-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>
