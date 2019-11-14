const db = require("../models");

module.exports = {
  Read: (req, res) => {
    db.Announce.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  Create: (req, res) => {
    console.log("here", req.body);
    db.Announce.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  Update: (req, res) => {
    db.Announce.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Announce.remove({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
