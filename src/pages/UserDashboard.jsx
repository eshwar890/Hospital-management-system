import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function UserDashboard() {

  const userEmail =
    localStorage.getItem(
      "loggedInUser"
    );

  return (

    <>

      <Navbar />

      <div className="dashboard">

        <Sidebar role="user" />

        <main className="main-content">

          <h1>Patient Dashboard</h1>

          <p className="welcome">
            Welcome, {userEmail}
          </p>

          <div className="cards">

            <div className="card">
              <h3>Upcoming Appointment</h3>
              <p>Dr. Priya</p>
            </div>

            <div className="card">
              <h3>Medical Records</h3>
              <p>5 Records</p>
            </div>

            <div className="card">
              <h3>Pending Bill</h3>
              <p>₹2,500</p>
            </div>

          </div>

          <div className="module">

            <h2>Hospital Services</h2>

            <div className="service-grid">

              <div className="service-card">
                <span className="service-icon">
                  🩺
                </span>

                <h3>Doctors</h3>

                <p>
                  View available doctors
                </p>
              </div>

              <div className="service-card">

                <span className="service-icon">
                  📅
                </span>

                <h3>Appointments</h3>

                <p>
                  Book your appointment
                </p>

              </div>

              <div className="service-card">

                <span className="service-icon">
                  💳
                </span>

                <h3>Billing</h3>

                <p>
                  View your bills
                </p>

              </div>

            </div>

          </div>

        </main>

      </div>

    </>

  );
}

export default UserDashboard;