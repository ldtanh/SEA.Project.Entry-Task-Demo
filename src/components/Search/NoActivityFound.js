import React, {Component} from "react";

import "../css/search.css";

export default class NoActivityFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                margin: "auto",
                textAlign: "center"
            }}>
                <img src={require("../../resources/SVGs/no-activity.svg")} style={{width: "60px"}}/>
                <br/>
                <span style={{
                    fontSize: "14px",
                    color: "#BABABA"
                }}>
                            No activity found
                        </span>
            </div>
        );
    }
}
