const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {type: String},
    age:{
        type: Number, 
        validate: {
            validator: // fn that validates returns boolean;
            (value) => value % 2 === 0
            ,
            message: // a string or function that returns a string
            (property)=> `${property.value} is not an even number`

        }
    },
    email: {type: String, lowercase: true},
    createdAt: {type: Date, immutable: true},
    updatedAt: {type: Date},
    bestFriend: {type: Schema.Types.ObjectId,
        ref: "User"
    },

    hobbies:[String],
    address: {
        street: String,
        city: String
    },
});

// You can make methods that is attached to the schema which can be called on the model (instance of the schema)
// userSchema.methods.sayHi = function () {
//     console.log(this)
//     console.log('Hi. My name is ', this.name)
// }

userSchema.static("findByName", function (name){
    console.log(this)
    return this.find({name: new RegExp(name, 'i')})
})



module.exports = model("User", userSchema);