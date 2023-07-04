<template>
  <div class="drawer font-sans">
    <div class="drawer__top">
      <span
        class="cursor-pointer h-5 w-5 ml-auto"
        @click="$emit('closeDrawer')"
      >
        <img src="@/assets/images/close.png" alt="" />
      </span>
    </div>
    <span class="text-gray-700 text-lg py-8 px-10 my-2 font-base">Alerts</span>

    <div class="alert px-5">
      <div class="alerts">
        <div class="alerts-textLeft">
          <p class="alerts-text text-white">Financial Report</p>
          <p class="alerts-text mt-3 text-gray-700">
            This financial report of last week...
          </p>
        </div>
        <div class="alerts-textRight">
          <span class="badge mx-4">2</span>
          <p class="alerts-text mt-2 text-gray-700">1 day ago</p>
        </div>
      </div>

      <div class="alerts">
        <div class="alerts-textLeft">
          <p class="alerts-text text-white">GreenStar</p>
          <p class="alerts-text mt-2 text-gray-700">
            This financial report of last week...
          </p>
        </div>
        <div class="alerts-textRight">
          <span class="badge mx-4">2</span>
          <p class="alerts-text mt-2 text-gray-700">1 day ago</p>
        </div>
      </div>

      <div class="alerts">
        <div class="alerts-textLeft">
          <p class="alerts-text text-white">Last month report</p>
          <p class="alerts-text mt-2 text-gray-700">
            This financial report of last week...
          </p>
        </div>
        <div class="alerts-textRight">
          <p class="alerts-text mt-8 text-gray-700 flex">1 day ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.alerts {
  @apply flex justify-between font-thin hover:bg-gray-600 px-4 py-2 mt-4 rounded-lg cursor-pointer transition delay-100;
}
.alerts-text {
  @apply text-sm font-extralight;
}

.badge {
  @apply bg-green-default rounded-full h-6 w-6 flex items-center text-sm font-normal justify-center;
}
</style>