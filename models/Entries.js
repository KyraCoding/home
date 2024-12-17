import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    useTrue: {
        type: Boolean,
        required: false,
        default: false
    },
    originalMessage: {
        type: String,
        required: true
    }, 
    trueMessage: {
        type: String,
        required: false
    }
})

export default mongoose.models.Entry || mongoose.model('Entry', EntrySchema)