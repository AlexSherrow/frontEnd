import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import withNavigation from "./WithNavigation.jsx";
import withParams from "./WithParams.jsx";
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute.js";
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">
          All Rights Resereved 2018 @in28Minutes
        </span>
      </footer>
    );
  }
}

export default FooterComponent