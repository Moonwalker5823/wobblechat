const { Pool } = require("pg");

// pull in secret
require("dotenv").config();

// Connect to our database and assign the result of that connection to a new object
// Then export that object so that we can make queries to our DB.
// This object is used inside of our controllers.
const uri = process.env.NODE_ENV === "development" ? process.env.DEV_DB : process.env.TEST_DB;
const pool = new Pool({
  connectionString: uri,
}
);

module.exports = pool;
