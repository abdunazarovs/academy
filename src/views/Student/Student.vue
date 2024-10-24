<script setup>
import moment from 'moment'
import { students } from '../../constants/students.js'
import Search from '../../UI/Search.vue'
import { ref, reactive, onMounted } from 'vue'
import { useStudentStore } from '../../stores/students/students.js'
import { toast } from 'vue3-toastify'


const deleteModalTogg = ref(false)
const deletedID = ref(null)
const store = useStudentStore()
const modalTogg = ref(false)
const editUser = ref(0)



const toggleModal = () => {
  for (let i in studentInfo) studentInfo[i] = ''
  modalTogg.value = !modalTogg.value
}

const toggleDelete = () => (deleteModalTogg.value = !deleteModalTogg.value)
const closeEdit = () => {
  editUser.value = null
}

let studentInfo = reactive({
  name: '',
  surname: '',
  birthday: '',
  group_number: '',
  login: '',
  password: ''
})

let editStudentInfo = reactive({
  name: '',
  surname: '',
  birthday: '',
  group_number: '',
  login: '',
  password: ''
})

// //////////////////////////////////////////////// 
const addStudent = () => {
  const student = {
    id: Date.now(),
    name: studentInfo.name,
    surname: studentInfo.surname,
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    group_number: studentInfo.group_number,
    grade: 'Freelance',
    birthday: studentInfo.birthday,
    id_number: store.GENERATE_ID(),
    login: studentInfo.login,
    password: studentInfo.password,
    createdAt: Date.now()
  }
  try {
    store.ADD_USER(student)
    toast.success(`Added successfuly`, {
      autoClose: 1000,
      theme: 'light',
      pauseOnHover: true,
    })
    toggleModal()
    for (let i in studentInfo) studentInfo[i] = ''
  } catch (err) {
    console.log(err)
    toast.error(`Error`, {
      autoClose: 1000,
      theme: 'light'
    })
  }
}
////////////////////////////////////////////////////////
const deleteStudent = () => {
  try {
    store.DELETE_USER(deletedID)
    toast.success(`Deleted successfuly`, {
      autoClose: 1000,
      theme: 'light'
    })
    toggleDelete()
    for (let i in studentInfo) studentInfo[i] = ''
  } catch (err) {
    console.log(err)
    toast.error(`Error`, {
      autoClose: 1000,
      theme: 'light'
    })
  }
}

/////////////////////////////////////////////////////////////

const openEdit = (student) => {
  editUser.value = student.id
  const currentUser = store.GET_USER(editUser)
  editStudentInfo = {
    id: currentUser.id,
    name: currentUser.name,
    surname: currentUser.surname,
    birthday: currentUser.birthday,
    group_number: currentUser.group_number,
    login: currentUser.login,
    password: currentUser.password,
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    grade: 'Freelance',
    id_number: currentUser.id_number,
    createdAt: currentUser.createdAt
  }
}
// ////////////////////////////////////////////////////////

const editStudent = () => {
  try {
    store.EDIT_USER(editUser, editStudentInfo)
    toast.success(`Deleted successfuly`, {
      autoClose: 1000,
      theme: 'light'
    })
    closeEdit()
    // for (let i in editStudentInfo) editStudentInfo[i] = ''
    console.log(editUser.value)
    editUser.value = null
    console.log(editUser.value)
  } catch (err) {
    console.log(err)
    toast.error(`Error`, {
      autoClose: 1000,
      theme: 'light'
    })
  }
}

/////////////////////////////////////////////////////////////////////
onMounted(() => {
  // headStore.CHANGE_TITLE('Students')
  store.SET_USER(students)
})

</script>


<template>
  <div class="p-5 relative">
    <!-- Search modal -->
    <div class="pl-8 w-full flex items-center justify-between">
      <Search />
      <button
        @click="
          () => {
            editUser = null
            toggleModal()
          }
        "
        class="bg-[#4D44B5] hover:bg-main-color duration-300 bg-main-bg text-white w-[200px] p-2 rounded-full"
      >
        <i class="bx bx-plus text-3xl text-bold"></i>
      </button>
    </div>

  <!-- DELETE USER MODAL -->
    <div
      id="deleteModal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-[#4d44b565]"    
      :class="deleteModalTogg ? 'flex' : 'hidden'"
      @click="deleteStudent"
    >      
    </div>

    <!-- Main CREATE modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="absolute hs-overlay top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-[80vh] bg-main-light-bg"
      :class="modalTogg ? '' : 'hidden'"
    >
      <div class=" pl-[30px] justify-center items-center w-[1350px]">
        <!-- Modal content -->
        <div class="relative bg-white rounded-xl shadow-xl h-[800px]">
          <!-- Modal header -->
          <div
            class="bg-[#4D44B5] flex items-start justify-between p-4 border-b rounded-t-xl dark:border-gray-600 bg-main-bg"
          >
            <h3 class="text-xl text-white font-bold">O'quvchi ma'lumotlari</h3>
            
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="w-full flex items-start gap-10">
              <div class="block">
                <span class="text-main-color font-bold text-md">Rasm *</span>
                <div
                  class="h-[175px] w-[175px] mt-5 border-2 border-main-color border-dashed rounded-lg flex items-center text-center"
                >
                  Rasm qo'shish uchun ustiga bosing
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Ism *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="John"
                    required
                    v-model="studentInfo.name"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Tug'ilgan sana *</label
                  >
                  <div class="relative max-w-sm">
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/2 pl-4 p-2.5"
                      placeholder="12 May 1999"
                      v-model="studentInfo.birthday"
                    />
                  </div>
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Login *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="username"
                    required
                    v-model="studentInfo.login"
                  />
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Sharif *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Doe"
                    required
                    v-model="studentInfo.surname"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Guruhini tanlang *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Guruhini tanlang"
                    required
                    v-model="studentInfo.group_number"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Parol *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="●●●●●●●●●●●●●"
                    required
                    v-model="studentInfo.password"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="mt-[60px] mr-5 flex items-center justify-end p-6 space-x-10 rounded-b">
            <button
              type="submit"
              @click="addStudent"
              class="text-[18px] bg-main-bg hover:bg-white focus:ring-1 focus:outline-none focus:ring-[#4D44B5] rounded-full font-['Regular'] text-[#4D44B5] px-5 py-2.5 text-center border-[#4D44B5] border-[2px]"
            >
              QO'SHISH
            </button>
          </div>
        </div>
      </div>
    </div>


    <!-- Main UPDATE modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="absolute top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-[100vh] bg-main-light-bg"
      :class="editUser ? '' : 'hidden'"
    >
      <div class="pl-[30px] justify-center items-center w-[1350px]">
        <!-- Modal content -->
        <form  @submit.prevent="editStudent" class="relative bg-white rounded-xl shadow-xl h-[650px]">
          <!-- Modal header -->
          <div
            class="bg-[#4D44B5] flex items-start justify-between p-4 border-b rounded-t-xl dark:border-gray-600 bg-main-bg"
          >
            <h3 class="text-xl text-white font-bold">O'quvchi ma'lumotlari</h3>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="w-full flex items-start gap-10">
              <div class="block">
                <span class="text-main-color font-bold text-md">Rasm *</span>
                <div
                  class="h-[175px] w-[175px] mt-5 border-2 border-main-color border-dashed rounded-lg flex items-center text-center"
                >
                  Rasm qo'shish uchun ustiga bosing
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Ism *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="John"
                    required
                    v-model="editStudentInfo.name"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Tug'ilgan sana *</label
                  >
                  <div class="relative max-w-sm">
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/2 pl-4 p-2.5"
                      placeholder="12 May 1999"
                      v-model="editStudentInfo.birthday"
                    />
                  </div>
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Login *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="username"
                    required
                    v-model="editStudentInfo.login"
                  />
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Sharif *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Doe"
                    required
                    v-model="editStudentInfo.surname"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Guruhini tanlang *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Guruhini tanlang"
                    required
                    v-model="editStudentInfo.group_number"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Parol *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="●●●●●●●●●●●●●"
                    required
                    v-model="editStudentInfo.password"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="mt-[60px] mr-5 flex items-center justify-end p-6 space-x-10 rounded-b">
            <button
              type="submit"
              class="text-[18px] bg-main-bg hover:bg-white focus:ring-1 focus:outline-none focus:ring-[#4D44B5] rounded-full font-['Regular'] text-[#4D44B5] px-5 py-2.5 text-center border-[#4D44B5] border-[2px]"
            >
              SAQLASH
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- TABLE SECTION START -->
    <div class="pl-8 pr-10  max-w-full mt-12">
      <div class="flex flex-col">
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          class="w-4 h-4 text-[#000AFF] bg-gray-100 rounded border-gray-300 focus:ring-[#000AFF] focus:ring-1 "
                        />
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-8 text-xs font-medium text-[#8A92A6] tracking-wider text-left uppercase "
                    >
                      I.O.F
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6  text-xs font-medium tracking-wider text-left text-[#8A92A6] uppercase "
                    >
                      Guruh raqami
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#8A92A6] uppercase "
                    >
                      Bosqich
                    </th>
                    
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#8A92A6] uppercase "
                    >
                      Qo'shilgan sana
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#8A92A6] uppercase "
                    >
                      ID raqami
                    </th>
                    <th scope="col" class="p-4 text-[#8A92A6]">Actions</th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                >
                  <tr v-for="student in store.GET_USERS" class="hover:bg-gray-100">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-1"
                          type="checkbox"
                          class="w-4 h-4 text-[#000AFF] bg-gray-100 rounded border-gray-300 focus:ring-[#000AFF] focus:ring-1 "
                        />
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td class=" py-4 px-6 text-sm font-medium text-gray-900 flex items-center gap-3">
                      <img :src="student.img" alt="avatar" class="rounded-full h-[50px]" />
                        <h1>{{ student.name }} {{ student.surname }}
                          <p class="pt-[1px] text-[#667085] text-[14px]">john.doe@gmail.com</p>
                        </h1>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500">
                      {{ student.group_number }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ student.grade }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ moment(student.createdAt).format('LL') }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ student.id_number }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-center">
                      <i
                        @click="
                          () => {
                            toggleDelete()
                            deletedID = student.id
                          }
                        "
                        class="text-[#667085] bx bx-trash text-2xl cursor-pointer hover:scale-110 duration-200 mr-5"
                      ></i>
                      <i
                        @click="() => openEdit(student)"
                        class="text-[#667085] bx bx-pencil text-2xl cursor-pointer hover:scale-110 duration-200"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex justify-between items-center text-md p-4 px-10 bg-white">
                <button class="rounded-lg border border-gray-300 text-button-cl p-2 px-4">
                  Avvalgisi
                </button>
                <span>Sahifa 1 dan 10</span>
                <button class="rounded-lg border border-gray-300 text-button-cl p-2 px-4">
                  Keyingisi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>