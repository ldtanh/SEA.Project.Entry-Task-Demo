import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {loadActivities} from '../actions/activities';
import {loadUsers} from '../actions/user';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: null
        };
        this.getCache();
        this.props.loadActivities();
        this.props.loadUsers();
    }

    getCache() {
        const cachedHits = localStorage.getItem("isLoggedIn");
        if (cachedHits) {
            this.state.isLoggedin = cachedHits;
        }
    }

    render() {
        const {isLoggedin, isAuth} = this.state;
        let path = (isAuth || isLoggedin) ? '/' : '/login';
        return <Redirect to={path}/>;
    }
};

export default connect(
    null,
    {
        loadActivities: loadActivities,
        loadUsers: loadUsers
    }
)(App);