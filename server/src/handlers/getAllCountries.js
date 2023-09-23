const axios = require('axios');
const { Country } = require('../db');

const getAllCountries = async (req, res) => {

    try {
   
        const response = await axios.get('http://localhost:5000/countries');
        const apiData = response.data;

        //console.log(response.data);//recordar borrar esto

        const dataToInsert = [];
    
        for (const countryData of apiData) {
          const {
            name: { common },
            cca3: id,
            flags: { svg: flag },
            capital,
            region,
            subregion,
            area,
            population,
          } = countryData;
          
          const capitalString = Array.isArray(capital) ? capital.join(', ') : capital;
        
          const countryObject = {
            name: common,
            id,
            flag,
            capital: capitalString,
            continent: region, 
            subregion,
            area,
            population,
          };
    
          dataToInsert.push(countryObject);
    
          //console.log(`Imported data for ${common} (${id}) (${flag}) (${capital}) (${region}) (${subregion}) (${area}) (${population}) successfully.`);
          console.log(`Imported data for ${common} (${id}) (${flag}) (${capital}) (${region}) (${subregion}) (${area}) (${population}) successfully.`);
        }
    
        // for (const data of dataToInsert) {
        //   Country.insertDataWithErrors(data);
        // }

        await Country.bulkCreate(dataToInsert, { ignoreDuplicates: true });
        console.log('Data imported successfully!');
      } catch (error) {
        console.error('Error importing data:', error);
      }

  };
  


module.exports = { getAllCountries };