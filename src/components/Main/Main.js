import React, {Component} from "react";
import Dashboard from './Dashboard.js';
import Header from './Header.js';
import Search from "../Search/Search.js";
import SearchResult from "../Search/SearchResult.js";
import {connect} from 'react-redux';

import '../css/main.css';
import {searchInfo} from "../../actions/search";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenSidebar: false,
            searchField: {}
        };
        this.toggleScreen = this.toggleScreen.bind(this);
        this.search = this.search.bind(this);
    }

    toggleScreen() {
        this.setState({
            isOpenSidebar: !this.state.isOpenSidebar
        })
    }

    search(channel, timeRange) {
        this.props.searchInfo({channel, timeRange});
        this.setState({
            isOpenSidebar: false,
            searchField: {
                timeRange: timeRange,
                channel: channel
            }
        });
    }

    render() {
        let sizeofSidebar = (this.state.isOpenSidebar ? "240px" : "0px");
        return (
            <div>
                <div className="sidenav" style={{width: sizeofSidebar}}>
                    <Search search={this.search}/>
                </div>
                <div className="main" style={{marginLeft: sizeofSidebar}}>
                    <Header toggleScreen={this.toggleScreen}/>
                    {this.props.store.isInSearch
                        ? <SearchResult/>
                        : <Dashboard/>
                    }
                </div>
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
        searchInfo: searchInfo
    }
)(Main);