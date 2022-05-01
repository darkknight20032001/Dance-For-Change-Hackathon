import React, { useState, useEffect } from "react";
import "./LearnDanceForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
const LearnDanceForm = () => {
  const values = useLocation();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    Name: ``,
    Age: ``,
    Area: ``,
  });

  const [check, setCheck] = useState(false);
  const [submitDance, setSubmitDance] = useState(false);
  let myStorage = {};
  if (localStorage.length > 0) {
    myStorage = localStorage.getItem("details");
    myStorage = JSON.parse(myStorage);
  }

  useEffect(() => {
    if (localStorage.getItem("details") !== null) {
      setCheck(true);
    }
    // eslint-disable-next-line
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const obj = details;
    obj.trainerName = values.state.trainerName;
    obj.danceStyle = values.state.danceStyle;
    localStorage.setItem("details", JSON.stringify(obj));
    setCheck(true);
    setSubmitDance(true);
  };

  const onUnregisterClickHandler = () => {
    localStorage.removeItem("details");
    setCheck(false);
  };
  return !check ? (
    <div className="learn_dance__user_form">
      <h3>Learn Dance with {values.state.trainerName}</h3>
      <div className="learn_dance__form">
        <form onSubmit={onSubmitHandler}>
          <h5 style={{ textAlign: "center" }}>Fill Your Details</h5>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(event) => {
              const myValue = event.target.value;
              setDetails((prevValue) => {
                return { ...prevValue, Name: myValue };
              });
            }}
            placeholder="Your name.."
          />

          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Your age.."
            onChange={(event) => {
              const myValue = event.target.value;
              setDetails((prevValue) => {
                return { ...prevValue, Age: myValue };
              });
            }}
          />
          <label htmlFor="Area">Area</label>
          <input
            type="text"
            id="area"
            name="area"
            placeholder="Your area.."
            onChange={(event) => {
              const myValue = event.target.value;
              setDetails((prevValue) => {
                return { ...prevValue, Area: myValue };
              });
            }}
          />
          <label className="Labelling" htmlFor="danceStyle">
            Dance Style
          </label>
          <button disabled>{values.state.danceStyle}</button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  ) : !submitDance ? (
    <div className="message">
      <h1>You have already registered with {myStorage.trainerName}.</h1>
      <Button onClick={onUnregisterClickHandler}>Unregister</Button>
    </div>
  ) : (
    <>
      <h2 style={{ textAlign: "center", marginTop: "10rem" }}>
        Your have successfully register to {values.state.trainerName}
      </h2>
      <p style={{ display: "none" }}>
        {setTimeout(() => {
          navigate("/");
        }, 2000)}
      </p>
    </>
  );
};

export default LearnDanceForm;
