var express = require('express');
var router = express.Router();
const optionsCtrl = require('../controllers/options');


router.get('/new', isLoggedIn, optionsCtrl.new);
router.post('/', isLoggedIn, optionsCtrl.create);
router.get('/', isLoggedIn, optionsCtrl.index);
router.get('/show', isLoggedIn, optionsCtrl.getChoices);
router.get('/:id', isLoggedIn, optionsCtrl.pickOption);
router.delete('/:id', isLoggedIn, optionsCtrl.deleteOption);
router.get('/edit/:id', isLoggedIn, optionsCtrl.showEdit);
router.put('/:id', isLoggedIn, optionsCtrl.update);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/auth/google')
    }
}

module.exports = router;