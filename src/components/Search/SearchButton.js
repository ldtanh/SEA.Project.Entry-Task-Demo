import React from "react";
import {connect} from 'react-redux';
import {getShortDate} from '../../utils/datetime';
import "../css/search.css";

class SearchButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {channel, timeRange} = this.props;
        return (
            <div className="divButton">
                <button
                    type='button'
                    className="searchButton"
                    onClick={() => {
                        this.props.search();
                    }}
                >
                    <span style={{"fontSize": "16px"}}>
                        <img src={require("../../resources/SVGs/search.svg")} style={{width: "12px"}}/>
                        SEARCH
                    </span>
                    <br/>
                    <span style={{fontSize: "10px", color: "#8560A9"}}>
                        {channel} activities
                        {(timeRange.begin === -1) ? <span/> :
                            <span> from {getShortDate(timeRange.begin)} to {getShortDate(timeRange.end)} </span>}
                    </span>
                </button>
            </div>
        );
    }
}

export default connect()(SearchButton);