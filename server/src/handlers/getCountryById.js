const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getCountryById = async (req, res) => {
    const { id } = req.params;

    try {
        const country = await Country.findOne({
            where: {
              id: {
                [Op.iLike]: id, //Búsqueda por máyus o minus
              },
            },

            include: {
              model: Activity,
              attributes: ['name', 'difficulty', 'duration', 'season'],
              through: {
                attributes: [],
              },
            },
          });

        if(!country){
            return res.status(404).json({error: 'Country not found'});
        }


        res.status(200).json(country);
    } catch (error) {
        console.error('Error fetching Country by ID', error);
        res.status(500).json({error: 'An error occurred while fetching the country'})
    }
}

module.exports = { getCountryById };