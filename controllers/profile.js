const Project = require("../models/Project");
const TeamMembers = require("../models/TeamMembers");
const TeamMember = require("../models/TeamMembers");
 



module.exports = {
    getProfile: async (req, res) => {
        try {
            // const memberProfile = await TeamMembers.find({teamMembers:teamMemberData }) 
            const projects = await Project.find({ teamMemberId: req.params.id}) // 
            console.log('coming through', projects )
            // console.log('checking', memberProfile)
            res.render("profile.ejs", { memberProjectsFromCollection: projects, teamMemberId: req.params.id}); // this object has the data you can access in this particular page
            console.log(req.body)
        } catch (err) {
            console.log(err);
        }
    }
}   