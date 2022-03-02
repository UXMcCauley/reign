// models/User.js

import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String
})

module.exports = mongoose.models.User || mongoose.model('employees', UserSchema)