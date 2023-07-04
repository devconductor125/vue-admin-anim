<template id="switch-button">
  <div class="switch-button-control gap-2">
    <div class="switch-button-label">
      <slot></slot>
    </div>
    <div
      class="switch-button"
      :class="{ enabled: isEnabled }"
      @click="toggle"
      :style="{ '--color': color, '--background': background }"
    >
      <div class="button"></div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "isEnabled",
    event: "toggle",
  },
  props: {
    isEnabled: Boolean,
    color: {
      type: String,
      required: false,
      default: "#4D4D4D",
    },
    background: {
      type: String,
      required: false,
      default: "#fff",
    },
  },
  methods: {
    toggle: function () {
      this.$emit("toggle", !this.isEnabled);
    },
  },
};
</script>

<style scoped lang="scss">
#switch-button {
  .switch-button {
    margin: 10px 0;
  }

  .bottom-message {
    margin-top: 20px;
    font-size: 125%;
  }
}

// For switch-button styling
.switch-button-control {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;

  .switch-button {
    $switch-button-height: 1em;
    $switch-button-color: var(--color);
    $switch-button-background-color: var(--background);
    $switch-button-border-thickness: 2px;
    $switch-transition: all 0.3s ease-in-out;
    $switch-is-rounded: true;

    height: $switch-button-height;
    width: calc(#{$switch-button-height} * 2);
    // border: $switch-button-border-thickness solid $switch-button-color;
    box-shadow: inset 0px 0px $switch-button-border-thickness 0px
      rgba(0, 0, 0, 0.33);
    border-radius: if($switch-is-rounded, $switch-button-height, 0);

    transition: $switch-transition;

    // $button-side-length: calc(
    //   #{$switch-button-height} - (2 * #{$switch-button-border-thickness})
    // );

    $button-side-length: calc(#{$switch-button-height});
    // background-color: $switch-button-background-color;
    background: #D1D4D0;
    cursor: pointer;

    .button {
      height: $button-side-length;
      width: $button-side-length;
      // border: $switch-button-border-thickness solid $switch-button-color;
      border-radius: if($switch-is-rounded, $button-side-length, 0);
      background: $switch-button-color;

      transition: $switch-transition;
    }

    &.enabled {
      background-color: $switch-button-background-color;
      // background-color: #abd2b6;
      box-shadow: none;

      .button {
        background: $switch-button-color;
        transform: translateX(100%);
        // transform: translateX(
        //   calc(
        //     #{$button-side-length} + (2 * #{$switch-button-border-thickness})
        //   )
        // );
      }
    }
  }

  .switch-button-label {
    margin-left: 10px;
  }
}
</style>