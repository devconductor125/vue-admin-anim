<template>
  <div>
    <div class="flex justify-between my-1">
      <div>Name</div>
      <div class="font-bold text-orange-default">
        Trip myself 10% at Resturaunts
      </div>
    </div>
    <div class="flex justify-between my-1">
      <div>Sweep Trigger</div>
      <div class="dropdown relative w-64">
        <button
          class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500"
          @click.self="expand($event)"
        >
          <span class="pointer-events-none">Purchase</span>
          <i
            class="fas fa-caret-down dropdown-icon pointer-events-none self-center"
          ></i>
        </button>
        <div class="dropdown__menu absolute bg-orange-900">
          <ul>
            <li>July</li>
            <li>June</li>
            <li>May</li>
            <li>April</li>
            <li>March</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-between my-1">
      <div>Spending Categories</div>
      <div class="dropdown relative w-64">
        <button
          class="w-full bg-orange-900 dropdown-btn rounded-full flex justify-between px-4 py-1 transition-border-radius duration-500"
          @click.self="expand($event)"
        >
          <span class="pointer-events-none">Resturaunts</span>
          <i
            class="fas fa-caret-down dropdown-icon pointer-events-none self-center"
          ></i>
        </button>
        <div class="dropdown__menu absolute bg-orange-900">
          <ul>
            <li>July</li>
            <li>June</li>
            <li>May</li>
            <li>April</li>
            <li>March</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
    expand(event) {
      // const dropdown = event.target.nextElementSibling;
      const dropdown = event.target.parentElement;
      dropdown.classList.toggle("expand");
      if (dropdown.classList.contains("expand")) {
        event.target.classList.add("rounded-t-full");
        event.target.classList.remove("rounded-full");
      } else {
        event.target.classList.remove("rounded-t-full");
        event.target.classList.add("rounded-full");
      }
      // const targetDropdown = event.target.parentElement;
      // targetDropdown.classList.toggle("expand");
    },
    collapse() {
      this.$refs["router-view"].classList.toggle("lg:ml-72");
    },
  },
};
</script>

<style lang="scss" scoped>
.table__wrapper,
.card table {
  overflow-y: auto;
  /* this will hide the scrollbar in mozilla based browsers */
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  /* this will hide the scrollbar in internet explorers */
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}

// Tabs menu
.cashflow__content__tabs,
.cashflow__type__tabs,
.chart__content__tabs,
.chart__trend__type__tabs,
.cashflow__gridtype__tabs {
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

// dropdown menu
.dropdown {
  button {
    outline: none;
    @apply text-white;
  }
  .dropdown-icon {
    pointer-events: none;
  }
  .dropdown__menu {
    @apply w-full rounded-b-3xl;
    overflow-y: auto;
    /* this will hide the scrollbar in mozilla based browsers */
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
    /* this will hide the scrollbar in internet explorers */
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none; /* Firefox 64 */
    max-height: 0;
    // transform: scaleY(0);
    transform-origin: top;
    z-index: 100;
    transition: transform 0.5s linear, max-height 0.5s linear;
    @apply px-4 text-gray-100;
  }

  &.expand {
    .dropdown__menu {
      max-height: 200px;
      // transform:scaleY(1);
    }
    .dropdown-icon {
      transform: rotate(180deg) !important;
    }
  }
}
</style>