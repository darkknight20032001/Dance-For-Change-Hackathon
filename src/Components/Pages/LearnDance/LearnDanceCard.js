import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LearnDanceCard.css";
const LearnDanceCard = ({
  trainerName,
  trainerImage,
  trainerVideo,
  trainerDescription,
  danceStyle,
}) => {
  const navigate = useNavigate();

  const [showImg, setShowImg] = useState(true);

  return (
    <div className="card">
      <div>
        {showImg ? (
          <img src={trainerImage} alt={trainerName} />
        ) : (
          <iframe
            src={trainerVideo}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>
      <div className="card_move">
        <span className="card_prev" onClick={() => setShowImg(!showImg)}>
          {" "}
        </span>
        <span className="card_next" onClick={() => setShowImg(!showImg)}>
          {" "}
        </span>
      </div>
      <div className="card_content">
        <h3>{trainerName}</h3>

        <p
          onClick={() =>
            navigate("/learn-dance/register", {
              state: {
                trainerName: trainerName,
                danceStyle: danceStyle,
              },
            })
          }
        >
          {trainerDescription}
        </p>
      </div>
    </div>
  );
};

export default LearnDanceCard;
