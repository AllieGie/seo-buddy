const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    ref: mongoose.Schema.Types.ObjectId,
    // ref: "User",
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    },
  dueDate: {
    type: Date,
    default: Date,
    },
});

module.exports = mongoose.model("Project", ProjectSchema);