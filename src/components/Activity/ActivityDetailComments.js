import React, {Component} from "react";
import {connect} from 'react-redux';
import {ActivityListComments} from "./ActivityDetailComponents";
import {Row, Col} from "reactstrap";
import Notifications, {notify} from 'react-notify-toast';

import {activityComment} from "../../actions/activities";

import "../css/activity.css";

class ActivityDetailComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: ""
        };
        this.replyComment = this.replyComment.bind(this);
    }

    replyComment(username) {
        this.setState({
            newComment: "@".concat(username).concat(" ")
        });
    }

    static notifyNewComment(str) {
        let myColor = {background: '#E5F7A9', text: "#8560A9"};
        notify.show(str, "custom", 3000, myColor);
    }

    render() {
        const {listComment} = this.props.activity;
        const {newComment} = this.state;
        return (
            <div>
                <Notifications style={{width: "100%"}}/>
                <div className="activitySummary">
                    <ActivityListComments listComment={listComment} replyComment={this.replyComment}/>
                </div>
                <Row style={{height: "56px"}}>
                    <Col xs={9} className="activityCommentFooterDetail">
                        <input
                            className="activityCommentFooterDetailInput"
                            placeholder="Leave your comment here"
                            value={newComment}
                            onChange={(e) => {
                                this.setState({
                                    newComment: e.target.value
                                });
                            }}
                        />
                    </Col>
                    <Col xs={3} className="activityCommentFooterDetailSend"
                         onClick={() => {
                             if (!newComment) {
                                 ActivityDetailComments.notifyNewComment("Nothing insides comment!");
                                 return;
                             }
                             this.props.activityComment(newComment);
                             ActivityDetailComments.notifyNewComment("New comment!");
                             this.setState({
                                 newComment: ""
                             })
                         }}
                    >
                        <img className="activityCommentFooterDetailSendButton"
                             src={require("../../resources/SVGs/send.svg")}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    activity: state.activities[state.idActivity]
});

export default connect(
    mapStateToProps,
    {
        activityComment: activityComment
    }
)(ActivityDetailComments);