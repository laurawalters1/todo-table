
const { Schema, model } = require("mongoose");

const moment = require("moment");

const tasksSchema = new Schema(
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


const Tasks = model("Tasks", tasksSchema);

module.exports = Tasks;
