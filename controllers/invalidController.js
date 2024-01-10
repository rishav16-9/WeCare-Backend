exports.invalid = async(req, res) =>{
    res.status(404).json({
        message: "Invalid Path"
    })
}