<script setup>
import Avatar from '../../UI/Avatar.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <div>
    <nav class="bg-[#E5E5E5] w-full">
      <div class="px-3 py-4 lg:px-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <span
              class="pl-8 text-[#303972] pt-5 self-center text-[36px] font-semibold  whitespace-nowrap text-main-color capitalize"
              >{{ router.currentRoute.value.name }}</span
            >
          </div>
          <div class="flex items-center justify-center gap-10">
            <Avatar />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>