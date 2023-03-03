const Patient =require('../model/patient.model.js');
const create = async (req, res) => {
    try {
      const { id} = req.params;
      const { patientName, patientContact, patientAddress, patientPincode} = req.body;

      const newUser = await Patient.findById(id)
      newUser.patientName=patientName;
      newUser.patientContact=patientContact;
      newUser.patientAddress=patientAddress;
      newUser.patientPincode=patientPincode;
      await newUser.save();
       res.status(201).json({
        success: true,
        message: "Updated Successful",
        Patient: newUser
    });
       console.log(newUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).json(err.message);
    }
  };

module.exports = create;