/* global it, describe */

const chai = require('chai');
const utilHttp = require('../../src/utils/http');

describe('test configHttp', () => {
  it('for post', () => {
    chai.expect(() => utilHttp.post('http://g.cn', {})).to.be.an.instanceof(Function);
  });
  it('for upload', () => {
    chai.expect(() => utilHttp.upload('http://g.cn', {})).to.be.an.instanceof(Function);
  });
});
