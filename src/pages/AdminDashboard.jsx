import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {

  return (

    <>

      <Navbar />

      <div className="dashboard">

        <Sidebar role="admin" />

        <main className="main-content">

          <h1>Admin Dashboard</h1>

          <p className="welcome">
            Welcome to the hospital administration panel.
          </p>

          <div className="cards">

            <div className="card">
              <h3>Patients</h3>
              <p>120</p>
            </div>

            <div className="card">
              <h3>Doctors</h3>
              <p>25</p>
            </div>

            <div className="card">
              <h3>Appointments</h3>
              <p>48</p>
            </div>

            <div className="card">
              <h3>Revenue</h3>
              <p>₹85,000</p>
            </div>

          </div>

          <div className="module">

            <h2>Recent Appointments</h2>

            <table>

              <thead>

                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>Rahul</td>
                  <td>Dr. Kumar</td>
                  <td>03-10-2026</td>
                  <td>Confirmed</td>
                </tr>

                <tr>
                  <td>Anjali</td>
                  <td>Dr. Priya</td>
                  <td>04-10-2026</td>
                  <td>Pending</td>
                </tr>

              </tbody>

            </table>

          </div>

        </main>

      </div>

    </>

  );
}

export default AdminDashboard;