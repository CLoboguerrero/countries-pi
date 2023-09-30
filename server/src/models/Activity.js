const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Activity", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        // },
        activityName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('Spring', 'Summer', 'Fall', 'Winter', 'All Year'),
            allowNull: false
        },
        // countries: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     allowNull: true,
        // }
    }, 
    {
       timestamps: false,
    }
    );
};