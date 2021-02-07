import React, { useState, useRef } from "react";
import "./Form.css";
import Date from "./Dates.js";
import axios from "axios";
import CustomizedSnackbars from "./CutomSnackbar";
import { validate } from "./utilities";
function User({ history, handleRegister }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [snackInfo, setSnackInfo] = useState({
    message: "",
    type: "",
  });
  const [snackbarState, setSnackbarState] = useState(false);
  const htmlRef = useRef({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_pass: "",
    dob: { day: "", month: "", year: "" },
  });
  function inputHandle(e) {
    htmlRef.current[e.target.name] = e.target.value;
  }
  function closeSnack() {
    setSnackbarState(!snackbarState);
  }
  function postUserDetails() {
    // const instance = axios.create({
    //   baseURL: "http://localhost:5000",
    // });
    axios
      .post("/register", {
        ...htmlRef.current,
      })
      .then((res) => {
        if (res.status == 200) {
          setSubmitting(false);
          setSnackInfo({
            message: "successfully submitted!",
            type: "success",
          });
          setSnackbarState(!snackbarState);
          setSubmitted(!submitted);
          handleRegister();
          // make sure to have history.push  at the end because changes to be made earlier
          history.push("/");
        }
      })
      .catch((err) => {
        setSubmitting(false);
        setSnackInfo({ message: "error occured!", type: "error" });
        setSnackbarState(!snackbarState);
      });
  }
  return (
    <>
      <CustomizedSnackbars
        message={snackInfo.message}
        state={snackbarState}
        type={snackInfo.type}
        closeSnack={closeSnack}
      />

      {submitting && <div className="overlay-submission"></div>}
      <div className="form-container" onChange={inputHandle}>
        <h3>Create Account</h3>
        <input type="text" name="name" placeholder="name" tabIndex="1" />
        <input type="text" name="email" placeholder=" email" tabIndex="2" />
        <input type="text" name="phone" placeholder="8201930589" tabIndex="3" />
        <input
          type="text"
          name="password"
          placeholder="password"
          tabIndex="4"
        ></input>
        <input
          type="text"
          name="confirm_pass"
          placeholder="confirm password"
          tabIndex="4"
        ></input>
        <Date dob={htmlRef.current.dob} />
        <button
          onClick={(e) => {
            let result = validate(htmlRef.current);
            if (result.valid) {
              postUserDetails();
              setSubmitting(true);
            } else {
              setSnackInfo({
                message: result.message,
                type: result.type,
              });
              setSnackbarState(!snackbarState);
            }
          }}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
export default User;
