import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Billing from "./pages/Billing";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/user"
          element={<UserDashboard />}
        />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/appointments"
          element={<Appointments />}
        />

        <Route
          path="/billing"
          element={<Billing />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;