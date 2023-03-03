import React, { useState } from "react";
import './Signup.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [user, setUser] = useState({
        name:"", email:"", password:"", cpassword:"",
    });
    const Navigate = useNavigate();

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const PostData = async (e) => {
        try {
            e.preventDefault();
            const { name, email, password, cpassword } = user;
            const res = await axios.post("/signup", { name, email, password, cpassword });
            if (res){
                window.alert("User registered successful");
                console.log("complete registration");
                setTimeout(() => Navigate("/login"), 500);
            }
        } catch (error) {
            console.log(error.request.response);
            window.alert(error.request.response);
        }
    };


    return (
        <div className='wrappersignup bg-dark d-flex algin-items-center justify-content-center w-100'>
            <div className='signup '>
             <center>  <h3 className='mb-3'> SignUp Form</h3> </center> 
                <form className='needs-validation'>
                <div className='form-group was-validated mb-2'>  
                        <label htmlFor='name' className='form-lable'>Name</label>
                        <input type='text'   name="name" value={user.name} onChange={handleInputs} className='form-control' required></input>
                        <div className="invalid-feedback"> Please Enter Name</div>
                    </div>
                    <div className='form-group was-validated mb-2'>  
                        <label htmlFor='email' className='form-lable'>Email Address</label>
                        <input type='email' name="email" value={user.email} onChange={handleInputs} className='form-control' required></input>
                        <div className="invalid-feedback"> Please Enter Email</div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='password'className='form-lable'>Password </label>
                        <input type="password" name="password" value={user.password} onChange={handleInputs} className='form-control' required></input>
                        <div className='invalid-feedback'> Please Enter Password</div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='cpassword'className='form-lable'>Confirm Password </label>
                        <input type="password" name="cpassword" value={user.cpassword} onChange={handleInputs} className='form-control' required></input>
                        <div className='invalid-feedback'> Please Enter Confirm Password</div>
                    </div>
                    <button type='submit'  onClick={PostData} className='btn btn-success w-100 block mt-2'>SIGN UP </button>
                </form>
            </div>
        </div>
    )
}

export default Signup;