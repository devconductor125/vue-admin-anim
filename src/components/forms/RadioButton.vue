<template>
  <label class="text-gray-dark radio-button" :style="{ '--background': background }">
    <input
      type="radio"
      class="radio-button__input"
      :checked="checked"
      :name="name"
    />
    <span class="radio-button__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: false,
    },
    background: {
      type: String,
      required: false,
      default: "#cecece",
    },
  },
};
</script>

<style scoped lang="scss">
.radio-button {
  $radio-button-background-color: var(--background);

  position: relative;
  cursor: pointer;

  &__input {
    @apply absolute opacity-0 w-0 h-0;

    &:checked + .radio-button__label {
      background: $radio-button-background-color;
      @apply text-white shadow-inner;
    }
  }

  &__label {
    @apply inline-block px-4 py-2 rounded-full font-bold;
  }
}
</style>