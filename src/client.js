
const _ = require('lodash');
const configHttp = require('./config/http');
const utilHttp = require('./utils/http');


/**
 * 发起接口调用
 *
 * @param {Object} 接口调用参数 {api:'youzan.trade.get', version:'3.0.0', token:'dddd', params:{}, files:{}}
 */
function call(apiParam) {
  if (!_.has(apiParam, 'api')) {
    throw new Error('参数异常: api 必传');
  }
  if (!_.has(apiParam, 'version')) {
    throw new Error('参数异常: version 必传');
  }

  let urlPath;
  if (_.has(apiParam, 'token')) {
    urlPath = configHttp.getUrlAPI(apiParam.api, apiParam.version, apiParam.token);
  } else {
    urlPath = configHttp.getUrlAPIExempt(apiParam.api, apiParam.version);
  }

  if (_.has(apiParam, 'host')) {
    urlPath = apiParam.host + urlPath;
  }

  // 上传文件
  if (_.has(apiParam, 'files') && _.size(apiParam.files) > 0) {
    return utilHttp.upload(urlPath, apiParam.files);
  }

  // 普通调用
  return utilHttp.post(urlPath, apiParam.params);
}

module.exports = {
  call,
};
