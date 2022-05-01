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
  const [submitted, setSubmitted] = useState(false);
  const [check, setCheck] = useState(false);
  let myStorage = {};
  if (localStorage.length > 0) {
    myStorage = localStorage.getItem("details");
    myStorage = JSON.parse(myStorage);
  }

  useEffect(() => {
    if (localStorage.length > 0) {
      setCheck(true);
    }
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const obj = details;
    obj.trainerName = values.state.trainerName;
    obj.danceStyle = values.state.danceStyle;
    localStorage.setItem("details", JSON.stringify(obj));
    setSubmitted(true);
    navigate("/");
  };

  const onUnregisterClickHandler = () => {
    localStorage.clear();
    navigate("/LearnDance");
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
          <label htmlFor="Are">Area</label>
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
  ) : (
    <div className="message">
      <h1>You have already registered with {myStorage.trainerName}.</h1>
      <Button onClick={onUnregisterClickHandler}>Unregister</Button>
    </div>
  );
};

export default LearnDanceForm;