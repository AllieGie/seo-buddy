const dashboard = require('../models/dashboard');



module.exports = {
    postAssignee: async (req, res) => {

        console.log('button worked')
        try {
            const addedAssignee = await dashboard.find().sort({ assignedTo: "desc" }).lean();
            res.render("addAssignees.ejs", { assignee: addedAssignee, dashboard: addedAssignee.assignee, projects:addedAssignee.assignee });
            console.log(req.body)
        } catch (err) {
            console.log(err);
        }
    }
    // addAssignees: async (req, res) => {
    //     console.log('clicked')
    //     const addedAssignee = req.body
    //     console.log("this is an added assignee", addedAssignee)
    //     try {

    //         console.log(await User.findOneAndUpdate({ "_id": ObjectId(req.user._id) },
    //             { $push: { assignees: addedAssignee.assignee } }
    //         ))
    //         res.redirect("/dashboard")
    //         console.log('redirect worked')
            
    //     } catch (err) {
    //         console.log(err);
    //     } 
    // }
}

// function thisThrows() {
//     throw new Error("Thrown from thisThrows()");
// }

// try {
//     thisThrows();
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log('We do cleanup here');
// }