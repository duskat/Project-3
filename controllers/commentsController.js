const db = require("../models");
 
// Defining methods for the cardsController
module.exports = {
findAll: function(req, res) {
    db.Comment
        .find(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
findById: function(req, res) {
        console.log("loadUser rout")
        console.log(req.body)
        db.Comment
          .find({"authId":req.body.userID})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },


  findByUserId: function(req, res) {
    console.log("findByUserId method")
    console.log(req.params.id)
    db.Comment
      .find({"userID":req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  findByCardId: function(req, res) {
    console.log("findByCardId method")
    console.log(req.params.id)
    db.Comment
    .find({"cardID":req.params.id})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },


  create: function(req, res) {
      console.log(req.body);
    db.Comment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Comment
      .findOneAndUpdate({ authId: req.body.authId }, req.body, {upsert: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("remove route")
    console.log(req.params.id)
    db.Comment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};