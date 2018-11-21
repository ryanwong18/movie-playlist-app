//helper functions

function timeConversion(num) {
    const hours = Math.floor(num / 60);
    const minutesRemain = num % 60;
    return `${hours} hours and ${minutesRemain} minutes`
}

export { timeConversion };