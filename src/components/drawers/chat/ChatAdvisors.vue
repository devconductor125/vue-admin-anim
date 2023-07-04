<template>
  <div class="wrapper relative">
    <!-- <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">Prev</button>
      <button class="splide__arrow splide__arrow--next">Next</button>
    </div> -->
    <splide :options="options">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img
          :class="`border-${slide.theme}-default`"
          class="w-12 advisor rounded-full border-3 cursor-pointer"
          src="@/assets/images/robins.jpg"
          alt=""
          @click="$emit('show', { name: 'ChatProfile', theme: slide.theme })"
        />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        gap: "0.5rem",
        perPage: 5,
        pagination: false,
        breakpoints: {
          640: {
            perPage: 3,
          },
        },
        padding: {
          top: "2rem",
          bottom: "2rem",
        },
        arrowPath:
          "M19.17,21.87c0.47-0.47,0.74-1.15,0.68-2.16c-0.05-0.75-0.31-1.23-0.66-1.58c-2.06-2.09-4.12-4.17-6.19-6.26 C9.25,8.07,5.51,4.28,1.76,0.47c-0.4-0.4-0.8-0.68-1.25-0.28C0.15,0.5-0.07,1.03-0.12,1.75c-0.02,0.23-0.02,0.46-0.02,0.71 c0,11.64,0.01,23.26-0.01,34.9c0,1.27,0.19,2.21,0.89,2.64c0.13,0,0.26,0,0.39,0c0.32-0.17,0.6-0.47,0.88-0.77 C7.74,33.44,13.45,27.65,19.17,21.87z",

        // classes: {
        //   arrows: "splide__arrows your-class-arrows",
        //   arrow: "splide__arrow your-class-arrow",
        // },
      },

      slides: [
        {
          src: "@/assets/images/robins.jpg",
          alt: "robins",
          theme: "gray",
        },
        {
          src: "@/assets/images/romero.jpg",
          alt: "romero",
          theme: "blue",
        },
        {
          src: "@/assets/images/silverman.jpg",
          alt: "silverman",
          theme: "orange",
        },
        {
          src: "@/assets/images/smith.jpg",
          alt: "smith",
          theme: "red",
        },
        {
          src: "@/assets/images/steven.jpg",
          alt: "steven",
          theme: "orange",
        },
        {
          src: "@/assets/images/gordon.jpg",
          alt: "gordon",
          theme: "purple",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.splide {
  padding: 1rem 2rem !important;
  .splide__arrows {
    .splide__arrow {
      > svg {
        width: 30px !important;
        height: 30px !important;
        fill: lightgray !important;
      }
    }
    .splide__arrow--prev {
      left: 0;
      > svg {
        // transform: scaleX(-1) translateX(10px);
      }
    }
    .splide__arrow--next {
      right: 0;
      > svg {
        // transform: scaleX(-1) translateX(10px);
      }
    }
  }
  .splide__track {
    .splide__list {
      display: flex !important;
      margin-left: 0.5rem !important;
      margin-right: 0.5rem !important;
      @apply px-2;

      .splide__slide {
        @apply py-2;
      }
    }
  }
}

.advisor {
  &.border-3 {
    border-width: 3px !important;
  }
  &:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
  }
}
</style>