// const mongoose=require("mongoose")
// const Person=require("./models/user")
import mongoose from "mongoose"
import Person from "./models/user.js"



mongoose.connect(process.env.MONGO_URI).then(console.log("database connected"))
const newPerson = new Person({
    name:"ibrahim",
    age:21,
    favoritefoods:["mlawi"]
})
//newPerson.save().then(console.log("lof"))
/*Person.create([{
    name:"ibrahim",
    age:21,
    favoritefoods:["mlawi"]
},{
    name:"ibrahim",
    age:21,
    favoritefoods:["mlawi"]
}])*/
    Person.find().then((data)=>console.log(data))