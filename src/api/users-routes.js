const Router = require('koa-router');
const Users = require('../controllers/users-controller');
const { idIsValid } = require('../utils/middlewares');

const router = new Router();

router.get('/', Users.get)
router.get('/:id', idIsValid, Users.getUser)
router.post('/', Users.create)
router.delete('/:id', idIsValid, Users.delete);
router.put('/:id', idIsValid, Users.update)

module.exports = router.routes(); 