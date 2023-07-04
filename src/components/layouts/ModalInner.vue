<template>
  <div
    v-if="open"
    id="modal"
    class="modal overflow-y-auto w-full absolute -top-0 left-0 flex items-center justify-center"
  >
    <component :is="activeComponent"></component>   
  </div>
</template>

<script>
import WellsFargo from "@/components/cashflow/WellsFargo.vue";
import BankSaving from "@/components/cashflow/BankSaving.vue";
export default {
  components: {
    WellsFargo,
    BankSaving,
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
      required: true,
      default: true,
    },
  },
  data() {
    return {
      activeComponent: null,
    };
  },
  mounted() {
    const modal = document.getElementById("modal");
    setTimeout(() => {
      modal.classList.add("show");
    }, 100);
  },
  methods: {
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
  // max-height: 600px;
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
    min-height: 100%;
    opacity: 0;
    background: rgba(232, 101, 1, 1);

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
</style>