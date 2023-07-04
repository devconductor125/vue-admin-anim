<template>
  <div class="drawer flex flex-col">
    <div class="drawer__top flex justify-between">
      <div v-if="activeComponent !== 'home'" class="cursor-pointer">
        <img
          src="@/assets/images/chatnowBack.png"
          alt=""
          @click="showReport('home')"
        />
      </div>
      <div
        class="cursor-pointer w-full mx-4 justify-self-end"
        @click="$emit('closeDrawer')"
      >
        <img class="ml-auto" src="@/assets/images/close.png" alt="" />
      </div>
    </div>

    <div class="mt-5 text-gray-100 px-10 text-lg">
      <div class="report__menu flex justify-between overflow-hidden w-full">
        <!-- Cash Flow -->
        <button
          :class="[activeComponent === 'cash-flow' ? 'active' : '']"
          class="report__btn rounded-full p-4"
          @click="showReport('cash-flow')"
        >
          <svg
            id="Cash-01"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-lg text-orange-default"
            width="30"
            height="30"
            viewBox="0 0 30 33"
          >
            <path
              id="Path_16"
              data-name="Path 16"
              d="M21.064.416c-1.627-.619-2.078-.825-2.874,1.5a.934.934,0,0,0-.052.363c0,.136.084.194.188.177a1.09,1.09,0,0,1,.58.062,25.4,25.4,0,0,1,9.1,5.589c.911.978.755,1.258.076,1.984-4.364,4.632-7.234,8.473-8.089,15.56a26.613,26.613,0,0,0,0,4.707c0,.235-.364-2.888-.5-4.455-.635-7.314,2.1-12.6,6.6-17.325a.266.266,0,0,0,0-.355,7.281,7.281,0,0,0-.8-.825A20.786,20.786,0,0,0,13.035,2.507c-2.162-.107-2.646.062-3.165,2.624a.625.625,0,0,0,.028.38c.084.1.268.078.364.07a4.918,4.918,0,0,1,.843,0c5.348.326,7.238.594,10.539,2.409.987.545.631.792,0,1.819h0c-3.229,6.068-4.48,9.624-3.349,16.5A14.95,14.95,0,0,0,19.461,30.1a22.1,22.1,0,0,1-2.426-5.486c-1.467-5.284-.524-10.292,1.926-15.09.6-1.159.552-1.745-.639-2.042A24.167,24.167,0,0,0,4.45,7.639c-1.347.45-1.191.788-1.331,1.44a21.524,21.524,0,0,0-.4,2.331V11.5a.055.055,0,0,1,0,.025v.021h0v.062h0v.182h0v1.06q0,.06,0,.12v.776a26.876,26.876,0,0,0,5.9,19.215A.137.137,0,0,0,8.746,33a58.95,58.95,0,0,1,11.467-1.238c.284,0,.28-.029.28-.05A24.451,24.451,0,0,1,32.051,10.951a1.331,1.331,0,0,0,.576-.545C32.81,9.973,28.418,3.089,21.064.416ZM9.266,10.423a1.05,1.05,0,0,1,.366-.7.986.986,0,0,1,.741-.228,1.042,1.042,0,0,1,.647,1.287,1.012,1.012,0,0,1-1.087.916A1.045,1.045,0,0,1,9.266,10.423ZM11.772,29.4a1.018,1.018,0,0,1-1-.8,1.055,1.055,0,0,1,.537-1.18,1.018,1.018,0,0,1,1,.8,1.055,1.055,0,0,1-.537,1.18Zm1.4-9.182c-.08,2.256-1.479,3.968-3.137,4.125S6.692,23.1,6.208,20.884c-.58-2.628.719-5.363,3.01-5.565S13.282,17.514,13.17,20.216Z"
              transform="translate(-2.632 -0.005)"
            />
            <path
              id="Path_17"
              data-name="Path 17"
              d="M20.966,48.736a.825.825,0,0,0-.276-.136l.025.705a.532.532,0,0,0,.268-.128.293.293,0,0,0,.087-.223.26.26,0,0,0-.1-.219Z"
              transform="translate(-13.476 -28.554)"
            />
            <path
              id="Path_18"
              data-name="Path 18"
              d="M18.512,44.917a.334.334,0,0,0-.082.235.247.247,0,0,0,.1.206.763.763,0,0,0,.285.128l-.025-.726a.581.581,0,0,0-.28.157Z"
              transform="translate(-12.118 -26.298)"
            />
            <path
              id="Path_19"
              data-name="Path 19"
              d="M15.855,39.432c-1.794.165-2.812,2.231-2.359,4.231a3.054,3.054,0,0,0,3,2.627,3.081,3.081,0,0,0,2.474-3.138C19.035,41.1,17.649,39.246,15.855,39.432Zm1.46,4.763a1.456,1.456,0,0,1-.866.412l.021.573-.511.021-.021-.594a2.751,2.751,0,0,1-.722-.107,1.773,1.773,0,0,1-.561-.256l.256-.635a2.008,2.008,0,0,0,.462.227,2.231,2.231,0,0,0,.54.1l-.029-.854a3.814,3.814,0,0,1-.619-.173,1.13,1.13,0,0,1-.433-.3.845.845,0,0,1-.186-.544.981.981,0,0,1,.28-.738,1.485,1.485,0,0,1,.878-.412l-.021-.565H16.3v.557a2.289,2.289,0,0,1,1.043.272l-.231.639a2.062,2.062,0,0,0-.792-.239l.033.87a3.79,3.79,0,0,1,.61.161,1.118,1.118,0,0,1,.412.3.854.854,0,0,1,.186.54A.953.953,0,0,1,17.315,44.194Z"
              transform="translate(-8.953 -23.159)"
            />
          </svg>
          <span class="background__circle bg-orange-default"></span>
        </button>

        <!-- Investments -->
        <button
          :class="[activeComponent === 'investments' ? 'active' : '']"
          class="report__btn rounded-full p-4"
          @click="showReport('investments')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-green-default"
            width="30"
            height="30"
            viewBox="0 0 30 29.87"
          >
            <g id="Invest-01" transform="translate(0.015 -0.243)">
              <path
                id="Path_20"
                data-name="Path 20"
                d="M17.168,15.091l8.049-8.317L26.541,8.04a1.022,1.022,0,0,0,1.125.222,1.07,1.07,0,0,0,.694-.887l.675-5.946a1.027,1.027,0,0,0-.315-.9,1.041,1.041,0,0,0-.885-.27l-5.965.917a1.065,1.065,0,0,0-.851.729A.974.974,0,0,0,21.3,2.976l1.323,1.266L15.811,11.3,11.927,7.5a1.809,1.809,0,0,0-1.17-.507,1.872,1.872,0,0,0-1.421.541L.47,16.7a1.907,1.907,0,0,0,.06,2.607,1.84,1.84,0,0,0,.664.409,3.492,3.492,0,0,0,.349.094c.094,0,.187.034.285.034a1.768,1.768,0,0,0,1.26-.537L10.7,11.421l3.88,3.756a1.838,1.838,0,0,0,2.591-.086Z"
                transform="translate(0 0)"
              />
              <path
                id="Path_21"
                data-name="Path 21"
                d="M11.348,61.74H6a1,1,0,0,0-1,1.014V67.5a1,1,0,0,0,1.01,1.01h5.338a1,1,0,0,0,1.014-1.01V62.754A1.022,1.022,0,0,0,11.348,61.74Z"
                transform="translate(-3.131 -38.396)"
              />
              <path
                id="Path_22"
                data-name="Path 22"
                d="M39.036,50.46H33.694a1,1,0,0,0-1.014,1.014v8.982a1,1,0,0,0,1.014,1.01h5.342a1,1,0,0,0,1.014-1.01V51.44a1,1,0,0,0-1.014-.98Z"
                transform="translate(-20.444 -31.353)"
              />
              <path
                id="Path_23"
                data-name="Path 23"
                d="M66.74,39.1H61.394a1,1,0,0,0-1.014,1.01V53.363a1,1,0,0,0,1.014,1.01H66.74a1,1,0,0,0,1.01-1.01V40.11a1,1,0,0,0-1.01-1.01Z"
                transform="translate(-37.765 -24.261)"
              />
            </g>
          </svg>
          <span class="background__circle bg-green-default"></span>
        </button>

        <!-- Real Estate -->
        <button
          :class="[activeComponent === 'real-state' ? 'active' : '']"
          class="report__btn rounded-full p-4"
          @click="showReport('real-state')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-red-dark"
            width="30"
            height="30"
            viewBox="0 0 30 26.058"
          >
            <g id="Realstate-01" transform="translate(-0.005 -5.237)">
              <path
                id="Path_24"
                data-name="Path 24"
                d="M29.987,17.09a2.333,2.333,0,0,0-.881-1.57h0l-2.624-2.167V8.494a.619.619,0,0,0-.618-.62l-3.429-.6a.615.615,0,0,0-.618.616V9.8l-4.981-3.92a2.968,2.968,0,0,0-3.681,0L.9,15.52A2.352,2.352,0,0,0,2.072,19.7a2.42,2.42,0,0,0,.285.019,2.31,2.31,0,0,0,1.443-.5l10.12-7.957a1.744,1.744,0,0,1,2.166,0l10.12,7.957a2.346,2.346,0,0,0,3.782-2.129"
                transform="translate(0)"
              />
              <path
                id="Path_25"
                data-name="Path 25"
                d="M32.681,31.929l-9.19-7.187a1.869,1.869,0,0,0-2.285,0l-9.19,7.187a.613.613,0,0,0-.236.484v8.2a2.663,2.663,0,0,0,2.659,2.666h4.809a.611.611,0,0,0,.614-.616V36.924a2.487,2.487,0,1,1,4.973,0v5.742a.611.611,0,0,0,.614.616h4.809a2.663,2.663,0,0,0,2.659-2.666v-8.2a.613.613,0,0,0-.236-.484"
                transform="translate(-7.354 -11.986)"
              />
            </g>
          </svg>
          <span class="background__circle bg-red-default"></span>
        </button>

        <!-- Insurance -->
        <button
          :class="[activeComponent === 'insurance' ? 'active' : '']"
          class="report__btn rounded-full p-4"
          @click="showReport('insurance')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-blue-default"
            width="30"
            height="30"
            viewBox="0 0 30.001 30.431"
          >
            <path
              id="Insurence-01"
              d="M30.548,16.612a15.855,15.855,0,0,0-3.944-9.1,14.6,14.6,0,0,0-9.911-4.963V1.787C16.629.692,16.545,0,15.359,0A1.084,1.084,0,0,0,14.29,1.05V2.6A14.273,14.273,0,0,0,7.373,5.085a15.307,15.307,0,0,0-5.02,5.625,16.079,16.079,0,0,0-1.8,5.849.662.662,0,0,0,1,.662,6.937,6.937,0,0,1,3.906-1.16,6.815,6.815,0,0,1,4.541,1.765.612.612,0,0,0,.837,0,6.845,6.845,0,0,1,3.32-1.654v7.325h0v3.833a.875.875,0,0,1-.335.685.917.917,0,0,1-.974,0,1.072,1.072,0,0,1-.346-.738V25.533a1.141,1.141,0,0,0-.726-1,1.339,1.339,0,0,0-1.259.156,1.012,1.012,0,0,0-.475.848c0,.738-.049,1.422,0,2.164a2.521,2.521,0,0,0,.593,1.586,2.879,2.879,0,0,0,1.635,1.057,3.921,3.921,0,0,0,1.373.053,3.012,3.012,0,0,0,1.32-.422,2.913,2.913,0,0,0,.962-.848,3.213,3.213,0,0,0,.559-1.217c0-.1.084-.209.084-.316V24h0v-7.72c0-.053.049-.053.1-.053a6.112,6.112,0,0,1,2.111.761,5.526,5.526,0,0,1,1.263.936.692.692,0,0,0,.9,0,6.845,6.845,0,0,1,4.594-1.818A6.613,6.613,0,0,1,29.5,17.319a.723.723,0,0,0,1.046-.707Z"
              transform="translate(-0.55)"
            />
          </svg>
          <span class="background__circle bg-blue-default"></span>
        </button>

        <!-- Legal Planning -->
        <button
          :class="[activeComponent === 'legal-planning' ? 'active' : '']"
          class="report__btn rounded-full p-4"
          @click="showReport('legal-planning')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-orange-dark"
            width="30"
            height="30"
            viewBox="0 0 30 29.967"
          >
            <g id="Legalplanning-01" transform="translate(-0.224 -0.172)">
              <path
                id="Path_26"
                data-name="Path 26"
                d="M20.807,65.058V63.925a2.3,2.3,0,0,0-2.3-2.3H4.167a2.3,2.3,0,0,0-2.3,2.3v1.132a1.725,1.725,0,0,0,0,3.446H20.807a1.725,1.725,0,0,0,0-3.446Z"
                transform="translate(0 -38.366)"
              />
              <path
                id="Path_27"
                data-name="Path 27"
                d="M35.039,24.171,23.311,12.428l2.5-2.5a1.647,1.647,0,0,0,.752.184,1.718,1.718,0,0,0,1.214-2.929L21.292.7a1.718,1.718,0,0,0-2.764,1.981l-2.5,2.5L14.818,3.935a1.669,1.669,0,0,0-1.2-.5A1.718,1.718,0,0,0,12.393,6.36l1.214,1.214-2.47,2.5a1.775,1.775,0,0,0-1.951.331,1.718,1.718,0,0,0,0,2.429h0L15.63,19.3a1.715,1.715,0,0,0,2.756-1.951l2.5-2.5L32.613,26.581a1.714,1.714,0,0,0,2.425,0A1.835,1.835,0,0,0,35.039,24.171Z"
                transform="translate(-5.266 0)"
              />
            </g>
          </svg>
          <span class="background__circle bg-orange-dark"></span>
        </button>

        <!-- Tax Planning -->
        <button
          :class="[activeComponent === 'tax-planning' ? 'active' : '']"
          class="report__btn rounded-full p-4"
          @click="showReport('tax-planning')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-purple-default"
            width="30"
            height="30"
            viewBox="0 0 30 39.369"
          >
            <path
              id="Tax-01"
              d="M28.572,9.439c1.333-2.854,2.835-6.25,2.835-7.618,0-1.654-2.058-2.564-3.3-.787C26.476,3.351,25.79,0,23.9,0s-2.825,3.145-4.278,1.033a1.906,1.906,0,0,0-3.559.787c0,1.821,1.439,5.093,2.753,7.741C14.294,13.2,8.74,19.995,8.74,26.166c-.014,8.981,6.719,13.2,14.993,13.2s15.007-4.222,15.007-13.2C38.74,19.955,33.133,13.08,28.572,9.439Zm-9.113,8.612A2.319,2.319,0,1,1,17.2,20.369a2.344,2.344,0,0,1,.659-1.639,2.226,2.226,0,0,1,1.6-.679Zm.6,12.377a1.374,1.374,0,0,1-.926.413,1.2,1.2,0,0,1-.926-.413,1.343,1.343,0,0,1,0-1.9l9.233-9.478a1.263,1.263,0,0,1,1.856,0,1.389,1.389,0,0,1,0,1.9Zm7.952,1.033a2.319,2.319,0,1,1,2.259-2.318,2.344,2.344,0,0,1-.662,1.642,2.225,2.225,0,0,1-1.6.676Z"
              transform="translate(-8.74)"
            />
          </svg>
          <span class="background__circle bg-purple-default"></span>
        </button>
      </div>
      <div class="report__content mt-4 font-sans">
        <transition name="fadeIn">
          <component :is="activeComponent"></component>
        </transition>
      </div>
    </div>
    <div class="flex-grow flex items-end fixed right-10 bottom-4">
      <i class="p-2 rounded-full bg-blue-default">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 55"
          width="30"
          height="25"
        >
          <path
            id="ic_cloud_upload_24px"
            fill-rule="evenodd"
            class="shp0"
            d="M80 37.67C80 46.87 72.53 54.33 63.33 54.33L20 54.33C8.97 54.33 0 45.37 0 34.33C0 24.03 7.8 15.53 17.83 14.47C22 6.47 30.37 1 40 1C52.13 1 62.23 9.63 64.5 21.13C73.17 21.73 80 28.87 80 37.67ZM56.67 31L40 14.33L23.33 31L33.33 31L33.33 44.33L46.67 44.33L46.67 31L56.67 31Z"
          />
        </svg>
      </i>
    </div>
  </div>
</template>

<script>
import Home from "@/components/drawers/reports/Home";
import CashFlow from "@/components/drawers/reports/CashFlow";
import Investments from "@/components/drawers/reports/Investments";
import Insurance from "@/components/drawers/reports/Insurance";
import RealState from "@/components/drawers/reports/RealState";
import LegalPlanning from "@/components/drawers/reports/LegalPlanning";
import TaxPlanning from "@/components/drawers/reports/TaxPlanning";
export default {
  components: {
    Home,
    CashFlow,
    Investments,
    Insurance,
    RealState,
    LegalPlanning,
    TaxPlanning,
  },
  data() {
    return {
      activeComponent: "home",
    };
  },

  methods: {
    showReport(name) {
      if (name != this.activeComponent) {
        this.activeComponent = name;
      } else {
        this.activeComponent = "home";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.report__menu {
  .report__btn {
    outline: none;
    position: relative;
    > svg {
      position: relative;
      transition: color 0.8s ease-in-out;
      z-index: 100;
    }
    .background__circle {
      top: 0px;
      left: 0px;
      transform: scale(0);
      -ms-transform: scale(0); /* IE 9 */
      -webkit-transform: scale(0);
      transition: transform 0.8s ease-in-out;
      z-index: 1;
      @apply absolute h-full w-full rounded-full inline-block;
    }
    &:hover,
    &.active {
      > svg {
        @apply text-gray-dark;
      }
      .background__circle {
        transform: scale(1);
        -ms-transform: scale(1); /* IE 9 */
        -webkit-transform: scale(1);
      }
    }
  }
}

.fadeIn-enter-active {
  // transition-delay: 1s;
  transition: opacity 0.5s ease-out 0.5s, transform 0.5s ease-in-out 0.5s;
}
.fadeIn-leave-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-in-out;
}

.fadeIn-enter, {
  opacity: 0;
  transform: scale(0);
}

.fadeIn-enter-to{
  opacity: 1;
  transform: scale(1);
}

.fadeIn-leave {
  opacity: 1;
  // transform: scale(0);
  // display: none;
}

.fadeIn-leave-to {
  opacity: 0;
  // display: none;
  transform: scale(0);
}



</style>