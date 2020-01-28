const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const routes = require('../routes');
const { expect } = chai;
const express = require('express');

chai.use(chaiHttp);

const createApp = () => {
  const app = express();
  app.use('/', routes);
  
  return app;
}

describe('Server test', () => {
  let app;
  const port = 3005;

  before(done => {
    app = createApp();
    app.listen(port, err => {
      if (err) return done(err);
      done(); 
    });
  });

  it('should successfully redirect if passed a valid key', done => {
    chai.request(app)
      .get('/api/urls/e711e0')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should give status 400 if passed an invalid key', done => {
    chai.request(app)
      .get('/api/urls/test')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});