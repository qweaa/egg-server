'use strict';
const egg = require('egg');
module.exports = class TextService extends egg.Service {
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
  }
};