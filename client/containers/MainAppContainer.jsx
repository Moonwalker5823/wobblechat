import React, { Component } from "react";
import { Link } from "react-router-dom";

import QuestionsContainer from "./QuestionsContainer";
import Chat from "../components/Chat";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class MainAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBool: true,
      fetchedData: false,
      questions: [],
    };
  }

  componentDidMount() {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((questionData) => {
        if (!Array.isArray(questionData)) questionData = [];
        this.setState({ fetchedData: true, questions: questionData });
      })
      .catch((err) =>
        console.log(
          "MainAppContainer.componentDidMount has error when making fetch request for questionsData: ERROR: ",
          err
        )
      );
  }

  // fix Warning: Can't perform a React state update on an unmounted component
  componentWillUnmount() {
    this.setState = () => {};
  }

  render() {
    if (!this.state.fetchedData)
      return (
        <div>
          <h2>Loading data, please wait...</h2>
        </div>
      );

    const { questions } = this.state;
    if (!questions) return null;
    if (!questions.length) {
      return <div>Sorry, no questions to display</div>;
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
            <Button variant="secondary">Sign out</Button>
          </div>
        </div>

        <Card className="chat-style">
          <Chat />
        </Card>
        <br />
        <QuestionsContainer questions={this.state.questions} />
      </>
    );
  }
}

export default MainAppContainer;
