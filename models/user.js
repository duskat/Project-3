const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
  name: { type: String},
  authId: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
});
 
const User = mongoose.model("User", userSchema);
 
module.exports = User;