var express = require('express');
var router = express.Router();
const choicesCtrl = require('../controllers/choices')

/* GET users listing. */
router.get('/', choicesCtrl.create);
router.get('/new', choicesCtrl.new);
router.get('/:id', choicesCtrl.show);

module.exports = router;
