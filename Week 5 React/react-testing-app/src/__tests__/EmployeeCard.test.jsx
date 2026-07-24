/*------------ Hands-on 18.2 ------------------------*/

import { render, screen } from "@testing-library/react";
import EmployeeCard from "../Components/EmployeeCard";

describe("EmployeeCard Component", () => {

  const employee = {
    id: 101,
    name: "Rahul",
    department: "Engineering",
  };

  test("should render employee name", () => {

    render(<EmployeeCard employee={employee} />);

    expect(
      screen.getByText("Rahul")
    ).toBeInTheDocument();

  });

});