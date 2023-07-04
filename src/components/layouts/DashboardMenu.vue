<template>
<div>
  <div
    class="font-serif flex flex-wrap bg-gray-100 items-center rounded-lg sm:rounded-full h-auto sm:h-10 shadow mt-5 lg:mt-0 sm:w-max"
  >
    <router-link to="/dashboard" class="router-link px-2 sm:px-3">
      <svg
        id="dashboard"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-gray-900"
        width="16"
        height="16"
        viewBox="0 0 25 25"
      >
        <path
          id="Path_2022"
          data-name="Path 2022"
          d="M9.635,0H1.823A1.825,1.825,0,0,0,0,1.823V6.51A1.825,1.825,0,0,0,1.823,8.333H9.635A1.825,1.825,0,0,0,11.458,6.51V1.823A1.825,1.825,0,0,0,9.635,0Zm0,0"
        />
        <path
          id="Path_2023"
          data-name="Path 2023"
          d="M9.635,213.332H1.823A1.825,1.825,0,0,0,0,215.155v10.938a1.825,1.825,0,0,0,1.823,1.823H9.635a1.825,1.825,0,0,0,1.823-1.823V215.155A1.825,1.825,0,0,0,9.635,213.332Zm0,0"
          transform="translate(0 -202.915)"
        />
        <path
          id="Path_2024"
          data-name="Path 2024"
          d="M286.968,341.332h-7.812a1.825,1.825,0,0,0-1.823,1.823v4.688a1.825,1.825,0,0,0,1.823,1.823h7.813a1.825,1.825,0,0,0,1.823-1.823v-4.687A1.825,1.825,0,0,0,286.968,341.332Zm0,0"
          transform="translate(-263.79 -324.665)"
        />
        <path
          id="Path_2025"
          data-name="Path 2025"
          d="M286.968,0h-7.812a1.825,1.825,0,0,0-1.823,1.823V12.76a1.825,1.825,0,0,0,1.823,1.823h7.813a1.825,1.825,0,0,0,1.823-1.823V1.823A1.825,1.825,0,0,0,286.968,0Zm0,0"
          transform="translate(-263.79)"
        />
      </svg>
      <span class="background__circle bg-gray-dark"></span>
    </router-link>
    <router-link
      to="/dashboard/enquity"
      class="router-link px-10 xl:px-12 text-lg"
    >
      <span>Equity</span>
      <span class="background__circle bg-gray-dark"></span>
    </router-link>

    <router-link
      to="/dashboard/asset"
      class="router-link px-10 xl:px-12 text-lg"
    >
      <span>Assets</span>
      <span class="background__circle bg-gray-dark"></span>
    </router-link>

    <router-link
      to="/dashboard/liabilities"
      class="router-link px-10 xl:px-12 text-lg"
    >
      <span>Liabilities</span>
      <span class="background__circle bg-gray-dark"></span>
    </router-link>

    <router-link
      to="/dashboard/combo"
      class="router-link px-10 xl:px-12 text-lg"
    >
      <span>Combo</span>
      <span class="background__circle bg-gray-dark"></span>
    </router-link>
  </div>
  <slot></slot>
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
      @apply text-gray-dark;
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