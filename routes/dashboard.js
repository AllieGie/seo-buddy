const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projects");
const dashboardController = require("../controllers/dashboard")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Dashboard Routes 

router.get("/dashboard", ensureAuth, projectsController.getDashboard)
router.get("/:id", ensureAuth, projectsController.getProjects);
router.get("/teamMembers", ensureAuth, projectsController.getMembers); 
router.post("/dashboard", ensureAuth, dashboardController.postTeamMembers); 


module.exports = router; 