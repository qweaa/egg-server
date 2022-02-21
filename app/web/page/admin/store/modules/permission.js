import {
  routes
} from '@/page/admin/router'

const state = {
  routes: routes,
  permission_route_names: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  },
  SET_PERMISSION_ROUTE_NAMES: (state, arr) => {
    state.permission_route_names = arr
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}