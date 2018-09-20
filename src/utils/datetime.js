export function getShortDate(day) {
    day = new Date(day);
    let d = day.getDate().toString();
    let m = (day.getMonth() + 1).toString();
    return d.concat("/").concat(m);
}

export function getShortDescription(text, limit = 150) {
    if (text.length > limit) return text.substring(0, 150);
    return text;
}

export function dateToString(dt) {
    let res = dt.toString();
    return res.substring(4, 21);
}

export function shortDateToString(dt) {
    let res = dt.toString();
    return res.substring(4, 16);
}

export function shortTimeToString(dt) {
    let res = dt.toString();
    return res.substring(17, 21);
}

export function concatDatetime(begin, end) {
    return dateToString(begin) + " - " + dateToString(end);
}


export function setDateBegin(d) {
    d.setHours(0, 0, 0, 0);
    return d;
}

export function setDateEnd(d) {
    d.setHours(23, 59, 59, 999);
    return d;
}

export function getToday() {
    let begin = new Date();
    let end = new Date();
    return {
        name: "TODAY",
        begin: setDateBegin(begin),
        end: setDateEnd(end),
        type: 0
    }
}

export function getTomorrow() {
    let begin = new Date();
    let end = new Date();
    begin.setDate(begin.getDate() + 1);
    end.setDate(end.getDate() + 1);
    return {
        name: "TOMORROW",
        begin: setDateBegin(begin),
        end: setDateEnd(end),
        type: 0
    }
}

export function getThisWeek() {
    let begin = new Date();
    let end = new Date();
    let first = begin.getDate() - begin.getDay() + 1;
    begin.setDate(first);
    end.setDate(first + 6);
    return {
        name: "THIS WEEK",
        begin: setDateBegin(begin),
        end: setDateEnd(end),
        type: 0
    };
}

export function getThisMonth() {
    let begin = new Date();
    let end = new Date();
    begin.setDate(1);
    end.setMonth(end.getMonth() + 1);
    end.setDate(0);
    return {
        name: "THIS MONTH",
        begin: setDateBegin(begin),
        end: setDateEnd(end),
        type: 0
    };
}