import React from "react";
import { useNavigate } from "react-router-dom";
import CardUi from "../../UI/CardUi";
import "./Cards.css";
import dance_events from "../../assets/Images/dance_events.gif";
import learn_dance from "../../assets/Images/learn_dance.gif";
const Cards = () => {
  const navigate = useNavigate();
  const learnDanceContent =
    "We bring free dance training courses by India's best dancers/mentors free of cost";
  const danceEventContent =
    "Click here to get all the dance events and showcase your skills.Participate and shine.";
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
