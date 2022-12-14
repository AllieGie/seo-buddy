const Project = require("../models/Project");
const Note = require("../models/Note");

module.exports = {
  createNote: async (req, res) => {
    console.log(req.user.userName)
    try {
         await Note.create({ 
             note: req.body.note,
             likes: 0,
             user: req.user.id,
             userName: req.user.userName,
             project: req.body.project    
         });
        console.log("Note has been added!");
        res.redirect(`/project/${req.body.project}`);
    } catch (err) {
      console.log(err);
    }
  },
  likeNote: async (req, res) => {
    try {
        await Note.findOneAndUpdate(
            { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/Note/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteNote: async (req, res) => {
    try {
      // Find Note by id
      let Note = await Note.findById({ _id: req.params.id });
      // Delete Note from db
      await Note.remove({ _id: req.params.id });
      console.log("Deleted Note");
      res.redirect(`/Project/${req.params.id}`);
    } catch (err) {
      res.redirect(`/Project/${req.params.id}`);
    }
      
      
      
      
      
      
      
      
      
      
      
  },
};