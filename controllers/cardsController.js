  const db = require("../models");
  
  // Defining methods for the cardsController
  module.exports = {
    findAll: function(req, res) {
      db.Card
        .find(req.query)
        // .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Card
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByBank: function(req, res){
      db.Card
      .find({"bank":req.body.bank})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
    },

    PostSrars: function(req, res) {
      console.log("aaaaaaaa", req.body);
      db.Card
      .findOneAndUpdate({ _id: req.body._id }, {"$inc": { "rating": req.body.rating, "counter": 1}}, {"new": true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },

    getStars: function(req, res) {
      db.Card
      .find({ _id: req.body._id }, {"rating": true, "counter": true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },

    findBySearch: function(req, res) {
        db.Card
      .find({"bank": {$in: req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

    create: function(req, res) {
      db.Card
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Card
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Card
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };