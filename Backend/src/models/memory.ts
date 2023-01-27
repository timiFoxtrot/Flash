import mongoose from "mongoose";

const Schema = mongoose.Schema;

const memorySchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    likes: { type: Number },
    date_created: { type: String },
    date_updated: { type: String },
    comments: [
        { type: String }
    ]
}, { timestamps: true });

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;