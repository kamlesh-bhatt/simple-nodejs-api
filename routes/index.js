import 'express-group-routes'
import express from 'express'
import body_parser from 'body-parser'
import cors from 'cors'
import UsersController from '../controllers/usersController'


const router = express.Router()
router.use(cors())
router.use(body_parser.json())
router.use(body_parser.urlencoded({
    extended: false
}))

//cors policy to enable Web API access across cross origins
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Authorization,Content-Length,X-Requested-With');
    next();
});

// router group added for users
router.group('/users', route => {
    route.get('', UsersController.all)
    route.get('/:id', UsersController.view)
})

export default router