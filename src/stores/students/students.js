import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { students } from '../../constants/students.js'

export const useStudentStore = defineStore('student', () => {
  const state = reactive({
    user: [...students],
    currentPage: 1,
    itemsPerPage: 4
  })

  const SET_USER = (data) => {
    state.user = data
  }

  const ADD_USER = (data) => {
    state.user.push(data)
  }

  const GET_USER = (id) => {
    for (let i in state.user) {
      if (state.user[i].id == id.value) {
        return state.user[i]
      }
    }
  }

  const DELETE_USER = (id) => {
    for (let i in state.user) {
      if (state.user[i].id == id.value) state.user.splice(i, 1)
    }
  }

  const EDIT_USER = (id, data) => {
    for (let i in state.user) {
      if (state.user[i].id == id.value) {
        state.user[i] = data
      }
    }
  }

  const GENERATE_ID = () => {
    return state.user.length ? state.user[state.user.length - 1].id_number + 1 : 1000
  }

  const GET_USERS = computed(() => state.user)

  return {
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
    user: state.user, EDIT_USER, SET_USER, GET_USERS, ADD_USER, GENERATE_ID, DELETE_USER, GET_USER
  }
})