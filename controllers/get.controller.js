const Patient =require('../model/patient.model.js');

const getAll = async (req, res) => {
  try {
    const newUser = await Patient.find();
    res.status(201).json({Patient:newUser});
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
};

module.exports = getAll;
