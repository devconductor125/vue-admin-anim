<template>
  <div class="mb-8 font-sans" id="displaySettings">
    <div class="mt-8">
      <h5 class="category-name">Display Size</h5>
      <div class="mt-4">
        <range-slider
          class="slider"
          min="10"
          max="1000"
          step="10"
          v-model="sliderValue"
        >
        </range-slider>
      </div>
    </div>

    <div class="mt-16">
      <h5 class="category-name">Theme</h5>
      <div class="inline-flex items-center mt-4">
        <label class="text-lg" for="classic">Classic</label>
        <input
          type="radio"
          id="classic"
          name="theme"
          class="form-radio h-6 w-6 border-8 border-gray-700 text-gray-600 ml-4"
        />

        <label class="text-lg ml-8" for="dark">Dark</label>
        <input
          type="radio"
          id="dark"
          name="theme"
          class="form-radio h-6 w-6 border-8 border-gray-700 text-gray-600 ml-4"
        />
      </div>
    </div>

    <div class="mt-16">
      <h5 class="category-name">Display Setting</h5>
      <div
        class="border-2 border-gray-dark rounded-full flex justify justify-between mt-4"
      >
        <button class="btn">Wealth Optimize</button>
        <button class="btn-2">Debt Free</button>
        <button class="btn-2">Cash Flow</button>
        <button class="btn-2">Real Estate</button>
        <button class="btn-2">Legacy</button>
        <button class="btn-2">Customize</button>
      </div>

      <div class="mt-8 h-80 w-full bg-gray-dark"></div>
    </div>

    <div class="mt-8 flex justify-end">
      <button class="btn w-64">Save Setting</button>
    </div>
  </div>
</template>

<script>
    import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'
 
export default {
  data () {
    return {
      sliderValue: 500
    }
  },
  components: {
    RangeSlider
  }
}
</script>

<style lang="scss">
@import "~vue-range-slider/dist/vue-range-slider.scss";
// set the variable of the knob size
$knob-size: 45px;

// import the built-in vue-range-slider style

.slider {
  /* overwrite slider styles */
  @apply relative w-full;

    .range-slider-rail {
        @apply bg-transparent h-6 border-2 border-gray-dark rounded-full cursor-pointer;
    }

    .range-slider-fill {
        @apply bg-white h-6 border-2 border-gray-dark rounded-full;
    }

    .range-slider-knob {
        @apply h-6 w-6 bg-gray-dark;
    }

}

#displaySettings {
    .category-name {
      @apply text-2xl font-bold;
    }

    .btn {
      @apply py-3 px-5 rounded-full bg-gray-dark cursor-pointer text-white ring-0 outline-none font-sans text-sm;
    }

    .btn-2 {
      @apply py-3 px-5 rounded-full cursor-pointer ring-0 outline-none font-sans text-sm;
    }

    .btn-center {
      @apply flex flex-col items-center lg:items-start;
    }
}
</style>
