import {Row, Col} from 'reactstrap';
import React, {Component} from "react";
import {connect} from 'react-redux';

import "../css/user.css";

class UserNavButton extends Component {
    constructor() {
        super();
    }

    render() {
        const {userInfo, selectedSection, idScreen, btnType} = this.props;
        return (
            <Col xs="4" style={{margin: "auto"}}>
                <span style={{
                    fontSize: "12px",
                    color: (selectedSection === idScreen ? "#AECB4F" : "#8C8C8C")
                }}
                      onClick={() => {
                          this.props.selectScreen(idScreen);
                      }}
                >
                    {btnType === "LIKED"
                        ? <div>
                            {selectedSection === idScreen
                                ? <img className="btnActivitySection" src={require("../../resources/SVGs/like.svg")}/>
                                : <img className="btnActivitySection"
                                       src={require("../../resources/SVGs/like-outline.svg")}/>
                            }
                            <span> {userInfo.liked.length} Likes </span>
                        </div>
                        : btnType === "GOING"
                            ? <div>
                                {selectedSection === idScreen
                                    ? <img className="btnActivitySection"
                                           src={require("../../resources/SVGs/check.svg")}/>
                                    : <img className="btnActivitySection"
                                           src={require("../../resources/SVGs/check-outline.svg")}/>
                                }
                                <span> {userInfo.going.length} Going</span>
                            </div>
                            : <div>
                                {selectedSection === idScreen
                                    ?
                                    <img className="btnActivitySection" src={require("../../resources/SVGs/past.svg")}/>
                                    : <img className="btnActivitySection"
                                           src={require("../../resources/SVGs/past-outline.svg")}/>
                                }
                                <span> {userInfo.past.length} Past</span>
                            </div>
                    }
                </span>
            </Col>
        );
    }
}

class UserNav extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {userInfo, selectedSection} = this.props;
        return (
            <div>
                <div className="userWholeNav">
                    <Row>
                        <UserNavButton userInfo={userInfo} selectedSection={selectedSection} idScreen={0}
                                       selectScreen={this.props.selectScreen} btnType="LIKED"/>
                        <UserNavButton userInfo={userInfo} selectedSection={selectedSection} idScreen={1}
                                       selectScreen={this.props.selectScreen} btnType="GOING"/>
                        <UserNavButton userInfo={userInfo} selectedSection={selectedSection} idScreen={2}
                                       selectScreen={this.props.selectScreen} btnType="PAST"/>
                    </Row>
                </div>
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
)(UserNav);