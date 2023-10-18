import mongoose from "mongoose";
import chapterSchema from '../chapterModel/chapter.model'; // Correct the import statement

const bookSchema = new mongoose.Schema({
author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
  name:{
    type:String,
  },
coverPhoto:{type:String,},
caption:{type:String,},
chapters: [ {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Chapter', // Reference to the Chapter model
},]},
{
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
}
)


const Book = mongoose.models.Book || mongoose.model('Book', bookSchema)


export default Book