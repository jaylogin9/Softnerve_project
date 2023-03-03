import React, { useState, useEffect} from "react";
import {useParams, useNavigate } from "react-router-dom";

import axios from "axios";

// use for navigation.
const Edit = () => {
    const [user, setUser] = useState({
        patientName: "",
        patientContact: "",
        patientAddress: "",
        patientPincode: "",
    });
    
    const Navigate = useNavigate();
    const {id} = useParams();
    // console.log(id);
    
 useEffect(() =>{
    const getData=async() =>{
        try {
            const response=await axios.get(`https://softnerve-project-backend.vercel.app//add-single/${id}`)
             setUser(response.data.Patient);
            // console.log(response.data);
        } catch (error) {
            console.log(error.message);
            window.alert(error.message);
        }
      }
     getData();
  },[]);

   
    const handleInputs = (e) => {
        const {name, value}  = e.target;
        setUser({ ...user, [name]: value });
    };

    const PostData = async (e) => {
        try {
            e.preventDefault();
            const { patientName, patientContact, patientAddress, patientPincode } = user;
            if(!patientName || !patientContact || !patientAddress || !patientPincode){
                window.alert("Please provide value into each input field");
            } else{
                const res = await axios.put(`https://softnerve-project-backend.vercel.app//update/${id}`, {
                    patientName,
                    patientContact,
                    patientAddress,
                    patientPincode,
                });
                if (res) {
                    window.alert("Data Updated successfull");
                    //console.log("Data Updated successfull");
                    setTimeout(() => Navigate("/display"), 500);
                }
            }
            
        } catch (error) {
            console.log(error.request.statusText);
            window.alert(error.request.response);
        }
    };

    return (
        <div className="wrapper d-flex algin-items-center justify-content-center w-100">
            <center>
                <h3 className="mb-3">Update Booking</h3>
            </center>
            <div className="register ">
                <form onSubmit={PostData}>
                    <div className="form-group mb-2">
                        <label htmlFor="name" className="form-lable">
                            Name
                           
                        </label>
                        <input
                            type="text"
                            name="patientName"
                            id="name"
                            value={user.patientName}
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
                            value={user.patientContact}
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
                            value={user.patientAddress}
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
                            value={user.patientPincode}
                            onChange={handleInputs}
                            className="form-control"
                            placeholder="Pin code"
                            required
                        ></input>
                    </div>
                    <button
                        type="submit"
                        value="submit"
                        className="btn btn-success w-100 block mt-2" >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Edit;
