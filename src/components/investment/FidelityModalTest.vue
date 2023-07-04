<template>
  <div
    v-if="open"
    id="modal"
    class="modal overflow-y-auto w-full h-full absolute top-0 left-0"
  >
    <div
      class="modal__body card flex flex-col"
      :class="collapse ? 'lg:pl-68' : ''"
    >
      <div
        class="card__title flex justify-between items-center"
        :class="collapse ? '' : 'lg:ml-60'"
      >
        <div class="flex-grow">
          <green-star-tab-menu @change="changeContent"></green-star-tab-menu>
        </div>
        <div class="cursor-pointer h-5 w-5 ml-auto" @click="close">
          <img src="@/assets/images/close.png" alt="" />
        </div>
      </div>
      <div class="card__body p-1 flex-grow overflow-y-auto overflow-x-hidden">
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
import InvestmentTabMenu from "@/components/investment/InvestmentTabMenu";
import InvestmentDetails from "@/components/investment/information/InvestmentDetails.vue";
import InvestmentAnalyze from "@/components/investment/information/InvestmentAnalyze.vue";
import InvestmentCostValue from "@/components/investment/information/InvestmentCostValue.vue";
import InvestmentDocuments from "@/components/investment/information/InvestmentDocuments.vue";
import InvestmentTransfer from "@/components/investment/move-money/InvestmentTransfer.vue";
import InvestmentSweep from "@/components/investment/move-money/InvestmentSweep.vue";
import InvestmentSend from "@/components/investment/move-money/InvestmentSend.vue";
import InvestmentBillPay from "@/components/investment/move-money/InvestmentBillPay.vue";
export default {
  components: {
    InvestmentTabMenu,
    InvestmentDetails,
    InvestmentDocuments,
    InvestmentCostValue,
    InvestmentAnalyze,
    InvestmentTransfer,
    InvestmentSweep,
    InvestmentSend,
    InvestmentBillPay,
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
      default: 'green-star-details',
    },
  },
  data() {
    return {
      activeTab: "green-star-details",
      activeContent: "green-star-details",
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
        this.$emit("close");
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
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
    background: rgba(198, 217, 174, 1);

    transform: translateY(-25%);
    transition: all 0.5s ease-in-out;
    .card__title {
      transition: all 0.5s ease-in-out;
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