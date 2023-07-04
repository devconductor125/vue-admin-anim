<template>
  <div class="drawer font-sans overflow-auto">
    <div class="drawer__top flex justify-end">
      <router-link
        to="/settings"
        class="inline-block h-5 w-5 focus:outline-none"
      >
        <img
          src="@/assets/images/expand.png"
          alt=""
          @click="$emit('closeDrawer')"
        />
      </router-link>
      <div
        class="cursor-pointer h-5 w-5 inline-block mx-4"
        @click="$emit('closeDrawer')"
      >
        <img src="@/assets/images/close.png" alt="" />
      </div>
    </div>
    <span class="text-gray-700 text-sm py-8 px-10 my-2 font-base"
      >User Profile</span
    >

    <div class="content-flex py-4">
      <img
        class="inline rounded-full h-32 justify-center items-center"
        src="@/assets/images/gordon.jpg"
        alt="..."
      />
    </div>
    <span class="text-xl content-flex">Joe Johnson</span>
    <span class="content-flex text-sm">January 1, 1950</span>

    <div class="info px-5">
      <div class="content-text mt-4">
        <p>Primary Residence</p>
        <p>123 Main St</p>
        <p>Springfield U.S.A 12345-6789</p>
      </div>
      <div class="content-text">
        <p>Contact</p>
        <p>303-555-1234</p>
        <p>joejohnson@gmail.com</p>
      </div>
    </div>

    <div class="flex justify-center space-x-2 my-4">
      <router-link
        to="/settings"
        class="inline-block px-16 py-2 text-sm font-medium leading-6 text-center text-green-default transition border-2 border-green-default rounded-full focus:outline-none"
        @click="$emit('openDrawer', { name: 'ChatProfile', theme: 'orange' })"
      >
        Profile
      </router-link>

      <button
        class="inline-block px-16 py-2 text-sm font-medium leading-6 text-center text-white transition bg-green-default rounded-full focus:outline-none"
      >
        Sign Out
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content-flex {
  @apply justify-center items-center flex text-white px-10 font-thin;
}

.content-text {
  @apply text-white p-4 text-sm font-thin;
}
</style>