const { Country } = require('../db');
const { Op } = require('sequelize');

const getCountryByName = async (req, res) => {
    const { name } = req.query;

    try {
        const country = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
        });

        if(country.length === 0) {
            return res.status(404).json({ error: 'No matching countries found'})
        }

        res.status(200).json(country);
    } catch (error) {
        console.error('Error fetching country by name', error);
        res.status(500).json({ error: 'An error occurred while fetching countries' });
    }
}

module.exports = { getCountryByName };