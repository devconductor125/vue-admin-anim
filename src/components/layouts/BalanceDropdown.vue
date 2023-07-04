<template>
  <div ref="nested shadow" class="balance__menu relative font-serif">
    <div
      class="btn-wrapper flex rounded-3xl transition-border-radius duration-500"
    >
      <button class="dropdown-btn text-left" @click="expand($event), $emit('expand')">
        Balances
      </button>
      <button class="text-white focus:outline-none">
        <i class="fa fa-plus"></i>
      </button>
    </div>
    <div
      class="dropdown flex flex-col absolute rounded-b-3xl"
      :style="{ '--height': `${height}px` }"
    >
      <div class="menu-wrapper flex-grow">
        <div
          class="menu__items"
          v-for="(menu, menuIndex) in balanceMenu"
          :key="menuIndex"
        >
          <div
            class="menu-title"
            :style="{ background: menu.background }"
            @click="expandSubMenu($event)"
          >
            <span> {{ menu.title }}</span>
            <span>{{ menu.value | currency }}</span>
          </div>

          <div class="menu-content">
            <div
              class="menu-item list-wrapper"
              v-for="(submenu, submenuIndex) in menu.items"
              :key="submenuIndex"
            >
              <div
                class="list-title"
                :style="{ background: submenu.background }"
              >
                <div class="list-title-left">
                  <div class="title">{{ submenu.title }}</div>
                  <div class="subtitle">{{ submenu.subtitle }}</div>
                </div>
                <div class="list-title-right">
                  {{ submenu.value | currency }}
                </div>
              </div>

              <ul
                class="list"
                :style="{ background: submenu.contentBackground }"
              >
                <li
                  v-for="(item, itemIndex) in submenu.items"
                  class="list-item cursor-pointer flex px-2 justify-between border-b"
                  :class="item.component === activeComponent ? 'active' : ''"
                  :key="itemIndex"
                  @click="openModal(item.component)"
                >
                  <div
                    class="list-item-content flex justify-between"
                    :style="{
                      color:
                        item.component === activeComponent
                          ? item.activeTextColor
                          : item.defaultTextColor,
                    }"
                  >
                    <div class="list-title-left">
                      <div class="title">{{ item.title }}</div>
                      <div class="subtitle text-sm">{{ item.subtitle }}</div>
                    </div>

                    <div class="list-title-right text-right flex-grow">
                      <h5>{{ item.value | currency }}</h5>
                      <div class="text-sm">{{ item.time }}</div>
                    </div>
                  </div>
                  <div
                    class="background"
                    :style="{ background: item.activeThemeColor }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="corner-top hidden fill-current"
                      :style="{ color: item.activeThemeTextColor }"
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
                      class="corner-bottom hidden fill-current"
                      :style="{ color: item.activeThemeTextColor }"
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="equity bg-blue-900">
        <span>Equity</span>
        <span>$1,327,895</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    height: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  filters: {
    currency(value) {
      const formattedValue = new Intl.NumberFormat().format(Math.abs(value));
      return value >= 0 ? `$${formattedValue}` : `$(${formattedValue})`;
    },
  },
  data() {
    return {
      activeComponent: "",
      balanceMenu: [
        {
          title: "Assets",
          value: 1494863,
          background: "#3A572B",
          items: [
            {
              title: "Cash",
              value: -116819,
              background: "#C78938",
              contentBackground: "#EDB13E",
              items: [
                {
                  title: "Wells Fargo",
                  subtitle: "",
                  value: 116819,
                  time: "7hrs ago",
                  component: "wells-fargo-modal",
                  defaultTextColor: "#ffffff",
                  activeTextColor: "#C78938",
                  activeThemeColor: "#FED788",
                  activeThemeTextColor: "#FED788",
                  active: false,
                },
                {
                  title: "Bank of America",
                  subtitle: "Saving",
                  value: 100000,
                  time: "7hrs ago",
                  component: "bank-saving-modal",
                  defaultTextColor: "#ffffff",
                  activeTextColor: "#C78938",
                  activeThemeColor: "#FED788",
                  activeThemeTextColor: "#FED788",
                  active: false,
                },
              ],
            },
            {
              title: "Investments",
              value: 614423,
              background: "#587347",
              contentBackground: "#82A159",
              items: [
                {
                  title: "Greenstar IRA",
                  subtitle: "",
                  value: 341423,
                  time: "7hrs ago",
                  component: "green-star-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#82A159",
                  activeThemeColor: "#C6D9AE",
                  activeThemeTextColor: "#C6D9AE",
                  active: false,
                },
                {
                  title: "Fiedlity",
                  subtitle: "401 (k)",
                  value: 200000,
                  time: "7hrs ago",
                  component: "fidelity-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#82A159",
                  activeThemeColor: "#C6D9AE",
                  activeThemeTextColor: "#C6D9AE",
                  active: false,
                },
                {
                  title: "E-Trade",
                  subtitle: "Taxable",
                  value: 75000,
                  time: "7hrs ago",
                  component: "etrade-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#82A159",
                  activeThemeColor: "#C6D9AE",
                  activeThemeTextColor: "#C6D9AE",
                  active: false,
                },
                {
                  title: "Morgan Stanley",
                  subtitle: "Roth IRA",
                  value: 25000,
                  time: "7hrs ago",
                  component: "morgan-stanley-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#82A159",
                  activeThemeColor: "#C6D9AE",
                  activeThemeTextColor: "#C6D9AE",
                  active: false,
                },
              ],
            },
            {
              title: "Real Estate",
              value: 566566,
              background: "#A41726",
              contentBackground: "#CA302D",
              items: [
                {
                  title: "123 Main St",
                  subtitle: "Primary Residence",
                  value: 566566,
                  time: "7hrs ago",
                  component: "real-estate-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#A41726",
                  activeThemeColor: "#FFC7C7",
                  activeThemeTextColor: "#FFC7C7",
                  active: false,
                },
                {
                  title: "987 Elm St",
                  subtitle: "2nd Home",
                  value: 200000,
                  time: "7hrs ago",
                  component: "second-home-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#A41726",
                  activeThemeColor: "#FFC7C7",
                  activeThemeTextColor: "#FFC7C7",
                  active: false,
                },
                {
                  title: "101 Bilbo Blvd",
                  subtitle: "Rental",
                  value: 125000,
                  time: "7hrs ago",
                  component: "rental-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#A41726",
                  activeThemeColor: "#FFC7C7",
                  activeThemeTextColor: "#FFC7C7",
                  active: false,
                },
                {
                  title: "99 Warehouse Blvd",
                  subtitle: "Commercial",
                  value: 66000,
                  time: "7hrs ago",
                  component: "second-rental-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#A41726",
                  activeThemeColor: "#FFC7C7",
                  activeThemeTextColor: "#FFC7C7",
                  active: false,
                },
              ],
            },

            {
              title: "Misc. Assets",
              value: 75055,
              background: "#3B7193",
              contentBackground: "#79A3BD",
              items: [
                {
                  title: "1999 Cessna 172S",
                  subtitle: "Airplane",
                  value: 566566,
                  time: "7hrs ago",
                  component: "cessna-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#79A3BD",
                  activeThemeColor: "#BFD3E0",
                  activeThemeTextColor: "#BFD3E0",
                  active: false,
                },
                {
                  title: "987 Elm St",
                  subtitle: "2nd Home",
                  value: 200000,
                  time: "7hrs ago",
                  component: "elm-st-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#79A3BD",
                  activeThemeColor: "#BFD3E0",
                  activeThemeTextColor: "#BFD3E0",
                  active: false,
                },
              ],
            },
          ],
        },
        {
          title: "Liabilities",
          value: 166968,
          background: "#810020",
          items: [
            {
              title: "Mortgage",
              value: 45455,
              background: "#A41726",
              contentBackground: "#CA302D",
              items: [
                {
                  title: "Chase Bank",
                  subtitle: "123 Main St",
                  value: 107217,
                  time: "7hrs ago",
                  component: "chase-bank-modal",
                  defaultTextColor: "#ffffff",
                  activeTextColor: "#A41726",
                  activeThemeColor: "#FF7A7A",
                  activeThemeTextColor: "#FF7A7A",
                  active: false,
                },
                {
                  title: "Citibank",
                  subtitle: "99 Warehouse Road",
                  value: 20000,
                  time: "7hrs ago",
                  component: "citibank-modal",
                  defaultTextColor: "#ffffff",
                  activeTextColor: "#A41726",
                  activeThemeColor: "#FF7A7A",
                  activeThemeTextColor: "#FF7A7A",
                  active: false,
                },
              ],
            },
            {
              title: "Credit Cards",
              value: 45455,
              background: "#C78938",
              contentBackground: "#EDB13E",
              items: [
                {
                  title: "Capital One",
                  subtitle: "Unsecured",
                  value: 25455,
                  time: "7hrs ago",
                  component: "capital-one-modal",
                  defaultTextColor: "#ffffff",
                  activeTextColor: "#C78938",
                  activeThemeColor: "#FED788",
                  activeThemeTextColor: "#FED788",
                  active: false,
                },
                {
                  title: "American Express",
                  subtitle: "Unsecured",
                  value: 20000,
                  time: "7hrs ago",
                  component: "american-express-modal",
                  defaultTextColor: "#ffffff",
                  activeTextColor: "#C78938",
                  activeThemeColor: "#FED788",
                  activeThemeTextColor: "#FED788",
                  active: false,
                },
              ],
            },
            {
              title: "Misc. Liabilities",
              value: 45455,
              background: "#3B7193",
              contentBackground: "#79A3BD",
              items: [
                {
                  title: "US Bank",
                  subtitle: "Airplane Loan",
                  value: 14296,
                  time: "7hrs ago",
                  component: "us-bank-air-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#79A3BD",
                  activeThemeColor: "#BFD3E0",
                  activeThemeTextColor: "#BFD3E0",
                  active: false,
                },
                {
                  title: "US Bank",
                  subtitle: "Auto Loan",
                  value: 4269,
                  time: "7hrs ago",
                  component: "us-bank-auto-modal",
                  defaultTextColor: "#fff",
                  activeTextColor: "#79A3BD",
                  activeThemeColor: "#BFD3E0",
                  activeThemeTextColor: "#BFD3E0",
                  active: false,
                },
              ],
            },
          ],
        },

        // {
        //   title: "Liabilities",
        //   value: 116819,
        //   background: "bg-red-default",
        //   items: [{}],
        // },
      ],
    };
  },
  computed: {
    // direction() {
    //   return this.activeComponent === "" ? "ltr" : "rtl";
    // },
  },
  watch: {
    active(value) {
      this.activeComponent = value === false ? "" : this.activeComponent;
    },
  },
  methods: {
    openModal(component) {
      // this.activeComponent = component;
      this.activeComponent =
        this.activeComponent === component ? "" : component;
      this.$emit("select", this.activeComponent);
    },
    expand(event) {
      const dropdown = event.target.parentElement.nextElementSibling;
      dropdown.classList.toggle("expand");
      if (dropdown.classList.contains("expand")) {
        event.target.parentElement.classList.add("rounded-t-3xl");
        event.target.parentElement.classList.remove("rounded-3xl");
      } else {
        event.target.parentElement.classList.remove("rounded-t-3xl");
        event.target.parentElement.classList.add("rounded-3xl");
      }

      // Rotate the icon
      // event.target.querySelector(".dropdown-icon").classList.toggle("rotate");
    },
    expandSubMenu(event) {
      const dropdown = event.target.nextElementSibling;
      dropdown.classList.toggle("expand");

      // Rotate the icon
      event.target.querySelector(".dropdown-icon").classList.toggle("rotate");
    },
  },
};
</script>

<style lang="scss" scoped>
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
    opacity: 1;
    transform: translateY(0);
    z-index: 10;
    width: 100%;
    &__circle {
      @apply h-10 w-10 rounded-full inline-block;
    }

    .corner-top {
      position: absolute;
      top: -20px;
      right: 27px;
      display: inline-block;
    }

    .corner-bottom {
      position: absolute;
      bottom: -20px;
      right: 27px;
      transform: rotate(270deg);
      display: inline-block;
    }
  }
}

.balance__menu {
  z-index: 200;
  transition: border-radius 0.5s ease-in-out,
    border-top-left-radius 0.5s ease-in-out,
    border-top-right-radius 0.5s ease-in-out;
  @apply w-64;
  .btn-wrapper {
      background: #4c5764;
    @apply w-full px-4 flex justify-between items-center shadow-sm;

    .dropdown-btn {
      direction: ltr;
      @apply text-white w-full h-10 text-lg focus:outline-none;

      * {
        pointer-events: none;
      }
    }
  }
}

.dropdown {
  direction: rtl;
  @apply w-full;
  z-index: 100;
  // overflow-y: auto;
  overflow-x: hidden;
  /* this will hide the scrollbar in mozilla based browsers */
  // overflow: -moz-scrollbars-none;
  /* this will hide the scrollbar in internet explorers */
  // -ms-overflow-style: none; /* IE 11 */
  // scrollbar-width: 6px !important; /* Firefox 64 */
  // scrollbar-color: #177294 #ececec; /* Firefox 64 */
  // &::-webkit-scrollbar {
  //   width: 6px;
  // }

  // /* Track */
  // &::-webkit-scrollbar-track {
  //   // box-shadow: inset 0 0 5px #ECECEC;
  //   border-radius: 3px;
  //   background: #ececec;
  // }

  // /* Handle */
  // &::-webkit-scrollbar-thumb {
  //   background: #177294;
  //   border-radius: 3px;
  // }

  // /* Handle on hover */
  // &::-webkit-scrollbar-thumb:hover {
  //   background: #00416b;
  // }

  height: 0;
  transform-origin: top;
  transition: transform 0.3s linear, height 0.5s linear;
  .dropdown-btn,
  .menu-title,
  .list-title,
  .equity {
    direction: ltr;
    @apply text-white w-full h-10 px-2 text-lg flex justify-between items-center shadow-sm focus:outline-none;

    * {
      pointer-events: none;
    }
  }
  .equity {
    @apply py-2 px-4;
  }
  .menu-wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    /* this will hide the scrollbar in mozilla based browsers */
    // overflow: -moz-scrollbars-none;
    /* this will hide the scrollbar in internet explorers */
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: 6px !important; /* Firefox 64 */
    scrollbar-color: #177294 #ececec; /* Firefox 64 */
    &::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      // box-shadow: inset 0 0 5px #ECECEC;
      border-radius: 3px;
      background: #ececec;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #177294;
      border-radius: 3px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #00416b;
    }
    .list-wrapper {
      .list {
        .list-item {
          direction: ltr;
          .background {
            opacity: 0;
            // transition: opacity 1s;
            // outline: none;
            // overflow: hidden;

            transform: translateY(-100%);
            transition: transform 0.5s ease-in-out;
          }
          &.active {
            @apply relative;

            .background {
              @apply h-full w-full;
              margin-left: -10px;
              position: absolute;
              left: 10px;
              opacity: 1;
              transform: translateY(0);
              z-index: 10;
              width: 100%;
              &__circle {
                @apply h-10 w-10 rounded-full inline-block;
              }

              .corner-top {
                position: absolute;
                top: -19px;
                right: 0px;
                display: inline-block;
              }

              .corner-bottom {
                position: absolute;
                bottom: -19px;
                right: 0px;
                transform: rotate(270deg);
                display: inline-block;
              }
            }
          }
          &-content {
            z-index: 20;
            @apply relative w-full;
          }
        }
      }
    }
  }

  .list-item {
    // direction: ltr;
    text-align: left;
  }

  &.expand {
    height: var(--height);
    // height: calc(100vh - 172px);
  }
}

.dropdown-icon {
  pointer-events: none;

  &.rotate {
    transform: rotate(180deg) !important;
  }
}
</style>