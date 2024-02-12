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
    name:"mariem",
    age:21,
    favoritefoods:["burritos"]
},{
    name:"louay",
    age:21,
    favoritefoods:["kaftagi","burritos"]
},{
    name:"ibrahim",
    age:21,
    favoritefoods:["kaftagi","burritos"]
}])*/
    // Person.find().then((data)=>console.log(data))
    //Person.findOne({favoritefoods:"burritos"}).then((data)=>console.log(data))
    // Person.findById({_id:"65a6aff420ec9ca4489fb4a8"}).then((data)=>console.log(data))

    const updatefood=async()=>{
        const result=await Person.findById("65a6aff420ec9ca4489fb4a8")
        result.favoritefoods.push("hamburger")
        result.save()
    }
    // Person.findByIdAndDelete("65a6aff420ec9ca4489fb4a8").then (()=>console.log("user deleted"))

    // Person.deleteMany({favoritefoods:"mlawi"}).then((count)=>(console.log(count)))

        Person.find({favoritefoods:"burritos"}).sort({name:1}).limit(2).select("name -favoritefoods").exec().then((err,data)=>{
            if (err){console.log(err)}
            else{console.log(data)}
        })