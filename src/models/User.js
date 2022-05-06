import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    successfulLogins: {
        type: Number
    },
    failedLogins: {
        type: Number
    }
})

const User = mongoose.model('user', UserSchema)

export default User