const { Activity, Country } = require('../db');

const postActivity = async (req, res) => {

    const {activityName, difficulty, duration, season, countries} = req.body;

    if(!activityName || !difficulty || !duration || !season){
        return res.status(400).json({ error: 'Missing required fields!' });
    }

    try {
        const newActivity = await Activity.create({
            activityName,
            difficulty,
            duration,
            season
        });
        
        console.log(activityName, difficulty, duration, season);
    //newActivity.addCountries(countries);// Aregar países a la actividad

    //Lógica para validar la ID de un país:
        const addedCountries = [];
        for (const countryId of countries){
            try {
                const country = await Country.findByPk(countryId);
                if (country){
                    await newActivity.addCountry(country);
                    addedCountries.push(country.id);
                } else {
                    console.error(`Invalid country ID ${countryId}`);
                }
            } catch (error) {
                console.error(`Error adding country ${countryId}:`, error);
            }
        }

        res.status(201).json({newActivity, addedCountries});
        //res.status(201).json({newActivity});
    } catch (error) {
        console.log('Error creating activity:', error);
        res.status(500).json({ error: 'An error occurred while creating the activity'})
    }
}

module.exports = { postActivity };