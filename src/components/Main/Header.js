import React, {Component} from "react";
import {connect} from 'react-redux';
import {Row, Col} from "reactstrap";
import {goHome, searchInfo} from "../../actions/search";
import {showUser} from "../../actions/user";

import "../css/main.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    toggleSearchScreen() {
        this.props.toggleScreen();
    }

    render() {
        const {idActivity, idUser} = this.props.store;
        return (
            <div className="header">
                <Row className="header-row">
                    <Col xs="2" style={{paddingRight: "0"}}>
                        {
                            idActivity === -1 && idUser === -1
                                ? <img className="icon" src={require("../../resources/SVGs/search.svg")}
                                       onClick={() => this.toggleSearchScreen()}/>
                                : <img className="icon" src={require("../../resources/SVGs/home.svg")}
                                       onClick={() => this.props.goHome()}/>
                        }
                    </Col>
                    <Col xs="8">
                        <img className="icon" src={require("../../resources/SVGs/logo-cat.svg")}/>
                    </Col>
                    <Col xs="2" style={{paddingLeft: "0"}} onClick={() => {
                        this.props.showUser();
                    }}>
                        <img className="icon" src={require("../../resources/SVGs/user.svg")}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    store: state
});

export default connect(
    mapStateToProps,
    {
        searchInfo: searchInfo,
        goHome: goHome,
        showUser: showUser
    }
)(Header);
