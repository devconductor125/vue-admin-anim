<template>
  <div class="drawer font-sans overflow-y-auto">
    <div class="drawer__top">
      <span class="cursor-pointer h-5 w-5">
        <img
          src="@/assets/images/chatnowBack.png"
          alt=""
          @click="$emit('closeDrawer')"
        />
      </span>
      <span
        class="cursor-pointer h-5 w-5 ml-auto"
        @click="$emit('closeDrawer')"
      >
        <img src="@/assets/images/close.png" alt="" />
      </span>
    </div>
    <div class="advisors relative px-10">
      <div class="text-gray-700 text-sm my-2 font-base">Profile</div>
      <!-- <span class="px-10 text-gray-700 text-sm">Select Advisor</span> -->
      <div class="flex items-center">
        <img
          :class="`border-${theme}-default`"
          class="w-20 advisor rounded-full border-4 cursor-pointer"
          src="@/assets/images/robins.jpg"
          alt=""
        />
        <div class="flex-grow ml-4">
          <h2 class="text-gray-default">Chad Gordon</h2>
          <h4 :class="`text-${theme}-default`">Wealth Advisor</h4>
        </div>
      </div>
    </div>
    <div class="chat__history px-10">
      <ul class="conversations__wrapper text-sm">
        <li class="conversation flex items-center my-4">
          <div
            :class="`text-gray-dark bg-${theme}-default`"
            class="conversation__avatar inline-flex text-2xl justify-center items-center h-10 align-baseline w-10 rounded-full"
          >
            <i class="fa fa-phone-alt"></i>
            <!-- <i class="fad fa-phone-alt"></i> -->
          </div>
          <div class="contacts">
            <div class="single-contact py-1">
              <span class="mx-4 text-gray-default"> 303-785-3838 </span>
              <span
                :class="`text-gray-dark bg-${theme}-default`"
                class="inline-flex items-center justify-center mx-4 px-2 py-1 ml-1 text-xs font-bold leading-none rounded-full"
              >
                Main
              </span>
            </div>
            <div class="single-contact">
              <span class="mx-4 text-gray-default"> 889-333-1967 </span>
              <span
                :class="`text-gray-dark bg-${theme}-default`"
                class="inline-flex items-center justify-center mx-4 px-2 py-1 ml-1 text-xs font-bold leading-none rounded-full"
              >
                Toll Free
              </span>
            </div>
          </div>
        </li>
        <li class="conversation flex items-center my-4">
          <div
            :class="`text-gray-dark bg-${theme}-default`"
            class="conversation__avatar inline-flex text-2xl justify-center items-center h-10 align-baseline w-10 rounded-full"
          >
            <i class="fas fa-at"></i>
          </div>
          <div class="contacts">
            <div class="single-contact py-1">
              <span class="mx-4 text-gray-default">
                admin@greenstaradvisors.com
              </span>
            </div>
          </div>
        </li>
        <li class="conversation flex items-center my-4">
          <div
            :class="`text-gray-dark bg-${theme}-default`"
            class="conversation__avatar inline-flex text-2xl justify-center items-center h-10 align-baseline w-10 rounded-full"
          >
            <i class="fas fa-envelope"></i>
          </div>
          <div class="contacts">
            <div class="single-contact py-1">
              <p class="mx-4 text-gray-default">GreenStar Advisors</p>
              <p class="mx-4 text-gray-default">6494 S Quebec St</p>
              <p class="mx-4 text-gray-default">Centennial, CO 80111</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="chat__now px-10">
      <div class="flex items-center">
        <div class="border-1 flex-grow"></div>
        <div class="px-4 text-sm text-gray-default">or</div>
        <div class="border-1 flex-grow"></div>
      </div>
      <div class="flex justify-between items-center w-full">
        <div class="text-center mt-4">
          <img
            class="inline-block rounded-full w-12"
            src="@/assets/images/appointment.png"
            alt=""
          />
          <div class="text-center py-2 text-sm text-gray-default">Appointment</div>
        </div>
        <div class="text-center mt-4">
          <img
            class="cursor-pointer inline-block rounded-full w-12"
            src="@/assets/images/ChatNow.png"
            alt=""
            @click="$emit('openDrawer', { name: 'ChatSingle', theme: 'gray' })"
          />
          <div class="text-center py-2 text-sm text-gray-default">Chat Now</div>
        </div>
        <div class="text-center mt-4">
          <img
            class="inline-block rounded-full w-12"
            src="@/assets/images/about.png"
            alt=""
          />
          <div class="text-center py-2 text-sm text-gray-default">About</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
      default: "gray",
    },
  },
};
</script>

<style lang="scss" scoped>
.border-1 {
  border: 1px solid;
  @apply border-gray-default;
}
</style>