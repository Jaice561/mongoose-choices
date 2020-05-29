const Option = require('../models/option');

module.exports = {
    create,
    new: newOption,
    show
}

function create(req, res) {
    Option.create(req.body);
    res.render('options/');
    }
  

  function newOption(req, res) {
    res.render('options/new', {title: 'Add Option'});
}

function show(req, res) {
    res.render('options/show', {
    
    });
  }
