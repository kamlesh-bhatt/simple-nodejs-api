import sequelize from '../database'
import Sequelize from 'sequelize'

var Users = require("../models/users")(sequelize, Sequelize);

class UsersController {
    all(req, res, next) {
        Users.findAll().then(users => res.json(users));
    }
    view(req, res, next) {
        Users.findAll({
            where: {
                id: 1
            }
        })
    }
}

export default new UsersController