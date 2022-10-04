const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
    },
  dueDate: {
    type: Date,
    default: Date,
      },
});

module.exports = mongoose.model("Projects", ProjectsSchema);