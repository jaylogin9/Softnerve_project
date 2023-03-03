const SignUp = require("../model/signup.model.js");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword) {
    return res.status(422).json("Please filled the field properly" );
  }
  try {
    const userExit = await SignUp.findOne({ email: email });
    if (userExit) {
      return res.status(422).json( "Email already Exist" );
    } else if (password != cpassword) {
      return res.status(422).json( "Password not Match" );
    } else {
        /* Bcrypt*/
      const salt = bcrypt.genSaltSync(10);
      const hash1 = bcrypt.hashSync(password, salt);
      const hash2 = bcrypt.hashSync(cpassword, salt);

      const newUser = await SignUp.create({ name, email, password: hash1,cpassword: hash2 });
      await newUser.save();
      res.status(201).json("user registered successfully" );
      console.log("user registered successfully");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
};

module.exports = signup;
