/*------------ Hands-on 12 ------------------------*/

import FlightDetails from "./FlightDetails";

function User() {
  return (
    <div>
      <h2>Welcome Priyanshu</h2>

      <p>You can now book your tickets.</p>

      <button>Book Ticket</button>

      <br />
      <br />

      <FlightDetails />
    </div>
  );
}

export default User;