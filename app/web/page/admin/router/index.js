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
    icon: 'el-icon-folder-add',
  },
  component: () => import('../view/directory/create.vue'),
}, {
  hidden: true,
  path: '/directory/update',
  meta: {
    title: '更新文件夹',
    icon: 'el-icon-folder-add',
  },
  component: () => import('../view/directory/create.vue'),
}, {
  path: '/directory',
  meta: {
    title: '文件夹管理',
    icon: 'el-icon-folder-opened',
  },
  component: CommonLayout,
  redirect: '/directory/list',
  children: [{
    path: 'list',
    component: () => import('../view/directory/list.vue'),
    meta: {
      title: '文件夹列表',
    }
  }, {
    hidden: true,
    path: 'file/update',
    component: () => import('../view/file/upload.vue'),
    meta: {
      title: '更新文件',
    }
  }, {
    hidden: true,
    path: 'file',
    component: () => import('../view/file/list.vue'),
    meta: {
      title: '文件列表',
    }
  }]
}, {
  path: '/file/upload',
  component: () => import('../view/file/upload.vue'),
  meta: {
    title: '上传文件',
    icon: 'el-icon-upload',
  }
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