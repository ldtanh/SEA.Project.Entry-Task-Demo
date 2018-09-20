export function searchInfo(searchField) {
    return {
        type: "SEARCH.ACTION",
        searchField
    }
}

export function searchOff() {
    return {
        type: "SEARCH.REMOVE_ACTION"
    }
}


export function goHome() {
    return {
        type: "SEARCH.GO_HOME"
    }
}