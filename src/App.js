import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import { Fragment } from "react";


function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <SignUp />
        </Route>
        <Route path="/resetpassword" exact>
          <ResetPassword />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
