require("dotenv").config();

module.exports = {
  development: {
    username: "cntrugnxmvojpz",
    password: "3b37e3b5d3e8ef84b3d2036d1e4c04512ef0d148899fc472aa1de89626ae188a",
    database: "d7pcsgq5q5dmtj",
    host: "ec2-3-222-74-92.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: "postgres",
    password: "Ferdi12345",
    database: "db_secondhand",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "cntrugnxmvojpz",
    password: "3b37e3b5d3e8ef84b3d2036d1e4c04512ef0d148899fc472aa1de89626ae188a",
    database: "d7pcsgq5q5dmtj",
    host: "ec2-3-222-74-92.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
