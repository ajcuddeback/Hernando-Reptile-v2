require('dotenv').config();

const Sequelize = require('sequelize');

let sequelize;


sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'adoptables-do-user-8535508-0.b.db.ondigitalocean.com',
    dialect: 'mysql',
    port: 25060
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });


module.exports = sequelize;