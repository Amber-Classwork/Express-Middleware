const { Schema, model } = require("mongoose");

exports.Student = model("Student", new Schema({ 
    name:{type:String, required:true},
    email:{type:String, require:true, unique:[true, "This email field is required"]},
    cohort:String,
    phoneNumber:String,
    grade:Number,
    registrationFee:{type:Number, required:[true, "Please Specify the fee for Registration"], default: 3000},

}));
