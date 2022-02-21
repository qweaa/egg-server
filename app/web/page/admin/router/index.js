import Vue from 'vue';

import VueRouter from 'vue-router';
import Dashboard from '../view/dashboard/index.vue';
import CommonLayout from "@/component/layout/common/index.vue";

Vue.use(VueRouter);

export const routes = [{
  path: '/',
  meta: {
    title: '首页',
    icon: 'el-icon-s-home',
  },
  component: Dashboard
}, {
  path: '/picture',
  meta: {
    title: '图片管理',
    icon: 'el-icon-picture',
  },
  component: CommonLayout,
  redirect: '/picture/index',
  children: [{
    path: 'index',
    component: () => import('../view/picture/index.vue'),
    meta: {
      title: '管理列表',
    }
  }, {
    path: 'upload',
    component: () => import('../view/picture/upload.vue'),
    meta: {
      title: '上传图片',
    }
  }, {
    hidden: true,
    path: 'update',
    component: () => import('../view/picture/upload.vue'),
    meta: {
      title: '边距图片',
    }
  }]
}]

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/admin/',
    routes: routes.concat([{
      path: '*',
      component: () => import('../view/notfound.vue')
    }]),
  });
}