<script setup>
import moment from "moment";
import Search from "../../UI/Search.vue";
import call from "../../assets/icons/call.png";
import sms from "../../assets/icons/sms.png";
import { teachers } from "../../constants/teacher.js";
import { ref, reactive, onMounted } from "vue";
import { useTeachersStore } from '../../stores/teachers/teachers.js'
import { toast } from 'vue3-toastify'


const modalTogg = ref(false);
const store = useTeachersStore()

const toggleModal = () => {
  for (let i in teachersInfo) teachersInfo[i] = "";
  modalTogg.value = !modalTogg.value;
};

let teachersInfo = reactive({
  name: "",
  surname: "",
  login: "",
  password: "",
  description: "",
  birthday: "",
  subject: "",
});

const addStudent = () => {
  const student = {
    id: Date.now(),
    name: teachersInfo.name,
    surname: teachersInfo.surname,
    subject: teachersInfo.subject,
    img:
      "https://c8.alamy.com/comp/2HATM0Y/muslim-businessman-avatar-arab-person-flat-icon-2HATM0Y.jpg",
    description: teachersInfo.description,
    login: teachersInfo.login,
    password: teachersInfo.password,
    createdAt: Date.now(),
  };
  console.log(student);
  try {
    store.ADD_TEACHERS(student);
    toast.success(`Added successfuly`, {
      autoClose: 1000,
      theme: "light",
    });
    toggleModal();
    for (let i in teachersInfo) teachersInfo[i] = "";
  } catch (err) {
    console.log(err);
    toast.error(`Error`, {
      autoClose: 1000,
      theme: "light",
    });
  }
};
</script>
<template>
  <!-- Search modal -->
  <div class="p-5 relative">
    <div class="pl-8 w-full flex items-center justify-between">
      <Search />
      <button
        @click="
          () => {
            toggleModal();
          }
        "
        class="bg-[#4D44B5] hover:bg-main-color duration-300 bg-main-bg text-white w-[200px] p-2 rounded-full"
      >
        <i class="bx bx-plus text-3xl"></i>
      </button>
    </div>
  </div>

  <!-- Main CREATE modal -->
  <div
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="absolute hs-overlay top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-[100vh] bg-main-light-bg"
    :class="modalTogg ? '' : 'hidden'"
  >
    <div class="pt-[110px] pl-[320px] justify-center items-center w-[1330px]">
      <!-- Modal content -->
      <div class="relative bg-white rounded-xl shadow-xl h-[734px]">
        <!-- Modal header -->
        <div
          class="bg-[#4D44B5] flex items-start justify-between p-4 border-b rounded-t-xl dark:border-gray-600 bg-main-bg"
        >
          <h3 class="text-xl text-white font-bold">O'quvchi ma'lumotlari</h3>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <form @submit.prevent="addStudent" class="w-full flex items-start gap-10">
            <div class="block w-[50%]">
              <div class="mb-6">
                <label
                  for="first_name"
                  class="block mb-2 text-md text-main-color font-bold"
                  >Ism *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="Maria"
                  required
                  v-model="teachersInfo.name"
                />
              </div>

              <div class="mb-6">
                <label
                  for="first_name"
                  class="block mb-2 text-md text-main-color font-bold"
                  >Login *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="History@mai.com"
                  required
                  v-model="teachersInfo.login"
                />
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-md text-md text-main-color font-bold"
                  >Ma'lumot *</label
                >
                <textarea
                  id="message"
                  rows="9"
                  class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Write your thoughts here..."
                  v-model="teachersInfo.description"
                ></textarea>
              </div>
              <div class="mb-6">
                <label
                  for="first_name"
                  class="block mb-2 text-md text-main-color font-bold"
                  >Tug'ilgan sana *</label
                >
                <div class="relative max-w-sm">
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-2/2 pl-4 p-2.5"
                    placeholder="24 February 1997"
                    v-model="teachersInfo.birthday"
                  />
                </div>
              </div>
            </div>
            <div class="block w-[50%] pr-5">
              <div class="mb-6">
                <label
                  for="first_name"
                  class="block mb-2 text-md text-main-color font-bold"
                  >Sharif *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="Jalilov"
                  required
                  v-model="teachersInfo.surname"
                />
              </div>
              <div class="mb-6">
                <label
                  for="first_name"
                  class="block mb-2 text-md text-main-color font-bold"
                  >Parol *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="●●●●●●●●●●●●●"
                  required
                  v-model="teachersInfo.password"
                />
              </div>
              <div class="mb-6">
                <label class="text-main-color font-bold text-md">Rasm *</label>
                <div
                  class="h-[200px] w-[200px] mt-2 border-4 border-gray-300 border-dashed rounded-lg flex items-center text-center p-3"
                >
                  Drag and drop or click here to select file
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="first_name"
                  class="block mb-2 text-md text-main-color font-bold"
                  >Fan nomi *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder=""
                  required
                  v-model="teachersInfo.subject"
                />
              </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center justify-end p-6 space-x-10 rounded-b">
              <button
                type="submit"
                class="text-[#4D44B5] mr-4 mb-6 absolute bottom-0 right-0  bg-white bg-main-bg hover:text-white hover:bg-[#4D44B5] focus:ring-1 focus:outline-none focus:ring-[#4D44B5] font-medium rounded-full text-lg px-5 py-2.5 text-center border-2 border-[#4D44B5]"
              >
                QO'SHISH
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!--  TEACHER TABLE -->
  <div class="grid grid-cols-4 pr-12">
    <div
      v-for="teacher in store.GET_TEACHERS"
      class="mt-[40px] ml-12 w-[300px] max-w-sm bg-white border border-gray-200 rounded-[20px] shadow dark:border-gray-700"
    >
      <div class="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span class="sr-only">Open dropdown</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        ></div>
      </div>
      <div class="flex flex-col items-center pb-10">
        <img
          :src="teacher.img"
          class="rounded-full shadow-lg w-[120px] h-[120px]"
          alt="Teacher"
        />
        <h5 class="mb-1 text-[#303972] text-[24px] font-['Poppins'] font-bold">
          {{ teacher.name }} {{ teacher.surname }}
        </h5>
        <span class="font-['Poppins'] text-[#A098AE] text-[18px] font-regular">
          {{ teacher.subject }}
        </span>
        <div class="flex mt-4 space-x-3">
          <button class="bg-[#4D44B5] px-3 py-3 rounded-full relative">
            <img :src="call" alt="" class="" />
          </button>
          <button class="bg-[#4D44B5] px-3 py-3 rounded-full relative">
            <img :src="sms" alt="" class="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
