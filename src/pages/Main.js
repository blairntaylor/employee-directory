import React, { useEffect, useState } from "react";
import CardData from "../components/CardData";
import { Container, Card } from "semantic-ui-react";

function Main() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?inc=name,dob,phone,email&results=10")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <>
      <Container>
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
