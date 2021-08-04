import React from "react";
import QuestionCard from "../components/QuestionCard";

const QuestionsContainer = ({ questions }) => {
  const activeQuestionObjects = questions.map(
    ({ id, title, description, url, creator, isopen }) => {
      // chrome dev tools is showing "isopen" as lowercase for some reason
      if (isopen) {
        return (
          <QuestionCard
            key={id}
            title={title}
            description={description}
            creator={creator}
            chatURL={url}
          />
        );
      }
    }
  );

  const inactiveQuestionObjects = questions.map(
    ({ id, title, description, url, creator, isopen }) => {
      if (!isopen) {
        return (
          <QuestionCard
            key={id}
            title={title}
            description={description}
            creator={creator}
            chatURL={url}
          />
        );
      }
    }
  );

  return (
    <div className="question-window">
      <h2>Active questions </h2>
      {activeQuestionObjects}
      <br />
      <h2>Inactive questions </h2>
      {inactiveQuestionObjects}
    </div>
  );
};

export default QuestionsContainer;
