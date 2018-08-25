const db = require("../models");
 
// Defining methods for the cardsController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("loadUser rout - propd")
    console.log(req.params.id)

    db.User
      .find({"authId":req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("creating");
      console.log(res.body);
    db.User
      .create(req.body, {upsert:true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("updating")
    console.log(req.body);
    db.User
      .findOneAndUpdate({ authId: req.body.authId }, req.body, {upsert: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateName: function(req, res) {
    console.log("Route - updateName")
    console.log(req.body, req.params.id )
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body, {new:true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};