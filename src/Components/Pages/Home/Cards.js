import React from "react";
import { useNavigate } from "react-router-dom";
import CardUi from "../../UI/CardUi";
import "./Cards.css";
import dance_events from "../../assets/Images/dance_events.gif";
import learn_dance from "../../assets/Images/learn_dance.gif";
const Cards = () => {
  const navigate = useNavigate();
  const learnDanceContent =
    "Hello everyone. Here you can learn dance from best dance teachers in your city. So click here to apply for dance classes.";
  const danceEventContent =
    "Click here to get all the dance events happening in your city. Participate and win many prizes.";
  return (
    <div className="cards">
      <CardUi
        head="Learn Dance"
        content={learnDanceContent}
        imgSrc={learn_dance}
        clickHandler={() => navigate("/learn-dance")}
      />
      <CardUi
        head="Dance Event"
        content={danceEventContent}
        imgSrc={dance_events}
        clickHandler={() => navigate("/dance-events")}
      />
    </div>
  );
};

export default Cards;
