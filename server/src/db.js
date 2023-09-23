require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, } = process.env;
const CountryFunction = require('./models/Country');
const ActivityFunction = require('./models/Activity')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, 
  native: false,
  dialect: 'postgres',
  charset: 'utf8mb4' 
});
//Verificar que la conexión se haya relizado de manera correcta console.log('Connection String:', `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

CountryFunction(sequelize);
ActivityFunction(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, {through: "Country_Activity"});
Activity.belongsToMany(Country, {through: "Country_Activity"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};