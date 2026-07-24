/*------------ Hands-on 12 ------------------------*/

import FlightDetails from "./FlightDetails";

function Guest() {
  return (
    <div>
      <h2>Welcome Guest</h2>

      <p>Please login to book your tickets.</p>

      <FlightDetails />
    </div>
  );
}

export default Guest;