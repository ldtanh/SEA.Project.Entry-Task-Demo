import React from "react";
import ChannelTag from "./ChannelTag.js";
import "../css/search.css";

export default class ChannelSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: 0,
            channel: []
        };

        this.setupDefaultChannel();
        this.setChannelId = this.setChannelId.bind(this);
    }


    setupDefaultChannel() {
        let channel = [];
        channel.push("All");
        channel.push("Channel 3");
        channel.push("Channel 4");
        channel.push("Channel 1");
        channel.push("Channel 2");
        channel.push("Short");
        channel.push("Short");
        channel.push("Channel 3");
        channel.push("Channel 4");
        channel.push("Channel 5");
        channel.push("Channel Long Name");
        channel.push("Channel 6");
        this.state.channel = channel;
    }

    setChannelId(id) {
        this.props.setChannelId(this.state.channel[id]);
        this.setState({
            isSelected: id
        })
    }

    render() {
        const {channel, isSelected} = this.state;
        return (
            <div>
                <h6 className="headerSearch">
                    CHANNEL
                </h6>
                <div className="dateSearch">
                    {
                        channel.map((item, i) => {
                            return <ChannelTag key={i} id={i} name={item} isSelected={i === isSelected}
                                               setChannelId={this.setChannelId}/>;
                        })
                    }
                </div>
            </div>
        );
    }
}
