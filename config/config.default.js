'use strict';
const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.customLogger = {
    reportLogger: {
      file: path.join(app.baseDir, 'logs/report-logger.log'),
    }
  }

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  exports.middleware = [
    'access'
  ];

  exports.security = {
    csrf: {
      ignoreJSON: false,
      cookieName: 'csrfToken',
      // sessionName: 'csrfToken',
      // headerName: 'x-csrf-token'
    },
    xframe: {
      enable: false,
    },
  };

  exports.httpProxy = {
    '/qyzx': {
      target: 'https://qyzx.smartreply.iflyvoice.com:20104',
      pathRewrite: {
        '^/qyzx': ''
      }
    }
  };

  return exports;
};