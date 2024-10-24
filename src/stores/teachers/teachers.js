import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { teachers } from '../../constants/teacher.js'

export const useTeachersStore = defineStore('teachers', () => {
  const state = reactive({
    teachers: [...teachers],
    currentPage: 1,
    itemsPerPage: 4
  })

  const SET_TEACHERS = (data) => {
    state.teachers = data
  }

  const ADD_TEACHERS = (data) => {
    state.teachers.push(data)
  }

  const GET_TEACHER = (id) => {
    for (let i in state.teachers) {
      if (state.teachers[i].id == id.value) {
        return state.teachers[i]
      }
    }
  }

  const GENERATE_ID = () => {
    return state.teachers.length ? state.teachers[state.teachers.length - 1].id_number + 1 : 1000
  }

  const GET_TEACHERS = computed(() => state.teachers)

  return {
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
    SET_TEACHERS,
    GET_TEACHERS,
    ADD_TEACHERS,
    GENERATE_ID,    
    GET_TEACHERS
  }
})