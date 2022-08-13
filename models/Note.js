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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    userName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("Note", NoteSchema);