const router = require("express").Router()
const Notes = require("../models/Note")

router.get("/", async(req, res)=>{
    const allNotes = await Notes.find()
    res.render("index", {todo: allNotes})

})




module.exports = router