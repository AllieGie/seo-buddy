const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projects");
const dashboardController = require("../controllers/dashboard")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Dashboard Routes 

router.get("/dashboard", ensureAuth, projectsController.getDashboard)
router.get("/:id", ensureAuth, projectsController.getProjects);
router.get("/dashboard", ensureAuth, projectsController.getAssignee); 
router.post("/dashboard", ensureAuth, dashboardController.postAssignee); 


module.exports = router; 