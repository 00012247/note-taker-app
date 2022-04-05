const router = require("express").Router()


const Notes = require("../models/Note")

router.post("/add/notes", (req, res) => {
    const { todo } = req.body;
    const newNotes = new Notes({todo})


newNotes
    .save()
    .then(() => {
        console.log("Successfully saved!");
        res.redirect("/");
    })
.catch((err) => console.log(err))
})

.get("/delete/todo/:_id", (req,res)=> {
    const {_id} = req.params;

    Notes.deleteOne({_id})
    .then(()=> {
        console.log("SuccesFully deleted")
        // alert("Successfully deleted! 👍😐");
        res.redirect("/")
    })
    .catch((err) => console.log(err))
})





module.exports = router