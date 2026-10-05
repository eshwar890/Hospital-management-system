import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Appointments() {

  const [patient, setPatient] =
    useState("");

  const [doctor, setDoctor] =
    useState("Dr. Priya Sharma");

  const [date, setDate] =
    useState("");

  const [message, setMessage] =
    useState("");

  const loggedInUser =
    localStorage.getItem(
      "loggedInUser"
    );

  const role =
    loggedInUser === "admin"
      ? "admin"
      : "user";

  const bookAppointment = () => {

    if (!patient || !doctor || !date) {

      setMessage(
        "Please fill all fields."
      );

      return;
    }

    const appointments =
      JSON.parse(
        localStorage.getItem(
          "appointments"
        )
      ) || [];

    appointments.push({

      patient: patient,
      doctor: doctor,
      date: date

    });

    localStorage.setItem(
      "appointments",
      JSON.stringify(
        appointments
      )
    );

    setMessage(
      "Appointment booked successfully!"
    );

    setPatient("");
    setDate("");
  };

  const appointments =
    JSON.parse(
      localStorage.getItem(
        "appointments"
      )
    ) || [];

  return (

    <>

      <Navbar />

      <div className="dashboard">

        <Sidebar role={role} />

        <main className="main-content">

          <h1>Appointments</h1>

          <div className="module">

            <h2>
              Book Appointment
            </h2>

            <input
              type="text"
              placeholder="Patient Name"
              value={patient}
              onChange={(e) =>
                setPatient(
                  e.target.value
                )
              }
            />

            <select
              value={doctor}
              onChange={(e) =>
                setDoctor(
                  e.target.value
                )
              }
            >

              <option>
                Dr. Priya Sharma
              </option>

              <option>
                Dr. Raj Kumar
              </option>

              <option>
                Dr. Ramesh Rao
              </option>

              <option>
                Dr. Anjali Reddy
              </option>

            </select>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(
                  e.target.value
                )
              }
            />

            <button
              className="primary-btn"
              onClick={
                bookAppointment
              }
            >
              Book Appointment
            </button>

            {message && (

              <p className="success">
                {message}
              </p>

            )}

          </div>

          <div className="module">

            <h2>
              Appointment Records
            </h2>

            {appointments.length === 0 ? (

              <p>
                No appointments found.
              </p>

            ) : (

              appointments.map(
                (appointment, index) => (

                  <div
                    className="appointment-card"
                    key={index}
                  >

                    <h3>
                      {appointment.patient}
                    </h3>

                    <p>
                      Doctor:
                      {" "}
                      {appointment.doctor}
                    </p>

                    <p>
                      Date:
                      {" "}
                      {appointment.date}
                    </p>

                  </div>

                )
              )

            )}

          </div>

        </main>

      </div>

    </>

  );
}

export default Appointments;