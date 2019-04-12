const Router = require('koa-router');
const QrCodes = require('../controllers/qr-codes-controller');
const { idIsValid } = require('../utils/middlewares');

const router = new Router();

router.post('/', QrCodes.create)
router.post('/:id', QrCodes.verify)


module.exports = router.routes(); 