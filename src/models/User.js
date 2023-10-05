
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            field:'display_Name'
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

    // console.log(User);
    return User;
};
