import React, { useEffect, useState } from "react";
import CardData from "./CardData";
import { Container, Card } from "semantic-ui-react";

function Main() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&inc=name,dob,phone,email")
      .then((response) => response.json())
      .then((data) => setEmployees(data.results));
  }, []);

  return (
    <>
      <Container>
        <h1>Search Data</h1>
        <Card.Group itemsPerRow={3}>
          {employees.map((employee) => (
            <CardData
              name={employee.name}
              dob={employee.dob}
              phone={employee.phone}
              email={employee.email}
            />
          ))}
        </Card.Group>
      </Container>
    </>
  );
}

export default Main;
