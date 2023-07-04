<template>
  <div class="tab__content__wrapper">
    <ul class="px-4 text-gray-100">
      <li>2020 Tax Return</li>
      <li>2019 Tax Return</li>
      <li>2018 Tax Return</li>
      <li>2017 Tax Return</li>
      <li>2016 Tax Return</li>
      <li>2015 Tax Return</li>
      <li>2014 Tax Return</li>
      <li>2013 Tax Return</li>
      <li>2012 Tax Return</li>
      <li>2011 Tax Return</li>
      <li>2010 Tax Return</li>
      <li>2009 Tax Return</li>
      <li>2008 Tax Return</li>
    </ul>
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
        }, 500);
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