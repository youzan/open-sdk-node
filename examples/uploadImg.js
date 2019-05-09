
const path = require('path');
const youzanyun = require('../lib/index');

const token = 'f59b1a6bb0asdasq613d1c6af315d';

const files = new Map();
files.set('image', path.resolve(__dirname, './pic.png'));

const resp1 = youzanyun.client.call('youzan.materials.storage.platform.img.upload', '3.0.0', token, {}, files);
resp1.then((data) => {
  console.log(data);
});
