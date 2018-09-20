import React from "react";
import 'react-dates/initialize';
import moment from "moment";
import "../css/search.css";
import 'react-dates/lib/css/_datepicker.css';
import DateRangePickerWrapper from "./WrapperComponents/DateRangePickerWrapper";

export class NoSelectRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: this.props.isSelected,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSelected !== this.state.isSelected) {
            this.setState({isSelected: nextProps.isSelected});
        }
    }

    render() {
        const {isSelected} = this.state;
        const {id, name} = this.props;
        return (
            <div className="dateTag">
                <span
                    className="dateTagButton"
                    style={{
                        background: (isSelected ? "#E5F7A9" : ""),
                        color: (isSelected ? "black" : "white")
                    }}
                    onClick={() => {
                        this.props.setTimeRange(id);
                    }}
                >
                    {name}
                </span>
            </div>
        );
    }
}

export class SelectRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: this.props.isSelected,
            timeRange: {
                begin: new Date(),
                end: new Date()
            },
            startDate: moment(),
            endDate: moment()
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSelected !== this.state.isSelected) {
            this.setState({isSelected: nextProps.isSelected});
        }
    }

    render() {
        const {isSelected, timeRange} = this.state;
        const {name} = this.props;
        return (
            <div className="dateTag">
                <span
                    className="dateTagButton"
                    style={{
                        background: (isSelected ? "#E5F7A9" : ""),
                        color: (isSelected ? "black" : "white")
                    }}
                    onClick={() => {
                        this.props.setCustomTimeRange(timeRange);
                    }}
                >
                    {name}
                </span>
                {this.state.isSelected
                    ? <div className="dateRangePicker">
                        <DateRangePickerWrapper
                            onClose={({startDate, endDate}) => {
                                this.setState({startDate, endDate});
                                if (startDate && endDate) this.props.setCustomTimeRange({
                                    begin: startDate.toDate(),
                                    end: endDate.toDate()
                                });
                            }}
                            autoFocus
                            small={true}
                            orientation="vertical"
                            isOutsideRange={() => false}
                            daySize={25}
                            displayFormat="DD/MM/Y"
                        />
                    </div>
                    : <div/>
                }
            </div>
        );
    }
}