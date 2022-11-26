const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const projectsController = require("../controllers/projects");
const dashboardController = require ('../controllers/dashboard')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/dashboard", ensureAuth, projectsController.getDashboard)
router.get("/projects", ensureAuth, projectsController.getProjects);
router.get("/assignee", ensureAuth, projectsController.getAssignee);
router.get("/assignees", ensureAuth, projectsController.getAssignee); 
router.post("/addAssignees", ensureAuth, dashboardController.postAssignee);    

module.exports = router;