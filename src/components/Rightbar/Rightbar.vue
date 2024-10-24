<script setup>
import Avatar from '../../UI/Avatar.vue'
</script>
<template lang="">
  <div
    class="absolute right-0 top-0 bg-gray-100 h-[100vh] w-80 py-7 px-5 overflow-y-scroll overflow-x-hidden"
  >
    <Avatar />

    <div class="list-none mt-10 px-2">
      <div class="mb-5 text-2xl text-main-color flex justify-between items-center">
        <span class="font-bold text-[#303972]">Guruhlar</span>
        <span
          class="p-3 bg-main-bg text-white rounded-full flex items-center justify-center cursor-pointer bg-[#4D44B5]"
        >
          <i class="bx bx-plus font-bold"></i
        ></span>
      </div>
      <div v-for="el in 3" class="p-1 mb-3 text-main-color flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v-Quj0rUbKfkYkO5xry7QsyV_3dNemjlbw&usqp=CAU"
            alt="avatar"
            class="w-[50px] h-[50px] rounded-full"
          />
          <div class="text-sm">
            <span class="block">Dasturi injinering </span>
            <span class="text-gray-400"> Class VII A</span>
          </div>
        </div>
        <span
          class="text-lg p-3 py-5 rounded-full h-[40px] flex items-center justify-center cursor-pointer border-2 border-gray-500 text-gray-500 hover:bg-main-bg hover:text-white hover:bg-[#4D44B5]"
        >
          <i class="bx bx-envelope"></i>
        </span>
      </div>
      <button
        class="text-[#4D44B5] bg-gray-200 w-full text-center p-4 rounded-full my-4 hover:bg-gray-300 font-semibold text-main-color"
      >
        Barchasi
      </button>

      <div class="mb-5 text-2xl text-main-color flex justify-between items-center py-2">
        <span class="font-bold  text-[#303972]">Xabarlar</span>
      </div>
      <div v-for="el in 3" class="p-1 mb-3 text-main-color flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v-Quj0rUbKfkYkO5xry7QsyV_3dNemjlbw&usqp=CAU"
            alt="avatar"
            class="w-[50px] h-[50px] rounded-full"
          />
          <div class="text-sm">
            <span class="block">Dasturi injinering </span>
            <span class="text-gray-400"> Class VII A</span>
          </div>
        </div>
        <span
          class="text-lg p-3 py-5 rounded-full h-[40px] flex items-center justify-center cursor-pointer border-2 border-gray-500 text-gray-500 hover:bg-main-bg hover:text-white"
        >
          <i class="bx bx-envelope"></i>
        </span>
      </div>
    </div>
  </div>
</template>