import React, {Component} from "react";
import {connect} from 'react-redux';
import UserDetails from "./UserDetails";
import UserNav from "./UserNav";
import UserActivityList from "./UserActivityList";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idScreen: 0
        };
        this.selectScreen = this.selectScreen.bind(this);
    }

    selectScreen(idScreen) {
        this.setState({
            idScreen: idScreen
        })
    }

    render() {
        const {userInfo} = this.props;
        const {idScreen} = this.state;
        return (
            <div>
                <UserDetails/>
                <UserNav
                    selectScreen={this.selectScreen}
                    selectedSection={idScreen}
                />
                <UserActivityList
                    listActivities={(idScreen === 0 ? userInfo.liked : (idScreen === 1 ? userInfo.going : userInfo.past))}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo[state.idUser],
});

export default connect(
    mapStateToProps,
    {}
)(User);