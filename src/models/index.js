const { Sequelize } = require("sequelize");
const {
  database,
  userName,
  pass,
  host,
  dialect,
  port,
} = require("../config/config");
require("dotenv").config();
const sequelize = new Sequelize(database, userName, pass, {
  host: host,
  port: port,
  dialect: dialect,
});

module.exports = sequelize;
