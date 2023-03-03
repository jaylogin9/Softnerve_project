import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [user, setUser] = useState({
        email:"", password:"",
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
            const { email,  password } = user;
            const res = await axios.post("/login", { email, password });
            if (res)  {
                window.alert("Login Successfully");
                console.log("Login Successfully");
                setTimeout(() => Navigate("/"), 500);
            }
        } catch (error) {
            console.log(error.request.response);
            window.alert(error.request.response);
        }
    };

    return (
        <div className='wrapper bg-dark d-flex algin-items-center justify-content-center w-100'>
            <div className='login '>
             <center>  <h2 className='mb-3'> Login Form</h2> </center> 
                <form className='needs-validation'>
                    <div className='form-group was-validated mb-2'>  
                        <label htmlFor='email' className='form-lable'>Email Address</label>
                        <input type='email'  name="email" value={user.email} onChange={handleInputs} className='form-control' required></input>
                        <div className="invalid-feedback"> Please Enter your Email</div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='password'className='form-lable'>Password </label>
                        <input type="password"  name="password" value={user.password} onChange={handleInputs} className='form-control' required></input>
                        <div className='invalid-feedback'> Please Enter your Password</div>
                    </div>
                    <div className='form-group from-check mb-2'>
                        <input type='checkbox' className='from-check-input'></input>
                        <label htmlFor='check' className='form-check-lable'>Remember me </label>
                    </div>

                    <button type='submit' onClick={PostData} className='btn btn-success w-100 block mt-2'>SIGN IN </button>
                    <Link  to={'/signup'}>  <p> create a an account  </p></Link>
                </form>
            </div>
        </div>
    )
}

export default Login;