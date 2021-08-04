import React from "react";
import QuestionCard from "../components/QuestionCard";

const QuestionsContainer = ({ questions, handleSetCurrentChat }) => {
  return (
    <div className="question-window">
      <h2>Pending Questions</h2>
      {questions.map(({ id, title, description, url, creator, isopen }) => {
        if (isopen) {
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              description={description}
              creator={creator}
              url={url}
              isopen={isopen}
              handleSetCurrentChat={handleSetCurrentChat}
            />
          );
        }
      })}
      <h2>Empty Rooms</h2>
      {questions.map(({ id, title, description, url, creator, isopen }) => {
        if (!isopen) {
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              description={description}
              creator={creator}
              url={url}
              isopen={isopen}
              handleSetCurrentChat={handleSetCurrentChat}
            />
          );
        }
      })}
    </div>
  );
};

export default QuestionsContainer;
