import {
  routes
} from '@/page/admin/router'
import http from '@/framework/network/request';

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


const actions = {
  generateRoutes({
    commit
  }) {
    return new Promise(resolve => {
      http.get('/api/admin/getDirectory').then(data => {
        for (let i = 0; i < routes.length; i++) {
          if (routes[i].path === '/directory') {
            const base = routes[i].children[0];
            const _children = [];
            for (let j of data.data) {
              _children.push({
                ...base,
                path: `/list/${j.id}`,
                meta: {
                  ...base.meta,
                  title: j.name
                }
              })
            }
            routes[i].children = _children;
            commit('SET_ROUTES', routes)
            break;
          }
        }
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}