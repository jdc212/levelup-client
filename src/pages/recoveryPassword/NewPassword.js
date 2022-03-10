import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../apis/api";
import { useState } from "react";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

export default function NewPassword() {
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
          "Password is required and must have at least 8 characters, uppercase and lowercase letters, numbers and special characters."
        )
        .required("Field is required."),
    }),
    onSubmit: (values) => {
      async function login() {
        try {
          setLoading(true);

          await api.put(`/password/reset-password/${params.token}`, values);
          setLoading(false);
          toast.success("Password updated!");

          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } catch (e) {
          setLoading(false);
          console.error(e);
        }
      }
      login();
    },
  });

  return (
    <>
      <div
        className="flex items-center justify-center pt-0 pb-20 px-4 sm:px-6 lg:px-8"
        style={{ height: "80%" }}
      >
        <div className="max-w-sm w-full space-y-8">
          <div>
            <h2 className="mb-5 text-center text-3xl font-extrabold text-gray-900">
              Reset Password
            </h2>
          </div>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6 forms">
            <div className="mt-5 relative rounded-md shadow-sm">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                className={`bg-white mb-0 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md ${
                  formik.errors.newPassword && formik.touched.newPassword
                    ? "border-red-300"
                    : null
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                required
                placeholder="Enter your new password"
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div className="text-sm">{formik.errors.newPassword}</div>
              ) : null}
            </div>

            <div className="max-w-md w-full is-flex is-justify-content-center">
              <button
                type="submit"
                disabled={loading}
                className={`btn beige-btn ${loading ? "bg-slate-300" : null}`}
              >
                {loading ? (
                <>
                  <span className="mr-3 animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></span>
                  Loading...
                </>
              ) : (
                "Change password"
              )}
              </button>
            </div>
          </form>
        </div>
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

