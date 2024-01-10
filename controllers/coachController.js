const Coach = require("../models/CoachDetails");
const helper = require("../utilities/helper");
const validator = require("../utilities/validate");

exports.createCoach = async (req, res) => {
  try {
    if (
      validator.validateName(req.body.name) &&
      validator.validatePassword(req.body.password) &&
      validator.validateAge(req.body.dateOfBirth) &&
      validator.validatePhoneNumber(req.body.mobileNumber) &&
      validator.validateSpeciality(req.body.speciality)
    ) {
      let coach = await Coach.findOne({ name: req.body.name });
      if (!coach) {
        const Id = await helper.generateCoachId();
        const newCoach = await Coach.create({
          coachId: Id,
          name: req.body.name,
          password: req.body.password,
          gender: req.body.gender,
          dateOfBirth: req.body.dateOfBirth,
          mobileNumber: req.body.mobileNumber,
          speciality: req.body.speciality,
        });
        res.status(201).json({
          message: newCoach,
        });
      } else {
        res.status(400).json({
          message: "Coach Already Exist With This Name",
        });
      }
    } else if (!validator.validateName(req.body.name)) {
      res.status(400).json({
        status: "error",
        message: "Check Name",
      });
    } else if (!validator.validatePassword(req.body.password)) {
      res.status(400).json({
        status: "error",
        message: "Check Password",
      });
    } else if (!validator.validateAge(req.body.dateOfBirth)) {
      res.status(400).json({
        status: "error",
        message: "Check Age",
      });
    } else if (!validator.validatePhoneNumber(req.body.mobileNumber)) {
      res.status(400).json({
        status: "error",
        message: "Check Mobile Number",
      });
    } else if (!validator.validateSpeciality(req.body.speciality)) {
      res.status(400).json({
        status: "error",
        message: "Check Speciality",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: error,
    });
  }
};

exports.coachLogin = async (req, res) => {
  try {
    const { coachId, password } = req.query;
    console.log(coachId);
    if (!coachId && !password) {
      console.log();
      res.status(400).json({
        error: "Check with your credential",
      });
    }
    const coach = await Coach.findOne({ coachId, password });
    if (coach) {
      res.status(200).json({
        success: "Login Successfull",
      });
    } else {
      res.status(400).json({
        message: "User Not Exist",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Incorrect Coach ID or Password",
    });
  }
};

exports.getAllCoach = async (req, res) => {
  try {
    const coach = await Coach.find(req.body);
    // console.log(coach);
    if (coach) {
      res.status(200).json({
        coach,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getCoach = async (req, res) => {
  try {
    const { coachId } = req.params;
    const coach = await Coach.findOne({ CoachId: req.params.coachId });
    if (coach) {
      res.status(201).json({
        coach,
      });
    } else {
      res.status(400).json({
        message: "Coach Id does not exist",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Coach Id does not exist",
    });
  }
};
