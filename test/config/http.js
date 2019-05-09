/* global it, describe */

const chai = require('chai');
const configHttp = require('../../src/config/http');

describe('test configHttp', () => {
  it('for getBaseUrl', () => {
    chai.expect(configHttp.getBaseUrl()).to.be.equal('https://open.youzanyun.com');
  });

  it('for getUrlToken', () => {
    chai.expect(configHttp.getUrlToken()).to.be.equal('/auth/token');
  });

  it('for getUrlAPI', () => {
    chai.expect(configHttp.getUrlAPI('youzan.get', '2.0.0', 'token'))
      .to.be.equal('/api/youzan.get/2.0.0?access_token=token');
  });

  it('for getUrlAPIExempt', () => {
    chai.expect(configHttp.getUrlAPIExempt('youzan.get', '2.0.0'))
      .to.be.equal('/api/auth_exempt/youzan.get/2.0.0');
  });
});
