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
  tags: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    ref: mongoose.Schema.Types.ObjectId,
    // ref: "User",
  },
  userName: {
    type: String,
    required: true
  },
  notes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Note",
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