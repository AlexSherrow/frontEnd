import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import withNavigation from "./WithNavigation.jsx";
import withParams from "./WithParams.jsx";
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute.js";
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";

class LogoutComponent extends Component {
    render() {
      return (
        <div>
          <h1>You are logged out</h1>
          <div className="container">Thank you for using our Application.</div>
        </div>
      );
    }
  }

  export default LogoutComponent