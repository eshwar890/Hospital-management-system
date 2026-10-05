import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="logo">
        🏥 HopeCare Hospital
      </div>

      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>
    </header>
  );
}

export default Navbar;