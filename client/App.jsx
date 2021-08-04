import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import MainAppContainer from "./containers/MainAppContainer";
import CreateQuestionForm from "./containers/CreateQuestionForm";

import "./stylesheets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact={true} path="/">
        <MainAppContainer />
      </ProtectedRoute>
      <ProtectedRoute path="/create">
        <CreateQuestionForm />
      </ProtectedRoute>
    </Router>
  );
};

export default App;
