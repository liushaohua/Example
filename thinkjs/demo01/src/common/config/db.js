'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  host: '123.57.46.65',
  port: '3306',
  name: 'weibo',
  user: 'root',
  pwd: '1qaz2wsx3edc!',
  prefix: 'weibo_',
  encoding: 'utf8',
  nums_per_page: 10,
  log_sql: true,
  log_connect: true,
  cache: {
    on: true,
    type: '',
    timeout: 3600
  }
};