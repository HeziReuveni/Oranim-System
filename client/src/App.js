import React from "react";
import TodoTable from "./components/TodoTable";
import RecyclingBinPage from "./components/RecyclingBinPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExitClearance from "./components/ExitClearance";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/deletions">
            <RecyclingBinPage />
          </Route>
          <Route path="/exit">
            <ExitClearance />
          </Route>
          <TodoTable />
        </Switch>
      </Router>
    </>
  );
};

export default App;
