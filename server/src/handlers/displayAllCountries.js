const { Country } = require('../db');

const displayAllCountries = async (req, res) =>{
    try {
        const showCountries = await Country.findAll();
        res.status(200).json(showCountries);
    } catch (error) {
        res.status(500).json({ error: 'An error ocurred while retreiving all Countries' });
    }
};

module.exports = { displayAllCountries }