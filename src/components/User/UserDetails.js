import React, {Component} from "react";
import {connect} from 'react-redux';

import "../css/user.css";

class UserDetails extends Component {
    constructor() {
        super();
    }

    render() {
        const {userInfo} = this.props;
        return (
            <div>
                <img className="userAvatar" src={require("../../resources/SVGs/user.svg")}/>
                <h5 className="username">{userInfo.name}</h5>
                <span className="userEmail">
                    <img className="userEmailIcon" src={require("../../resources/SVGs/email.svg")}/>
                    <span> {userInfo.email}</span>
                </span>
                <hr/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo[state.idUser]
});

export default connect(
    mapStateToProps,
    {}
)(UserDetails);