const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    course : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    }
})

const students = new mongoose.model("students",StudentSchema);
module.exports = students;