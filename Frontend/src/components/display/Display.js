import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Display.css";
import axios from "axios";

const Display = (props) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  const loadData = async () => {
    try {
      const response = await axios.get("https://softnerve-project-backend.vercel.app/add-get");
        setData(response.data.Patient);
       // console.log(response);
    } catch (error) {
      console.log(error.message);
      setIsError(error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Are you sure to delete this data")) {
      axios.delete(`https://softnerve-project-backend.vercel.app/delete/${id}`);
      window.alert("Data Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };

  return (
    <div style={{ marginTop: "120px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Patient Name</th>
            <th style={{ textAlign: "center" }}>Contact Number</th>
            <th style={{ textAlign: "center" }}>Address</th>
            <th style={{ textAlign: "center" }}>Pin Code</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        {isError !== "" && <p>{isError}</p>}
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td> {item.patientName}</td>
                <td> {item.patientContact}</td>
                <td> {item.patientAddress}</td>
                <td> {item.patientPincode}</td>
                <td>
                  <Link to={`/update/${item._id}`}>
                    
                    <button className="btn btn-edit">Edit </button>
                  </Link>
                  <button className="btn btn-delete" onClick={() => deleteContact(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
