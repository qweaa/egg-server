'use strict';
import axios from 'axios';
import {
  getToken
} from '@/utils/auth'
import {
  store
} from '@/page/admin'
import {
  MessageBox,
  Message
} from 'element-ui'

axios.defaults.timeout = 15000;
// axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (getToken()) {
    config.headers['vvmToken'] = getToken()
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const res = response.data.data;

  if (res.code !== 1) {
    return Promise.reject(res)
  } else {
    return res
  }
}, function (error) {
  // 对响应错误做点什么
  const status = error.response.status;
  if (status === 401) {
    MessageBox.confirm('您已注销，您可以取消停留在此页面，或重新登录', '退出登录', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      store.dispatch('user/resetToken').then(() => {
        location.reload()
      })
    })
  } else {
    Message({
      message: '网络异常，请刷新重试',
      type: 'error',
      duration: 5 * 1000
    })
  }
  return Promise.reject(error)
});

export default axios;