/*------------ Hands-on 12 ------------------------*/

import { useState } from "react";

import Guest from "./Components/Guest";
import User from "./Components/User";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}

      <hr />

      {isLoggedIn ? <User /> : <Guest />}
    </div>
  );
}

export default App;