const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const projectsController = require("../controllers/projects"); 
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Project Routes - simplified for now
router.get("/teamMembers/:id", ensureAuth, projectsController.getProjects);
router.get("/teamMembers/:id", ensureAuth, projectsController.getMembers); 

router.post("/createProject", ensureAuth, projectsController.createProject);

// router.put("/likeProject/:id", projectsController.likeProject);

router.delete("/deleteProject/:id", ensureAuth, projectsController.deleteProject);

module.exports = router; 