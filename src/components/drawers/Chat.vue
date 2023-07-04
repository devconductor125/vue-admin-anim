<template>
  <div class="drawer flex flex-col font-sans overflow-y-auto">
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
    <div class="drawer__body flex-grow flex flex-col px-10">
      <div class="advisors relative">
        <span class="text-gray-700 text-sm">Select Advisor</span>
        <chat-advisors class="" @show="$emit('openDrawer', $event)"></chat-advisors>
      </div>
      <div class="chat__history">
        <div class="text-gray-700 text-sm my-2 font-base">
          General Inquiries
        </div>
        <ul class="conversations__wrapper text-sm">
          <li class="conversation flex items-center my-4">
            <div
              class="conversation__avatar inline-flex text-gray-dark text-2xl justify-center items-center h-10 align-baseline w-10 rounded-full bg-gray-default"
            >
              <i class="fa fa-phone-alt"></i>
              <!-- <i class="fad fa-phone-alt"></i> -->
            </div>
            <div class="contacts">
              <div class="single-contact py-1">
                <span class="mx-4 text-gray-default"> 303-785-3838 </span>
                <span
                  class="inline-flex items-center justify-center mx-4 px-2 py-1 ml-1 text-xs font-bold leading-none text-gray-dark bg-gray-default rounded-full"
                >
                  Main
                </span>
              </div>
              <div class="single-contact">
                <span class="mx-4 text-gray-default"> 889-333-1967 </span>
                <span
                  class="inline-flex items-center justify-center mx-4 px-2 py-1 ml-1 text-xs font-bold leading-none text-gray-dark bg-gray-default rounded-full"
                >
                  Toll Free
                </span>
              </div>
            </div>
          </li>
          <li class="conversation flex items-center my-4">
            <div
              class="conversation__avatar inline-flex text-gray-dark text-2xl justify-center items-center h-10 align-baseline w-10 rounded-full bg-gray-default"
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
              class="conversation__avatar inline-flex text-gray-dark text-2xl justify-center items-center h-10 align-baseline w-10 rounded-full bg-gray-default"
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
      <div class="chat__now flex-grow flex flex-col items-stretch">
        <div class="flex items-center flex-grow">
          <div class="border flex-grow"></div>
          <div class="px-4 text-gray-default text-sm">or</div>
          <div class="border flex-grow"></div>
        </div>
        <div class="text-center mt-4">
          <img
            class="inline-block rounded-full w-12 cursor-pointer"
            @click="$emit('openDrawer', {name: 'ChatHistory'})"
            src="@/assets/images/ChatNow.png"
            alt=""
          />
          <div class="text-center py-2 text-sm text-gray-default">Chat Now</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatAdvisors from "@/components/drawers/chat/ChatAdvisors";
export default {
  components: {
    ChatAdvisors,
  },
};
</script>

<style lang="scss">
.border-1 {
  border: 1px solid;
  @apply border-gray-default;
}
</style>