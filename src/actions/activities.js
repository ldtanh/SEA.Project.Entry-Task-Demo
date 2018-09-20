export function loadActivities() {
    return {
        type: "ACTIVITIES.LOAD"
    }
}

export function showActivityDetail(id) {
    return {
        type: "ACTIVITIES.SHOW_DETAILS",
        idActivity: id
    }
}

export function activityComment(comment) {
    return {
        type: "ACTIVITIES.COMMENT",
        comment: comment
    }
}

export function likeAcitivity(id) {
    return {
        type: "ACTIVITIES.LIKE",
        idActivity: id
    }
}

export function goActivity(id) {
    return {
        type: "ACTIVITIES.GO",
        idActivity: id
    }
}


