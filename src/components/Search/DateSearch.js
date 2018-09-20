import React from "react";
import {NoSelectRange, SelectRange} from "./DateTag.js";
import {getToday, getTomorrow, getThisWeek, getThisMonth} from "../../utils/datetime";
import "../css/search.css";

export default class DateSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            config: [],
            isSelected: 0
        };
        this.setupTimeRange();
        this.setTimeRange = this.setTimeRange.bind(this);
        this.setCustomTimeRange = this.setCustomTimeRange.bind(this);
    }

    setTimeRange(id) {
        this.props.setTimeRange(this.state.config[id]);
        this.setState({
            isSelected: id
        })
    }

    setCustomTimeRange(timeRange) {
        this.props.setTimeRange(timeRange);
        this.setState({
            isSelected: 5
        })
    }

    setupTimeRange() {
        let config = [];
        // Anytime
        config.push({
            name: "ANYTIME",
            begin: -1,
            end: -1,
            type: 0
        });
        // GetRangeForDefault
        config.push(getToday());
        config.push(getTomorrow());
        config.push(getThisWeek());
        config.push(getThisMonth());
        // Manually
        config.push({
            name: "LATER",
            begin: -1,
            end: -1,
            type: 1
        });
        this.state.config = config;
    }

    render() {
        const {config, isSelected} = this.state;
        return (
            <div>
                <h6 className="headerSearch">DATE </h6>
                <div className="dateSearch">
                    {
                        config.map((item, i) => {
                            return (item.type === 0)
                                ? <NoSelectRange key={i} id={i} name={item.name} isSelected={(i === isSelected)}
                                                 setTimeRange={this.setTimeRange}/>
                                : <SelectRange key={i} id={i} name={item.name} isSelected={(i === isSelected)}
                                               setCustomTimeRange={this.setCustomTimeRange}/>
                        })
                    }
                </div>
            </div>
        );
    }
}