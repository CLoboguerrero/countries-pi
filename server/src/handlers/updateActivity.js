const { Activity, Country } = require('../db');

const updateActivity = async (req, res) => {
    const { id } = req.params;
    const { name, difficulty, duration, season, countriesToAdd, countriesToRemove } = req.body;

    try {
        const modifyActivity = await Activity.findByPk(id);

        if(!modifyActivity){
            return res.status(404).json({ error: 'Activity not found' });
        }

        modifyActivity.name = name;
        modifyActivity.difficulty = difficulty;
        modifyActivity.duration = duration;
        modifyActivity.season = season;

        //Añadir paises a la actividad:
        if (countriesToAdd && countriesToAdd.length > 0){
            for (const countryId of countriesToAdd) {
                const country = await Country.findByPk(countryId);
                if (country) {
                    await modifyActivity.addCountry(country);
                };
            };
        };

        //Remover país de la actividad:
        if (countriesToRemove && countriesToRemove.length > 0){
            for(const countryId of countriesToRemove) {
                const country = await Country.findByPk(countryId);
                if(country){
                    await modifyActivity.removeCountry(country);
                };
            };
        };


        await modifyActivity.save();

        res.status(200).json(modifyActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { updateActivity };