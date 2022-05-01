import React, { useState } from "react";
import LearnDanceDatabase from "../../Database/LearnDanceDatabase";
import LearnDanceCard from "./LearnDanceCard";
import Button from "../../UI/Button";
import "./LearnDance.css";
const danceStyles = [
  "All",
  ...new Set(LearnDanceDatabase.map((data) => data.danceStyle)),
];
const LearnDance = () => {
  const [data, setData] = useState(LearnDanceDatabase);
  const [activeBtn, setActiveBtn] = useState(0);
  const onClickHandler = (i, ind) => {
    if (i === "All") {
      setData(LearnDanceDatabase);
    } else {
      const filteredData = LearnDanceDatabase.filter(
        (item) => i === item.danceStyle
      );
      setData(filteredData);
    }
    setActiveBtn(ind);
  };
  return (
    <div className="learn_dance">
      <div className="learn_dance__btn">
        {danceStyles.map((item, index) => (
          <Button
            key={item}
            onClick={() => onClickHandler(item, index)}
            className={activeBtn === index ? "active" : ""}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="learn_dance__items">
        {data.map((item) => (
          <LearnDanceCard
            key={item.id}
            trainerName={item.trainerName}
            trainerImage={item.trainerImage}
            trainerVideo={item.trainerVideo}
            trainerDescription={item.trainerDescription}
            danceStyle={item.danceStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnDance;
