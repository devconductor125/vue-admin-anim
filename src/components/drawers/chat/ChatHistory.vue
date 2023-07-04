<template>
  <div class="drawer font-sans overflow-y-auto">
    <div class="drawer__top">
      <span class="cursor-pointer h-5 w-5">
        <img
          src="@/assets/images/expand.png"
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
    <div class="advisors relative">
      <span class="px-6 text-gray-700 text-sm">Select Advisor</span>
      <chat-advisors @show="$emit('showProfile', $event)"></chat-advisors>
    </div>
    <div class="chat__history px-4">
      <div class="text-gray-700 text-sm m-2 font-base">
        Continue Conversation
      </div>
      <ul class="conversations__wrapper text-sm">
        <li class="conversation cursor-pointer rounded-2xl p-2 hover:bg-gray-600 flex items-center my-4" @click="$emit('openSubDrawer', { name: 'ChatSingle', theme: 'gray' })">
          <div
            class="conversation__avatar inline-flex justify-center items-center rounded-full w-14 h-14 border-2 border-gray-default"
          >
            <img src="@/assets/images/gordon.jpg" class="rounded-full" alt="">
          </div>
          <div class="conversation__body flex-grow">
            <div class="single-contact flex justify-between py-1">
              <div class="flex-grow mx-4 text-gray-default">Chad Gordon</div>
              <span class="badge">2</span>
            </div>
            <div class="flex justify-between single-contact">
              <div class="flex-grow mx-4 text-gray-400"> What about your investment? </div>
              <span
                class="items-center justify-center py-1 ml-1 text-xs rounded-full text-gray-400"
              >
                1 day ago
              </span>
            </div>
          </div>
        </li>
        <li class="conversation cursor-pointer rounded-2xl p-2 hover:bg-gray-600 flex items-center my-4" @click="$emit('openSubDrawer', { name: 'ChatSingle', theme: 'gray' })">
          <div
            class="conversation__avatar inline-flex justify-center items-center rounded-full w-14 h-14 border-2 border-gray-default"
          >
            <img src="@/assets/images/smith.jpg" class="rounded-full" alt="">
          </div>
          <div class="conversation__body flex-grow">
            <div class="single-contact flex justify-between py-1">
              <div class="flex-grow mx-4 text-gray-default">Chad Gordon</div>
              <span class="badge">2</span>
            </div>
            <div class="flex justify-between single-contact">
              <div class="flex-grow mx-4 text-gray-400"> What about your investment? </div>
              <span
                class="items-center justify-center py-1 ml-1 text-xs rounded-full text-gray-400"
              >
                1 day ago
              </span>
            </div>
          </div>
        </li>
        <li class="conversation cursor-pointer rounded-2xl p-2 hover:bg-gray-600 flex items-center my-4" @click="$emit('openSubDrawer', { name: 'ChatSingle', theme: 'gray' })">
          <div
            class="conversation__avatar inline-flex justify-center items-center rounded-full w-14 h-14 border-2 border-gray-default"
          >
            <img src="@/assets/images/silverman.jpg" class="rounded-full" alt="">
          </div>
          <div class="conversation__body flex-grow">
            <div class="single-contact flex justify-between py-1">
              <div class="flex-grow mx-4 text-gray-default">Chad Gordon</div>
              <span class="badge">2</span>
            </div>
            <div class="flex justify-between single-contact">
              <div class="flex-grow mx-4 text-gray-400"> What about your investment? </div>
              <span
                class="items-center justify-center py-1 ml-1 text-xs rounded-full text-gray-400"
              >
                1 day ago
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="chat__now px-10">
      <div class="flex items-center">
        <div class="border-1 flex-grow"></div>
        <div class="px-4 text-gray-default text-sm">or</div>
        <div class="border-1 flex-grow"></div>
      </div>
      <div class="text-center mt-4">
        <img
          class="inline-block rounded-full w-12"
          src="@/assets/images/ChatNow.png"
          alt=""
        />
        <div class="text-center py-2 text-sm text-gray-default">Chat Now</div>
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

<style lang="scss" scoped>
.border-1 {
  border: 1px solid;
  @apply border-gray-default;
}
.badge {
  @apply bg-green-default rounded-full h-6 w-6 flex items-center text-sm font-normal justify-center;
}
</style>