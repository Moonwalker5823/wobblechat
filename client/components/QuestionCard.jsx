import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const QuestionCard = ({
  id,
  title,
  description,
  url,
  creator,
  isopen,
  handleSetCurrentChat,
}) => {
  const handleOpenChat = () => {
    // When the user clicks the chat, we're calling a callback function that gets passed down from the main component.
    // This callback will re-set the current chat based on it's ID, which will re-render the Chat component and display
    // The messages in our DB for that specific chat.
    handleSetCurrentChat({ url, isopen, questionId: id, creator });
  };

  return (
    <Card key={id}>
      <Card.Body>
        <div className="question-container">
          <Card.Title>{title}</Card.Title>
          <Button
            variant="primary"
            className="min-button"
            onClick={handleOpenChat}
          >
            {isopen ? "Join Chat" : "See chat history"}
          </Button>
        </div>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
