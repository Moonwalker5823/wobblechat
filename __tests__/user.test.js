const supertest = require("supertest");
const { server, app } = require('../server/app.js');
const request = supertest(app);
// const pool = require("../db/connect");

//connect to database before the test


describe('Route integration', () => {
  describe('/api/hello', () => {
    describe('GET', () => {
      it('responds with 200 status', async () => {
        const response = await request.get('/api/hello').expect(200);
      });
    });
  });
});

// const query = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`;
// const { rows } = await pool.query(query, params);
// const query = `SELECT * FROM users WHERE username=$1`;


// it("Creates a new user", done => {
//   request(app)
//     .post("/register")
//     .send(data)
//     .set("Accept", "application/json")
//     .expect("Content-Type", "text/html; charset=utf-8")
//     .expect(response => {console.log(response)})
//     .expect(500,end);
// });
// });


describe('Route integration for /api/users', () => {
  describe('/signup', () => {
    describe('POST', () => {
      let data = {
        username: "dummy",
        // email: "dummy@dummy.com",
        password: 123456
      };

      it('responds with 200 status and a json file', async () => {
        const response = await request.post('/api/users/signup')
          .send(data)
          // .expect(create)
          // expect({ 'content-type': 'application/json' })
          .expect(response => {console.log(response)})
          .expect(200);

      });
    });
  });
});

// describe('Post Endpoints', () => {
//   it('should create a new post', async () => {
//     const res = await request(app)
//       .post('/api/posts')
//       .send({
//         userId: 1,
//         title: 'test is cool',
//       })
//     expect(res.statusCode).toEqual(201)
//     expect(res.body).toHaveProperty('post')
//   })
// })

// describe('PUT', () => {
//   it('responds with 200 status and application/json content type', () => request(server)
//     .put('/markets')
//     .send([])
//     .expect('Content-Type', /application\/json/)
//     .expect(200));


//     try {
//       const params = [username, hashedPassword];
//       const query = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`;
//       const { rows } = await pool.query(query, params);
//       res.locals.id = rows[0].id; 

// app.put('/markets', (req, res, next) => {
//   const syncResult = db.sync(req.body);
//   if (syncResult instanceof Error) {
//     return next({ code: 400, error: syncResult });
//   }
//   res.json(syncResult);
// });
