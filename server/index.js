const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

const { getAllCountries } = require('./src/handlers/getAllCountries') //Hacer la petición a la API para traer y almacenar todos los datos a la DB, cada vez que se levante el servidor

const importData = async () => {
  try {
    await getAllCountries();

  } catch (error) {
    console.error('Error importing data', error);
  }
}

conn
  .sync({ force: true })
  .then(() => {
    importData();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
})
.catch(error => console.error(error))
