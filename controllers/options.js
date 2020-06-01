const Option = require('../models/option');

module.exports = {
    new: newOption,
    create,
    index,
    show,
    pickOption,
    getChoices,
    deleteOption
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
    Option.find({user: req.user._id}, function(err, options) {
        res.render('options/show', {options});
    });
}

function pickOption(req, res) {
    Option.findById(req.params.id, function(err, option) {
          option.user = req.user._id;
          option.isChoice = true;
          option.save(function(err) {
          });
      res.render('options/show', {option});
    });
  }

  function getChoices(req, res) {
    Option.find({user: req.user._id, isChoice: true}, function(err, options) {
        res.render('options/showAll', {options});
    });
  }

  function deleteOption(req, res) {

    Option.deleteOne({_id:req.params.id}, function (err, option) {
        console.log('deleted');
          Option.find({user: req.user._id}, function(err, options) {
          res.render('options/index', {options});
      });
    });
}