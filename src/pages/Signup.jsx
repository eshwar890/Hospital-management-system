import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    setMessage("");
    setError("");

    // Check empty fields
    if (!name || !email || !password) {
      setError("Please fill all the fields.");
      return;
    }

    // Get existing users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Check whether user already exists
    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      setError("User already exists.");
      return;
    }

    // Create new user
    const newUser = {
      name: name,
      email: email,
      password: password,
      role: "user"
    };

    // Add user
    users.push(newUser);

    // Save users to Local Storage
    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    setMessage("Account created successfully!");

    // Go to login page
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="login-page">

      <div className="signup-box">

        <h1>Create Account</h1>

        <p className="subtitle">
          Register as a patient
        </p>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {/* Signup Button */}
        <button
          className="primary-btn"
          onClick={handleSignup}
        >
          Create Account
        </button>

        {/* Error Message */}
        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {/* Success Message */}
        {message && (
          <p className="success">
            {message}
          </p>
        )}

        {/* Login Link */}
        <p className="account-text">
          Already have an account?

          <Link to="/login">
            {" "}Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;