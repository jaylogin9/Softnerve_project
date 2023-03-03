const Patient =require('../model/patient.model.js');

const getSingle = async (req, res) => {
    const { id} = req.params;
  try {
    const newUser = await Patient.findById(id);
    res.status(201).json({Patient:newUser});
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
};

module.exports = getSingle;
