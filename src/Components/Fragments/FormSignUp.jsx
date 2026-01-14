import React from "react";
import Labeledinput from "../Elements/Labeledinput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// 🔔 CUSTOM TOAST
import { toastError, toastSuccess } from "../Elements/Toast"

/* =======================
   VALIDATION SCHEMA
======================= */
const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Nama wajib diisi"),
  email: Yup.string()
    .email("Email tidak valid")
    .required("Email wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

function FormSignUp() {
  return (
    <>
      <p className="mt-3 text-xl font-semibold text-gray-800 flex justify-center">
        Create an account
      </p>

      <div className="mt-16">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await axios.post(
                "https://jwt-auth-eight-neon.vercel.app/register",
                values
              );

              // ✅ SUCCESS
              toastSuccess("Register berhasil");
              resetForm();
            } catch (error) {
              // ❌ EMAIL SUDAH ADA
              if (error.response?.status === 409) {
                toastError("Terjadi kesalahan server");
              } else {
                toastError("Email sudah pernah digunakan sebelumnya");
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* NAME */}
              <div className="mb-6">
                <Field name="name">
                  {({ field }) => (
                    <Labeledinput
                      {...field}
                      id="name"
                      type="text"
                      label="Name"
                      placeholder="Your Name"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-6">
                <Field name="email">
                  {({ field }) => (
                    <Labeledinput
                      {...field}
                      id="email"
                      type="email"
                      label="Email Address"
                      placeholder="hello@example.com"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-6">
                <Field name="password">
                  {({ field }) => (
                    <Labeledinput
                      {...field}
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="••••••••"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <p className="text-xs text-gray-500 mb-5 px-1">
                By continuing, you agree to our{" "}
                <span className="text-teal-600 font-semibold">
                  terms of service.
                </span>
              </p>

              {/* BUTTON */}
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      {/* DIVIDER */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">
          or sign up with
        </div>
      </div>

      {/* GOOGLE */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          Continue with Google
        </Button>
      </div>

      {/* LINK */}
      <div className="flex justify-center mt-4 text-sm">
        <span className="text-gray-500">Already have an account?</span>
        <Link to="/login" className="text-primary ml-1 font-bold">
          Sign in here
        </Link>
      </div>
    </>
  );
}

export default FormSignUp;
