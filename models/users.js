module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            type: type.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: type.STRING(45),
            allowNull: false
        },

    }, {
        timestamps: false,
        tableName: 'users'
    });
}