import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import BusinessDashboard from "./pages/BusinessDashboard/BusinessDashboard";
import { AuthContextComponent } from "./contexts/authContext";
import { NavBar } from "./components/NavBar/NavBar";
import BusinessProfileInfo from "./components/BusinessProfileInfo/BusinessProfileInfo";

function App() {
  return (
    <AuthContextComponent>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/businessprofileinfo" element={<BusinessProfileInfo />} />
        <Route path="/businessdashboard" element={<BusinessDashboard />} />
        
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
