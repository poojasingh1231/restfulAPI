const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/applicant-api", {
    useCreateIndex: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connection is Successful");
}).catch((e) => {
    console.log("No Connection");
})

