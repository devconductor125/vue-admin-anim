<template>
  <div class="tab__content__wrapper">
    <div id="accordion">
      <div class="dropdown my-2">
        <button
          class="w-full bg-gray-dark dropdown-btn rounded-full flex justify-between px-4 py-2 transition-border-radius duration-500"
          @click.self="expand($event)"
        >
          <span class="pointer-events-none">Bank of America</span>
          <i class="fas fa-caret-down dropdown-icon pointer-events-none self-center"></i>
        </button>
        <div class="dropdown__menu">
          <ul>
            <li>July 2020</li>
            <li>June 2020</li>
            <li>May 2020</li>
            <li>April 2020</li>
            <li>March 2020</li>
          </ul>
        </div>
      </div>
      <div class="dropdown my-2">
        <button
          class="w-full bg-gray-dark dropdown-btn rounded-full flex justify-between px-4 py-2 transition-border-radius duration-500"
          @click.self="expand($event)"
        >
          <span class="pointer-events-none">Key Bank</span>
          <i class="fas fa-caret-down dropdown-icon pointer-events-none self-center"></i>
        </button>
        <div class="dropdown__menu">
          <ul>
            <li>July 2020</li>
            <li>June 2020</li>
            <li>May 2020</li>
            <li>April 2020</li>
            <li>March 2020</li>
          </ul>
        </div>
      </div>
      <div class="dropdown my-2">
        <button
          class="w-full bg-gray-dark dropdown-btn rounded-full flex justify-between px-4 py-2 transition-border-radius duration-500"
          @click.self="expand($event)"
        >
          <span class="pointer-events-none">Paypal</span>
          <i class="fas fa-caret-down dropdown-icon pointer-events-none self-center"></i>
        </button>
        <div class="dropdown__menu">
          <ul>
            <li>July 2020</li>
            <li>June 2020</li>
            <li>May 2020</li>
            <li>April 2020</li>
            <li>March 2020</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  //   HeaderDropdown,
  // },
  data() {
    return {
      activeComponent: "cash-report",
    };
  },

  methods: {
    expand(event) {
      const accordion = document.getElementById("accordion");
      const targetDropdown = event.target.parentElement;
      if (targetDropdown.classList.contains("expand")) {
        targetDropdown.classList.toggle("expand");
        return;
      } else {
        const activeDropdown = accordion.querySelector(".dropdown.expand");
        if (activeDropdown) activeDropdown.classList.toggle("expand");
        setTimeout(() => {
          targetDropdown.classList.toggle("expand");
        }, 500);;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tab__content__wrapper {
  transition: all 1s ease-in-out;
}

.dropdown {
  button {
    outline: none;
  }
  .dropdown-icon {
    pointer-events: none;
  }
  .dropdown__menu {
    @apply w-64;
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