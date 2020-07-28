const Sequelize = require("sequelize");
const config = require("./config");
const Credential = config.credential;
const sequelize = new Sequelize(
  Credential.db_name,
  Credential.db_user,
  Credential.db_pass,
  {
    host: Credential.host,
    dialect: "postgres",
    pool: {
      min: 0,
      max: 5,
      idle: 10000,
    },
  }
);

console.log(Credential.db_name);
console.log(Credential.db_user);
module.exports = { sequelize };
