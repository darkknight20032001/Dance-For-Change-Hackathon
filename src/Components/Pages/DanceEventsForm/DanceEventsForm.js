import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DanceEventsForm.css";
const DanceEventsForm = () => {
  const values = useLocation();
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
    let registeredEvent = localStorage.getItem("registeredEvent");
    let event_obj;
    if (registeredEvent === null) {
      event_obj = [];
    } else {
      event_obj = JSON.parse(registeredEvent);
    }
    event_obj.push(values.state.eventName);
    localStorage.setItem("registeredEvent", JSON.stringify(event_obj));
  };

  useEffect(() => {
    let events = JSON.parse(localStorage.getItem("registeredEvent"));

    console.log(events);
    if (events) {
      for (let event of events) {
        console.log(event);
        if (event === values.state.eventName) setAlreadyRegistered(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return !submit ? (
    !alreadyRegistered ? (
      <div className="learn_dance__user_form">
        <h3>{values.state.eventName}</h3>
        <div className="learn_dance__form">
          <form onSubmit={onSubmitHandler}>
            <h5 style={{ textAlign: "center" }}>Fill Your Details</h5>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            />

            <label htmlFor="age">Age</label>
            <input type="text" id="age" name="age" placeholder="Your age.." />
            <label htmlFor="Area">Area</label>
            <input
              type="text"
              id="area"
              name="area"
              placeholder="Your area.."
            />
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
      <h2 style={{ position: "absolute", top: "37%", left: "21%" }}>
        You have already registered to {values.state.eventName}
      </h2>
    )
  ) : (
    <>
      <h2 style={{ position: "absolute", top: "37%", left: "15%" }}>
        Your have successfully register to {values.state.eventName}
      </h2>
      <p style={{ display: "none" }}>
        {setTimeout(() => {
          navigate("/dance-events");
        }, 2000)}
      </p>
    </>
  );
};

export default DanceEventsForm;
