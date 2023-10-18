import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    id:{type:String,required:true},
    // username:{type:String,unique:true},
    name:{type:String,required:true},
    image:{type:String},
    bio:{type:String},
    userInfo:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'userInfo'
        }
    ],
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book'
        }
    ],
    onboarded:{
        type:Boolean,
        default:false
    }
},
{
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
})



const User = mongoose.models.User || mongoose.model('User', userSchema)


export default User;