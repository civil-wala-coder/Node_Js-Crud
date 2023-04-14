const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(

    {
        firstName: {type:String},
        lastName: {type:String},
        classNumber: {type:Number},
        section:{type:String},
    }, 
    {timestamps:true}
);

const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;