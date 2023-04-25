const mongoose = require("mongoose");
const { Schema } = mongoose;

const groupSchema = new Schema(
  {
    groupName: String,
    subCategory: {
      type: Schema.Types.ObjectId,
      ref: "SubCategory",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },

    __v: Number,
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
