const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const projectsController = require("../controllers/projects");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, projectsController.getProject);

router.post("/createProject", upload.single("file"), projectsController.createProject);

// router.put("/likeProject/:id", projectsController.likeProject);

router.delete("/deleteProject/:id", projectsController.deletePost);

module.exports = router; 