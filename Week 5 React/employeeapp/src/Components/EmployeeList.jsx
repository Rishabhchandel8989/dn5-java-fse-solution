/*------------ Hands-on 14 ------------------------*/

import EmployeeCard from "./EmployeeCard";

function EmployeeList() {

  const employees = [
    {
      id: 101,
      name: "Rahul",
    },
    {
      id: 102,
      name: "Priya",
    },
    {
      id: 103,
      name: "Amit",
    },
  ];

  return (
    <div>

      <h2>Employee List</h2>

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}

    </div>
  );
}

export default EmployeeList;