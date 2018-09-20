import React from "react";
import {connect} from 'react-redux';

import DateSearch from "./DateSearch.js";
import ChannelSearch from "./ChannelSearch.js";
import SearchButton from './SearchButton.js';

import {searchInfo} from "../../actions/search";

import "../css/main.css";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRange: {
                name: "ANYTIME",
                begin: -1,
                end: -1,
                type: 0
            },
            channel: "All"
        };

        this.setTimeRange = this.setTimeRange.bind(this);
        this.setChannelId = this.setChannelId.bind(this);
        this.search = this.search.bind(this);
    }

    setTimeRange(timeRange) {
        this.setState({
            timeRange: timeRange
        });
    }

    setChannelId(channel) {
        this.setState({
            channel: channel
        })
    }

    search() {
        let {channel, timeRange} = this.state;
        this.props.search(channel, timeRange);
    }

    render() {
        return (
            <div>
                <DateSearch setTimeRange={this.setTimeRange}/>
                <ChannelSearch setChannelId={this.setChannelId}/>
                <SearchButton timeRange={this.state.timeRange} channel={this.state.channel} search={this.search}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    store: state
});

const mapDispatchToProps = dispatch => {
    return {
        searchInfo: searchField => dispatch(searchInfo(searchField))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);