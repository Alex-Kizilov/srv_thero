const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    gid: {
      type: String,
      required: true,
      unique: true,
    },
    userData: {
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("thero_usr", userSchema, "thero_user");
