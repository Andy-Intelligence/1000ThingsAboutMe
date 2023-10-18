
import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
},{
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
});

// module.exports = mongoose.model('Message', messageSchema) ;



const Message = mongoose.models.Message || mongoose.model('Message', messageSchema)

export default Message;




   