import {Row, Col} from 'reactstrap';
import React, {Component} from "react";
import {getShortDescription, concatDatetime} from "../../utils/datetime";
import "../css/activity.css";

export class Reacts extends Component {
    constructor() {
        super();
    }

    render() {
        const {numberOfGoing, isGoing, numberOfLikes, isLiked} = this.props;
        return (
            <Row style={{padding: "10px 0px"}}>
                <Going numberOfGoing={numberOfGoing} isGoing={isGoing}/>
                <Likes numberOfLikes={numberOfLikes} isLiked={isLiked}/>
            </Row>
        );
    }
}

class Going extends Component {
    constructor() {
        super();
    }

    render() {
        const {isGoing, numberOfGoing} = this.props;
        const info = (isGoing ?  "I am going!" : numberOfGoing.toString().concat(" Going"));
        return (
            <Col xs="5">
                {isGoing
                    ? <img className="iconReact" src={require("../../resources/SVGs/check.svg")}/>
                    : <img className="iconReact" src={require("../../resources/SVGs/check-outline.svg")}/>
                }
                <span style={{fontSize: "12px", paddingLeft: "5px"}}>{info}</span>
            </Col>
        );
    }
}

class Likes extends Component {
    constructor() {
        super();
    }

    render() {
        const {isLiked, numberOfLikes} = this.props;
        let info = (isLiked ? "I like it!" : numberOfLikes.toString().concat(" Likes"));
        return (
            <Col xs="5">
                {isLiked
                    ? <img className="iconReact" src={require("../../resources/SVGs/like.svg")}/>
                    : <img className="iconReact" src={require("../../resources/SVGs/like-outline.svg")}/>
                }
                <span style={{fontSize: "12px", paddingLeft: "5px"}}>{info}</span>
            </Col>
        );
    }
}

export class Description extends Component {
    constructor() {
        super();
    }

    render() {
        const {description} = this.props;
        return (
            <div>
                <span className="description">
                    {getShortDescription(description)}
                </span>
            </div>
        );
    }
}

export class Time extends Component {
    constructor() {
        super();
    }

    render() {
        const {begin, end} = this.props;
        return (
            <span className="timeSummary">
                {concatDatetime(begin, end)}
            </span>
        );
    }
}

export class Title extends Component {
    constructor() {
        super();
    }

    render() {
        const {title} = this.props.title;
        return (
            <div>
                <h5 style={{wordWrap: "break-word"}}>{title}</h5>
            </div>
        );
    }
}

export class HalfColumn extends Component {
    constructor() {
        super();
    }

    render() {
        const {align, type, info} = this.props;
        return (
            <Col xs="6"
                 style={{textAlign: align}}
            >
                {type === "none"
                    ? (<span style={{fontSize: "12px"}}>{info}</span>)
                    : (<span className="activityChannel">{info}</span>)
                }
            </Col>
        );
    }
}

export class UserInfo extends Component {
    constructor() {
        super();
    }

    render() {
        const {username, channelName} = this.props;
        return (
            <div>
                <Row>
                    <HalfColumn info={username} align="left" type="none"/>
                    <HalfColumn info={channelName} align="right" type="boxrounded"/>
                </Row>
            </div>
        );
    }
}