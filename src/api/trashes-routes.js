const Router = require('koa-router');
const Trashes = require('../controllers/trashes-controller');
const { idIsValid } = require('../utils/middlewares');

const router = new Router();

router.get('/', Trashes.get)
router.get('/:id', idIsValid, Trashes.getTrash)
router.post('/', Trashes.create)
router.delete('/:id', idIsValid, Trashes.delete);
router.put('/:id', idIsValid, Trashes.update)

module.exports = router.routes(); 