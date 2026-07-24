/*------------ Hands-on 18.2 ------------------------*/

function EmployeeCard({ employee }) {
  return (
    <div>
      <h3>{employee.name}</h3>

      <p>ID : {employee.id}</p>

      <p>Department : {employee.department}</p>
    </div>
  );
}

export default EmployeeCard;