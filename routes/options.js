var express = require('express');
var router = express.Router();
const optionsCtrl = require('../controllers/options')

/* GET users listing. */
router.get('/', optionsCtrl.create);
router.get('/new', optionsCtrl.new);
router.get('/:id', optionsCtrl.show);

module.exports = router;