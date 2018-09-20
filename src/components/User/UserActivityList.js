import React, {Component} from "react";
import Activity from '../Activity/Activity.js';
import NoActivityFound from "../Search/NoActivityFound";

export default class UserActivityList extends Component {
    constructor() {
        super();
    }

    render() {
        const {listActivities} = this.props;
        let activities = (listActivities ? Object.values(listActivities) : []);
        if (activities.length === 0) return <NoActivityFound/>;
        return (
            <div>
                {activities.map((item, i) => {
                    return (
                        <Activity
                            key={i}
                            item={item}
                        />
                    )
                })
                }
            </div>
        );
    }
}