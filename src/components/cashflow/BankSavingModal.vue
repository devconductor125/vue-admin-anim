<template>
  <div
    v-if="open"
    id="modal"
    class="modal overflow-y-auto w-full h-full absolute top-0 left-0 shadow-xl"
  >
    <div
      class="modal__body card flex flex-col bg-orange-100 rounded-l-6xl"
      :class="collapse ? 'lg:pl-68' : ''"
    >
      <div
        class="card__title flex justify-between items-center"
        :class="collapse ? '' : 'lg:ml-60'"
      >
        <div class="flex-grow">
          <wells-fargo-tab-menu @change="changeContent"></wells-fargo-tab-menu>
        </div>
        <div class="cursor-pointer h-5 w-5 ml-auto" @click="close">
          <img src="@/assets/images/close.png" alt="" />
        </div>
      </div>
      <div class="card__body p-1 flex-grow overflow-y-auto overflow-x-hidden">
        <h1>Bank Saving</h1>
        <transition name="fadeIn" mode="out-in">
          <component :is="activeContent"></component>
        </transition>
      </div>
      <!-- <div class="card__footer flex justify-end">
        <button
          class="cursor-pointer bg-gray-default px-4 py-1 mx-4 rounded-full"
          @click="close"
        >
          Cancel
        </button>
        <button
          class="cursor-pointer bg-gray-default px-4 py-1 mx-4 rounded-full"
          @click="false"
        >
          Add
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import WellsFargoTabMenu from "@/components/cashflow/wells-fargo/WellsFargoTabMenu";
import WellsFargoDetails from "@/components/cashflow/wells-fargo/information/WellsFargoDetails.vue";
import WellsFargoAnalyze from "@/components/cashflow/wells-fargo/information/WellsFargoAnalyze.vue";
import WellsFargoCostValue from "@/components/cashflow/wells-fargo/information/WellsFargoCostValue.vue";
import WellsFargoDocuments from "@/components/cashflow/wells-fargo/information/WellsFargoDocuments.vue";
import WellsFargoTransfer from "@/components/cashflow/wells-fargo/move-money/WellsFargoTransfer.vue";
import WellsFargoSweep from "@/components/cashflow/wells-fargo/move-money/WellsFargoSweep.vue";
import WellsFargoSend from "@/components/cashflow/wells-fargo/move-money/WellsFargoSend.vue";
import WellsFargoBillPay from "@/components/cashflow/wells-fargo/move-money/WellsFargoBillPay.vue";
export default {
  components: {
    WellsFargoTabMenu,
    WellsFargoDetails,
    WellsFargoDocuments,
    WellsFargoCostValue,
    WellsFargoAnalyze,
    WellsFargoTransfer,
    WellsFargoSweep,
    WellsFargoSend,
    WellsFargoBillPay,
  },
  props: {
    open: {
      type: Boolean,
      required: false,
      default: true,
    },
    collapse: {
      type: Boolean,
      required: false,
      default: true,
    },
    module: {
      type: String,
      required: false,
      default: 'wells-fargo-details',
    },
  },
  data() {
    return {
      activeTab: "wells-fargo-details",
      activeContent: "wells-fargo-details",
    };
  },
  mounted() {
    const modal = document.getElementById("modal");
    setTimeout(() => {
      modal.classList.add("show");
    }, 100);
  },
  methods: {
    changeContent($event) {
      this.activeTab = $event.tab;
      this.activeContent = $event.content;
    },
    close() {
      const modal = document.getElementById("modal");
      modal.classList.remove("show");
      setTimeout(() => {
        this.$emit("close", "");
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @apply rounded-3xl;
  background: rgba(78, 57, 57, 0);
  z-index: 100;
  .report__menu {
    .report__btn {
      outline: none;
      position: relative;
      > svg {
        position: relative;
        transition: color 0.5s ease-in-out;
        z-index: 100;
      }
      .background__circle {
        top: 0px;
        left: 0px;
        transform: scale(0);
        -ms-transform: scale(0); /* IE 9 */
        -webkit-transform: scale(0);
        transition: transform 0.5s ease-in-out;
        z-index: 1;
        @apply absolute h-full w-full rounded-full inline-block;
      }
      &:hover,
      &.active {
        > svg {
          @apply text-gray-dark;
        }
        .background__circle {
          transform: scale(1);
          -ms-transform: scale(1); /* IE 9 */
          -webkit-transform: scale(1);
        }
      }
    }
  }
  .card {
    width: 100%;
    height: 100%;
    opacity: 0;

    transform: translateY(-25%);
    transition: all 0.5s ease-in-out;
    &.rounded-l-3xl {
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
    }
    .card__title {
      transition: all 0.5s ease-in-out;
    }
    .card__body {
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
  }
  &.show {
    .modal__body {
      opacity: 1;
      transform: translateY(0%);
    }
  }
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.6s ease-out, transform 0.6s ease-in;
}

.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0.3;
  transform: translateX(100%);
}

.fadeIn-enter-to,
.fadeIn-leave {
  opacity: 1;
  transform: translateX(0);
}
</style>