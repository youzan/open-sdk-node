YouzanYun SDK
=======

[![NPM Version](https://img.shields.io/npm/v/youzanyun-sdk.svg?style=flat)](https://www.npmjs.com/package/youzanyun-sdk)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Downloads](https://img.shields.io/npm/dt/youzanyun-sdk.svg)]()
[![Build Status](https://travis-ci.org/youzan/open-sdk-node.png)](https://travis-ci.org/youzan/open-sdk-node)

YouzanYun SDK for Node.  

## Install

```bash
npm i youzanyun-sdk --save
```

## Usage

可参考 [examples](examples)  

### 1. 获取 accessToken

#### 自用型应用

```node
const youzanyun = require('youzanyun-sdk');

const resp = youzanyun.token.get({
  authorize_type: 'silent',
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
  grant_id: 110,
});
```

#### 工具型应用

```node
const youzanyun = require('youzanyun-sdk');

// 获取token
const resp = youzanyun.token.get({
  authorize_type: 'authorization_code',
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
  code: 'YOUR_CODE',
  redirect_uri: 'YOUR_REDIRECT_URI',
});

// 刷新token
const resp = youzanyun.token.get({
  authorize_type: 'authorization_code',
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
  refresh_token: 'YOUR_REFRESH_TOKEN',
});
```

### 2. 接口调用

#### Token方式

```node
const youzanyun = require('youzanyun-sdk');

const token = 'f59b1a6bb04f4eqweqd1c6af315d';
const params = {tid: 'E20190509110527067500013'};

const resp = youzanyun.client.call({
  api: 'youzan.trade.get',
  version: '4.0.0',
  token,
  params: {
    tid: 'E20190509110527067500013',
  },
});
```

#### 文件上传

```node
const youzanyun = require('youzanyun-sdk');

const token = 'f59b1a6bb0asdasq613d1c6af315d';
const files = {'image': path.resolve(__dirname, './pic.png')};

const resp = youzanyun.client.call({
  api: 'youzan.materials.storage.platform.img.upload',
  version: '3.0.0',
  token,
  params: {},
  files,
});
```

### 3. 消息解密

```node
const youzanyun = require('youzanyun-sdk');

const messages = 'YOUR_RECEIVED_MESSAGES';
const clientSecret = 'YOUR_CLIENT_SECRET';

const resp = youzanyun.crypto.decrypt(messages, clientSecret);
```

## License

[MIT](LICENSE)
