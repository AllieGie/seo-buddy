const Project = require("../models/Project");
 



module.exports = {
  getDashboard: async (req, res) => {
    try {
      const project = await Project.find({ user: req.user.id });
      res.render("dashboard.ejs", { project: project, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getProjects: async (req, res) => {
    try {
      const projects = await Project.find().sort({ createdAt: "desc" }).lean();
      res.render("project.ejs", { projects: projects, user: req.user});
    } catch (err) { 
      console.log(err);
    }
  },
  getAssignee: async (req, res) => {
    try {
      const project = await Project.find().sort({ assignedTo: "desc" }).lean();
      res.render("assignee.ejs", { project: project, assignee: project.assignee });
      console.log(req.body)
    } catch (err) {
      console.log(err);
    } 
  },
  createProject: async (req, res) => { 
    try {
      const newProject = req.body;


     console.log( await Project.create ({
        projectName: newProject.projectName,
        taskName: newProject.taskName,
        assignee: newProject.assignee,
        user: req.user.id,
        notes: newProject.notes,
        createdAt: newProject.createdAt,
        dueDate: newProject.dueDate,      
      }));
      console.log("Project has been added!");
      res.redirect("/projects"); 
    } catch (err) {
      console.log(err);
    }
  },
//   likeProject: async (req, res) => {
//     try {
//       await Project.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/project/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
  deleteProject: async (req, res) => {
    try {
      // Find project by id
      let Project = await Project.findById({ _id: req.params.id });
      // Delete image from cloudinary
    //   await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete project from db
      await Project.remove({ _id: req.params.id });
      console.log("Deleted Project");
      res.redirect("/projects");
    } catch (err) {
      res.redirect("/projects");
    }
  },
};