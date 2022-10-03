const Project = require("../models/Project");
const Note = require('../models/Note');
const Project = require("../models/Project");

module.exports = {
  getProjects: async (req, res) => {
    try {
      const Project = await Project.find({ user: req.user.id });
      res.render("project.ejs", { projects: projectItems, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getAssignee: async (req, res) => {
    try {
      const Project = await Project.find().sort({ assignedTo: "desc" }).lean();
      res.render("assignee.ejs", { projects: projectItems, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getProject: async (req, res) => {
    try {
      const Project = await Project.findById(req.params.id);
      const Note = await Note.find({ post: req.params.id });
      res.render("project.ejs", { projects: projectItems, user: req.user, notes: note});
    } catch (err) {
      console.log(err);
    }
  },
  createProject: async (req, res) => {
    try {
      // Upload image to cloudinary
    //   const result = await cloudinary.uploader.upload(req.file.path);

      await Project.create({
        projectName: req.body.projectName,
        assignee: req.body.assignee,
        // image: result.secure_url,
        // cloudinaryId: result.public_id,
        task: req.body.task,
        tags: 0,
        dueDate: req.body.dueDate,
        user: req.user.id,
        // userName: req.user.userName
      });
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
      // Find post by id
      let Project = await Project.findById({ _id: req.params.id });
      // Delete image from cloudinary
    //   await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Project.remove({ _id: req.params.id });
      console.log("Deleted Project");
      res.redirect("/projects");
    } catch (err) {
      res.redirect("/projects");
    }
  },
};