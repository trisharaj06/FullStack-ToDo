const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_app', 'postgres', 'sonam', {
  host: 'localhost', // or your DB host if remote
  dialect: 'postgres',
  logging: false, // Set to true if you want SQL query logs
});

sequelize
  .authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
