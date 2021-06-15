const express = require("express");
require("./database/connection");
const Applicant = require("./models/applicant");
const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

// app.get("/", (req, res) => {
//     res.send("Hello its me");
// })


app.post("/applicant", (req, res) => {
    // res.send("Hello, It's me!")
    console.log(req.body);
    const user = new Applicant(req.body)
    user.save().then(()=> {
        res.status(201).send(user);
        
    }).catch((e) => {
        res.status(400).send(e);
    })
    
})



app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})

    