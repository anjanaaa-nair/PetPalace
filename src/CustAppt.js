import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewAppt.css";
import { Link } from "react-router-dom";

const ViewAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data from the server
    axios
      .get("http://localhost:3001/appointments",{ withCredentials: true })
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  return (
    <div className="parentContainer">
    <div className="btnContainer">
      <div>
    <button>
      <Link to="/buyFood">Buy Food</Link>
    </button>
    <button>
      <Link to="/getDoctor">Book Doctor</Link>
    </button>
    <button>
      <Link to="/viewOrders">View Orders</Link>
    </button>
    <button>
      <Link to="/viewAppt">View Appointments</Link>
    </button>
    </div>
    <div>
    <button>
      <Link to="/">Logout</Link>
    </button>
    </div>
  </div>
    <div className="container">
      <h1>View Appointments</h1>
      <div className="appointments-list">
        {appointments.map((appointment) => (
          <div key={appointment._id} className="appointment-item">
            <h2>Appointment ID: {appointment._id}</h2>
            <p>Pet Name: {appointment.petName}</p>
            <p>Doctor Name: {appointment.doctorName}</p>
            <p>Appointment Date: {new Date(appointment.apptDate).toLocaleDateString()}</p>
            <p>Reason: {appointment.reason}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ViewAppointmentsPage;
