import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const QuestionCard = ({ id, title, description, url, creator, isOpen }) => {
  return (
    <Card key={id}>
      <Card.Body>
        <div className="question-container">
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" className="min-button">
            Answer question
          </Button>
        </div>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
