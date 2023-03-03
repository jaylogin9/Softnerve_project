const Patient =require('../model/patient.model.js');

const create = async (req, res) => {
      const { patientName, patientContact, patientAddress, patientPincode} = req.body;
      if (!patientName || !patientContact || !patientAddress || !patientPincode) {
        return res.status(422).json("Please filled the field properly" );
      }
      try {
        
      /* Data Store in db */
      const newUser = await Patient.create({ patientName, patientContact, patientAddress, patientPincode});
      await newUser.save();
       res.status(201).json({Patient: newUser});
       console.log(newUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).json(err.message);
    }
  };

module.exports = create;