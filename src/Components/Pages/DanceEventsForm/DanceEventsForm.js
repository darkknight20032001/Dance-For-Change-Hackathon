import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DanceEventsForm.css";
const DanceEventsForm = () => {
  const values = useLocation();
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return !submit ? (
    <div className="learn_dance__user_form">
      <h3>{values.state.eventName}</h3>
      <div className="learn_dance__form">
        <form onSubmit={onSubmitHandler}>
          <h5 style={{ textAlign: "center" }}>Fill Your Details</h5>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label htmlFor="age">Age</label>
          <input type="text" id="age" name="age" placeholder="Your age.." />
          <label htmlFor="Area">Area</label>
          <input type="text" id="area" name="area" placeholder="Your area.." />
          <label htmlFor="mobile">Mobile</label>
          <br />
          <input
            type="number"
            id="mobile"
            name="mobile"
            placeholder="Mobile number.."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  ) : (
    <>
      <h2 style={{ textAlign: "center", marginTop: "10rem" }}>
        Your have successfully register
      </h2>
      <p style={{ display: "none" }}>
        {setTimeout(() => {
          navigate("/");
        }, 2000)}
      </p>
    </>
  );
};

export default DanceEventsForm;
