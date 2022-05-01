import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/Home/HomePage";
import LearnDance from "./Components/Pages/LearnDance/LearnDance";
import LearnDanceForm from "./Components/Pages/LearnDanceForm/LearnDanceForm";
function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LearnDance" element={<LearnDance />} />
          <Route
            path="/LearnDance/LearnDanceForm"
            element={<LearnDanceForm />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
