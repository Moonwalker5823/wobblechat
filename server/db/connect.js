const { Pool } = require("pg");

// Connect to our database and assign the result of that connection to a new object
// Then export that object so that we can make queries to our DB.
// This object is used inside of our controllers.
const uri = 'postgres://bxcmiqos:ESKtx9fl9Gp53tQyDmfnwYYLC8PeheY5@chunee.db.elephantsql.com/bxcmiqos'
const pool = new Pool({
  connectionString: uri,
}
);

module.exports = pool;
