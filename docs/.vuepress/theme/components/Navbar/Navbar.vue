<template>
  <nav class="bg-blue-600 p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white text-2xl font-semibold">
        <a href="#">MyLogo</a>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6">
        <a href="#" class="text-white hover:text-gray-200">Home</a>
        <a href="#" class="text-white hover:text-gray-200">About</a>
        <a href="#" class="text-white hover:text-gray-200">Services</a>
        <a href="#" class="text-white hover:text-gray-200">Contact</a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Links (shown/hidden based on menu state) -->
    <div v-show="isMenuOpen" class="md:hidden bg-blue-700">
      <a href="#" class="block text-white py-2 px-4 hover:bg-blue-500">Home</a>
      <a href="#" class="block text-white py-2 px-4 hover:bg-blue-500">About</a>
      <a href="#" class="block text-white py-2 px-4 hover:bg-blue-500">Services</a>
      <a href="#" class="block text-white py-2 px-4 hover:bg-blue-500">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
</style>
