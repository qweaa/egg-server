import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import settings from './modules/settings'

Vue.use(Vuex)

export default function createStore(initState) {
  app.state.appData = initState;
  return new Vuex.Store({
    modules: {
      app,
      permission,
      user,
      settings,
    },
    getters
  })
}