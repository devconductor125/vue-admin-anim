<template>
  <div class="h-10 flex items-center mt-5 lg:mt-0">
    <span
      class="cursor-pointer bg-gray-dark rounded-full text-gray-100 text-sm h-full w-10 flex items-center justify-center mr-3"
      @click="modal = true"
    >
      <i class="fas fa-plus"></i>
    </span>

    <span
      class="cursor-pointer bg-gray-dark rounded-full text-gray-100 text-sm h-full w-10 flex items-center justify-center"
    >
      <img src="@/assets/images/minimize.png" alt="" style="height: 16px" />
    </span>
    <modal v-if="modal" @close="modal = false"></modal>
  </div>
</template>

<script>
import Modal from "@/components/layouts/Modal";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      modal: false,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>