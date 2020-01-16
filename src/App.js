import React from "react";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
// import WelcomePage from "./pages/WelcomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/">
            <WelcomePage />
          </Route> */}
          <Route path="/signin">
            <SigninPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
