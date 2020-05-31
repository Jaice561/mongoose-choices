const Option = require('../models/option');

module.exports = {
    new: newOption,
    create,
    index,
    show,
    addOption,
    makeChoice,
    addChoice
    // createChoice
};

function newOption(req, res) {
    res.render('options/new');
}

function create(req, res) {
    const option = new Option(req.body);
    option.user = req.user._id;
    option.save(function(err) {
        if (err) return res.render('options/new');
        res.redirect('/options');
    })

}

function index(req, res) {
    Option.find({user: req.user._id}, function(err, options) {
        res.render('options/index', {options});
    });
}

function show(req, res) {
    res.render('options/show');
}

function addOption(req, res,) {
    Option.find({user: req.user._id}, function(err, options) {
        res.render('options/show', {options});
    });
  }

  function addChoice(req, res,) {
    Option.find({user: req.user._id, isChoice: true}, function(err, options) {
        res.render('options/show', {options});
    });
  }
  function makeChoice(req, res) {
    const option = new Option(req.body);
    option.user = req.user._id;
    option.isChoice = true;
    option.save(function(err) {
        if (err) return res.render('options/');
        res.redirect('options/show');
    })

}


//   function createChoice(req, res,) {
//     // Option.deleteOne({user: req.user._id});
//     // res.render('/options');
//     const option = Option(req.body);
//     option.user = req.user._id;
//     option.save(function(err) {
//         if (err) return res.redirect('/options/show');
//         res.render('/options');
//     })
//     }
   