import React, {Component} from "react";
import {connect} from 'react-redux';
import Activity from '../Activity/Activity.js';
import ActivityDetail from '../Activity/ActivityDetail';
import User from  '../User/User';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {idActivity, idUser, activities: listActivities} = this.props;
        let activities = (listActivities ? Object.values(listActivities) : []);
        if (idActivity !== -1) return <ActivityDetail/>;
        if (idUser !== -1) return <User/>;
        if (!activities) return <div/>;
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


const mapStateToProps = (state) => ({
    activities: state.activities,
    idActivity: state.idActivity,
    idUser: state.idUser
});


export default connect(
    mapStateToProps
)(Dashboard);