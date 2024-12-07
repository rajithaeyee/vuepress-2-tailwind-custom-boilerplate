<!-- docs/.vuepress/theme/layouts/Layout.vue -->
<template>
 <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="flex flex-1">
      <SideBar />
      <main class="flex-1 p-4">
        <Content />
      </main>
    </div>
    <!-- Footer -->
    <Footer />
  </div>
</template>
<style lang="scss">
@use './../../styles/index.scss' as *;
</style>
<script setup>
import Navbar from '@theme/Navbar.vue';
import Footer from "@theme/Footer.vue";
import SideBar from '@theme/Sidebar.vue';
</script>
