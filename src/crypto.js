
const crypto = require('crypto');

/**
 * 密文解密 适用于订购等消息
 *
 * @param {String} messages 应用收到的密文(收到的原始密文消息 无需解码)
 * @param {String} clientSecret 应用的clientSecret(可在有赞云控制台查看)
 */
function decrypt(messages, clientSecret) {
  if (!messages || !clientSecret) {
    throw new Error('参数异常: messages clientSecret 不可为空');
  }

  const algorithm = decodeURIComponent(messages);
  const key = clientSecret.substring(0, 16);
  const iv = '0102030405060708';

  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  let dec = decipher.update(algorithm, 'base64', 'utf-8');
  dec += decipher.final();
  return dec;
}

module.exports = {
  decrypt,
};
