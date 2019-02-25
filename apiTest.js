const request = require('supertest');
const app = require('./index');

//==================== user API test ====================

/**
 * Testing get test endpoint
 */
describe('GET /test',   ()=> {
  it('respond with json containing a list of all test', async (done) => {
    await request(app)
      .get('/test')
      .set('Accept', 'application/json')
      //.expect('Content-Type','json')
      .expect(201, done)
  });
  
});


/**
 * Testing get all user endpoint
 */

describe('POST /trades', ()=> {
  let data = {
    "type": "buy",
    "user": {
      "id": "778",
      "name": "Ranjan8"
    },
    "symbol": "xyzl",
    "shares": 12,
    "price": 1233.12,
    "timestamp": "1999-11-23 1:11:23"
  }
  it('respond with 201 created',  (done)=> {
    request(app)
      .post('/trades')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});