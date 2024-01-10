const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 10,
  },
  gender: {
    type: String,
    required: true,
    enum: ["M", "F"],
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  pinCode: {
    type: Number,
    required: true,
    minlength: [6, "Must be 6 "],
    maxlength: [6, "Must be 6 "],
  },
  city: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  state: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  country: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
