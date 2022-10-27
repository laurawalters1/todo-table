
const { Schema, model } = require("mongoose");

const moment = require("moment");

const nonnegotiableSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const NonNegotiable = model("NonNegotiable", nonnegotiableSchema);

module.exports = NonNegotiable;
