import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import QuestionsContainer from "./QuestionsContainer";
import Chat from "../components/Chat";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Main = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentChat, setCurrentChat] = useState({
    questionId: null,
    isopen: false,
    creator: null,
    questionId: null,
  }); // Used to get the messages in the Chat component, and set the current chat inside the questions container

  const history = useHistory();

  const handleSetCurrentChat = ({ url, isopen, creator, questionId }) => {
    setCurrentChat({ id: questionId, url, isopen, creator });
  };

  const handleLogout = () => {
    fetch("/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((_) => {
        history.push("/");
      })
      .catch((_err) => {
        alert("Could not log you out!");
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/questions")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setQuestions(data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, []);

  if (isLoading)
    return (
      <div>
        <h2>Loading data, please wait...</h2>
      </div>
    );

  if (!questions.length) {
    return <div>Sorry, no questions to display</div>;
  }

  if (isError) {
    return <div>An error has occured fetching the questions!</div>;
  }

  return (
    <>
      <div className="top-menu-container">
        <Link to={"/"} className="brandname">
          Wobblechat
        </Link>
        <div>
          <Link to={"/create"}>
            <Button variant="primary">Ask a question</Button>
          </Link>
          <Button variant="secondary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
      <Card className="chat-style">
        <Chat currentChat={currentChat} />
      </Card>
      <br />
      <QuestionsContainer
        questions={questions}
        handleSetCurrentChat={handleSetCurrentChat}
      />
    </>
  );
};

export default Main;
