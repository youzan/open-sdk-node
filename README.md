YouzanYun SDK
=======

[![NPM Version](https://img.shields.io/npm/v/youzanyun-sdk.svg?style=flat)](https://www.npmjs.com/package/youzanyun-sdk)
[![Build Status](https://travis-ci.org/youzan/open-sdk-node.png)](https://travis-ci.org/youzan/open-sdk-node)
[![Coverage Status](https://img.shields.io/coveralls/youzan/open-sdk-node/master.svg?style=flat)](https://coveralls.io/github/youzan/open-sdk-node?branch=master)
[![Downloads](https://img.shields.io/npm/dt/youzanyun-sdk.svg)]()
[![Software License][ico-license]](LICENSE.md)

YouzanYun SDK for Node.  

## Install

```bash
$ npm install youzanyun-sdk --save
```

## Usage

可参考 [examples](examples)  

### 1. 获取 accessToken

#### 工具型应用

```node
const youzanyun = require('youzanyun-sdk');

const params = new Map();
params.set('grant_id', 110);
params.set('client_id', 'YOUR_CLIENT_ID');
params.set('client_secret', 'YOUR_CLIENT_SECRET');
const tokenPromise = youzanyun.token.get('silent', params);
```

#### 自用型应用

```node
const youzanyun = require('youzanyun-sdk');

const params = new Map();
params.set('code', 'YOUR_CODE');
params.set('redirect_uri', 'YOUR_REDIRECT_URI');
const tokenPromise = youzanyun.token.get('authorization_code', params);
```

### 2. 接口调用

#### Token方式

```node
const youzanyun = require('youzanyun-sdk');

const token = 'f59b1a6bb04f4eqweqd1c6af315d';

const params = new Map();
params.set('tid', 'E20190509110527067500013');

const resp1 = youzanyun.client.call('youzan.trade.get', '4.0.0', token, params);
resp1.then((data) => {
  console.log(data);
});
```

#### 文件上传

```node
const youzanyun = require('youzanyun-sdk');

const token = 'f59b1a6bb0asdasq613d1c6af315d';

const files = new Map();
files.set('image', path.resolve(__dirname, './pic.png'));

const resp1 = youzanyun.client.call('youzan.materials.storage.platform.img.upload', '3.0.0', token, {}, files);
resp1.then((data) => {
  console.log(data);
});
```

### 3. 消息解密

```node
const youzanyun = require('youzanyun-sdk');
const messages = 'YOUR_RECEIVED_MESSAGES';
const clientSecret = 'YOUR_CLIENT_SECRET';

const data = youzanyun.crypto.decrypt(messages, clientSecret);
console.log(data);
```

## License

[MIT](LICENSE)
