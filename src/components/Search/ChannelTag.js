import React from "react";

export default class ChannelTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: this.props.isSelected
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
            <div style={{padding: "4px 10px 4px 0px"}}>
                <span
                    className="channelTagButton"
                    style={{
                        background: (isSelected ? "#E5F7A9" : ""),
                        color: (isSelected ? "black" : "white")
                    }}
                    onClick={() => {
                        this.props.setChannelId(id);
                    }}
                >
                    {name}
                </span>
            </div>
        );
    }
}
