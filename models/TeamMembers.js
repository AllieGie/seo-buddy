const mongoose = require("mongoose");

const TeamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  teamLead: {
    type: String,
    ref: mongoose.Schema.Types.ObjectId,
    // ref: "User",
  }
});

//will want to add more details to this. Think abt what those details will be. wages, project Names. 


module.exports = mongoose.model("TeamMember", TeamMemberSchema);
// 