'use strict';
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 零配置简化, 详情：https://www.yuque.com/easy-team/easywebpack/v4
module.exports = {
  devtool: 'eval',
  target: 'web',
  resolve: {
    alias: {
      '@': resolve('app/web'),
      'asset': resolve('app/web/asset'),
      'component': resolve('app/web/component'),
      'page': resolve('app/web/page')
    }
  },
  entry: {
    admin: 'app/web/page/admin/index.js',
  },
  cssExtract: true,
  dll: ['vue', 'vue-router', 'vuex', 'axios', 'vuex-router-sync'],
  deploy: {
    mode: 'yarn', // 支持 npm, cnpm, yarn, tnpm , 
    nodejs: false, // 是否把 node 打进 node_modules, 默认 false
    filename: 'test',
    // source: ['dist', 'package.json'], // 覆盖默认
    target: './zip',
    done(filepath) {
      console.log('>>filepath', filepath);
    }
  }
};