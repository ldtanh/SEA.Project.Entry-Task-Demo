import React, {Component} from "react";
import {connect} from 'react-redux';
import {Row, Col} from "reactstrap";

import Activity from '../Activity/Activity.js';
import {getShortDate} from '../../utils/datetime';
import {searchOff} from "../../actions/search";

import "../css/search.css";
import NoActivityFound from "./NoActivityFound";

class SearchResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {searchResult, channel, timeRange} = this.props.store;
        return (
            <div>
                <div className="searchResultTitle">
                    <Row style={{width: "90%", margin: "auto"}}>
                        <Col xs="6" style={{textAlign: "left"}}>
                            <b className="numberOfResults">{searchResult.length} Results</b>
                        </Col>
                        <Col xs="6" style={{textAlign: "right"}}>
                            <span className="btnClearSearch"
                                  onClick={() => {
                                      this.props.searchOff();
                                  }}
                            >CLEAR SEARCH</span>
                        </Col>
                    </Row>
                    <div className="searchInfo">
                        <span>
                            Searched for {channel} activities
                            {(timeRange.begin === -1) ? <span/> :
                                <span> from {getShortDate(timeRange.begin)} to {getShortDate(timeRange.end)} </span>}
                        </span>
                    </div>
                </div>
                <br/>
                {
                    searchResult.length > 0
                        ? <div style={{margin: "auto"}}>
                            {searchResult.map((item, i) => {
                                return (
                                    <Activity
                                        key={i}
                                        item={item}
                                    />
                                )
                            })
                            }
                        </div>
                        : <NoActivityFound/>
                }
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
        searchOff: searchOff
    }
)(SearchResult);