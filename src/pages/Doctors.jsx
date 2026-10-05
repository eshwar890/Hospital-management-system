import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Doctors() {
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");
  const role =
    loggedInUser === "admin"
      ? "admin"
      : "user";

  const doctors = [
    {
      name: "Dr. Ramesh Rao",
      department: "General Physician",
      experience: "15 Years",
      image:
        "https://kayeefuniform.com/wp-content/uploads/2024/02/doctor.jpg"
    },
    {
      name: "Dr. Raj Kumar",
      department: "Cardiologist",
      experience: "19 Years",
      image:
        "https://cdn.pixabay.com/photo/2021/02/09/06/45/doctor-5997504_1280.jpg"
    },
    {
      name: "Dr. Priya Sharma",
      department: "Neurologist",
      experience: "20 Years",
      image:
        "https://png.pngtree.com/png-clipart/20240701/original/pngtree-indian-doctor-woman-smiling-at-camera-png-image_15456626.png"
    },
    {
      name: "Dr. Anjali Reddy",
      department: "Dermatologist",
      experience: "7 Years",
      image:
        "https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg"
    }
  ];

  const handleBookAppointment = (doctorName) => {
    navigate("/appointments", {
      state: {
        doctor: doctorName
      }
    });
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <Sidebar role={role} />

        <main className="main-content">

          <h1>Our Doctors</h1>

          <p className="welcome">
            Meet our experienced medical professionals.
          </p>

          <div className="doctor-grid">

            {doctors.map((doctor, index) => (
              <div
                className="doctor-card"
                key={index}
              >

                <div className="doctor-image-container">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-image"
                  />

                </div>

                <h2>{doctor.name}</h2>

                <p className="doctor-department">
                  {doctor.department}
                </p>

                <p>
                  <strong>Experience:</strong>{" "}
                  {doctor.experience}
                </p>

                <button
                  className="doctor-button"
                  onClick={() =>
                    handleBookAppointment(
                      doctor.name
                    )
                  }
                >
                  Book Appointment
                </button>

              </div>
            ))}

          </div>

        </main>

      </div>
    </>
  );
}

export default Doctors;