<template>
    <div class="link-area flex bg-gray-100 items-center rounded-full h-12 shadow mt-5 lg:mt-0"  >
        <router-link to="/settings" class="router-link text-lg" id="diver0" data-index="0">
          <div class="link-content" @click="clickHandler(0)">
            <span>Profile</span>
          </div>
        </router-link>
        <router-link to="/settings/input" class="router-link text-lg"  id="diver1" data-index="1">
            <div class="link-content" @click="clickHandler(1)">
              <span>Inputs</span>
            </div>
        </router-link>

        <router-link to="/settings/display" class="router-link text-lg"  id="diver2" data-index="2">
            <div class="link-content" @click="clickHandler(2)">
              <span>Display</span>
            </div>
        </router-link>

        <router-link to="/settings/security" class="router-link text-lg" id="diver3" data-index="3">
            <div class="link-content" @click="clickHandler(3)">
              <span>Security</span>
            </div>
        </router-link>
        <div class="moverable" id="moverable">

        </div>
    </div>
</template>

<script>
    export default {
      methods: {
        clickHandler: function (index){

          const item = document.getElementById('diver' + index)
          const mover = document.getElementById('moverable');
          mover.style.left = item.offsetLeft + 'px';
          mover.style.backgroundColor = '#2d4d8f';
          console.log(item.offsetParent)
        }
      },
      mounted(){
        const item = document.querySelector(".router-link-exact-active.text-lg")
        const index = item.getAttribute("data-index");
        console.log(item)
        this.clickHandler(index)
      },
    }
</script>

<style lang="scss" scoped>
#setting-menu{
  .link-area{
    justify-content: space-between;
    position: relative;
    .router-link{
      width: 200px;
      height: 100%;
      border-radius: 60px;
      .link-content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          position: absolute;
          z-index: 1;
        }
      }
    }
    .router-link-exact-active{
      background: transparent;
      color: #ffffff;
    }
    .moverable{
      width: 200px;
      height: 100%;
      position: absolute;
      background: #2d4d8f;
      border-radius: 40px;
      overflow: hidden;
      transition: all 0.6s;
    }
  }
}
//.router-link-exact-active{
//    @apply bg-gray-dark;
//    svg, span{
//        @apply text-gray-100;
//    }
//}
//
//.router-link{
//    @apply rounded-full h-full flex items-center justify-center lg:w-40 md:w-32 w-24;
//}

</style>