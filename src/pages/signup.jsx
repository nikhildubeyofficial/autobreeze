import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import SignLeftSide from "../components/sign/signside.component";
import useUserApi from "../api/useuserapi.hook";
import { handleNotify, TOASTER_POSITION, TOASTER_TYPE } from "../components/common/notification/toaster_notify.component";

const SignUp = () => {
  const navigate = useNavigate();
  const [isPassword, setisPassword] = useState(true);
  const [isConfirmPassword, setisConfirmPassword] = useState(true);
  const { signUp } = useUserApi();
  const togglePassword = () => {
    setisPassword(!isPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit:async (values) => {
      console.log(values);
      // Navigate to the desired page after successful signup
      try {
        const data=await signUp(values)
      if(data&&data?.isSucess){
        handleNotify(data.message,TOASTER_TYPE.SUCCESS,TOASTER_POSITION.TOP_RIGHT)
        navigate("/signin")
      }
      } catch (error) {
        console.log(error)
      }
      
    },
  });

  return (
    <div>
      <div className="container-fluid">
        <SignLeftSide>
          <div className="col-12 col-md-6 pe-5 ps-5">
            <div className="mt-5 pb-5">
              <img
                src="./img/logoblue.png"
                alt="Logo"
                className="mb-2"
                style={{ height: 50 }}
              />
            </div>
            <h3 className="mb-4">Sign Up</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Id
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  id="email"
                  name="email"
                  // placeholder="abc@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Create Password
                </label>
                <div className="position-relative">
                  <input
                    type={isPassword ? "password" : "text"}
                    className={`form-control ${
                      formik.touched.password && formik.errors.password
                        ? "is-invalid"
                        : ""
                    }`}
                    id="password"
                    name="password"
                    // placeholder="abc@352441#"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span
                    className="pass-eye cursor-pointer pointer-cursor"
                    onClick={togglePassword}
                  >
                    {!isPassword ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </span>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="position-relative">
                  <input
                    type={isConfirmPassword ? "password" : "text"}
                    className={`form-control ${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "is-invalid"
                        : ""
                    }`}
                    id="confirmPassword"
                    name="confirmPassword"
                    // placeholder="abc@352441#"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span
                    className="pass-eye cursor-pointer pointer-cursor"
                    onClick={() => setisConfirmPassword(!isConfirmPassword)}
                  >
                    {!isConfirmPassword ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </span>
                </div>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="text-danger">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <button type="submit" className="btn btn-custom w-100">
                Sign Up
              </button>
            </form>
            <div className="signin-text mt-4">
              Already have an account? <Link to={"/signin"}>Sign in</Link>
            </div>
          </div>
        </SignLeftSide>
      </div>
    </div>
  );
};

export default SignUp;
