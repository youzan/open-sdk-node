'use strict';

var FormData = require('form-data');
var fs = require('fs');
var axios = require('axios');
var utilMap = require('./map');
var configHttp = require('../config/http');

// axios 全局配置
axios.defaults.baseURL = configHttp.getBaseUrl();
axios.defaults.headers.post['User-Agent'] = 'YZY-Open-Client 1.0.0 - Node';

/**
 * 发起请求
 * 返回的是Promise对象
 *
 * @param {String} url 支持绝对路径、相对路径
 * @param {Map<String, V>} params POST 参数
 */
function post(url, params) {
  return axios.create({
    headers: {
      'Content-type': 'application/json;charset=UTF-8'
    }
  }).post(url, utilMap.toObj(params)).then(function (resp) {
    return resp.data;
  });
}

/**
 * 发起上传文件请求
 * 返回的是Promise对象
 *
 * @param {String} url 支持绝对路径、相对路径
 * @param {Map<String, V>} files 上传文件参数. 示例: {"image": "/path/to/filename.jpg"}
 */
function upload(url, files) {
  var form = new FormData();

  files.forEach(function (v, k) {
    form.append(k, fs.createReadStream(v), {});
  });

  return axios.create({
    headers: form.getHeaders()
  }).post(url, form).then(function (resp) {
    return resp.data;
  });
}

module.exports = {
  post: post, upload: upload
};