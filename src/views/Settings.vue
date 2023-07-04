<template>
  <div class="container mx-auto px-8">
    <div class="flex justify-center" id="setting-menu">
      <settings-menu></settings-menu>
    </div>
    <div class="mt-6">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SettingsMenu from "@/components/layouts/SettingsMenu";

export default {
  components: {
    SettingsMenu,
  },
};
</script>

<style lang="scss">
   
</style>