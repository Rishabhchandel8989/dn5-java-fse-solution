/*------------ Hands-on 10 ------------------------*/

import officeImage from "./assets/office.jpg";

function App() {
  const office = {
    name: "DBS Business Center",
    rent: 55000,
    address: "MG Road, Bangalore",
  };

  const officeSpaces = [
    {
      name: "DBS Business Center",
      rent: 55000,
      address: "MG Road, Bangalore",
    },
    {
      name: "Tech Park Office",
      rent: 75000,
      address: "Whitefield, Bangalore",
    },
    {
      name: "Corporate Hub",
      rent: 62000,
      address: "Hitech City, Hyderabad",
    },
    {
      name: "Startup Space",
      rent: 45000,
      address: "Pune",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="500"
        height="300"
      />

      <hr />

      <h2>Single Office Details</h2>

      <p>
        <b>Name:</b> {office.name}
      </p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green",
        }}
      >
        <b>Rent:</b> ₹{office.rent}
      </p>

      <p>
        <b>Address:</b> {office.address}
      </p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeSpaces.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{item.name}</h3>

          <p
            style={{
              color: item.rent < 60000 ? "red" : "green",
            }}
          >
            <b>Rent:</b> ₹{item.rent}
          </p>

          <p>
            <b>Address:</b> {item.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;