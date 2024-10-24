import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGroupsStore = defineStore('groups', () => {
  const state = reactive({
    groups: [],
    currentPage: 1,
    itemsPerPage: 5
  })

  const SET_GROUPS = (data) => {
    state.groups = data
  }

  const ADD_GROUPS = (data) => {
    state.groups.push(data)
  }

  const GET_GROUPS = (id) => {
    for (let i in state.groups) {
      if (state.groups[i].id == id.value) {
        return state.groups[i]
      }
    }
  }

  const DELETE_GROUPS = (id) => {
    for (let i in state.groups) {
      if (state.groups[i].id == id.value) state.groups.splice(i, 1)
    }
  }

  const EDIT_GROUPS = (id, data) => {
    for (let i in state.groups) {
      if (state.groups[i].id == id.value) {
        state.groups[i] = data
      }
    }
  }

  const GENERATE_ID = () => {
    return state.groups.length ? state.groups[state.groups.length - 1].id_number + 1 : 1000
  }

  const GET_GROUPSS = computed(() => state.groups)

  return {
    state,
    EDIT_GROUPS,
    SET_GROUPS,
    GET_GROUPSS,
    ADD_GROUPS,
    GENERATE_ID,
    DELETE_GROUPS,
    GET_GROUPS
  }
})