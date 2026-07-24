/*------------ Hands-on 15 ------------------------*/

import { useState } from "react";

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const referenceNumber = Math.floor(
      100000 + Math.random() * 900000
    );

    alert(
      `Complaint Registered Successfully!\n\nEmployee Name: ${employeeName}\nReference Number: ${referenceNumber}`
    );

    // Clear the form
    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div style={{ width: "500px", margin: "40px auto" }}>
      <h1>Ticket Raising Application</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Employee Name:</strong>
          </label>

          <br />

          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Complaint:</strong>
          </label>

          <br />

          <textarea
            rows="5"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
            }}
          ></textarea>
        </div>

        <button type="submit">
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default ComplaintRegister;