<template>
    <div
      class="modal__body card flex flex-col"
      :class="collapse ? 'lg:pl-72' : ''"
    >
      <div
        class="card__title flex justify-between items-center"
        :class="collapse ? 'lg:ml-8' : 'lg:ml-72'"
      >
        <wells-fargo-information-tab-menu></wells-fargo-information-tab-menu>
        <div class="cursor-pointer h-5 w-5 ml-auto" @click="close">
          <img src="@/assets/images/close.png" alt="" />
        </div>
      </div>
      <div class="card__body p-1 flex-grow overflow-y-auto">
        <wells-fargo-details></wells-fargo-details>
      </div>
      <div class="card__footer flex justify-end">
        <!-- <button
          class="cursor-pointer bg-gray-default px-4 py-1 mx-4 rounded-full"
          @click="close"
        >
          Cancel
        </button>
        <button
          class="cursor-pointer bg-gray-default px-4 py-1 mx-4 rounded-full"
          @click="false"
        >
          Add
        </button> -->
      </div>
    </div>
</template>