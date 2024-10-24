import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSubjectsStore = defineStore('subjects', () => {
  const state = reactive({
    subjects: [],
    currentPage: 1,
    itemsPerPage: 5
  })

  const SET_SUBJECTS = (data) => {
    state.subjects = data
  }

  const ADD_SUBJECTS = (data) => {
    state.subjects.push(data)
  }

  const GET_SUBJECT = (id) => {
    for (let i in state.subjects) {
      if (state.subjects[i].id == id.value) {
        return state.subjects[i]
      }
    }
  }

  const DELETE_SUBJECTS = (id) => {
    for (let i in state.subjects) {
      if (state.subjects[i].id == id.value) state.subjects.splice(i, 1)
    }
  }

  const EDIT_SUBJECTS = (id, data) => {
    for (let i in state.subjects) {
      if (state.subjects[i].id == id.value) {
        state.subjects[i] = data
      }
    }
  }

  const GENERATE_ID = () => {
    return state.subjects.length ? state.subjects[state.subjects.length - 1].id_number + 1 : 1000
  }

  const GET_SUBJECTS = computed(() => state.subjects)

  return {
    state,
    EDIT_SUBJECTS,
    SET_SUBJECTS,
    GET_SUBJECTS,
    ADD_SUBJECTS,
    GENERATE_ID,
    DELETE_SUBJECTS,
    GET_SUBJECTS
  }
})