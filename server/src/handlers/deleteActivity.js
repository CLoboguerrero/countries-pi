const { Activity } = require('../db');

const deleteActivity = async (req, res) => {
    const { id } = req.params;

    try {
        const activity = await Activity.findByPk(id);

        if(!activity) {
            return res.status(400).json({ error: 'Activity not found' });
        }

        const aux = { ...activity };
        await activity.destroy();
        res.status(200).json(aux);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the activity' });
    }

}

module.exports = { deleteActivity };