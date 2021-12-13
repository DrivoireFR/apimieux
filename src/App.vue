<template>  
  <Header />
  <main class="main min-h-screen p-16">
    <router-view />
  </main>
  <Footer />
</template>
<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<style>

</style>
