const supertest = require("supertest");
const { server, app } = require('../server/app.js');
const request = supertest(app);

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status', async () => {
        const response = await request.get('/api/hello').expect(200);
      });
    });
  });
});

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status', async () => {
        const response = await request.get('/api/hello').expect(400);
      });
    });
  });
});