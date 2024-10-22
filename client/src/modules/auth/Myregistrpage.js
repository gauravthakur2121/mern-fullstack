import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Myapi from "../dashboard/Myapi";
import { MdEmail } from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { MdWifiPassword } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
 // import { useUser } from "../shares/UserProvider";
import { FaPhoneAlt } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { SiCoursera } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import Myheaderpage from "../shares/Myheaderpage";
import Footer from "../dashboard/Footer";

function Myregistrpage() {
  const navigat = useNavigate();
  const [showpass, setShowPass] = useState("password");
  const [showConfirmPass, setShowConfirmPass] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const [user, setuser] = useState({
    emailid: "",
    name: "",
    gender: "",
    course: "",
    dob: "",
    phoneno: "",
    pass: "",
    confirmPassword: ""
  });

  const showhide = () => {
    if (showpass === "password") {
      setShowPass("text");
    } else {
      setShowPass("password");
    }
    if(showConfirmPass === "password"){
      setShowConfirmPass("text");
    }
    else{
      setShowConfirmPass("password")
    }
  };

  const updateuseer = (e) => {
    const { name, value } = e.target;
    setuser((a) => {
      return {
        ...a,
        [name]: value,
      };
    });
  };

  const mysubmitdata = async () => {
    const { emailid, name, phoneno, course, dob, pass, gender } = user;
    if (
      user.emailid === "" ||
      user.name === "" ||
      user.pass === "" ||
      user.gender === ""
    ) {
      alert("your form is invalid");
    } else {
      const res = await fetch(`${Myapi}/registoruser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailid,
          name,
          phoneno,
          course,
          dob,
          pass,
          gender,
        }),
      });
      const data = await res.json();
     // setUser({ name });
      toast.success("Register Succesfully", { theme: "dark" });
      setTimeout(() => {
        navigat("/");
      }, 2000);
    }
  };

  const password = watch("pass");

  return (
    <>
    <Myheaderpage/>
    <form>
      <div className="container-fluid register-page">
        <ToastContainer />
        <div className="row justify-content-center">
          <div className="col-md-8 p-3 rounded shadow">
            <div className="container-fluid c-res con-res">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="mb-3">
                    <p className="h2 animated-title">Welcome to Registor Page</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      {" "}
                      <MdEmail /> Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="emailid"
                      value={user.emailid}
                      onInput={updateuseer}
                      {...register("emailid", {
                        required: "Email is required",
                      })}
                    />
                    {errors.emailid && (
                      <span className="text-danger">
                        {errors.emailid.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      {" "}
                      <IoPerson /> FullName
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={user.name}
                      onInput={updateuseer}
                      {...register("name", {
                        required: "Fullname is required",
                      })}
                    />
                    {errors.name && (
                      <span className="text-danger">{errors.name.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      {" "}
                      <FaPhoneAlt /> Phone No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneno"
                      value={user.phoneno}
                      onInput={updateuseer}
                      {...register("phoneno", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Phone number must be 10 digits",
                        },
                      })}
                    />
                    {errors.phoneno && (
                      <span className="text-danger">
                        {errors.phoneno.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label"> Gender</label>
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        className="form-check-input me-2"
                        name="gender"
                        value="male"
                        {...register("gender", { required: "Gender is required" })}
                        onChange={updateuseer}
                      />
                      <FaMale className="me-2" size="1.5rem" color="#007bff" /> Male
                      <input
                        type="radio"
                        className="form-check-input ms-4 me-2"
                        name="gender"
                        value="female"
                        {...register("gender", { required: "Gender is required" })}
                        onChange={updateuseer}
                      />
                      <FaFemale className="me-2" size="1.5rem" color="pink"/> Female
                    </div>
                    {errors.gender && (
                      <span className="text-danger">
                        {errors.gender.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      {" "}
                      <CgCalendarDates /> DOB
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={user.dob}
                      onInput={updateuseer}
                      {...register("dob", { required: "DOB is required" })}
                    />
                    {errors.dob && (
                      <span className="text-danger">{errors.dob.message}</span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      {" "}
                      <SiCoursera /> Course
                    </label>
                    <select
                      className="form-select"
                      name="course"
                      value={user.course}
                      onChange={updateuseer}
                    >
                      <option>mern</option>
                      <option>mean</option>
                      <option>java</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label tblock">
                      {" "}
                      <MdWifiPassword /> Password
                    </label>
                    <input
                      type={showpass}
                      className="form-control cpa"
                      name="pass"
                      value={user.pass}
                      onInput={updateuseer}
                      {...register("pass", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
                        pattern: {
                          value:
                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                          message:
                            "Password must include uppercase, lowercase, number, and special character",
                        },
                      })}
                    />

                    <button
                      type="button"
                      className="btn showhide bg-primary text-white ms-2"
                      onClick={showhide}
                    >
                      {showpass === "password" ? <FaRegEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label tblock">  <MdWifiPassword /> Confirm Password</label>
                    <input
                      type={showConfirmPass}
                      className="form-control cpa"
                      name="confirmPassword"
                      value={user.confirmPassword}
                      onInput={updateuseer}
                      {...register("confirmPassword", {
                        required:" confirm is required",
                        validate: (value) => value === password || "Passwords do not match",
                      })}
                    />
                    <button
                      type="button"
                      className="btn showhide bg-primary text-white ms-2"
                      onClick={() => showhide("confirmPassword")}
                    >
                      {showConfirmPass === "password" ? <FaRegEye /> : <FaEyeSlash />}
                    </button>
                    {errors.confirmPassword && (
                      <span className="text-danger">{errors.confirmPassword.message}</span>
                    )}
                  </div>
                </div>

                <div className="col-12 text-center">
                  <div className="mb-3">
                    <button
                      type="button"
                      className="button"
                      onClick={handleSubmit(mysubmitdata)}
                    >
                      Registor Now
                    </button>
                    <button type="button" className="button ms-2">
  <Link to="/" className="text-white text-decoration-none">Login Page</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <Footer/>
    </>
  );
}

export default Myregistrpage;
