/// call mongoose for creating a schema
const mongoose = require("mongoose");
const MongooseErrors = require("mongoose-errors");
// sauce schema
const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: [{ type: String }],
  usersDisliked: [{ type: String }],
});

sauceSchema.plugin(MongooseErrors);
module.exports = mongoose.model("Sauce", sauceSchema);
