import React, {Component} from "react";
import {connect} from 'react-redux';
import "../css/activity.css"
import {
    ActivityListComments
} from "./ActivityDetailComponents";
import ActivityFooter from "./ActivityFooter";
import ActivityListReacts from "./ActivityListReacts";

class ActivityDetailParticipants extends Component {
    constructor() {
        super();
    }

    render() {
        const {listComment} = this.props.activity;
        return (
            <div>
                <div className="activitySummary">
                    <ActivityListReacts needToCompact={false} reactType="GO"/>
                    <ActivityListReacts needToCompact={false} reactType="LIKE"/>
                    <ActivityListComments listComment={listComment}/>
                </div>
                <ActivityFooter selectScreen={this.props.selectScreen}/>
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
)(ActivityDetailParticipants);