<template>
  <div
    class="font-serif flex flex-wrap bg-white items-center rounded-lg sm:rounded-full h-auto sm:h-10 shadow mt-5 lg:mt-0 sm:w-max"
  >
    <router-link
      to="/cash-flows/assets/investment/greenstar"
      class="router-link px-4 xl:px-4 text-lg"
    >
      <span>Details</span>
      <span class="background__circle bg-orange-900"></span>
    </router-link>

    <router-link
      to="/cash-flows/assets/investment/greenstar/documents"
      class="router-link px-4 xl:px-4 text-lg"
    >
      <span>Documents</span>
      <span class="background__circle bg-orange-900"></span>
    </router-link>

    <router-link
      to="/cash-flows/assets/investment/greenstar/analyze"
      class="router-link px-4 xl:px-4 text-lg"
    >
      <span>Analyze</span>
      <span class="background__circle bg-orange-900"></span>
    </router-link>

    <router-link
      to="/cash-flows/assets/investment/greenstar/cost-value"
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
// .router-link {
//     background-color: none;
//     transition: background-color 0.5s ease-in-out;
//     @apply rounded-full h-full flex items-center justify-center py-2 sm:py-0;
//     &.router-link-exact-active {
//         @apply bg-gray-dark;
//         svg, span {
//             @apply text-gray-100;
//         }
//     }
// }
.router-link {
  outline: none;
  position: relative;
  overflow: hidden;
  @apply rounded-full h-full flex items-center justify-center py-2 sm:py-0;
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