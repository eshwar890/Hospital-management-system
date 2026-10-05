import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Billing() {

  const loggedInUser =
    localStorage.getItem(
      "loggedInUser"
    );

  const role =
    loggedInUser === "admin"
      ? "admin"
      : "user";

  return (

    <>

      <Navbar />

      <div className="dashboard">

        <Sidebar role={role} />

        <main className="main-content">

          <h1>Billing</h1>

          <div className="cards">

            <div className="card">

              <h3>
                Consultation
              </h3>

              <p>
                ₹1,000
              </p>

            </div>

            <div className="card">

              <h3>
                Laboratory
              </h3>

              <p>
                ₹1,500
              </p>

            </div>

            <div className="card">

              <h3>
                Medicines
              </h3>

              <p>
                ₹800
              </p>

            </div>

          </div>

          <div className="module">

            <h2>
              Total Amount
            </h2>

            <h1>
              ₹3,300
            </h1>

            <button>
              Download Bill
            </button>

          </div>

        </main>

      </div>

    </>

  );
}

export default Billing;