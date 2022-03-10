import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import api from "../../apis/api";
import { useState } from "react";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Btn from "./Btn";
import NewInput from "./NewInput";

function ForgotPassword() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          email: "",
        },
        //Define as regras de validação em tempo real
        validationSchema: Yup.object({
          email: Yup.string()
            .email("E-mail inválido.")
            .required("Os campos são obrigatórios."),
        }),
        onSubmit: (values) => {
          //Envio de informações para o back
          async function login() {
            try {
              setLoading(true);
    
              await api.post("/password/forgot-password", values);
              setLoading(false);
              toast.success("E-mail enviado com sucesso!");
    
              //Direciona o usuário para o dashboard
              setTimeout(() => {
                navigate("/");
              }, 3000);
            } catch (e) {
              setLoading(false);
              toast.error("E-mail não cadastrado!");
            }
          }
          login();
        },
    });

    return (
        <>
          <div className="forgotPassword">
            <div>
              <h2>Recuperação de senha</h2>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                  <NewInput
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required={true}
                    placeholder="Digite seu e-mail"
                    error={formik.errors.password}
                  />
                </div>
                {(formik.touched.email && formik.errors.email) ?
                (<div>
                    {formik.errors.email}
                  </div>
                ) : null}
              
              <div>
                <Btn
                  label="Enviar e-mail"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="enviarEmail"></span>
                      Enviando...
                    </>
                  ) : (
                    "Enviar e-mail"
                  )}
                </Btn>
              </div>
            </form>
          </div>
        
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
      </>
    );


}

export default ForgotPassword;
    

      