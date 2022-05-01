import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DanceEvent from "./Components/Pages/DanceEvents/DanceEvent";
import DanceEventsForm from "./Components/Pages/DanceEventsForm/DanceEventsForm";
import HomePage from "./Components/Pages/Home/HomePage";
import LearnDance from "./Components/Pages/LearnDance/LearnDance";
import LearnDanceForm from "./Components/Pages/LearnDanceForm/LearnDanceForm";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn-dance" element={<LearnDance />} />
          <Route path="/learn-dance/register" element={<LearnDanceForm />} />
          <Route path="/dance-events" element={<DanceEvent />} />
          <Route path="/dance-events/register" element={<DanceEventsForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
