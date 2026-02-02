import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"provide name"]
    },
    email : {
        type : String,
        required : [true,"provide email"],
        unique : true,
    },
    password : {
        type : String,
        required : [true, "provide password"]
    },
    BusNo : {
        type : String
    },
   
    mobile : {
        type : Number,
        default : null
    },
    refresh_token : {
        type : String,
        default : ""
    },
    verify_email : {
        type : Boolean,
        default : false
    },
    last_login_date : {
        type : Date,
        default : ""
    },


    role : {
        type : String,
        enum : ['Driver',"Passanger"],
        default : "Driver"
    }
},
  {  timestamps : true ,
    collection: 'users' })

const UserModel = mongoose.models.User || mongoose.model("User",userSchema)

export default UserModel
