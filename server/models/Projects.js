
const { Schema, model } = require("mongoose");

const moment = require("moment");

const projectsSchema = new Schema(
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


const Projects = model("Projects", projectsSchema);

module.exports = Projects;
