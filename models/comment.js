const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const commentSchema = new Schema({
  body: { type: String, required: true },
  userID: { type: String},
  cardID: { type: String},
  username: { type: String},
  cardname: { type: String},
  date: { type: Date, default: Date.now }
});
 
const Comment = mongoose.model("Comment", commentSchema);
 
module.exports = Comment;