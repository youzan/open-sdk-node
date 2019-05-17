/* global it, describe */

const chai = require('chai');
const index = require('../src/index');

describe('test token', () => {
  it('get for silent wrong type', () => {
    chai.expect(() => index.token.get('err')).to.throw('type类型错误');
  });

  it('get for wrong empty params', () => {
    chai.expect(() => index.token.get('silent', {})).to.throw('params不可为空');
  });

  it('get for silent wrong params client_secret', () => {
    const params = {
      client_id: 'aaa',
    };
    chai.expect(() => index.token.get('silent', params)).to.throw('client_id client_secret 必传');
  });

  it('get for silent wrong params', () => {
    const params = {
      client_id: 'aaa',
      client_secret: 'bb',
    };
    chai.expect(() => index.token.get('silent', params)).to.throw('grant_id 必传');
  });

  it('get for silent success', () => {
    const params = {
      client_id: 'aaa',
      client_secret: 'bb',
      grant_id: 110,
    };
    chai.expect(() => index.token.get('silent', params)).to.be.an.instanceof(Function);
  });

  it('get for authorization_code wrong params', () => {
    const params = {
      client_id: 'aaa',
      client_secret: 'bb',
    };
    chai.expect(() => index.token.get('authorization_code', params)).to.throw('code redirect_uri 必传');
  });

  it('get for authorization_code success', () => {
    const params = {
      client_id: 'aaa',
      client_secret: 'bb',
      code: 'aaa',
      redirect_uri: 'http://example.com',
    };
    chai.expect(() => index.token.get('authorization_code', params)).to.be.an.instanceof(Function);
  });

  it('get for refresh_token wrong params', () => {
    const params = {
      client_id: 'aaa',
      client_secret: 'bb',
    };
    chai.expect(() => index.token.get('refresh_token', params)).to.throw('refresh_token 必传');
  });

  it('get for refresh_token success', () => {
    const params = {
      client_id: 'aaa',
      client_secret: 'bb',
      refresh_token: 'aaaa',
    };
    chai.expect(() => index.token.get('refresh_token', params)).to.be.an.instanceof(Function);
  });
});
