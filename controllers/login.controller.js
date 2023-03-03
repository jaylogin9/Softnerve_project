const SignUp = require("../model/signup.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const session = require("express-session");

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
          res.status(200).json('Successful login');
          //console.log("Password matches!");
        // console.log("Login Successfull"); 
        

          //const token = jwt.sign({id: userExit.id },process.env.JWT, {expiresIn: '1800s'});
          //Implement a login route that generates a JWT:
            //res.cookie("access_token",token,{httpOnly: true,sameSite: 'none', secure: true }).status(200).json({ message: 'Successful login' });
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
