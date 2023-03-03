const SignUp = require("../model/signup.model.js");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('Please filled the field properly' );
  }
  try {
    const userExit = await SignUp.findOne({ email: email });
    if (userExit) {
      /* Decrypt the password */
      const passwordEnteredByUser = password;
      const hash = userExit.password;
      bcrypt.compare(passwordEnteredByUser, hash, (err, result) => {
        if (err) {
          return res.status(401).json("Auth failed" );
        } else if (!result) {
          console.log("Password doesn't match!");
          res.status(401).send(  "Invalid username and password" );
        } else {
          console.log("Password matches!");
          res.status(200).json("Login Successfull" );
          console.log("Login Successfull");
        }
      });
    } else {
      res.status(401).json( "Invaild Email and Password" );
      console.log("Invalid Email");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
};

module.exports = login;
