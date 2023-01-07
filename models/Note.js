const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project",
    },
    projectName: {
        type: String,
        required: true,
    },
    teamMembers: {
        type: String,
        required: true,
      },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("Note", NoteSchema);