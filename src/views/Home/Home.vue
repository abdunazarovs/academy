<script setup>
import { useStudentStore } from '../../stores/students/students.js'
import { useTeachersStore } from '../../stores/teachers/teachers.js'
import { useGroupsStore } from '../../stores/groups/groups.js'
import { useSubjectsStore } from '../../stores/subjects/subjects.js'
import { homeInfo } from '../../constants/homeInfo.js'
import Rightbar from '../../components/Rightbar/Rightbar.vue'
import { ref, reactive } from 'vue'


const studentStore = useStudentStore()
const teachersStore = useTeachersStore()
const groupsStore = useGroupsStore()
const subjectsStore = useSubjectsStore()

const pagination = reactive({
  currentPage: teachersStore.currentPage,
  itemsPerPage: teachersStore.itemsPerPage
})  

const menu = [
  studentStore.GET_USERS.length,
  teachersStore.GET_TEACHERS.length,
  groupsStore.GET_GROUPS.length,
  subjectsStore.GET_SUBJECTS.length
]

const INCREMENT_PAGE = () => {
  if (
    pagination.currentPage <
    Math.ceil(teachersStore.GET_TEACHERS.length / teachersStore.itemsPerPage)
  )
    pagination.currentPage++
  console.log(pagination.currentPage)
}

const DECREMENT_PAGE = () => {
  if (pagination.currentPage > 1) {
    pagination.currentPage--
  }
}

</script>
<template>
  <div class="pl-4 pr-80 m-5">
    <Rightbar />
    <div class="bg-white flex items-center justify-between p-10 px-14 rounded-xl grid-cols-2">
      <div v-for="(item, i) in homeInfo" class="flex items-center justify-between">
        <div class="flex items-center justify-between gap-5">
          <span :class="'bg-' + item.color" class="p-3 text-white text-3xl rounded-full h-[55px]">
            <i :class="item.icon"></i
          ></span>
          <div class="block">
            <span class="text-md text-gray-500 block mb-2">{{ item.title }}</span>
            <span class="text-2xl font-bold">{{ menu[i] }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xl text-main-color bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 font-semibold text-[#303972] text-[24px]">O'qituvchilar:</th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="teacher in teachersStore.GET_TEACHERS"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="flex items-center gap-3 p-2">
                <img
                  :src="teacher.img"
                  alt=""
                  class="w-[50px] h-[50px] rounded-full object-cover"
                />
                <span> {{ teacher.name }} {{ teacher.surname }} </span>
              </div>
            </th>
            <td class="px-6 py-4 text-main-bg font-bold text-[#4D44B5]">ID 123456789</td>
            <td class="px-6 py-4 flex items-center gap-3">
              <span class="p-2 px-2 rounded-full text-3xl text-white bg-orange-400"
                ><i class="bx bx-user flex items-center"></i
              ></span>
              <div>
                <span class="block text-sm">Class</span>
                <span class="font-bold text-lg text-main-color">VII A</span>
              </div>
            </td>
            <td class="px-6 py-4 text-main-color font-bold text-[#303972]">12 soat</td>
            <td class="px-6 py-4 text-right">
              <i class='bx bx-printer text-3xl pr-5'></i>
              <i class='bx bx-dots-horizontal-rounded text-3xl'></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex items-center justify-between bg-white">
        <span class="p-5"
          >{{ (pagination.currentPage - 1) * pagination.itemsPerPage + 1 }}-{{
            pagination.currentPage - 1 + pagination.itemsPerPage
          }}
          dan {{ teachersStore.GET_TEACHERS.length }}ta</span
        >
        <div class="flex items-center justify-between gap-3 p-5 px-10">
          <i class="bx bxs-left-arrow text-lg cursor-pointer" @click="DECREMENT_PAGE"></i>
          <span
            v-for="el in Math.ceil(teachersStore.GET_TEACHERS.length / pagination.itemsPerPage)"
            class="text-lg text-main-color p-1 px-3.5 rounded-full border-2 border-main-color cursor-pointer hover:bg-main-color"
            :class="pagination.currentPage == el ? 'bg-main-color text-black-800' : ''"
            @click="() => (pagination.currentPage = el)"
            >{{ el }}</span
          >
          <i class="bx bxs-right-arrow text-lg cursor-pointer" @click="INCREMENT_PAGE"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>