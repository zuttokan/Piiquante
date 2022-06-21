// call mongoose for creating a schema
const mongoose = require("mongoose");
// validation for unique fields in a Mongoose schema
const uniqueValidator = require("mongoose-unique-validator");
// User schema
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
