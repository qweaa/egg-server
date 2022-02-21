import App from 'framework/app';
import createStore from './store';
import createRouter from './router';
import index from './index.vue';

import '@/asset/css/index.less';

export const store = createStore(window.__INITIAL_STATE__);

new App({
  index,
  createRouter,
  store,
}).bootstrap();