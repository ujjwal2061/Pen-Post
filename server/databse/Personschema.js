const mongoose=require("mongoose")

//->Schema part
const UserScheam=new mongoose.Schema({
    username:{
         type:String,
         required: true,
         unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address."]
    },
    password:{
        type:String,
        required:true,
        minlength:[8,"Paaword must be least 8 characters long"],
        match:[ 
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
            "Password must have Upper letter ,number & one special character "
        ]
    },
    bio:{
        type:String,
        minlength:[150,"Bio must less then 150 words"]
    },
    profileImage: {
            type: String,  
    },
    coverImage: {
            type: String,  
    },
    links:[
        {
         platform:{
          type:String,
         },
         urls:{
            type:String,
         }
    }],
    follower:{
        type:Number,
        default:0
    }
       

},{timestamps:true})

const Userscheam=mongoose.model("User",UserScheam)
module.exports=Userscheam;