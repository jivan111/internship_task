import "./App.css";
import User from "./component/User.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SuccessPage from "./component/SuccessPage";
import { useState } from "react";
function App() {
  const [isRegistered, setRegistered] = useState(false);
  function handleRegister() {
    setRegistered(true);
  }
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/register"
          render={(props) => (
            <User {...props} handleRegister={handleRegister} />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <SuccessPage {...props} isRegistered={isRegistered} />
          )}
        />
      </Switch>
    </Router>
  );
}
export default App;
