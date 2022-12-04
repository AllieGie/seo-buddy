const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  
  tags: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    default: Date,
  },
  assignee: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Projects", ProjectsSchema);