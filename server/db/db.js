const { Sequelize, DataTypes } = require('sequelize');

//const sequelize = new Sequelize('postgres://postgres:rodrigosql@localhost:5432/weather', { logging: false })

const sequelize = new Sequelize({
    database: "d12b4ik2cj9ucd",
    username: "efkqwedpgijoep",
    password: "6af626f4c3b2ae7eaf8791aac5cabd5e6fa5b78ebb3a86cd64e5869098e45e54",
    host: "ec2-23-23-182-238.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    logging: false, // set to console.log to see the raw SQL queries
    //native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
  
  sequelize.authenticate()
  .then(() => console.log('postgres DB ok'))
  .catch(err => console.log('fallo postgres DB'+err))

module.exports={ sequelize, DataTypes }