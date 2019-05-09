
const configHttp = require('./config/http');
const utilHttp = require('./utils/http');


/**
 * 发起接口调用
 *
 * @param {String} api 接口名. 示例: 'youzan.trade.get'
 * @param {String} version 接口版本号. 示例: '4.0.0'
 * @param {String} token 授权AccessToken(绝大部分接口必选,无鉴权接口可选). 示例: 'f59b1a6bb04f4c31ba86589as3af315d'
 * @param {Map<String, V>} params 接口传参(可选). 示例: {"tid": "E201904301841152042200008"}
 * @param {Map<String, String>} files 上传文件参数(可选). value为绝对路径. 示例: {"image": "/path/to/filename.jpg"}
 */
function call(api, version, token = null, params = {}, files = {}) {
  if (!api || !version) {
    throw new Error('参数异常: api version 必传');
  }

  const urlPath = (!token) ? configHttp.getUrlAPIExempt(api, version) : configHttp.getUrlAPI(api, version, token);

  // 上传文件
  if (files.size > 0) {
    return utilHttp.upload(urlPath, files);
  }

  // 普通调用
  return utilHttp.post(urlPath, params);
}

module.exports = {
  call,
};
