require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.LOCAL_PASSWORD,
    database: "rememberDat_local",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    // eslint-disable-next-line
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};


