import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import { useState } from "react";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { LockClosedIcon } from "@heroicons/react/solid";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("E-mail inválido.")
        .required("Os campos são obrigatórios."),
    }),
    onSubmit: (values) => {
      async function login() {
        try {
          setLoading(true);

          await api.post("/password/forgot-password", values);
          setLoading(false);
          toast.success("E-mail enviado com sucesso!");

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
              Password recovery
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                click here to signup!
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={formik.values.email}
                  error={formik.errors.email}
                  onChange={formik.handleChange}
                />
              </div>

              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>

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
                Send e-mail
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
  );
}

export default ForgotPassword;
