import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import Btn from "./Btn";
import NewInput from "./NewInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";


function Signup(props) {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  {/*async function handleAvatarUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("profilePicture", file);

      let response = "";

      response = await api.post("/upload/upload", uploadData);

      return response.data.url;
    } catch (err) {
      console.error(err);
    }
  }*/}

  const initialValues = {
      name: "",
      dba: "",
      email: "",
      password: "",
      confirmPassword: "",
      CNPJ: "", 
      phone: "",  
      address: "",
      profileAvatarUrl: "",
      profilePicture: new File([], ""),
  };

  const validation = {
    name: Yup.string().required("Os campos são obrigatórios."),
    dba: Yup.string().required("Os campos são obrigatórios."),
    email: Yup.string()
      .email("E-mail inválido.")
      .required("Os campos são obrigatórios."),
    address: Yup.string().required("Os campos são obrigatórios."),
    phone: Yup.number().required("Os campos são obrigatórios."),
    CNPJ: Yup.number().required("Os campos são obrigatórios."),
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha é obrigatória e deve ter pelo menos 8 caracteres, letras maiúsculas e minúsculas, números e caracteres especiais."
      )
      .required("Os campos são obrigatórios."),
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape(validation),
    onSubmit: (values) => {
      async function signup() {
        setLoading(true);

        if (formik.values.password !== formik.values.confirmPassword) {
          toast.error("Senha e confirmação de senha são diferentes");
          return;
        }

        {/*if (values.profilePicture) {
          values.profileAvatarUrl = await handleAvatarUpload(values.profilePicture);
        }*/}

        try {
          await api.post("/business/signup", values);
          setLoading(false);
          navigate("/login");
        } catch (e) {
          setLoading(false);
          let errorMessage = e.response.data.msg ? e.response.data.msg : "Erro desconhecido. Tente novamente!";
          toast.error(errorMessage);
        }
      }
      signup();
    },
  });

  return (
    <div className="signup">
      <form onSubmit={formik.handleSubmit}>
        <h1>Signup!</h1>

        <div>
          <h2>Name</h2>
          <NewInput
            type="text"
            label="Name"
            id="signupFormName"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            required={true}
            error={formik.errors.name}
          />
        </div>
        {(formik.touched.name && formik.errors.name) ?
                (<div>
                    {formik.errors.name}
                  </div>
                ) : null}

        <div>
          <h2>Nome da Empresa</h2>
          <NewInput
            label="Dba"
            id="signupFormDba"
            name="dba"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dba}
            required={true}
            type="text"
            error={formik.errors.dba}
          />
        </div>
        {(formik.touched.dba && formik.errors.dba) ?
                (<div>
                    {formik.errors.dba}
                  </div>
                ) : null}

        <div>
          <h2>E-mail Address</h2>
          <NewInput
            type="email"
            label="E-mail"
            id="signupFormEmail"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required={true}
            error={formik.errors.email}
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
            label="Senha"
            id="signUpPassword"
            required={true}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />
        </div>
        {(formik.touched.password && formik.errors.password) ?
                (<div>
                    {formik.errors.password}
                  </div>
                ) : null}

        <div>
          <h2>Confirmação de senha</h2>
          <NewInput
            type="password"
            label="Confirmação de senha"
            id="signUpConfirmPassword"
            required={true}
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            error={formik.errors.password}
          />
        </div>

        <div>
          <h2>CNPJ</h2>
          <NewInput
            type="number"
            label="CNPJ"
            id="signUpConfirmCNPJ"
            required={true}
            name="CNPJ"
            onChange={formik.handleChange}
            value={formik.values.CNPJ}
            error={formik.errors.CNPJ}
          />
        </div>

        {(formik.touched.CNPJ && formik.errors.CNPJ) ?
                (<div>
                    {formik.errors.CNPJ}
                  </div>
                ) : null}

        <div>
          <h2>Telefone</h2>
          <NewInput
            type="number"
            label="Telefone"
            id="signUpConfirmPhone"
            required={true}
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.errors.phone}
          />
        </div>
        
        {(formik.touched.phone && formik.errors.phone) ?
                (<div>
                    {formik.errors.name}
                  </div>
                ) : null}

        <div>
          <h2>Endereço</h2>
          <NewInput
            type="text"
            label="Endereço"
            id="signUpConfirmAddress"
            required={true}
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.errors.address}
          />
        </div>
        {(formik.touched.address && formik.errors.address) ?
                (<div>
                    {formik.errors.address}
                  </div>
                ) : null}
        
        <div>
            <h3>Foto do perfil</h3>
            <NewInput
              label=""
              type="file"
              name="avatarUrl"
              id="avatarUrl"
              onChange={(e) =>
                formik.setFieldValue("profilePicture", e.target.files[0])
              }
            />
            <span className="file-label">Choose a file…</span>            
        </div>

        <div>
          <Btn
            label="Sign up!"
            disabled={loading}
            type="submit"
                > {loading ? (
                  <>
                    <span className="cadastrando"></span>
                    Cadastrando...
                  </>
                ) : (
                  "Signup!"
                )}                  
          </Btn>
          <Link to="/login">Already have an account? Click here to login.</Link>
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

export default Signup;
