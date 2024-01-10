const fs = require ('fs')
const {promisify} = require('util')

async function errorLogger(req, res, next){
    console.log('in errorlogger');
    fs.appendFile('ErrorLogger.log', `${err.stack} \n\n`, function (err){
        if(err){
            console.log('logging error failde');
        }
    })
    if(err.status){
        res.status(err.status)
    } else{
        res.status(500)
    }
    res.status(400).json({
        message: err.message
    })
}

module.exports = errorLogger