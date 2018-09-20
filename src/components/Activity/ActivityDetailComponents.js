import {Row, Col} from 'reactstrap';
import React, {Component} from "react";
import {getShortDescription, shortDateToString, shortTimeToString} from "../../utils/datetime";
import "../css/activity.css";

export class Profile extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="2" style={{margin: "auto"}}>
                        <img src={this.props.avatarUrl} style={{width: "36px"}}/>
                    </Col>
                    <Col style={{marginLeft: "12px"}}>
                        <Row>
                            <span style={{fontSize: "14px"}}>
                                {this.props.username}
                            </span>
                        </Row>
                        <Row>
                            <span style={{color: "#BABABA", fontSize: "12px"}}>
                                Published {this.props.publishedAgo} ago
                            </span>
                        </Row>
                    </Col>
                </Row>
                <hr/>
            </div>
        );
    }
}

export class ActivityDetailNav extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="4" style={{margin: "auto"}}>
                        <span style={{
                            fontSize: "12px",
                            color: (this.props.selectedSection === 0 ? "#AECB4F" : "#8C8C8C")
                        }}
                              onClick={() => {
                                  this.props.selectScreen(0);
                              }}
                        >
                            <img className="btnActivitySection" src={require("../../resources/SVGs/info.svg")}/>
                            <span> Details </span>
                        </span>
                    </Col>
                    <Col xs="4" style={{margin: "auto", padding: "3px 0px"}}>
                        <span style={{
                            fontSize: "12px",
                            color: (this.props.selectedSection === 1 ? "#AECB4F" : "#8C8C8C")
                        }}
                              onClick={() => {
                                  this.props.selectScreen(1);
                              }}
                        >
                            <img className="btnActivitySection" src={require("../../resources/SVGs/people.svg")}/>
                            <span> Participants </span>
                        </span>
                    </Col>
                    <Col xs="4" style={{margin: "auto", padding: "3px 0px"}}>
                        <span style={{
                            fontSize: "12px",
                            color: (this.props.selectedSection === 2 ? "#AECB4F" : "#8C8C8C")
                        }}
                              onClick={() => {
                                  this.props.selectScreen(2);
                              }}
                        >
                            <img className="btnActivitySection" src={require("../../resources/SVGs/comment.svg")}/>
                            <span> Comments </span>
                        </span>
                    </Col>
                </Row>
                <hr/>
            </div>
        );
    }
}

export class ActivityDescription extends Component {
    constructor(props) {
        super();
    }

    render() {
        const listOfRefImg = this.props.listOfRefImg;
        return (
            <div>
                <div style={{
                    height: "100px",
                    display: "flex"
                }}>
                    {
                        listOfRefImg.length > 0
                            ? listOfRefImg.map((item, i) => {
                                const imgUrl = require("../../resources/Imgs/gmap.png");
                                return (
                                    <img className="descriptionImage" key={i} src={imgUrl}/>
                                )
                            })
                            : <div/>
                    }
                </div>
                <div>
                    <span style={{
                        wordWrap: "text-break",
                        fontSize: "14px"
                    }}>
                        {getShortDescription(this.props.description, 300)}
                    </span>
                </div>
                <hr/>
            </div>
        );
    }
}

export class ActivityDateTime extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h5> When </h5>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <img src={require("../../resources/SVGs/date-from.svg")} style={{width: "16px"}}/>
                        <span> {shortDateToString(this.props.begin)} </span>
                        <span className="activityDetailTime"> {shortTimeToString(this.props.begin)} </span>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                        <img src={require("../../resources/SVGs/date-to.svg")} style={{width: "16px"}}/>
                        <span> {shortDateToString(this.props.end)} </span>
                        <span className="activityDetailTime"> {shortTimeToString(this.props.end)} </span>
                    </Col>
                </Row>
                <hr/>
            </div>
        );
    }
}

export class ActivityPlace extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h5>Where</h5>
                <h6>{this.props.placeName}</h6>
                <span>{this.props.placeAddress}</span>
                <img src={this.props.placeImg} style={{width: "100%", borderRadius: "10px"}}/>
                <hr/>
            </div>
        );
    }
}

export class Comment extends Component {
    constructor() {
        super()
    };

    render() {
        const {avatarUrl, username, commentedAgo, comment} = this.props;
        return (
            <Row style={{paddingBottom: "10px"}}>
                <Col className="activityCommentAvatar" xs="1">
                    <img src={avatarUrl} style={{width: "32px"}}/>
                </Col>
                <Col xs="8">
                    <Row>
                            <span className="activityCommentUsername">
                                {username}
                            </span>
                        <span className="activityCommentTime">
                                {commentedAgo} ago
                            </span>
                    </Row>
                    <Row>
                            <span className="activityCommentDetail">
                                {comment}
                            </span>
                    </Row>
                </Col>
                <Col className="activityCommentAvatar"
                     xs="1"
                     onClick={() => {
                         this.props.replyComment(username);
                     }}
                >
                    <img style={{width: "16px"}} src={require("../../resources/SVGs/reply.svg")}/>
                </Col>
            </Row>
        )
    }
}

export class ActivityListComments extends Component {
    constructor() {
        super();
    }


    render() {
        const {listComment} = this.props;
        return (
            <div>
                {
                    listComment.length > 0
                        ? listComment.map((item, i) => {
                            return (
                                <Comment key={i} avatarUrl={require("../../resources/SVGs/people.svg")}
                                         username={item.username}
                                         commentedAgo={item.commentedAgo}
                                         comment={item.comment}
                                         replyComment={this.props.replyComment}
                                />
                            )
                        })
                        : <div/>
                }
            </div>
        );
    }
}
