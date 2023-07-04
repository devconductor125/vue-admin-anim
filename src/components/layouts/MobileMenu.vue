<template>
  <div
    class="block md:hidden fixed top-0 w-full left-0 h-screen overflow-hidden"
    style="background: rgba(0, 0, 0, 0); z-index: 1000"
    ref="overlay"
    @click.self="$emit('hideSidebar')"
  >
    <div class="bg-dark rounded-r-3xl mobile-menu">
      <div class="bg-dark brand flex items-center justify-center relative">
        <transition name="logo-top">
          <img
            src="@/assets/images/logo.png"
            class="logo"
            alt=""
            v-if="logoTop"
          />
        </transition>
        <transition name="logo-bottom">
          <img
            src="@/assets/images/logo-bottom.png"
            alt=""
            class="logo-bottom"
            v-if="logoBottom"
          />
        </transition>
      </div>
      <div class="mobile-menu-links pt-5">
        <div class="mobile-menu-links__item w-full">
          <!-- Home -->
          <router-link to="/dashboard" class="mobile-menu-links__link">
            <svg
              id="Bashboard-01"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-gray-500"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path
                id="Path_12"
                data-name="Path 12"
                d="M13.859,1.156A1.156,1.156,0,0,0,12.707,0H1.156A1.156,1.156,0,0,0,0,1.156V12.707a1.156,1.156,0,0,0,1.156,1.152H12.707a1.156,1.156,0,0,0,1.152-1.152Z"
                transform="translate(0 0)"
              />
              <path
                id="Path_13"
                data-name="Path 13"
                d="M56.939,1.156A1.156,1.156,0,0,0,55.783,0H44.232A1.156,1.156,0,0,0,43.08,1.156V12.707a1.156,1.156,0,0,0,1.152,1.152H55.783a1.156,1.156,0,0,0,1.156-1.152Z"
                transform="translate(-26.939 0)"
              />
              <path
                id="Path_14"
                data-name="Path 14"
                d="M44.232,56.939H55.783a1.156,1.156,0,0,0,1.156-1.156V44.232a1.156,1.156,0,0,0-1.156-1.152H44.232a1.156,1.156,0,0,0-1.152,1.152V55.783a1.156,1.156,0,0,0,1.152,1.156Z"
                transform="translate(-26.939 -26.939)"
              />
              <path
                id="Path_15"
                data-name="Path 15"
                d="M12.707,43.08H1.156A1.156,1.156,0,0,0,0,44.232V55.783a1.156,1.156,0,0,0,1.156,1.156H12.707a1.156,1.156,0,0,0,1.152-1.156V44.232a1.156,1.156,0,0,0-1.152-1.152Z"
                transform="translate(0 -26.939)"
              />
            </svg>
            <p class="mobile-menu-links__label text-gray-100">Dashboard</p>
            <div class="background bg-gray-500">
              <span class="background__circle bg-gray-900"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Cash Flow -->
          <router-link to="/cash-flows" class="mobile-menu-links__link">
            <svg
              id="Cash-01"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-orange-default"
              width="20"
              height="20"
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

            <p class="mobile-menu-links__label text-gray-100">Cash Flow</p>
            <div class="background bg-orange-light">
              <span class="background__circle bg-orange-default"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-orange-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-orange-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Investment -->
          <router-link to="/investments" class="mobile-menu-links__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-green-default"
              width="20"
              height="20"
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

            <p class="mobile-menu-links__label text-gray-100">Investment</p>
            <div class="background bg-green-light">
              <span class="background__circle bg-green-default"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-green-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-green-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Real Estate -->
          <router-link to="/real-estates" class="mobile-menu-links__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-red-dark"
              width="20"
              height="20"
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

            <p class="mobile-menu-links__label text-gray-100">Real Estates</p>
            <div class="background bg-red-light">
              <span class="background__circle bg-red-dark"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-red-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-red-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Insurance -->
          <router-link to="/insurances" class="mobile-menu-links__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-blue-default"
              width="20"
              height="20"
              viewBox="0 0 30.001 30.431"
            >
              <path
                id="Insurence-01"
                d="M30.548,16.612a15.855,15.855,0,0,0-3.944-9.1,14.6,14.6,0,0,0-9.911-4.963V1.787C16.629.692,16.545,0,15.359,0A1.084,1.084,0,0,0,14.29,1.05V2.6A14.273,14.273,0,0,0,7.373,5.085a15.307,15.307,0,0,0-5.02,5.625,16.079,16.079,0,0,0-1.8,5.849.662.662,0,0,0,1,.662,6.937,6.937,0,0,1,3.906-1.16,6.815,6.815,0,0,1,4.541,1.765.612.612,0,0,0,.837,0,6.845,6.845,0,0,1,3.32-1.654v7.325h0v3.833a.875.875,0,0,1-.335.685.917.917,0,0,1-.974,0,1.072,1.072,0,0,1-.346-.738V25.533a1.141,1.141,0,0,0-.726-1,1.339,1.339,0,0,0-1.259.156,1.012,1.012,0,0,0-.475.848c0,.738-.049,1.422,0,2.164a2.521,2.521,0,0,0,.593,1.586,2.879,2.879,0,0,0,1.635,1.057,3.921,3.921,0,0,0,1.373.053,3.012,3.012,0,0,0,1.32-.422,2.913,2.913,0,0,0,.962-.848,3.213,3.213,0,0,0,.559-1.217c0-.1.084-.209.084-.316V24h0v-7.72c0-.053.049-.053.1-.053a6.112,6.112,0,0,1,2.111.761,5.526,5.526,0,0,1,1.263.936.692.692,0,0,0,.9,0,6.845,6.845,0,0,1,4.594-1.818A6.613,6.613,0,0,1,29.5,17.319a.723.723,0,0,0,1.046-.707Z"
                transform="translate(-0.55)"
              />
            </svg>

            <p class="mobile-menu-links__label text-gray-100">Insurance</p>
            <div class="background bg-blue-soft">
              <span class="background__circle bg-blue-default"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-blue-soft"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-blue-soft"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Legal Planning -->
          <router-link to="/legal-plannings" class="mobile-menu-links__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-orange-dark"
              width="20"
              height="20"
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
            <p class="mobile-menu-links__label text-gray-100">Legal Planning</p>
            <div class="background bg-orange-soft">
              <span class="background__circle bg-orange-dark"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-orange-soft"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-orange-soft"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Tax Planning -->
          <router-link to="/tax-plannings" class="mobile-menu-links__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-purple-default"
              width="20"
              height="20"
              viewBox="0 0 30 39.369"
            >
              <path
                id="Tax-01"
                d="M28.572,9.439c1.333-2.854,2.835-6.25,2.835-7.618,0-1.654-2.058-2.564-3.3-.787C26.476,3.351,25.79,0,23.9,0s-2.825,3.145-4.278,1.033a1.906,1.906,0,0,0-3.559.787c0,1.821,1.439,5.093,2.753,7.741C14.294,13.2,8.74,19.995,8.74,26.166c-.014,8.981,6.719,13.2,14.993,13.2s15.007-4.222,15.007-13.2C38.74,19.955,33.133,13.08,28.572,9.439Zm-9.113,8.612A2.319,2.319,0,1,1,17.2,20.369a2.344,2.344,0,0,1,.659-1.639,2.226,2.226,0,0,1,1.6-.679Zm.6,12.377a1.374,1.374,0,0,1-.926.413,1.2,1.2,0,0,1-.926-.413,1.343,1.343,0,0,1,0-1.9l9.233-9.478a1.263,1.263,0,0,1,1.856,0,1.389,1.389,0,0,1,0,1.9Zm7.952,1.033a2.319,2.319,0,1,1,2.259-2.318,2.344,2.344,0,0,1-.662,1.642,2.225,2.225,0,0,1-1.6.676Z"
                transform="translate(-8.74)"
              />
            </svg>

            <p class="mobile-menu-links__label text-gray-100">Tax Planning</p>
            <div class="background bg-purple-light">
              <span class="background__circle bg-purple-default"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-purple-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-purple-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Goals -->
          <router-link to="/goals" class="mobile-menu-links__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-earth-default"
              width="20"
              height="20"
              viewBox="0 0 30 28.54"
            >
              <g id="Goal-01" transform="translate(0.017 -0.768)">
                <circle
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  cx="2.537"
                  cy="2.537"
                  r="2.537"
                  transform="translate(3.417 7.608)"
                />
                <path
                  id="Path_29"
                  data-name="Path 29"
                  d="M1.215,33.294a1.128,1.128,0,0,0,.958-.526l.68-.988a5.427,5.427,0,0,1,2.225-1.857v4.052l-.492,3.383L2.749,41.9,5.6,41.484l.248-.248,1.237-2.95c.03-.094.064-.218.094-.308l.432-2.785,2.751,1.128-.278,2.845,2.68-.241.342-3.311a1.334,1.334,0,0,0-.8-1.361l-2.255-.928V29.153l.124-.034a7.893,7.893,0,0,0,4.1-2.6l1.022-1.267A1.169,1.169,0,0,0,13.467,23.8l-1.075,1.237a5.3,5.3,0,0,1-2.845,1.827l-.308.06a4.728,4.728,0,0,1-1.33.154H7.277a8.3,8.3,0,0,0-2.289.342A7.78,7.78,0,0,0,.854,30.449l-.661.992a1.128,1.128,0,0,0,.312,1.6,1.086,1.086,0,0,0,.71.248Z"
                  transform="translate(0 -15.074)"
                />
                <path
                  id="Path_28"
                  data-name="Path 28"
                  d="M33.123,28.074l-1.652-7.483a1.063,1.063,0,0,0-.375-.568l-2.435-1.764a.847.847,0,0,1-.375-.629l-.584-3.5a.989.989,0,0,0-.375-.6l-3-2.245a.03.03,0,0,1-.03-.029V1.067a.337.337,0,0,0-.341-.3h-.442a.324.324,0,0,0-.236.079.306.306,0,0,0-.105.22v.877a5.346,5.346,0,0,1-2.218-.24,5.332,5.332,0,0,0-3.2-.087.278.278,0,0,0-.217.269V5.716a.271.271,0,0,0,.126.211.288.288,0,0,0,.249.029,4.95,4.95,0,0,1,2.9.087,7.065,7.065,0,0,0,1.847.3c.154,0,.341-.033.495-.033v4.911L18.46,13.5a.9.9,0,0,0-.524.658l-.524,2.157a1,1,0,0,0-.03.3l.247,2.794a.9.9,0,0,1-.24.728l-2.75,3.092a1.026,1.026,0,0,1-.678.331l-2.712.24a.371.371,0,0,0-.341.3L10.645,25.8a.451.451,0,0,1-.375.364l-4.6.593a.458.458,0,0,0-.375.364l-.247,1.706a.417.417,0,0,0,.1.334.444.444,0,0,0,.327.146H32.149a1.092,1.092,0,0,0,.767-.408,1.028,1.028,0,0,0,.207-.825Z"
                  transform="translate(-3.156)"
                />
              </g>
            </svg>

            <p class="mobile-menu-links__label text-gray-100">Goals</p>
            <div class="background bg-earth-light">
              <span class="background__circle bg-earth-default"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-earth-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-earth-light"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Learn -->
          <router-link to="/learn" class="mobile-menu-links__link mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24.505 30"
              class="fill-current text-gray-500"
            >
              <path
                id="Union_1"
                data-name="Union 1"
                d="M23.83,30H.675A.646.646,0,0,1,0,29.368V17.342a.644.644,0,0,1,.675-.624h1.08V15.591a.617.617,0,0,1,.263-.508.781.781,0,0,1,.589-.116l1.89.349A4.358,4.358,0,0,1,9,11.345h6.555a4.359,4.359,0,0,1,4.5,3.972l1.849-.349a.783.783,0,0,1,.6.116.622.622,0,0,1,.251.508v1.128H23.83a.648.648,0,0,1,.675.661v12A.646.646,0,0,1,23.86,30ZM12.945,17.887V28.635l8.407-1.5V16.384ZM3.2,27.131l8.407,1.5V17.872L3.2,16.368Zm11.173-1.094a.625.625,0,0,1,.545-.752l4.254-.793a.669.669,0,0,1,.8.508.624.624,0,0,1-.549.751l-4.254.782h-.123l-.056,0A.633.633,0,0,1,14.368,26.038Zm-4.862.5H9.383l-4.254-.782a.623.623,0,0,1-.549-.736.65.65,0,0,1,.8-.508l4.253.767a.613.613,0,0,1,.549.752.636.636,0,0,1-.623.51Zm4.862-3.48a.624.624,0,0,1,.545-.752l4.254-.789a.669.669,0,0,1,.8.508.628.628,0,0,1-.549.752l-4.254.778h-.123l-.056,0A.632.632,0,0,1,14.368,23.054Zm-4.861.5H9.383l-4.254-.778a.632.632,0,0,1-.549-.741.65.65,0,0,1,.8-.507l4.253.766a.614.614,0,0,1,.549.752.635.635,0,0,1-.621.509Zm0-2.992H9.383L5.128,19.78a.632.632,0,0,1-.549-.74.651.651,0,0,1,.8-.508l4.253.767a.613.613,0,0,1,.549.751.635.635,0,0,1-.622.51Zm4.861-.5a.625.625,0,0,1,.545-.752l4.254-.788a.669.669,0,0,1,.8.507.628.628,0,0,1-.549.752l-4.254.778h-.151A.669.669,0,0,1,14.368,20.063Zm-7.57-15A5.281,5.281,0,0,1,12.273,0a5.281,5.281,0,0,1,5.476,5.063,5.281,5.281,0,0,1-5.476,5.062A5.281,5.281,0,0,1,6.8,5.063Z"
              />
            </svg>

            <p class="mobile-menu-links__label text-gray-100">Learn</p>
            <div class="background bg-gray-500">
              <span class="background__circle bg-gray-900"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Marketing -->
          <router-link to="/market" class="mobile-menu-links__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 24.383"
              class="fill-current text-gray-500"
            >
              <path
                id="Union_2"
                data-name="Union 2"
                d="M7.488,24.383V22.238H22.5v2.145ZM0,21.4V0H30V21.4Zm12.375-4.9,1.08,1.113,4.1-4.124,2.318,2.328,4.631-4.656v1.792h1.56l-.018-4.367h-4.5V10h1.9l-3.559,3.595L17.562,11.3ZM9.6,13.213a5.508,5.508,0,0,0,1.736-2.372H7.875A5.463,5.463,0,0,0,9.6,13.213Zm.93-.007a4.429,4.429,0,0,0,3.15-2.365H12A5.815,5.815,0,0,1,10.53,13.206Zm-1.845,0a5.741,5.741,0,0,1-1.47-2.365H5.531A4.425,4.425,0,0,0,8.685,13.206Zm3.678-4.431a5.026,5.026,0,0,1-.191,1.5h1.77a3.685,3.685,0,0,0,.262-1.5,4.148,4.148,0,0,0-.094-.888H12.292A5.981,5.981,0,0,1,12.363,8.775Zm-4.912,0a4.506,4.506,0,0,0,.214,1.5h3.87a4.485,4.485,0,0,0,.217-1.5,5.56,5.56,0,0,0-.094-.888H7.534A5.162,5.162,0,0,0,7.451,8.775Zm-2.456,0a3.619,3.619,0,0,0,.255,1.5H7.031a4.94,4.94,0,0,1-.194-1.5,5.538,5.538,0,0,1,.075-.888H5.092A4.21,4.21,0,0,0,4.995,8.775Zm2.67-1.582h3.874a6.124,6.124,0,0,0-1.939-3A6.109,6.109,0,0,0,7.665,7.193Zm4.507-.011h1.77a4.529,4.529,0,0,0-3.425-2.976A6.509,6.509,0,0,1,12.173,7.182ZM5.25,7.17H7.031a6.455,6.455,0,0,1,1.64-2.962A4.522,4.522,0,0,0,5.25,7.17Z"
              />
            </svg>

            <p class="mobile-menu-links__label text-gray-100">Market</p>
            <div class="background bg-gray-500">
              <span class="background__circle bg-gray-900"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Settings -->
          <router-link to="/settings" class="mobile-menu-links__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 29.998 31.096"
              class="fill-current text-gray-500"
            >
              <path
                id="Setting-01"
                d="M29.244,18.51a5.952,5.952,0,0,1,2.184-8.081L28.366,5.135a5.949,5.949,0,0,1-2.977.777A5.9,5.9,0,0,1,21.2,4.19,5.9,5.9,0,0,1,19.462,0H13.376A6,6,0,0,1,12.6,2.981,5.934,5.934,0,0,1,4.5,5.135L1.43,10.429a5.9,5.9,0,0,1,2.184,2.157A5.921,5.921,0,0,1,1.43,20.667l3.043,5.294a5.747,5.747,0,0,1,2.946-.777A5.892,5.892,0,0,1,13.31,31.1h6.121a5.777,5.777,0,0,1,.777-2.946,5.922,5.922,0,0,1,8.08-2.157L31.331,20.7a6.328,6.328,0,0,1-2.087-2.188Zm-12.825,3.3a6.254,6.254,0,1,1,4.439-1.826,6.277,6.277,0,0,1-4.439,1.826Z"
                transform="translate(-1.43)"
              />
            </svg>

            <p class="mobile-menu-links__label text-gray-100">Settings</p>
            <div class="background bg-gray-500">
              <span class="background__circle bg-gray-900"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>

          <!-- Help -->
          <router-link to="/help" class="mobile-menu-links__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 31"
              class="fill-current text-gray-500"
            >
              <path
                id="Help-01"
                d="M15,0A15.256,15.256,0,0,0,0,15.5,15.256,15.256,0,0,0,15,31,15.256,15.256,0,0,0,30,15.5,15.256,15.256,0,0,0,15,0Zm.851,22.862a1.171,1.171,0,0,1-1.515.153A1.263,1.263,0,0,1,13.9,21.51a1.192,1.192,0,0,1,1.342-.742,1.23,1.23,0,0,1,.967,1.215,1.261,1.261,0,0,1-.352.88Zm.461-5.7h0s-.086.066-.086.139v.973a1.251,1.251,0,0,1-2.5,0V17.3a2.808,2.808,0,0,1,1.781-2.461A1.766,1.766,0,0,0,14.97,11.4a1.685,1.685,0,0,0-1.5,1,1.2,1.2,0,0,1-.7.608,1.158,1.158,0,0,1-.91-.081,1.279,1.279,0,0,1-.544-1.624,4.085,4.085,0,0,1,3.664-2.418H15a4.171,4.171,0,0,1,3.979,3.572A4.281,4.281,0,0,1,16.312,17.159Z"
              />
            </svg>

            <p class="mobile-menu-links__label text-gray-100">Help</p>
            <div class="background bg-gray-500">
              <span class="background__circle bg-gray-900"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-top hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="corner-bottom hidden fill-current text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 30 30.004"
              >
                <path
                  id="Subtraction_11"
                  data-name="Subtraction 11"
                  d="M60.008,60.008h-30a30.037,30.037,0,0,0,30-30v30Z"
                  transform="translate(-30.009 -30.004)"
                />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/layouts/Logo";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      logoTop: false,
      logoBottom: false,
    };
  },
  created() {
    setTimeout(() => {
      this.logoTop = true;
      this.logoBottom = true;
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
.brand {
  height: 100px;

  .logo {
    height: 50px;
  }

  .logo-bottom {
    margin-top: 5px;
    height: 15px;
    position: absolute;
    bottom: 0px;
  }
}

// Logo transition
.logo-bottom-enter-active,
.logo-bottom-leave-active {
  transition: all 0.5s;
}

.logo-bottom-enter,
.logo-bottom-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

.logo-top-enter-active,
.logo-top-leave-active {
  transition: all 0.5s;
}

.logo-top-enter,
.logo-top-leave-to {
  transform: translateY(25px);
}
// logo transition end

// General CSS
.mobile-menu {
  width: 250px;
  min-width: 250px;
  transition: all 0.5s;
}

.mobile-menu-links {
  @apply px-4;
  height: calc(100vh - 100px);
  overflow-x: hidden;
  overflow-y: auto;

  /* this will hide the scrollbar in mozilla based browsers */
  overflow: -moz-scrollbars-none;
  /* this will hide the scrollbar in internet explorers */
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .router-link-active {
    position: relative;

    > svg {
      @apply text-gray-100;
    }
    p {
      @apply text-dark;
      position: absolute;
      z-index: 100;
    }
    .background {
      @apply h-10 rounded-full;
      margin-left: -10px;
      position: absolute;
      z-index: 10;
      width: 100%;
      &__circle {
        @apply h-10 w-10 rounded-full inline-block;
      }
    }
  }

  &__link {
    @apply p-3 flex w-full items-center relative;
    // margin-left: 25px;

    svg {
      z-index: 100;
    }
  }

  &__label {
    font-size: 20px;
    position: absolute;
    transform: translateX(45px);
    transition: opacity 0.2s ease-in-out;
    white-space: nowrap;
  }
}
</style>