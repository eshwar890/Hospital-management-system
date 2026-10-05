import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  const handleLogin = () => {

    if (
      role === "admin" &&
      email === "admin@hopecare.com" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "loggedInUser",
        "admin"
      );

      navigate("/admin");

      return;
    }

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (user && role === "user") {

      localStorage.setItem(
        "loggedInUser",
        user.email
      );

      navigate("/user");

    } else {

      setMessage(
        "Invalid email, password or role."
      );

    }
  };

  return (

    <div className="login-page">

      <div className="login-container">

        <div className="login-info">

          <h1>HopeCare Hospital</h1>

          <p>
            Hospital Management System
          </p>

          <p>
            Manage healthcare services
            easily and efficiently.
          </p>

        </div>

        <div className="login-box">

          <h2>Welcome Back</h2>

          <p className="subtitle">
            Login to your account
          </p>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
          >

            <option value="user">
              Patient / User
            </option>

            <option value="admin">
              Admin
            </option>

          </select>

          <button
            className="primary-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          {message && (
            <p className="error">
              {message}
            </p>
          )}

          <p className="account-text">

            Don't have an account?

            <Link to="/signup">
              {" "}Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;