const Project = require("../models/Project");
const TeamMembers = require("../models/TeamMembers");
const TeamMember = require("../models/TeamMembers");
 



module.exports = {
  getDashboard: async (req, res) => {
    try {
      const project = await Project.find({ user: req.user.id });
      res.render("dashboard.ejs", { projectsFromCollection: project, user: req.user }); // this object has the data you can access in this particular page
    } catch (err) {
      console.log(err);
    }
  },
  getProjects: async (req, res) => {
    try {
      const projects = await Project.find().sort({ user: "desc" }).lean();
      res.render("project.ejs", { projectsFromCollection: projects, user: req.user});// projects in white is just the varibale name. the text in purpe is 
    } catch (err) { 
      console.log(err);
    }
  },
  getMembers: async (req, res) => {
    try {
      const teamMembers = await TeamMembers.find({ teamLead: req.user.id });
      console.log('this is req.user.id', req.user.id)
      console.log('this went through', teamMembers)
      res.render("teamMembers.ejs", { teamMembersFromCollection: teamMembers, user: req.user });
      console.log(teamMembers.length)
      console.log(req.body)
    } catch (err) {
      console.log(err);
    } 
  },
  createProject: async (req, res) => { 
    try {
      const newProject = req.body;


     console.log( await Project.create({
       projectName: newProject.projectName,
      //  teamMemberId: newProject.memberId,
        taskName: newProject.taskName,
        teamMember: newProject.teamMember,
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