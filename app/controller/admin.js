'use strict';
const CommonController = require('../lib/commonController');
module.exports = class AdminController extends CommonController {
  constructor(ctx) {
    super(ctx)
  }

  async home(ctx) {
    // const url = ctx.url.replace(/\/admin/, '');
    await ctx.renderClient('admin.js', {
      ctx,
      url: ctx.url
    });
  }

  async testHttp(ctx) {
    ctx.app.loggers.reportLogger.info(`[测试] ${ctx.url}`)
    const res = await this.getHttp('/nlp/wechat/activity/video/listNewest', {
      activityId: '20220204',
      state: 1,
      current: 1,
      size: 10,
    })
    ctx.body = res;
  }

  async getDirectory(ctx) {
    const res = {
      data: {
        data: [{
          id: 1,
          name: '图片',
        }, {
          id: 2,
          name: '视频',
        }],
        code: 1,
      },
    }
    ctx.body = res;
  }
};