import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./contexts/authContext";
import Home from "./pages/Home/Home";
import Corporate from "./pages/Corporate/Corporate";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import BusinessProfileInfo from "./components/BusinessProfileInfo/BusinessProfileInfo";
import BusinessDashboard from "./pages/BusinessDashboard/BusinessDashboard";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NewPassword from "./pages/auth/NewPassword";
import CompensationRules from "./pages/CompensationRules/CompensationRules";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <AuthContextComponent>
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
