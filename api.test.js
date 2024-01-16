// Sample

const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = app;

// Now, let's write a unit test using Mocha and Chai

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Assuming your app file is named app.js

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Tests', () => {
  it('should return a message from GET /api/hello', async () => {
    const res = await chai.request(app).get('/api/hello');

    expect(res).to.have.status(200);
    expect(res.body).to.be.an('object');
    expect(res.body.message).to.equal('Hello, World!');
  });
});

// Save this test file with a .test.js extension, for example, api.test.js