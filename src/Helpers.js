//helper functions

function timeConversion (num) {
    const hours = Math.floor(num / 60);
    const minutesRemain = num % 60;
    return `${hours} hr and ${minutesRemain} mins`
}

function convertMoney (num) {
    const numString = num.toString();
    const replaceNum = numString.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return replaceNum;
}

export { timeConversion, convertMoney };