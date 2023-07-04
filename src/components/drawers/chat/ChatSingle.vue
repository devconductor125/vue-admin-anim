<template>
  <div
    class="subdrawer flex flex-col font-sans overflow-y-auto"
    :class="secondary ? 'flex-grow' : 'rounded-tl-3xl rounded-bl-3xl'"
    style="max-width: 100%"
  >
    <div
      class="subdrawer__top shadow flex py-2 items-center"
      style="padding: 0.5rem 2rem"
    >
      <div class="flex-gorw flex items-center">
        <div class="cursor-pointer" @click="$emit('closeDrawer')">
          <img src="@/assets/images/chatnowBack.png" alt="" />
          <!-- <i class="fa fa-chevron-left pointer-events-none"></i> -->
        </div>
        <div class="flex-grow flex items-center ml-4">
          <img
            :class="`border-${theme}-default`"
            class="w-12 advisor rounded-full border-2 cursor-pointer"
            src="@/assets/images/robins.jpg"
            alt=""
          />
          <div class="flex-grow ml-4">
            <h2 class="text-gray-default">Chad Gordon</h2>
          </div>
        </div>
        <div class="flex-grow flex items-center ml-4">
          <div class="text-green-default">
            <i class="fas fa-circle"></i>
          </div>
          <div class="flex-grow ml-4">
            <h2 class="text-gray-600">Online</h2>
          </div>
        </div>
      </div>
      <div class="ml-auto" @click="$emit('closeDrawer')">
        <div class="flex">
          <div class=" cursor-pointer h-5 w-5 mx-4">
            <img
              src="@/assets/images/expand.png"
              alt=""
              @click="$emit('closeDrawer')"
            />
          </div>
          <div  class=" cursor-pointer h-5 w-5 mx-4" @click="$emit('closeDrawer')">
            <img src="@/assets/images/close.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="chat__history flex-grow px-6 flex items-end">
      <ul class="messages__wrapper flex-end w-full text-sm my-4">
        <li class="message__item__wrapper my-1">
          <div class="message__sent flex">
            <div class="message__item flex">
              <div class="message__avatar flex items-end">
                <img
                  src="@/assets/images/gordon.jpg"
                  class="w-8 rounded-full h-8 border-2"
                  :class="`border-${theme}-default`"
                  alt=""
                />
              </div>
              <div
                class="message__body rounded-full px-4 py-2 mx-2"
                :class="`bg-${theme}-default`"
              >
                I need some help!
              </div>
            </div>
          </div>
        </li>
        <li class="message__item__wrapper my-1">
          <div class="message__receipt flex">
            <div class="message__item flex">
              <div class="message__avatar flex items-end">
                <img
                  src="@/assets/images/gordon.jpg"
                  class="w-8 rounded-full h-8 border-2"
                  :class="`border-green-default`"
                  alt=""
                />
              </div>
              <div
                class="message__body rounded-full px-4 py-2 mx-2"
                :class="`bg-green-600`"
              >
                Hello sir. How may I help you?
              </div>
            </div>
          </div>
        </li>
        <li class="message__item__wrapper my-1">
          <div class="message__receipt flex">
            <div class="message__item flex">
              <div class="message__avatar flex items-end">
                <img
                  src="@/assets/images/gordon.jpg"
                  class="w-8 rounded-full h-8 border-2"
                  :class="`border-green-default`"
                  alt=""
                />
              </div>
              <div
                class="message__body rounded-full px-4 py-2 mx-2"
                :class="`bg-green-600`"
              >
                ...
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="chat__now flex items-center py-2 px-4">
      <div class="flex-grow flex items-center">
        <input
          type="text"
          class="outline-none border-none p-2 w-full bg-transparent"
          placeholder="Type something to send..."
        />
      </div>
      <div class="flex justify-between items-center">
        <div class="text-center text-2xl px-4 py-2 text-gray-100">
          <img src="@/assets/images/chatSmile.png" alt="" />
          <!-- <i class="far fa-smile"></i> -->
        </div>
        <div class="text-center text-2xl px-4 py-2 text-gray-100">
          <img src="@/assets/images/chatAttachment.png" alt="" />
          <!-- <i class="fa fa-paperclip"></i> -->
        </div>
        <div class="text-center text-2xl px-4 py-2 text-gray-100">
          <img src="@/assets/images/chatSend.png" alt="" />
          <!-- <i class="fa fa-paper-plane"></i> -->
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
    secondary: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.border-1 {
  border: 1px solid;
  @apply border-gray-default;
}
.subdrawer {
  @apply bg-gray-800;
  min-width: 500px;
  max-width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  /* this will hide the scrollbar in mozilla based browsers */
  overflow: -moz-scrollbars-none;
  /* this will hide the scrollbar in internet explorers */
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  @media (max-width: 640px) {
    top: 0;
    right: 0;
    min-width: unset;
    max-width: 100vw;
  }
  &__top {
    @apply flex py-1 px-2;
    // }
    // .drawer__top {
    //   padding: 1rem 2rem !important;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  }
  .chat__history {
    overflow-y: auto;
    /* this will hide the scrollbar in mozilla based browsers */
    overflow: -moz-scrollbars-none;
    /* this will hide the scrollbar in internet explorers */
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none; /* Firefox 64 */
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
    .message__item__wrapper {
      .message__receipt {
        .message__item {
          max-width: 80%;
          @apply flex-row;
          .message__body {
            @apply rounded-bl-none;
          }
        }
      }

      .message__sent {
        @apply justify-end;
        .message__item {
          max-width: 80%;
          @apply flex-row-reverse;
          .message__body {
            @apply rounded-br-none;
          }
        }
      }
    }
  }
  .chat__now {
    -webkit-box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.5);
  }
}
</style>