import React, {Component} from "react";
import App from '../App.js';
import '../css/login.css'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            isAuth: false,
            email: "",
            password: ""
        };
    }

    validateAuth() {
        // Dummy
        localStorage.setItem("isLoggedIn", true);
        this.setState({isAuth: true});
    }

    render() {
        const {isAuth, email, password} = this.state;
        if (isAuth === true) return <App isAuth={isAuth}/>;
        let mainScreenHeight = screen.height - 60;
        return (
            <div className="background" style={{height: mainScreenHeight}}>
                <div className="layer"/>
                <div className="mainLoginForm">
                    <div style={{"paddingTop": "70px"}}>
                        <span className="subtitle">FIND THE MOST LOVED ACTIVITIES</span>
                    </div>
                    <div style={{"paddingTop": "20px"}}>
                        <b className="title">BLACK CAT</b>
                    </div>
                    <img className="logo" src={require("../../resources/SVGs/logo-cat.svg")}/>
                    <br/>
                    <input className="loginForm" type="email" name="email" value={email}
                           onChange={(e) => {
                               this.setState({email: e.target.value})
                           }}
                    />
                    <div style={{padding: "5px 0px"}}/>
                    <input className="loginForm" type="password" name="password" value={password}
                           onChange={(e) => {
                               this.setState({password: e.target.value})
                           }}/>
                </div>
                <div className="phantomStyle"/>
                <div className="footerStyle">
                    <button
                        type='button'
                        className="loginButton"
                        onClick={() => this.validateAuth()}
                    >
                        <b style={{"fontSize": "16px"}}>SIGN IN</b>
                    </button>
                </div>
            </div>
        );
    }
}
