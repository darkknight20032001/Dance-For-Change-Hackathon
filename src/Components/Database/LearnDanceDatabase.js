import remo from "../assets/Images/remo.jpeg";
import raghav from "../assets/Images/raghav.jpg";
import shakti from "../assets/Images/shakti.jpg";
import puneet from "../assets/Images/puneet.jpg";
const LearnDanceDatabase = [
  {
    id: 1,
    danceStyle: "Jazz Dance",
    trainerName: "Remo D Souza",
    location: "Dwarka",
    trainerImage: remo,
    trainerVideo: "https://www.youtube.com/embed/YfCJUOvvY9Y",
    trainerDescription: "Lets learn Jazz with Remo D Souza",
  },
  {
    id: 2,
    danceStyle: "Hip-Hop",
    trainerName: "Shakti Mohan",
    location: "Lucknow",
    trainerImage: shakti,
    trainerVideo: "https://www.youtube.com/embed/wOFHJusNAVY",
    trainerDescription: "Lets learn Hip-Hop with Shakti Mohan",
  },
  {
    id: 3,
    danceStyle: "Slow Motion",
    trainerName: "Raghav Juyal",
    location: "New Delhi",
    trainerImage: raghav,
    trainerVideo: "https://www.youtube.com/embed/Nt0NHdCqjQ4",
    trainerDescription: "Lets learn Slow Motion with Raghav Juyal",
  },
  {
    id: 4,
    danceStyle: "Tap Dance",
    trainerName: "Puneet Pathak",
    location: "Mumbai",
    trainerImage: puneet,
    trainerVideo: "https://www.youtube.com/embed/N60LKtc_kSg",
    trainerDescription: "Lets learn Tap Dance with Puneet Pathak",
  },
];
export default LearnDanceDatabase;
