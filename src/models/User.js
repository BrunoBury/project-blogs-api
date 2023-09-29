const { TIMESTAMP } = require("mysql2/lib/constants/types")

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        display_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: true
        },},
        {
        timestamps: false,
        tableName: 'users',
    });

    return User;
};