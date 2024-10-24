<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'
import Header from '../components/Header/Header.vue'

</script>

<template>
  <main>
    <section id="main" class="w-full h-[100vh]">
      <Sidebar />
      <div class="bg-[#E5E5E5] h-[100vh] sm:ml-72 overflow-y-scroll">
        <Header />
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>