const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'mnbvcxz098*Z', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
