const mongoose = require('mongoose');
const mongooseURI = 'mongodb://localhost:27017/weCare'

const connectToMongo = () => {
    mongoose.connect(mongooseURI, () => {
        console.log("Connected to MongoDB Successfull");
    })
}

module.exports = connectToMongo