const Project = require("../models/Project");
const TeamMembers = require("../models/TeamMembers");
const TeamMember = require("../models/TeamMembers");
 



module.exports = {
    getProfile: async (req, res) => {
        try {
            const memberProfile = await Project.findOne({ project: _id });
            res.render("profile.ejs", { project: projectName, task: taskName, notes: notes, created: createdAt, due: dueDate}); // this object has the data you can access in this particular page
        } catch (err) {
            console.log(err);
        }
    }
}