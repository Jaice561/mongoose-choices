const Choice = require('../models/choice');

module.exports = {
    create,
    new: newChoice,
    show
}

function create(req, res) {
    Choice.create(req.body);
    res.render('choices/');
    }
  

  function newChoice(req, res) {
    res.render('choices/new', {title: 'Add Choice'});
}

function show(req, res) {
    res.render('choices/show', {
    //   choice: Choice.getOne(req.params.id),
    //   choiceNum: Choice.getAll().findIndex(choice => choice.id === parseInt(req.params.id)) + 1
    });
  }

