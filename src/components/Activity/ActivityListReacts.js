import {Row, Col} from 'reactstrap';
import React, {Component} from "react";
import {connect} from 'react-redux';

class ActivityListReacts extends Component {
    constructor() {
        super();
    }

    render() {
        const {reactType, activities, needToCompact} = this.props;
        const reactList = (reactType === "GO" ? activities.going : activities.likes);
        return (
            <div>
                <Row>
                    <Col xs="3" style={{paddingRight: "0px"}}>
                        {
                            reactType === "GO"
                                ? <div>
                                    <img src={require("../../resources/SVGs/check-outline.svg")} style={{width: "10px"}}/>
                                    <span style={{fontSize: "10px"}}> {reactList.length} goings</span>
                                </div>
                                : <div>
                                    <img src={require("../../resources/SVGs/like-outline.svg")} style={{width: "10px"}}/>
                                    <span style={{fontSize: "10px"}}> {reactList.length} likes</span>
                                </div>
                        }
                    </Col>
                    {
                        reactList.length > 0
                            ? <Col xs="9">
                                {
                                    !needToCompact || reactList.length <= 7
                                        ? reactList.map((item, i) => {
                                            return (
                                                <img key={i} src={require("../../resources/SVGs/people.svg")} alt={item}
                                                     style={{width: "24px", paddingRight: "7px"}}/>
                                            )
                                        })
                                        : <div>
                                            {
                                                reactList.slice(0, 6).map((item, i) => {
                                                    return (
                                                        <img key={i} src={require("../../resources/SVGs/people.svg")} alt={item}
                                                             style={{width: "24px", paddingRight: "7px"}}/>
                                                    )
                                                })
                                            }
                                            <span style={{fontSize: "10px"}}> More... </span>
                                        </div>
                                }
                            </Col>
                            : <div/>
                    }
                </Row>
                <hr/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    activities: state.activities[state.idActivity]
});

export default connect(
    mapStateToProps,
    {}
)(ActivityListReacts);