import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";
import NewInput from "./NewInput";
import Btn from "./Btn";

function Login(props) {
  const authContext = useContext(AuthContext);
  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/business/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      navigate("/businessdashboard");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
              <h2>E-mail Address</h2>
              <NewInput
                type="text"
                name="email"
                label="e-mail"
                id="signupFormEmail"
                value={state.email}
                error={errors.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <h2>Password</h2>
              <NewInput
                type="password"
                name="password"
                label="password"
                id="signupFormPassword"
                value={state.password}
                error={errors.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <Btn type="submit" label="Login"/>

              <Link to="/signup">Don't have an account? Click here to signup!</Link>
            </div>
      </form>
    </div>
    
  );
}

export default Login;
