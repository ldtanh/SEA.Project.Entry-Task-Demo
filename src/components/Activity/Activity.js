import React, {Component} from "react";
import {connect} from 'react-redux';

import {UserInfo, Title, Time, Description, Reacts} from './ActivityComponents.js';
import {showActivityDetail} from "../../actions/activities";

import "../css/activity.css";

class Activity extends Component {
    constructor() {
        super();
    }

    render() {
        const {id, username, channelName, title, time, description, going, likes, isGoing, isLiked} = this.props.item;
        return (
            <div className="activitySummary"
                 onClick={() => {
                     this.props.showActivityDetail(id)
                 }}>
                <UserInfo username={username} channelName={channelName}/>
                <Title title={title}/>
                <Time begin={time.begin} end={time.end}/>
                <Description description={description}/>
                <Reacts numberOfGoing={going.length} numberOfLikes={likes.length}
                        isGoing={isGoing} isLiked={isLiked}/>
                <hr/>
            </div>
        );
    }
}

export default connect(
    null,
    {
        showActivityDetail: showActivityDetail
    }
)(Activity);