
const axios = require('axios');
const utilMap = require('./map');
const configHttp = require('../config/http');


// axios 全局配置
axios.defaults.baseURL = configHttp.getBaseUrl();
axios.defaults.headers.post['User-Agent'] = 'YZY-Open-Client 1.0.0 - Node';
axios.defaults.headers.post['Content-type'] = 'application/json;charset=UTF-8';


/**
 * 发起请求
 * 返回的是Promise对象
 *
 * @param {String} url 支持绝对路径、相对路径
 * @param {Map<String, V>} params POST 参数
 */
function post(url, params) {
  return axios.post(url, utilMap.toObj(params)).then(resp => resp.data);
}

module.exports = {
  post,
};
