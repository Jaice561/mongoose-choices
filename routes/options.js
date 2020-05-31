var express = require('express');
var router = express.Router();
const optionsCtrl = require('../controllers/options');


router.get('/new', isLoggedIn, optionsCtrl.new);
router.post('/', isLoggedIn, optionsCtrl.create);
router.get('/', isLoggedIn, optionsCtrl.index);
router.get('/show', isLoggedIn, optionsCtrl.show);
router.post('/show', isLoggedIn, optionsCtrl.createChoice);
// router.delete('/options', optionsCtrl.delete);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/auth/google')
    }
}

module.exports = router;