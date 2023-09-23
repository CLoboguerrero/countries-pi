const { Country } = require('../db');

const getContinentCountries = async (req, res) => {
    const { continent } = req.params;

    try {
        const continentCountries = await Country.findAll({
            where: {
                continent,
            },
        });

        if(!continentCountries){
            return res.status(404).json({ error: 'Continent not found' });
        }

        res.status(200).json(continentCountries);
    } catch (error) {
        console.error('Error fetching Continent', error);
        res.status(500).json({ error: 'An error ocurred while fetching the Continent' });
    }

}

module.exports = { getContinentCountries };