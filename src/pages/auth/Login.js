import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";
import NewInput from "./NewInput";
import Btn from "./Btn";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

function Login(props) {
  const authContext = useContext(AuthContext);
  const [state, setState] = useState({ password: "", email: "" });
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  const validation = {
    email: Yup.string()
      .email("E-mail inválido.")
      .required("Os campos são obrigatórios."),
    password: Yup.string().required("Os campos são obrigatórios."),
  };

  const formik = useFormik({
    initialValues: state,
    validationSchema: Yup.object(validation),
    onSubmit: (values) => {
      async function login() {
        try {
          const response = await api.post("/business/login", values);
          console.log(response);

          authContext.setLoggedInUser({ ...response.data });
    
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify({
              ...response.data
            })
          );
          setErrors({ password: "", email: "" });
          navigate("/businessdashboard");
        } catch (err) {
          console.error(err.response);
          setErrors({ ...err.response.data.errors });
          toast.error("Usuário ou senha incorreto");
        }
      }
      login();
    },
  });

  return (
    <div className="signin">
      <form onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <div>
              <h2>E-mail Address</h2>
              <NewInput
                type="email"
                name="email"
                label="e-mail"
                id="signupFormEmail"
                value={formik.values.email}
                error={formik.errors.email}
                onChange={formik.handleChange}
              />
            </div>
            {(formik.touched.email && formik.errors.email) ?
                (<div>
                    {formik.errors.email}
                  </div>
                ) : null}

            <div>
              <h2>Password</h2>
              <NewInput
                type="password"
                name="password"
                label="password"
                id="signupFormPassword"
                value={formik.values.password}
                error={formik.errors.password}
                onChange={formik.handleChange}
              />
            </div>

            {(formik.touched.password && formik.errors.password) ?
                (<div>
                    {formik.errors.password}
                  </div>
                ) : null}
            
            <div>
              <NewInput
                id="remember-me"
                name="remember-me"
                type="checkbox"
              />
              <label htmlFor="remember-me">
                Lembrar-me
              </label>
            </div>
            <div>
              <Link to="/forgot-password">
                Esqueceu sua senha?
              </Link>
            </div>

            <div>
              <Btn
                label="Login!"
                disabled={loading}
                type="submit"
                    > {loading ? (
                      <>
                        <span className="cadastrando"></span>
                        Cadastrando...
                      </>
                    ) : (
                      "Login!"
                    )}                  
              </Btn>
              <Link to="/signup">Don't have an account? Click here to signup!</Link>
            </div>
      </form>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#fff",
            color: "#000",
          },

          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />


    </div>
    
  );
}

export default Login;
