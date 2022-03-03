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
  path: '/directory/create',
  meta: {
    title: '新增文件夹',
    icon: 'el-icon-picture',
  },
  component: () => import('../view/directory/create.vue'),
}, {
  path: '/directory',
  meta: {
    title: '文件夹管理',
    icon: 'el-icon-picture',
  },
  component: CommonLayout,
  redirect: '/directory/list',
  children: [{
    path: '/list/:id',
    component: () => import('../view/directory/list.vue'),
    meta: {
      title: '图片',
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