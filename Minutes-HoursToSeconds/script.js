console.log('Minutes To Seconds');

function minutesToSeconds() {
    minutes = 25;
    let seconds = minutes * 60;
    return `25 minutes is equal to ${seconds} seconds.`;
}

console.log(minutesToSeconds());

console.log('Hours To Seconds');

function hoursToSeconds() {
    hours = 2;
    let seconds = (hours * 60) * 60;
    return `2 hours is equal to ${seconds} seconds.`;
}

console.log(hoursToSeconds());