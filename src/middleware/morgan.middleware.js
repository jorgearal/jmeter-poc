const morgan = require('morgan');

const numberFormatter = (num) => {
    if ((num + '').length == 2)
        return num;
    else
        return `0${num}`;
};

morgan.token('date', (req, res) => {
    const date = new Date();
    const hours = numberFormatter(date.getHours());
    const minutes = numberFormatter(date.getMinutes());
    const seconds = numberFormatter(date.getSeconds());
    return hours + ':' + minutes + ':' + seconds + '.' + date.getMilliseconds();
});

module.exports = { morgan };