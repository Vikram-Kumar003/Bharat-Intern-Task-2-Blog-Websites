// app.js

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const mainRouter = require('./server/routes/main');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', mainRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
