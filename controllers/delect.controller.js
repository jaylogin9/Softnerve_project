const Patient =require('../model/patient.model.js');
const create = async (req, res) => {
    try {
      const { id} = req.params;
      const newUser = await Patient.findByIdAndDelete(id);
       res.status(201).json({
        success: true,
        message: "Deleted Successful",
        Patient_Name: newUser.patientName
    });
       console.log(id);
    } catch (err) {
      console.error(err.message);
      res.status(500).json(err.message='Id Not Found');
    }
  };

module.exports = create;