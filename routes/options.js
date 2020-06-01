var express = require('express');
var router = express.Router();
const optionsCtrl = require('../controllers/options');


router.get('/new', isLoggedIn, optionsCtrl.new);
router.post('/', isLoggedIn, optionsCtrl.create);
router.get('/', isLoggedIn, optionsCtrl.index);
// router.post('/show', isLoggedIn, optionsCtrl.show);
router.get('/:id', isLoggedIn, optionsCtrl.pickOption);
router.get('/showAll', isLoggedIn, optionsCtrl.getChoices);
router.delete('/:id', isLoggedIn, optionsCtrl.deleteOption);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/auth/google')
    }
}

module.exports = router;