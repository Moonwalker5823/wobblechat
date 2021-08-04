const messageController = require('./message.js');
const supertest = require('supertest');
const { server, app } = require('../app.js');
const { response } = require('express');
const request = supertest(app);

// test('adds 1 + 2 to equal 3', () => {
//   expect(functions.sum(1, 2)).toBe(3);
// });

//async test

// test('user name should be Leanne', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// test('should get messages', () => {
//   // expect.assertions(1);
//   return messageController.postMessage().then((data) => {
//     console.log(data);
//     document;
//     // expect(data.name).toEqual('Leanne Graham');
//   });
// });

describe('/', () => {
  describe('POST', () => {
    const data = { questionId: 1, content: 'A clever question' };
    it('responds with 200 status and posts question successfully',() => { 
        request
        .post('/api/messages/')
        .send(data)
        .expect(200)
        .then((response) => {
          expect(response.body.content).toBe(data.content)
        })
      
    });
  });
  describe('GET', () => {
    
    it('responds with 200 status and successfully retrieves message', async () => {
      //  const fakemessage = {dateCreated: new Date(), questionId: 12, content: 'string'} 
      const response = await request
        .get('/api/messages/1')
        // .expect('Content-Type', 'text/html')
        .expect(200);
    });
  });
});
