const { Sequelize } = require('sequelize');
const dbUser = process.env.DBUSER;
const dbPassword = process.env.DBPASSWORD;

// Create a new Sequelize instance
const sequelize = new Sequelize('yelpcamp_rq7f', dbUser, dbPassword, {
  host: 'dpg-cos0pqvsc6pc73dv3etg-a.oregon-postgres.render.com',
  port: 5432,
  dialect: 'postgres',
  logging: console.log, // Enable logging of SQL queries
  dialectOptions: {
    ssl: true
  }
});

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = { sequelize };
