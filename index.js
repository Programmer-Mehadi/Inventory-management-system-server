const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.listen(5000, () => {
    console.log('Server PORT: 4000')
})