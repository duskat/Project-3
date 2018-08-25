const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const cardSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  img: { type: String, required: true },
  bonus: String,
  rewards: [],
  details: [],
  annualFee: String,
  intro: String,
  aPR: String,
  balanceTransfer: String,
  remomended: Boolean,
  rating: Number,
  bank: String,
  counter: Number,
});
 
const Card = mongoose.model("Card", cardSchema);
 
module.exports = Card;