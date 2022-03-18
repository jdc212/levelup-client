import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { LockClosedIcon } from "@heroicons/react/solid";
import { NavBar } from "../../components/NavBar/NavBar";

function Signup(props) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /*async function handleAvatarUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("profilePicture", file);

      let response = "";

      response = await api.post("/upload/upload", uploadData);

      return response.data.url;
    } catch (err) {
      console.error(err);
    }
  }*/

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

        /*if (values.profilePicture) {
          values.profileAvatarUrl = await handleAvatarUpload(values.profilePicture);
        }*/

        try {
          await api.post("/business/signup", values);
          setLoading(false);
          navigate("/login");
        } catch (e) {
          setLoading(false);
          let errorMessage = e.response.data.msg
            ? e.response.data.msg
            : "Erro desconhecido. Tente novamente!";
          toast.error(errorMessage);
        }
      }
      signup();
    },
  });

  return (
    <>
    <NavBar />
    <div className="h-full w-full bg-gray-50">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                click here to sign in!
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your name"
                value={formik.values.name}
                error={formik.errors.name}
                onChange={formik.handleChange}
              />
            </div>

            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <div>
              <label htmlFor="dba" className="sr-only">
                Company Name
              </label>
              <input
                id="dba"
                name="dba"
                type="text"
                autoComplete="given-dba"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Company name"
                value={formik.values.dba}
                error={formik.errors.dba}
                onChange={formik.handleChange}
              />
            </div>

            {formik.touched.dba && formik.errors.dba ? (
              <div>{formik.errors.dba}</div>
            ) : null}

            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formik.values.email}
                error={formik.errors.email}
                onChange={formik.handleChange}
              />
            </div>

            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formik.values.password}
                error={formik.errors.password}
                onChange={formik.handleChange}
              />
            </div>

            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <div>
              <label htmlFor="password" className="sr-only">
                Confirm password
              </label>
              <input
                id="password"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm password"
                value={formik.values.confirmPassword}
                error={formik.errors.password}
                onChange={formik.handleChange}
              />
            </div>

            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}

            <div>
              <label htmlFor="dba" className="sr-only">
                CNPJ
              </label>
              <input
                id="CNPJ"
                name="CNPJ"
                type="number"
                autoComplete="given-cnpj"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="CNPJ"
                value={formik.values.CNPJ}
                error={formik.errors.CNPJ}
                onChange={formik.handleChange}
              />
            </div>

            {formik.touched.CNPJ && formik.errors.CNPJ ? (
              <div>{formik.errors.CNPJ}</div>
            ) : null}

            <div>
              <label htmlFor="dba" className="sr-only">
                Address
              </label>
              <input
                id="Address"
                name="address"
                type="text"
                autoComplete="given-address"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Address"
                value={formik.values.address}
                error={formik.errors.address}
                onChange={formik.handleChange}
              />
            </div>

            {formik.touched.address && formik.errors.address ? (
              <div>{formik.errors.address}</div>
            ) : null}

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="Phone"
                name="phone"
                type="number"
                autoComplete="given-phone"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone"
                value={formik.values.phone}
                error={formik.errors.phone}
                onChange={formik.handleChange}
              />
            </div>

            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign up
              </button>
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
      </div>
    </div>
    </>
  );
}

export default Signup;
