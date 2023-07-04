<template>
  <div class="bg-dark brand flex items-center justify-center relative">
    <img src="@/assets/images/logo.png" class="logo" alt="" />
    <img src="@/assets/images/logo-bottom.png" alt="" class="logo-bottom" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.brand {
  height: 100px;

  .logo {
    height: 50px;
    transition: all 0.3s;
  }

  .logo-bottom {
    margin-top: 5px;
    height: 15px;
    position: absolute;
    bottom: 50px;
    transition: all 0.5s;
    opacity: 0;
  }
}

.sidebar:hover {
  .logo {
    margin-top: -25px;
    transition-delay: 0.3s;
  }
  .logo-bottom {
    opacity: 1;
    bottom: 15px;
    transition-delay: 0.3s;
  }
}

</style>