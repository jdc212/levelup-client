import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import BusinessDashboard from "./pages/BusinessDashboard/BusinessDashboard";

<<<<<<< HEAD:src/App.js
import { AuthContextComponent } from "./contexts/authContext";
=======
import { NavBar } from "./components/NavBar/NavBar";


import { AuthContextComponent } from "../contexts/authContext";
>>>>>>> c5e70531d911b02988cc578276f108cf3ba2e36b:src/components/App.js

function App() {
  return (
    <AuthContextComponent>
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD:src/App.js
        <Route path="/businessdashboard" element={<BusinessDashboard />} />
=======
        <Route path="/navbar" element={<NavBar />} />
>>>>>>> c5e70531d911b02988cc578276f108cf3ba2e36b:src/components/App.js
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
