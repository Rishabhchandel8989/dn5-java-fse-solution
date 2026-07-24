/*------------ Hands-on 12 ------------------------*/

function FlightDetails() {
  return (
    <div>
      <h2>Available Flights</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>₹5500</td>
          </tr>

          <tr>
            <td>6E202</td>
            <td>Bangalore</td>
            <td>Chennai</td>
            <td>₹3200</td>
          </tr>

          <tr>
            <td>UK303</td>
            <td>Hyderabad</td>
            <td>Kolkata</td>
            <td>₹4800</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FlightDetails;