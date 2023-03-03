const mongoose = require("mongoose");

/* Schema */
let patientSchema = new mongoose.Schema({

    patientName: {
        type: String,
        required: [true, 'Name is required'],
    },
    patientContact: {
        type: Number,
        required: [true, 'Phone number is required'],
        trim: true,
        unique: true,
        validate: {
            validator: function (v) {
              return /^[0-9]{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
          }
    },
    patientAddress: {
        type: String,
        required: [true, 'Address is required'],
    },
    patientPincode: {
        type: Number,
        required: [true, 'Pin Code is required'],
        validate: {
            validator: function (v) {
              return /^[0-9]{6}/.test(v);
            },
            message: '{VALUE} is not a valid 6 digit Pin Code!'
          }
    },
});

module.exports = mongoose.model("Patient", patientSchema);
