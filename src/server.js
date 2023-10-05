const express = require('express');
const {morgan} = require('./middleware/morgan.middleware');
const app = express();

app.use(morgan('[:date] :method :status - :response-time ms'));

app.get('/', (req, res, next) => {
    res.status(200).end();
});

app.listen(3000, () => {
    console.log('Express App Listening on Port 3000');
});