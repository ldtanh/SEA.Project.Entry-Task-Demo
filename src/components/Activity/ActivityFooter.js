import {Row, Col} from 'reactstrap';
import React, {Component} from "react";
import {connect} from 'react-redux';
import {goActivity, likeAcitivity} from "../../actions/activities"

class ActivityFooter extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {isLiked, isGoing} = this.props;
        return (
            <div className="activityFooter">
                <Row style={{height: "100%"}}>
                    <Col xs="3" className="activityFooterColumn">
                        <button
                            className="activityFooterButton"
                            style={{backgroundColor: "#8560A9"}}
                            onClick={() => {
                                this.props.selectScreen(2);
                            }}
                        >
                            <span>
                                <img className="activityFooterButtonIcon"
                                     src={require("../../resources/SVGs/comment-single.svg")}/>
                            </span>
                        </button>
                    </Col>
                    <Col xs="3" className="activityFooterColumn">
                        <button
                            className="activityFooterButton"
                            style={{backgroundColor: "#8560A9"}}
                            onClick={() => {
                                this.props.likeAcitivity();
                            }}
                        >
                            <span>
                                {
                                    isLiked
                                        ? <img className="activityFooterButtonIcon"
                                               src={require("../../resources/SVGs/like.svg")}/>
                                        : <img className="activityFooterButtonIcon"
                                               src={require("../../resources/SVGs/like-outline.svg")}/>
                                }
                            </span>
                        </button>
                    </Col>
                    <Col xs="6" className="activityFooterColumn">
                        <button
                            className="activityFooterButton"
                            style={{backgroundColor: "#D5EF7F"}}
                            onClick={() => {
                                this.props.goActivity();
                            }}
                        >
                            {
                                isGoing
                                    ? <img className="activityFooterButtonIcon"
                                           src={require("../../resources/SVGs/check.svg")}/>
                                    : <img className="activityFooterButtonIcon"
                                           src={require("../../resources/SVGs/check-outline.svg")}/>
                            }
                            <span style={{"fontSize": "14px", color: "#8560A9"}}>
                                {
                                    isGoing
                                        ? " I am going "
                                        : " Join "
                                }
                            </span>
                        </button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isGoing: state.activities[state.idActivity].isGoing,
    isLiked: state.activities[state.idActivity].isLiked
});

export default connect(
    mapStateToProps,
    {
        goActivity: goActivity,
        likeAcitivity: likeAcitivity
    }
)(ActivityFooter);