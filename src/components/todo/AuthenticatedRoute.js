import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';

class AuthenticatedRoute extends Component {
    render() {
        if(AuthenticationService.isUserLoggedIn)
    }
}