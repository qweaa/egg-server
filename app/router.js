'use strict';
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.admin.home);
  router.get('/admin(/.+)?', controller.admin.home);

  router.get('/api/admin/testHttp', controller.admin.testHttp);
  router.get('/api/admin/getDirectory', controller.admin.getDirectory);
};