<script setup>
import notification from '../assets/icons/notification.png'
import settings from '../assets/icons/setting.png'
</script>

<template>
  <div class="flex items-center justify-center gap-5 w-72">
    <button class="bg-white px-3 py-2 rounded-full h-[50px] relative">
      <img :src="notification" alt="" class="" />
      <div class="absolute h-[8px] w-[8px] rounded-full bg-purple-600 top-1 right-1"></div>
    </button>
    <button class="bg-white px-3 py-2 rounded-full h-[50px] relative">
      <img :src="settings" alt="" class="" />
    </button>
    <div class="flex items-center justify-center gap-2 pr-[10px]">
      <span class="">
        <h6 class="text-center w-full text-main-color text-semibold block">Ochilov M.</h6>
        <h6 class="text-center w-full text-gray-500">Admin</h6>
      </span>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v-Quj0rUbKfkYkO5xry7QsyV_3dNemjlbw&usqp=CAU" class="h-[50px] rounded-full" />
    </div>
  </div>
</template>

<style></style>