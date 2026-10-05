import { Link } from "react-router-dom";

function Sidebar({ role }) {

  return (

    <aside className="sidebar">

      <h3>
        {role === "admin"
          ? "Admin Panel"
          : "Patient Panel"}
      </h3>

      <Link
        to={
          role === "admin"
            ? "/admin"
            : "/user"
        }
      >
        Dashboard
      </Link>

      <Link to="/doctors">
        Doctors
      </Link>

      <Link to="/appointments">
        Appointments
      </Link>

      <Link to="/billing">
        Billing
      </Link>

    </aside>
  );
}

export default Sidebar;