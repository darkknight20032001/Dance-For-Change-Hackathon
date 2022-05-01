import React from "react";
import { useNavigate } from "react-router-dom";
import Calender from "../../assets/svg/Calender";
import Location from "../../assets/svg/Location";
import "./DanceEventCard.css";
const DanceEventCard = ({
  eventName,
  cityName,
  eventImage,
  eventDescription,
  eventDate,
  eventPrize,
}) => {
  const navigate = useNavigate();
  const onClickEventHandler = () => {
    navigate("/dance-events/register", {
      state: {
        eventName: eventName,
      },
    });
  };
  return (
    <div className="event_card" onClick={onClickEventHandler}>
      <div className="event_card__logo">
        <img src={eventImage} alt={eventName} />
      </div>
      <div className="event_card__details">
        <h2 className="event_card__details__name">{eventName}</h2>
        <div className="event_card__details__description">
          {eventDescription}
        </div>
        <div className="event_card__details__prize">{eventPrize}</div>
      </div>
      <div className="event_card__place">
        <div>
          <Location />
          <span>{cityName}</span>
        </div>
        <div>
          <Calender />
          <span>{eventDate}</span>
        </div>
      </div>
    </div>
  );
};

export default DanceEventCard;
