import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    ActivityDateTime,
    ActivityDescription,
    ActivityPlace,
    ActivityListComments
} from "./ActivityDetailComponents";
import ActivityListReacts from "./ActivityListReacts";
import ActivityFooter from "./ActivityFooter.js";

class ActivityMain extends Component {
    constructor() {
        super();
        this.replyComment = this.replyComment.bind(this);
    }

    replyComment() {
        this.props.selectScreen(2);
    }

    render() {
        const {description, listOfRefImg, time, placeName, placeAddress, going, likes, listComment} = this.props.activity;
        return (
            <div>
                <div className="activitySummary">
                    <ActivityDescription description={description} listOfRefImg={listOfRefImg}/>
                    <ActivityDateTime begin={time.begin} end={time.end}/>
                    <ActivityPlace placeName={placeName} placeAddress={placeAddress}
                                   placeImg={require("../../resources/Imgs/gmap.png")}/>
                    <ActivityListReacts needToCompact={true} reactType="GO" reactList={going}/>
                    <ActivityListReacts needToCompact={true} reactType="LIKE" reactList={likes}/>
                    <ActivityListComments replyComment={this.replyComment} listComment={listComment}/>
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
    mapStateToProps
)(ActivityMain);