import _ from "lodash";

const initState = {
    idActivity: -1,
    idUser: -1,
    activities: [],
    userInfo: []
};

export default function rootReducer (state = initState, action) {
    switch (action.type) {
        case "ACTIVITIES.LOAD": {
            const jsonData = require('../components/data/activities.json');
            let activities = jsonData.activities;
            for (let i = 0; i < activities.length; i++) {
                let time = activities[i].time;
                time.begin = new Date(time.begin);
                time.end = new Date(time.end);
                activities[i].time = time;
            }
            return {
                ...state,
                activities: activities
            }
        }
        case "ACTIVITIES.SHOW_DETAILS": {
            return {
                ...state,
                idActivity: action.idActivity,
                isInSearch: false,
                idUser: -1
            }
        }
        case "ACTIVITIES.COMMENT": {
            let {activities} = state;
            const comment = action.comment;
            activities[state.idActivity].listComment.unshift({
                "username": "anhldt",
                "commentedAgo": "1 minute",
                "comment": comment
            });
            return {
                ...state,
                activities
            };
        }
        case "ACTIVITIES.LIKE": {
            let {activities} = state;
            const {idActivity} = state;
            activities[idActivity].isLiked = !activities[idActivity].isLiked;
            if (activities[idActivity].isLiked) activities[idActivity].likes.push(activities[idActivity].username);
            else activities[idActivity].likes.pop();
            return {
                ...state,
                activities
            }
        }
        case "ACTIVITIES.GO": {
            let {activities} = state;
            const {idActivity} = state;
            activities[idActivity].isGoing = !activities[idActivity].isGoing;
            if (activities[idActivity].isGoing) activities[idActivity].going.push(activities[idActivity].username);
            else activities[idActivity].going.pop();
            return {
                ...state,
                activities
            }
        }

        case "SEARCH.ACTION": {
            const timeRange = action.searchField.timeRange;
            const channel = action.searchField.channel;
            let {activities: listActivities} = state;

            if (timeRange.begin !== -1) {
                let activities = [];
                let begin = new Date(timeRange.begin);
                let end = new Date(timeRange.end);
                for (let i = 0; i < listActivities.length; i++) {
                    if ((listActivities[i].time.begin.getTime() >= begin.getTime())
                        && (listActivities[i].time.begin.getTime() <= end.getTime())) {
                        activities.push(listActivities[i])
                    }
                }
                listActivities = _.cloneDeep(activities);
            }

            if (channel !== "All") {
                let activities = [];
                for (let i = 0; i < listActivities.length; i++) {
                    if (listActivities[i].channelName === channel) activities.push(listActivities[i])
                }
                listActivities = _.cloneDeep(activities);
            }
            return {
                ...state,
                searchResult: listActivities,
                isInSearch: true,
                timeRange: timeRange,
                channel: channel
            }
        }
        case "SEARCH.REMOVE_ACTION": {
            return {
                ...state,
                isInSearch: false
            }
        }
        case "SEARCH.GO_HOME": {
            return {
                ...state,
                idActivity: -1,
                idUser: -1
            }
        }

        case "USER.LOAD": {
            const jsonData = require('../components/data/user.json');
            let userInfo = jsonData.userInfo;
            return {
                ...state,
                userInfo: userInfo
            }
        }

        case "USER.SHOW": {
            return {
                ...state,
                idUser: 0,
                idActivity: -1,
                isInSearch: false
            }
        }
        default:
            return state;
    }
}
