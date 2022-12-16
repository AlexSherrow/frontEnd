import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import withNavigation from './WithNavigation.jsx'   
import withParams from './WithParams.jsx'
import AuthenticationService from './AuthenticationService.js'

class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);

        const WelcomeComponentWithParams = withParams(WelcomeComponent);

        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodosComponent />} />
                        <Route path="/logout" element={<LogoutComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    loginClicked() {
        if(this.state.username==='in28minutes' && this.state.password==='dummy'){      
            AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password);     
            this.props.navigate(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className ="btn btn" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
                {id: 1, description: 'Todo 1', done:false, targetDate: new Date()},
                {id: 2, description: 'Todo 2',  done:false, targetDate: new Date()}
            ]
        }
    }
    render() {
        return (
        <div>
            <h1>List Todo</h1>
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>description</th>
                        <th>done</th>
                        <th>target date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map (
                        todo =>
                    <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetDate.toString()}</td>

                    </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Resereved 2018 @in28Minutes</span>
            </footer>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav class ="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://www.google.com"className="navbar-brand">in28Minutes</a>
                    </div>
                    <ul class ="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul class ="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.params.name} You caan manage your todos <Link to="/todos">here</Link>
            </div>
            </>
        )        
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our Application.
                </div>
            </div>
        )
    }
}

export default TodoApp