<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarViewVue from '@/views/SidebarView.vue'
</script>

<template>
  <SidebarViewVue id="sidbar" />
  <RouterView id="main" />
</template>
<style>
#app {
  display: flex;
}
#sidbar {
  border: 1px solid red;
}
#main {
  border: 1px solid red;
}
</style>
