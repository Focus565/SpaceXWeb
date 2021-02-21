import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Home from "./Pages/Home";
// import reportWebVitals from './reportWebVitals';
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rockets from "./Pages/Rockets";
import Launches from "./Pages/Launches";
import RocketDetail from "./Pages/RocketDetail";
import LaunchDetail from "./Pages/LaunchDetail";
import { IndexProvider } from "./Context/IndexContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <IndexProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Rockets/:id">
            <RocketDetail />
          </Route>
          <Route path="/Launches/:id" component={LaunchDetail}></Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Rockets">
            <Rockets />
          </Route>
          <Route path="/Launches">
            <Launches />
          </Route>
        </Switch>
      </Router>
    </IndexProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
