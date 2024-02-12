//const mongoose=require("mongoose")
import mongoose from "mongoose";

const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favoritefoods:[String]

})
const Person = mongoose.model("Person", personSchema);
export default  Person