const { Pool } = require('pg');
const dbUser = process.env.DBUSER;
const dbPassword = process.env.DBPASSWORD;

// Create a new pool instance
const pool = new Pool({
  user: dbUser,
  host: 'dpg-cos0pqvsc6pc73dv3etg-a.oregon-postgres.render.com',
  database: 'yelpcamp',
  password: dbPassword,
  port: 5432, // alt PostgreSQL port
  ssl: true
});

// Export the pool for executing queries
module.exports = {
  query: (text, params) => pool.query(text, params),
};
