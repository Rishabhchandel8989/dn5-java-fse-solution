/*------------ Hands-on 14 ------------------------*/

import { useState } from "react";

import EmployeeList from "./Components/EmployeeList";
import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1f1f1f",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "20px",
    transition: "0.3s",
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={appStyle}>
        <h1>Employee Management System</h1>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <hr />

        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;