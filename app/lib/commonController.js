'use strict';
const egg = require('egg');
module.exports = class CommonController extends egg.Controller {
  constructor(ctx, baseUrl) {
    super(ctx);
    this.baseUrl = baseUrl || 'https://qyzx.smartreply.iflyvoice.com:20104';
  }

  async getHttp(url, data, options) {
    return await this.ctx.curl(this.baseUrl + url, {
      method: 'GET',
      data,
      dataType: 'json',
      ...options,
    });
  }
  async postHttp(url, data, options) {
    return await this.ctx.curl(this.baseUrl + url, {
      method: 'POST',
      data,
      dataType: 'json',
      ...options,
    })
  }
};