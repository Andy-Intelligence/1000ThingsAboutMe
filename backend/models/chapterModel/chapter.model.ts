import mongoose from "mongoose";


const chapterSchema = new mongoose.Schema({
book:{type: mongoose.Schema.Types.ObjectId,
    ref: 'Book', // Reference to the Book model
    },
header:{type:String,required:true},
text:{type:String,required:true},
image:{type:String,},
video:{type:String,},
comments:[{type:mongoose.Schema.Types.ObjectId, ref:"Message",}],
},
{
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
})


const Chapter = mongoose.models.Chapter || mongoose.model('Chapter', chapterSchema)


export default Chapter