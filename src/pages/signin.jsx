import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import SignLeftSide from "../components/sign/signside.component";
import useUserApi from "../api/useuserapi.hook";
import { handleNotify, TOASTER_POSITION, TOASTER_TYPE } from "../components/common/notification/toaster_notify.component";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/user/userslice";

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useUserApi();
  const dispatch=useDispatch()
  // Initialize useFormik hook
  const formik = useFormik({
    initialValues: {
      emailId: "",
      password: "",
    },
    validationSchema: Yup.object({
      emailId: Yup.string()
        .email("Invalid email address")
        .required("Email id is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit:async (values) => {
     try {
      const data=await signIn(values)
      if(data&&data?.isSucess){
        //manage redux 
        dispatch(addUser(data?.data))
        handleNotify(data.message,TOASTER_TYPE.SUCCESS,TOASTER_POSITION.TOP_RIGHT)
        navigate("/profile")
      }
     } catch (error) {
      
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
            <h3 className="mb-4">Welcome Back!</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="emailId" className="form-label">
                  Email Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  // placeholder="abc@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailId}
                />
                {formik.touched.emailId && formik.errors.emailId ? (
                  <div className="text-danger">{formik.errors.emailId}</div>
                ) : null}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type={formik.values.showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // placeholder="abc@352441#"
                  value={formik.values.password}
                />
                <span
                  className="pass-eye cursor-pointer pointer-cursor"
                  onClick={() => {
                    formik.setFieldValue(
                      "showPassword",
                      !formik.values.showPassword
                    );
                  }}
                >
                  {formik.values.showPassword ? (
                    <i className="bi bi-eye"></i>
                  ) : (
                    <i className="bi bi-eye-slash"></i>
                  )}
                </span>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>

              <button type="submit" className="btn btn-custom w-100">
                Sign In
              </button>
            </form>
            <div className="signin-text mt-4">
              New to Autobreeze? <Link to={"/signup"}>Sign Up</Link>
            </div>
          </div>
        </SignLeftSide>
      </div>
    </div>
  );
};

export default SignIn;
