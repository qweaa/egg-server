import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

const getDefaultState = () => {
  return {
    user: {
      token: getToken(),
      contact: '',
      createdTime: '',
      id: 0,
      password: '',
      roleId: 0,
      roleName: '',
      status: 0,
      updatedTime: '',
      username: '测试'
    }
  }
}

const state = getDefaultState()

const mutations = {
  RESET_USER: (state) => {
    Object.assign(state.user, getDefaultState().user)
  },
  UPDATE_USER: (state, val) => {
    state.user = {
      ...state.user,
      ...val
    }
  }
}

const actions = {
  updateUser({
    commit
  }, val) {
    console.log('valval', val)
    commit('UPDATE_USER', val)
  },
  // user login
  login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      // login({
      //   data: {
      //     username: username.trim(),
      //     password: password
      //   }
      // }).then(response => {
      //   const { data } = response
      //   commit('UPDATE_USER', {
      //     token: data
      //   })
      //   setToken(data)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // get user info
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      // const response = {
      //   code: 10200,
      //   data: {
      //     contact: 'string',
      //     createdTime: '2021-11-05T03:16:42.257Z',
      //     id: 0,
      //     password: 'string',
      //     roleId: 1,
      //     roleName: '超级管理员',
      //     status: 0,
      //     updatedTime: '2021-11-05T03:16:42.257Z',
      //     username: '哈啊哈嗨'
      //   },
      //   message: 'string',
      //   timestamp: 0
      // }

      // const { data } = response

      // commit('UPDATE_USER', data)
      // resolve(data)

      // getInfo({
      //   data: {
      //     token: state.user.token
      //   }
      // }).then(response => {
      //   const { data } = response

      //   if (!data) {
      //     reject('账号信息异常，请重新登录！')
      //   }

      //   commit('UPDATE_USER', data)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_USER')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}