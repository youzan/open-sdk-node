
const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');
const configHttp = require('../config/http');


// axios 全局配置
axios.defaults.baseURL = configHttp.getBaseUrl();
axios.defaults.headers.post['User-Agent'] = 'YZY-Open-Client 1.0.0 - Node';


/**
 * 发起请求
 *
 * @param {String} url 支持绝对路径、相对路径
 * @param {Map<String, V>} params POST 参数
 */
async function post(url, params) {
  const resp = await axios.create({
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
    },
  }).post(url, params);
  return resp;
}

/**
 * 发起上传文件请求
 *
 * @param {String} url 支持绝对路径、相对路径
 * @param {Map<String, V>} files 上传文件参数. 示例: {"image": "/path/to/filename.jpg"}
 */
async function upload(url, files) {
  const form = new FormData();

  files.forEach((v, k) => {
    form.append(k, fs.createReadStream(v), {});
  });

  const resp = await axios.create({
    headers: form.getHeaders(),
  }).post(url, form);
  return resp;
}

module.exports = {
  post, upload,
};
