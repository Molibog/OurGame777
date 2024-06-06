const express = require('express');

const indexRoute = require('./routes/index.routes');
const app = express();

const PORT = 3000;

app.use('/', indexRoute);
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));

module.exports = app;
