import React from "react";
import DanceEventDatabase from "../../Database/DanceEventDatabase";
import DanceEventCard from "./DanceEventCard";
import "./DanceEvent.css";
const DanceEvent = () => {
  return (
    <div className="dance_event_page">
      <div className="dance_events">
        <h1>Dance Events</h1>
        <div className="dance_events__event">
          {DanceEventDatabase.map((item) => (
            <DanceEventCard
              key={item.eventName}
              eventName={item.eventName}
              cityName={item.cityName}
              eventImage={item.eventImage}
              eventDescription={item.eventDescription}
              eventDate={item.eventDate}
              eventPrize={item.eventPrize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DanceEvent;
