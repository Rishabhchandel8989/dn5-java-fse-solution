

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import TrainersList from "./components/TrainersList";
import TrainerDetails from "./components/TrainerDetails";


/*------------ Hands-on 6 ------------------------*/
function App() {
  return (
    <BrowserRouter>
      <h1>Trainer Management Portal</h1>

      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/trainers">Trainers</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/trainers" element={<TrainersList />} />

        <Route
          path="/trainers/:id"
          element={<TrainerDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;