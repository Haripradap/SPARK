import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Users',
        },
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default:[],
        },
    ],
},
    {timestamps: true}
);

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;