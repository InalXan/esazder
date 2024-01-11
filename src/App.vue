<script setup>
import { RouterLink, RouterView } from 'vue-router'
// components
import FooterBar from './components/FooterBar.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <!-- header start  -->
  <header class="w-full margin-auto">
    <NavBar />
  </header>
  <!-- header end  -->
  <RouterView />
  <!-- footer start  -->
  <FooterBar />
  <!-- footer end  -->
</template>

