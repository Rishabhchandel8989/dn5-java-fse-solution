/*------------ Hands-on 14 ------------------------*/

import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme === "light" ? "#f5f5f5" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    border: "1px solid gray",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
    transition: "0.3s",
  };

  return (
    <div style={cardStyle}>
      <h3>{employee.name}</h3>

      <p>ID : {employee.id}</p>

      <button>View Profile</button>
    </div>
  );
}

export default EmployeeCard;