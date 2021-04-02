import React from "react";
import { Card } from "semantic-ui-react";

function CardData({ name, dob, phone, email }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Name: {name}</Card.Header>
        <Card.Meta> DOB: {dob}</Card.Meta>
        <Card.Meta> Phone: {phone}</Card.Meta>
        <Card.Meta> Email: {email}</Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default CardData;
