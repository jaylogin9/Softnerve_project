const mongoose = require("mongoose");

/* Schema */
let signupSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        validate: {
            validator: function (v) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
          }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    cpassword: {
        type: String,
        required: [true, 'Confirm Password is required'],
    }
});

module.exports = mongoose.model("SignUp", signupSchema);
