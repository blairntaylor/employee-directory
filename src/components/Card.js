import React from "react";
import { Card } from "semantic-ui-react";

function Card({ firstName, lastName, dob, phone, email }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Name: {firstName + " " + lastName}</Card.Header>
        <Card.Meta> DOB: {dob}</Card.Meta>
        <Card.Meta> Phone: {phone}</Card.Meta>
        <Card.Meta> Email: {email}</Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default Card;
