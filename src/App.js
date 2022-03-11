import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Corporate from "./pages/Corporate/Corporate";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import BusinessDashboard from "./pages/BusinessDashboard/BusinessDashboard";
import { AuthContextComponent } from "./contexts/authContext";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import BusinessProfileInfo from "./components/BusinessProfileInfo/BusinessProfileInfo";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NewPassword from "./pages/recoveryPassword/NewPassword";
import CompensationRules from "./pages/CompensationRules/CompensationRules"

function App() {
  return (
    <AuthContextComponent>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/businessprofileinfo" element={<BusinessProfileInfo />} />
        <Route path="/businessdashboard" element={<BusinessDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password/:token" element={<NewPassword />} />
        <Route path="/compensation" element={<CompensationRules />} />
        
      </Routes>
      <Footer />
    </AuthContextComponent>
  );
}

export default App;
