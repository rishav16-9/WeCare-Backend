const mongoose = require('mongoose');
const {Schema} = mongoose

const CoachSchema = new Schema({
    coachId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 10
    },
    gender: {
        type: String,
        required: true,
        enum: ['M', 'F']

    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50
    }
})

const Coach = mongoose.model('coach', CoachSchema)
module.exports = Coach