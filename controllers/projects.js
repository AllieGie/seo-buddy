const Project = require("../models/Project");
const TeamMembers = require("../models/TeamMembers");

//controlle\\\\\
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
      const allTeamMembers = await TeamMembers.find()
      console.log(allTeamMembers[0].name, allTeamMembers[0]._id)
      res.render("project.ejs", { projectsFromCollection: projects, user: req.user, allTeamMembersFromCollection: allTeamMembers});// projects in white is just the varibale name. the text in purpe is 
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
      console.log('this line works', req.body)
      const teamMemberData = JSON.parse(newProject.teamMember)
      console.log()
     
      let date = new Date(newProject.dueDate); // using the JS date constructor here. It takes in a string date and then applies its methods to that. We're passing in the due date being collected in the 
     console.log( await Project.create({
        projectName: newProject.projectName,
        teamMemberId: teamMemberData[0],
        taskName: newProject.taskName,
        teamMembers: teamMemberData[1],
        user: req.user.id,
        notes: newProject.notes,
        createdAt: newProject.createdAt,
        dueDate: date.toDateString() // taking the date variablel which is capturing the date constructor without formating and then formats it to make it readable. 
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
  
      // Delete project from db
      await Project.remove({ _id: req.params.id });
      console.log("Deleted Project");
      res.redirect("/projects");
    } catch (err) {
      res.redirect("/projects");
    }
  },
};