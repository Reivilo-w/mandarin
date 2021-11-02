import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/index.scss";

import Home from "./views/Home";
import Party from "./views/Party";
import Board from "./views/Board";
import io from "socket.io-client";
import ApplicationContext from "./ApplicationContext";
// import reportWebVitals from "./reportWebVitals";

const socket = io(process.env.REACT_APP_SOCKET_URL);

const contextValue = { socket: socket };

ReactDOM.render(
  <React.StrictMode>
    <ApplicationContext.Provider value={contextValue}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/party/:uuid" component={Party} />
          <Route path="/board/:uuid" component={Board} />
        </Switch>
      </Router>
    </ApplicationContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
