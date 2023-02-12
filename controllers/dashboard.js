const dashboard = require('../models/dashboard');
const Project = require('../models/Project');
const TeamMember = require("../models/TeamMembers");



module.exports = {
  postTeamMembers: async (req, res) => {
    console.log("this is working", req)
    let teamMemberDetails = req.body //
    console.log('button worked')
    console.log(teamMemberDetails.teamMember)
    console.log(req.user._id)
    try {
      const addedteamMembers = await TeamMember.create({
        name: teamMemberDetails.teamMember,
        teamLead: req.user._id
      })
      res.render("teamMembers.ejs", { members: addedteamMembers._id});
      console.log("team-member added")
      
    } catch (err) {
      console.log(err);
    }
  },
  getTeamMembers: async (req, res) => {
    try {
      // const project = await Project.find().sort({ teamMembers: "desc" }).lean();
      // we create this object that gets sent to teamembers.ejs so that the info can be accessed
      const teamMembers = await TeamMember.find({ teamLead: req.user.id })
      console.log('this is req.user.id', req.user.id)
      console.log('this went through', teamMembers)
      res.render("teamMembers.ejs", {  teamMembers: teamMembers, user: req.user });
      console.log(req.body)
    } catch (err) { 
      console.log(err);
    }
  }
}
    // addTeamMemberss: async (req, res) => {
    //     console.log('clicked')
    //     const addedteamMembers = req.body
    //     console.log("this is an added teamMembers", addedteamMembers)
    //     try {

    //         console.log(await User.findOneAndUpdate({ "_id": ObjectId(req.user._id) },
    //             { $push: { teamMemberss: addedteamMembers.teamMembers } }
    //         ))
    //         res.redirect("/dashboard")
    //         console.log('redirect worked')
            
    //     } catch (err) {
    //         console.log(err);
    //     } 
    // }


// function thisThrows() {
//     throw new Error("Thrown from thisThrows()");
// }

// try {
//     thisThrows();
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log('We do cleanup here');
