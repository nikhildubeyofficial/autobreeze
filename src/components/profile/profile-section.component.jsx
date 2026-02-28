import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FileUploader } from "react-drag-drop-files";
import useUserApi from "../../api/useuserapi.hook";
import {
  handleNotify,
  TOASTER_POSITION,
  TOASTER_TYPE,
} from "../common/notification/toaster_notify.component";
import { useSelector } from "react-redux";

const ProfileSectionComponent = ({userDetail,page}) => {
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
  const { updateProfile } = useUserApi();
  const user=useSelector(({user})=>user?.user)
  const [isEdit, setisEdit] = useState(page !== "Checkout"?false:true)
  const userId = user?.user_id;
  const isCheckot=page === "Checkout"
  // Formik form handling and Yup validation
  const formik = useFormik({
    initialValues: {
      firstName: user?.first_name,
      middleName: user?.middle_name,
      lastName: user?.last_name,
      mobileNumber: user?.mobile_number,
      emailId: user?.email,
      nationality: user?.nationality,
      addressLine1: user?.address_line1,
      addressLine2:user?.address_line2,
      pinCode: user?.pin_code,
      dlNumber: user?.dl_number,
      passportNumber: user?.passport_number,
      file: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      mobileNumber: Yup.string().required("Mobile Number is required"),
      emailId: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      nationality: Yup.string().required("Nationality is required"),
      addressLine1: Yup.string().required("Address Line 1 is required"),
      addressLine2: Yup.string().required("Address Line 2 is required"),
      pinCode: Yup.string().required("Pin Code is required"),
      dlNumber: Yup.string().required("DL Number is required"),
      passportNumber: Yup.string().required("Passport Number is required"),
      // file: Yup.mixed().required("f"),
    }),
    onSubmit: async (values) => {
      const {
        firstName,
        middleName,
        lastName,
        mobileNumber,
        emailId,
        nationality,
        addressLine1,
        addressLine2,
        pinCode,
        dlNumber,
        passportNumber,
        file,
      } = values;
      const userData = {
        first_name: firstName || "",
        middle_name: middleName || "",
        last_name: lastName || "",
        mobile_number: mobileNumber || "",
        email: emailId || "",
        nationality: nationality || "",
        address_line1: addressLine1 || "",
        address_line2: addressLine2 || "",
        pin_code: pinCode || "",
        dl_number: dlNumber || "",
        passport_number: passportNumber || "",
        // user_img: file || null, // Assuming file is an image or null
        driving_license_file: file || null,
        userId:userId
        // Assuming file is an image or null
      };
      // const formData = new FormData();

      // Object.entries(userData).forEach(([key, value]) => {
      //   // Check for files (assuming value can be a File object)
      //   if (value instanceof File) {
      //     formData.append(key, value);
      //   } else if (value) {
      //     // Append only if the value is non-null and non-empty
      //     formData.append(key, value);
      //   }
      // });
      // console.log(formData.get('first_name'));
      // console.log(data)
      const data = await updateProfile(userData, userId);
      if (data && data?.isSucess) {
        //manage redux
        handleNotify(
          data.message,
          TOASTER_TYPE.SUCCESS,
          TOASTER_POSITION.TOP_RIGHT
        );
      }
    },
  });
  return (
    <div className="profile-detail-section mt-5 bg-white  py-2 pb-3 mb-3 px-3">
  <form className={`profile-form ${isEdit?"":"not-edit"}`} onSubmit={formik.handleSubmit}>
    <div className="row pt-3 px-3">
      <div className="col-8 col-md-6">
        <h3 className="text-theme pt-2">Personal Details</h3>
      </div>
      {page !== "Checkout"&&
      <div className="col-4 col-md-6 text-end">
        {!isEdit ? (
          <button className="btn btn-outline-dark btn-sm btn-md-lg" onClick={()=>setisEdit(true)}>
            Edit detail
          </button>
        ) : (
          <button className="btn btn-outline-dark btn-sm btn-md-lg" type="submit">
            Save
          </button>
        )}
      </div>
}
    </div>

    <div className="row">
     {page !== "Checkout"&& <div className="col-12 col-md-2">
        <div className="rounded-img-div d-flex justify-content-center justify-content-md-start py-4 py-md-0">
          <img src="./img/profile.png" alt="profileimg" />
        </div>
      </div>}
      <div className={`col-12 ${isCheckot?"col-md-12":"col-md-10"}  px-2 px-md-5`}>
        <div className="row">
          {/* First Name */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name *
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
            ) : (
              <h6>{formik.values.firstName}</h6>
            )}
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-danger">{formik.errors.firstName}</div>
            ) : null}
          </div>

          {/* Middle Name */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="middleName" className="form-label">
              Middle Name
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="middleName"
                name="middleName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.middleName}
              />
            ) : (
              <h6>{formik.values.middleName}</h6>
            )}
          </div>

          {/* Last Name */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name *
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            ) : (
              <h6>{formik.values.lastName}</h6>
            )}
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-danger">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>

        <div className="row">
          {/* Mobile Number */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number *
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="mobileNumber"
                name="mobileNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobileNumber}
              />
            ) : (
              <h6>{formik.values.mobileNumber}</h6>
            )}
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
              <div className="text-danger">{formik.errors.mobileNumber}</div>
            ) : null}
          </div>

          {/* Email ID */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="emailId" className="form-label">
              Email Id *
            </label>
            {isEdit ? (
              <input
                type="email"
                className="form-control"
                id="emailId"
                name="emailId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.emailId}
              />
            ) : (
              <h6>{formik.values.emailId}</h6>
            )}
            {formik.touched.emailId && formik.errors.emailId ? (
              <div className="text-danger">{formik.errors.emailId}</div>
            ) : null}
          </div>

          {/* Nationality */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="nationality" className="form-label">
              Nationality *
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="nationality"
                name="nationality"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nationality}
              />
            ) : (
              <h6>{formik.values.nationality}</h6>
            )}
            {formik.touched.nationality && formik.errors.nationality ? (
              <div className="text-danger">{formik.errors.nationality}</div>
            ) : null}
          </div>
        </div>

        <div className="row">
          {/* Address Line 1 */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="addressLine1" className="form-label">
              Address Line 1 *
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="addressLine1"
                name="addressLine1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.addressLine1}
              />
            ) : (
              <h6>{formik.values.addressLine1}</h6>
            )}
            {formik.touched.addressLine1 && formik.errors.addressLine1 ? (
              <div className="text-danger">{formik.errors.addressLine1}</div>
            ) : null}
          </div>

          {/* Address Line 2 */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="addressLine2" className="form-label">
              Address Line 2
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="addressLine2"
                name="addressLine2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.addressLine2}
              />
            ) : (
              <h6>{formik.values.addressLine2}</h6>
            )}
            {formik.touched.addressLine2 && formik.errors.addressLine2 ? (
              <div className="text-danger">{formik.errors.addressLine2}</div>
            ) : null}
          </div>

          {/* Pin Code */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="pinCode" className="form-label">
              Pin Code *
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="pinCode"
                name="pinCode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pinCode}
              />
            ) : (
              <h6>{formik.values.pinCode}</h6>
            )}
            {formik.touched.pinCode && formik.errors.pinCode ? (
              <div className="text-danger">{formik.errors.pinCode}</div>
            ) : null}
          </div>
        </div>

        <div className="row">
          {/* DL Number */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="dlNumber" className="form-label">
              DL Number *
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="dlNumber"
                name="dlNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dlNumber}
              />
            ) : (
              <h6>{formik.values.dlNumber}</h6>
            )}
            {formik.touched.dlNumber && formik.errors.dlNumber ? (
              <div className="text-danger">{formik.errors.dlNumber}</div>
            ) : null}
          </div>

          {/* Passport Number */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="passportNumber" className="form-label">
              Passport Number *
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="passportNumber"
                name="passportNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passportNumber}
              />
            ) : (
              <h6>{formik.values.passportNumber}</h6>
            )}
            {formik.touched.passportNumber && formik.errors.passportNumber ? (
              <div className="text-danger">{formik.errors.passportNumber}</div>
            ) : null}
          </div>
                    {/* Pin Code */}
                    <div className="col-12 col-md-4 mb-3">
            <label htmlFor="pinCode" className="form-label">
              Pin Code *
            </label>
            {isEdit ? (
              <input
                type="text"
                className="form-control"
                id="pinCode"
                name="pinCode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pinCode}
              />
            ) : (
              <h6>{formik.values.pinCode}</h6>
            )}
            {formik.touched.pinCode && formik.errors.pinCode ? (
              <div className="text-danger">{formik.errors.pinCode}</div>
            ) : null}
          </div>
       {/* {isEdit&&   <div className="row">
              <div className="col-12 mt-3">
                <FileUploader
                  name="file"
                  types={fileTypes}
                  className="w-100"
                  handleChange={(file) => formik.setFieldValue("file", file)}
                />
              </div>
            </div>} */}
        </div>
      </div>
    </div>
  </form>
</div>

  );
};

export default ProfileSectionComponent;
