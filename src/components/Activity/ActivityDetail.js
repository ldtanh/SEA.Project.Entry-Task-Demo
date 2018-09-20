import React, {Component} from "react";
import {connect} from 'react-redux';
import {Profile, ActivityDetailNav} from "./ActivityDetailComponents";
import ActivityMain from "./ActivityMain";
import ActivityDetailComments from "./ActivityDetailComments";
import ActivityDetailParticipants from "./ActivityDetailParticipants";
import "../css/activity.css";

class ActivityDetail extends Component {
    constructor() {
        super();
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
        const {channelName, title, username} = this.props.activity;
        const {idScreen} = this.state;
        return (
            <div>
                <div className="activitySummary">
                    <span className="activityDetailChannel">{channelName}</span>
                    <h5 className="activityDetailTitle">{title}</h5>
                    <Profile avatarUrl={require("../../resources/SVGs/people.svg")}
                             username={username}
                             publishedAgo="2 days"/>
                    <ActivityDetailNav
                        selectScreen={this.selectScreen}
                        selectedSection={idScreen}
                    />
                </div>
                {idScreen === 0
                    ? <ActivityMain selectScreen={this.selectScreen}/>
                    : idScreen === 1
                        ? <ActivityDetailParticipants selectScreen={this.selectScreen}/>
                        : <ActivityDetailComments/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    activity: state.activities[state.idActivity]
});

export default connect(
    mapStateToProps,
    {}
)(ActivityDetail);