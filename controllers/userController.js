const User = require('../models/UserDetails');
const validator = require('../utilities/validate')
const helper = require('../utilities/helper')

exports.getUser = async (req, res) => {
    try {
        // const { UserId } = req.params
        const user = await User.findById(req.params.id)
        console.log(user);
        if (user) {
            res.status(201).json({
                "message": user
            })
        } else {
            res.status(400).json({
                "message": "User Id does not exist"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            "message": "User Id does not exist"
        })
    }
}

exports.createUser = async (req, res) => {
    try {
        if (
            validator.validateName(req.body.name) &&
            validator.validatePassword(req.body.password) &&
            validator.validateAge(req.body.dateOfBirth) &&
            validator.validateEmail(req.body.email) &&
            validator.validatePin(req.body.pinCode) &&
            validator.validatePhoneNumber(req.body.mobileNumber) &&
            validator.validateAddress(req.body.city, req.body.state, req.body.country)
        ) {
            const Id = await helper.generateUserId()
            const newUser = await User.create(
                {
                    userId: Id,
                    name: req.body.name,
                    password: req.body.password,
                    gender: req.body.gender,
                    dateOfBirth: req.body.dateOfBirth,
                    email: req.body.email,
                    mobileNumber: req.body.mobileNumber,
                    pinCode: req.body.pinCode,
                    city: req.body.city,
                    state: req.body.state,
                    country: req.body.country,
                }
            )
            console.log(newUser);
            res.status(201).json({
                message: newUser
            });
        } else if (!validator.validateName(req.body.name)) {
            res.status(400).json({
                status: "Error",
                message: "Check Name"
            })
        } else if (!validator.validateAge(req.body.dateOfBirth)) {
            res.status(400).json({
                status: "Error",
                message: "Check Age"
            })
        } else if (!validator.validateEmail(req.body.email)) {
            res.status(400).json({
                status: "Error",
                message: "Check Email"
            })
        } else if (!validator.validatePin(req.body.pinCode)) {
            res.status(400).json({
                status: "Error",
                message: "Check Pin"
            })
        } else if (!validator.validatePassword(req.body.password)) {
            res.status(400).json({
                status: "Error",
                message: "Check Password"
            })
        }
        else if (!validator.validatePhoneNumber(req.body.mobileNumber)) {
            res.status(400).json({
                status: "Error",
                message: "Check Phone Number"
            })
        } else if (!validator.validateAddress(req.body.city)) {
            res.status(400).json({
                status: "Error",
                message: "Check Country"
            })
        } else if (!validator.validateAddress(req.body.state)) {
            res.status(400).json({
                status: "Error",
                message: "Check State"
            })
        } else if (!validator.validateAddress(req.body.country)) {
            res.status(400).json({
                status: "Error",
                message: "Check Country"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { userId, password } = req.body
        if (!userId && !password) {
            res.status(400).json({
                "error": "Try with different Credential"
            })
        }
        const user = await User.findOne({ userId, password })
        if (user) {
            res.status(201).json({
                "success": "Login Successfull"
            })
        } else {
            res.status(400).json({
                message: "Incorrect user id or password"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Incorrect user id or password"
        })
    }
}