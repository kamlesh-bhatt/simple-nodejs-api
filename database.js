import Sequelize from 'sequelize'
export default new Sequelize('react', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});