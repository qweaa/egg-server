'use strict';
const egg = require('egg');
module.exports = class AdminController extends egg.Controller {
  async home(ctx) {
    // const url = ctx.url.replace(/\/admin/, '');
    await ctx.renderClient('admin.js', {
      ctx,
      url: ctx.url
    });
  }

  async testHttp(ctx) {
    const res = await this.ctx.getHttp('https://qyzx.smartreply.iflyvoice.com:20104/nlp/wechat/activity/video/listNewest', {
      activityId: '20220204',
      state: 1,
      current: 1,
      size: 10,
    })
    ctx.body = res;
  }
};