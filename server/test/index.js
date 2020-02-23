const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const routes = require('../routes');
const { expect } = chai;
const express = require('express');
const bodyParser = require('body-parser');

chai.use(chaiHttp);

const createApp = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/', routes);
  
  return app;
}

describe('Server test', () => {
  let app;
  const port = 3005;
  let key = '';

  before(done => {
    app = createApp();
    app.listen(port, err => {
      if (err) return done(err);
      done(); 
    });
  });

  it('should return a key if passed a url', done => {
    const url = 'www.google.com';
    chai.request(app)
      .post('/api/urls')
      .type('form')
      .send({ url })
      .end((err, res) => {
        key = res.text;
        expect(res.text).to.be.a('string');
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      })

  });

  it('should successfully redirect if passed a valid key', done => {
    console.log(key)
    chai.request(app)
      .get(`/api/urls/${key}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should give status 400 if passed an invalid key', done => {
    chai.request(app)
      .get('/test')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});