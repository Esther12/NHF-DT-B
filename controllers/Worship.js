const db = require("../models");

module.exports = {
  Read: (req, res) => {
    db.Worship.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  Create: (req, res) => {
    db.Worship.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  Update: (req, res) => {
    db.Worship.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Worship.remove({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
