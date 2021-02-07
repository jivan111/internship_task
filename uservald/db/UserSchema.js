const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const Schema = mongoose.Schema;
const User = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: "String", required: true },
  password: { type: String, min: 6 },
  confirm_pass: { type: String, required: true, min: 6 },
  dob: {
    day: String,
    month: String,
    year: String,
  },
  verified: { type: Boolean, default: false },
});

const Users = mongoose.model("User", User);
module.exports = { Users };
