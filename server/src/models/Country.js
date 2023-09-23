const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.ENUM('Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'),
      allowNull:false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, 
  {
    timestamps: false,
    hooks: {
      beforeValidate: async (country, options) => {
        if(!country.capital){
          country.capital = 'No info available';
        }
        if(!country.subregion){
          country.subregion = 'No info available';
        }
      }
    }
  });
  
    // Define a function to insert data with error handling
    // async function insertDataWithErrors(data) {
    //   try {
    //     // Insert data into the database
    //     await this.create(data);
    //   } catch (error) {
    //     // Log the error and the problematic data
    //     console.error('Error inserting data into the database:', error);
    //     console.error('Problematic data:', data);
    //   }
    // }
  
    // // Attach the insertDataWithErrors function to the model
    // sequelize.models.Country.insertDataWithErrors = insertDataWithErrors;

};