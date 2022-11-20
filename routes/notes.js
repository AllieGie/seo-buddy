const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Comment Routes 

router.post("/createNote/:id", notesController.createNote);

router.put("/likeNote/:id", notesController.likeNote);

router.delete("/deleteNote/:id", notesController.deleteNote);

module.exports = router; 