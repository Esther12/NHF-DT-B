const db = require("../models");

module.exports = {
  Read: (req, res) => {
    db.Note.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  Create: (req, res) => {
    db.Note.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  Update: (req, res) => {
    db.Note.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Note.remove({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
