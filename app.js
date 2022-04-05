const express = require("express")


const mongoose = require("mongoose")

const app = express()


// connecting to mongoDB

mongoose.connect("mongodb://localhost/note_take_app", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


app.set("view engine", "ejs")
// routes
app.use(require("./routes/index"))
app.use(require("./routes/note"))

// this is our server configuration

app.listen(3000, () => console.log("Server started listening on port: 3000"))