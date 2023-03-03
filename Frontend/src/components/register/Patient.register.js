import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Patient.register.css";
import axios from "axios";

// use for navigation.
const Register = () => {
    const [user, setUser] = useState({
        patientName: "",
        patientContact: "",
        patientAddress: "",
        patientPincode: "",
    });
    const Navigate = useNavigate();

    const handleInputs = (e) => {
       const {name,value} = e.target;
        setUser({ ...user, [name]: value });
    };

    const PostData = async (e) => {
        try {
            e.preventDefault();
            const { patientName, patientContact, patientAddress, patientPincode } = user;
            const res = await axios.post("https://softnerve-project-backend.vercel.app//add-patient", {
                patientName, patientContact, patientAddress, patientPincode });
            if (res) {
                window.alert("Appointment Booked");
               // console.log("Appointment Booked");
                setTimeout(() => Navigate("/"), 500);
            }
        } catch (error) {
            console.log(error.request.response);
            window.alert(error.request.response);
        }
    };

    return (
        <div className="wrapper d-flex algin-items-center justify-content-center w-100">
            <center>
                {" "}
                <h3 className="mb-3">Appointment Booking</h3>{" "}
            </center>
            <div className="register ">
                <form method="POST">
                    <div className="form-group mb-2">
                        <label htmlFor="name" className="form-lable">
                            Name
                        </label>
                        <input
                            type="text"
                            name="patientName"
                            id="name"
                            value={user.name}
                            onChange={handleInputs}
                            className="form-control"
                            placeholder="Patient Name"
                            required
                        ></input>
                    </div>
                    <br />
                    <div className="form-group  mb-2">
                        <label htmlFor="contact" className="form-lable">
                            Contact{" "}
                        </label>
                        <input
                            type="text"
                            id="contact"
                            name="patientContact"
                            value={user.contact}
                            onChange={handleInputs}
                            className="form-control"
                            placeholder="Contact Number"
                            required
                        ></input>
                    </div>{" "}
                    <br />
                    <div className="form-group  mb-2">
                        <label htmlFor="address" className="form-lable">
                            Address{" "}
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="patientAddress"
                            value={user.address}
                            onChange={handleInputs}
                            className="form-control"
                            placeholder="Address"
                            required
                        ></input>
                    </div>{" "}
                    <br />
                    <div className="form-group  mb-2">
                        <label htmlFor="pinCode" className="form-lable">
                            Pin Code{" "}
                        </label>
                        <input
                            type="text"
                            id="pinCode"
                            name="patientPincode"
                            value={user.pinCode}
                            onChange={handleInputs}
                            className="form-control"
                            placeholder="Pin code"
                            required
                        ></input>
                    </div>
                    <button
                        type="submit"
                        value="submit"
                        onClick={PostData}
                        className="btn btn-success w-100 block mt-2"
                    >
                        {" "}
                        SUBMIT{" "}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
