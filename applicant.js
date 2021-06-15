const mongoose = require("mongoose");
const validator = require("validator");

const applicantSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required:true,
        minlength: 3
    },

    last_name: {
        type: String,
        required:true,
        minlength: 3
    },
     email: {
        type: String,
        required:true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid EmailId")
            }
        }

     },
     phone: {
         type: Number,
         min:10,
         required: true
     },

    account_number: {
        type:Number,
        min: 12,
        unique:true,
        required: true
    },
    ifsc_code: {
        type: String,
        required:true
    }
})

const Applicant = new mongoose.model("Applicant", applicantSchema);
module.exports = Applicant;