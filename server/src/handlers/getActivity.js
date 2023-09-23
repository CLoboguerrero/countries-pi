const { Activity, Country } = require('../db');

const getActivity = async (req, res) => {
    try {
        const activities = await Activity.findAll({
            include: {
                model: Country,
                attributes: ['id', 'name'],
                through: {
                    attributes: [],
                },
            },
        });

        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching activities' });
    }
}

module.exports = { getActivity };