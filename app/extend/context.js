'use strict';

module.exports = {
  async postHttp(url, data, options) {
    return await this.curl(url, {
      method: 'POST',
      data,
      dataType: 'json',
      ...options,
    })
  },
  async getHttp(url, data, options) {
    return await this.curl(url, {
      method: 'GET',
      data,
      dataType: 'json',
      ...options,
    });
  }
};