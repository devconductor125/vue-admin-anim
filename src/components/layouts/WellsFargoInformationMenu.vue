<template>
  <div
    class="flex flex-wrap font-bold bg-white items-center rounded-lg sm:rounded-full h-10 shadow mt-5 lg:mt-0 sm:w-max"
  >
    <router-link
      to="/cash-flows/assets/cash/wells-fargo/information"
      class="router-link px-4 xl:px-4 text-lg"
    >
      <span>Details</span>
      <span class="background__circle bg-orange-900"></span>
    </router-link>

    <router-link
      to="/cash-flows/assets/cash/wells-fargo/information/documents"
      class="router-link px-4 xl:px-4 text-lg"
    >
      <span>Documents</span>
      <span class="background__circle bg-orange-900"></span>
    </router-link>

    <router-link
      to="/cash-flows/assets/cash/wells-fargo/information/analyze"
      class="router-link px-4 xl:px-4 text-lg"
    >
      <span>Analyze</span>
      <span class="background__circle bg-orange-900"></span>
    </router-link>

    <router-link
      to="/cash-flows/assets/cash/wells-fargo/information/cost-value"
      class="router-link px-4 xl:px-4 text-lg"
    >
      <span>Cost Value</span>
      <span class="background__circle bg-orange-900"></span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.router-link {
  outline: none;
  position: relative;
  overflow: hidden;
  @apply rounded-full h-full flex items-center justify-center sm:py-0;
    > svg,
    > span {
      position: relative;
      transition: color 0.5s ease-in-out;
      z-index: 10;
      @apply text-orange-900;
    }

  .background__circle {
    top: 0px;
    left: 0px;
    transform: translateX(-101%);
    -ms-transform: translateX(-101%); /* IE 9 */
    -webkit-transform: translateX(-101%);
    transition: transform 0.5s ease-in-out;
    z-index: 1;
    @apply absolute h-full w-full rounded-full inline-block;
  }
//   &:hover,
  &.router-link-exact-active {
    > svg,
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
</style>