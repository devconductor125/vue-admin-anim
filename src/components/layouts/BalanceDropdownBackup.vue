<template>
  <div ref="nested shadow" class="balance__menu relative">
    <button
      class="bg-gray-dark dropdown-btn rounded-full transition-border-radius duration-500"
      @click="expand($event), $emit('expand')"
    >
      <span>Balances</span>
      <i class="fas fa-caret-down dropdown-icon"></i>
    </button>
    <div class="dropdown absolute rounded-b-3xl" :style="{ direction }">
      <div v-for="(menu, menuIndex) in balanceMenu" :key="menuIndex">
        <button
          class="dropdown-btn"
          :class="menu.background"
          @click="expandSubMenu($event)"
        >
          <span>
            <i class="fas fa-caret-down dropdown-icon"></i>
            {{ menu.title }}</span
          >
          <span>{{ menu.value | currency }}</span>
        </button>

        <div class="dropdown">
          <div
            v-for="(submenu, submenuIndex) in menu.items"
            :key="submenuIndex"
          >
            <button
              class="dropdown-btn"
              :class="submenu.background"
              @click="expandSubMenu($event)"
            >
              <span>
                <i class="fas fa-caret-down dropdown-icon"></i>
                {{ submenu.title }}
              </span>
              <span>{{ submenu.value | currency }}</span>
            </button>

            <div class="dropdown list" :class="submenu.contentBackground">
              <div
                v-for="(item, itemIndex) in submenu.items"
                class="list-item cursor-pointer flex px-2 justify-between border-b"
                :class="item.component === activeComponent ? 'active' : ''"
                :key="itemIndex"
                @click="openModal(item.component)"
              >
                <div
                  class="list-item-content flex justify-between"
                  :class="
                    item.component === activeComponent
                      ? item.activeTextColor
                      : item.defaultTextColor
                  "
                >
                  <div class="text-md">{{ item.title }}</div>
                  <div class="text-right flex-grow">
                    <h5>{{ item.value | currency }}</h5>
                    <div class="text-sm">{{ item.time }}</div>
                  </div>
                </div>
                <div class="background" :class="item.activeThemeColor">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="corner-top hidden fill-current"
                    :class="item.activeThemeTextColor"
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
                    :class="item.activeThemeTextColor"
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
              </div>
            </div>
          </div>

          <div>
            <button class="dropdown-btn bg-lime-default">
              <span>
                <i class="fas fa-caret-down dropdown-icon"></i> Mics.
                Assets</span
              >
              <span>($75,055)</span>
            </button>
          </div>

          <div>
            <button class="dropdown-btn bg-lime-default">
              <span>
                <i class="fas fa-caret-down dropdown-icon"></i> Real
                Estate</span
              >
              <span>($75,055)</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <button class="dropdown-btn bg-gray-dark">
          <span> <i class="fas fa-caret-down dropdown-icon"></i> Add More</span>
          <span><i class="fas fa-plus"></i></span>
        </button>
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
          background: "bg-blue-dark",
          items: [
            {
              title: "Cash",
              value: -116819,
              background: "bg-orange-dark",
              contentBackground: "bg-orange-default",
              items: [
                {
                  title: "Wells Fargo",
                  value: 116819,
                  time: "7hrs ago",
                  component: "wells-fargo-modal",
                  defaultTextColor: "text-gray-100",
                  activeTextColor: "text-orange-900",
                  activeThemeColor: "bg-orange-100",
                  activeThemeTextColor: "text-orange-100",
                  active: false,
                },
                {
                  title: "Bank of America Saving",
                  value: 116819,
                  time: "7hrs ago",
                  component: "bank-saving-modal",
                  defaultTextColor: "text-gray-100",
                  activeTextColor: "text-orange-900",
                  activeThemeColor: "bg-orange-100",
                  activeThemeTextColor: "text-orange-100",
                  active: false,
                },
              ],
            },
            {
              title: "Investments",
              value: 116819,
              background: "bg-lime-default",
              contentBackground: "bg-green-default",
              items: [
                {
                  title: "Greenstar IRA",
                  value: 116819,
                  time: "7hrs ago",
                  component: "green-star-modal",
                  defaultTextColor: "text-gray-100",
                  activeTextColor: "text-green-default",
                  activeThemeColor: "bg-green-100",
                  activeThemeTextColor: "text-green-100",
                  active: false,
                },
                {
                  title: "Fiedlity 401 (k)",
                  value: 116819,
                  time: "7hrs ago",
                  component: "fidelity-modal",
                  defaultTextColor: "text-gray-100",
                  activeTextColor: "text-green-default",
                  activeThemeColor: "bg-green-100",
                  activeThemeTextColor: "text-green-100",
                  active: false,
                },
                {
                  title: "E-Trade Taxable",
                  value: 116819,
                  time: "7hrs ago",
                  component: "etrade-modal",
                  defaultTextColor: "text-gray-100",
                  activeTextColor: "text-green-default",
                  activeThemeColor: "bg-green-100",
                  activeThemeTextColor: "text-green-100",
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
    direction() {
      return this.activeComponent === '' ? 'ltr' : 'rtl';
    }
  },
  watch: {
    active(value) {
      this.activeComponent = value === false ? "" : this.activeComponent;
    },
  },
  methods: {
    // openModal(menuIndex, submenuIndex, itemIndex) {
    //   this.balanceMenu[this.menuState][this.submenuState][this.itemState].active = false;
    //   const oldActiveItem = this.balanceMenu[this.menuState][this.submenuState][this.itemState];
    //   const newActiveItem = this.balanceMenu[menuIndex][submenuIndex][itemIndex];
    //   this.menuState = menuIndex;
    //   this.submenuState = submenuIndex;
    //   this.itemState = itemIndex;
    //   this.activeComponent = newActiveItem.component;
    //   this.balanceMenu[menuIndex][submenuIndex][itemIndex].active = true;
    //   this.$emit("select", this.activeComponent);
    // },
    openModal(component) {
      // this.activeComponent = component;
      this.activeComponent = this.activeComponent === component ? "" : component;
      this.$emit("select", this.activeComponent);
    },
    expand(event) {
      const dropdown = event.target.nextElementSibling;
      dropdown.classList.toggle("expand");
      if (dropdown.classList.contains("expand")) {
        event.target.classList.add("rounded-t-full");
        event.target.classList.remove("rounded-full");
      } else {
        event.target.classList.remove("rounded-t-full");
        event.target.classList.add("rounded-full");
      }

      // Rotate the icon
      event.target.querySelector(".dropdown-icon").classList.toggle("rotate");
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
      top: -19px;
      right: 27px;
      display: inline-block;
    }

    .corner-bottom {
      position: absolute;
      top: 39px;
      right: 27px;
      transform: rotate(270deg);
      display: inline-block;
    }
  }
}
.balance__menu {
  z-index: 200;
  @apply w-64;
  transition: border-radius 0.5s ease-in-out,
    border-top-left-radius 0.5s ease-in-out,
    border-top-right-radius 0.5s ease-in-out;
}
.dropdown-btn {
  direction: ltr;
  @apply text-white w-full h-10 px-2 text-lg flex justify-between items-center shadow-sm focus:outline-none;

  * {
    pointer-events: none;
  }
}

.dropdown {
  @apply w-full;
  z-index: 100;
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
  max-height: 0;
  // transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s linear, max-height 0.5s linear;

  .dropdown {
    overflow-y: auto;
    overflow-x: hidden;
    /* this will hide the scrollbar in mozilla based browsers */
    overflow: -moz-scrollbars-none;
    /* this will hide the scrollbar in internet explorers */
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none; /* Firefox 64 */
    &::-webkit-scrollbar {
      display: none;
    }
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

  .list-item {
    direction: ltr;
  }
}
.dropdown.expand {
  max-height: 400px;
  .dropdown.expand {
    &.list {
      @apply py-3.5;
      // transform:scaleY(1);
    }
  }
}

.dropdown-icon {
  pointer-events: none;

  &.rotate {
    transform: rotate(180deg) !important;
  }
}
</style>