
const { Schema, model } = require("mongoose");

const moment = require("moment");

const quickticksSchema = new Schema(
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


const QuickTicks = model("QuickTicks", quickticksSchema);

module.exports = QuickTicks;
