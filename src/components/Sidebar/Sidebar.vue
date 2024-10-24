<script setup>
import { ref } from 'vue'
import { navLinks } from '../../constants/navlinks.js'

const navlink = ref(navLinks)
</script>

<template>

  <div>
    <aside
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-[300px] h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#4D44B5]"
      aria-label="Sidebar"
    >
      <div class="flex justify-center items-center gap-3 mt-4">
        <img src="../../assets/icons/logo.png" alt="">
        <div class=" font-bold font-['Poppins'] text-white text-center my-3 text-[36px] mt-5">
          Academy
        </div>
      </div>
      <div class="pl-3 py-4 overflow-y-auto bg-[#4D44B5] dark:bg-gray-800 ml-8">
        <ul class="space-y-[1px] font-medium ">
          <li v-for="link in navlink" :key="link.id">
            <router-link
              :to="link.link"
              class="p-3 navlink flex items-center text-[#C1BBEB] rounded-l-full hover:text-[#4D44B5] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i :class="link.icon" class="text-[30px]"></i>
              <span class="p-1 ml-3 text-[18px]">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style lang="css" scoped>
.router-link-exact-active {
  background-color: white;
  color: #4d44b5;
}
</style>    