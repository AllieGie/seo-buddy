const mongoose = require("mongoose");
const { array } = require("../middleware/multer");

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  teamMembers: {
    type: String, //this needs to be an array. Find out how to reference in array that has its own collection in the db 
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