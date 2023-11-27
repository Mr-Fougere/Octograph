const Express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'));

var app = Express();

app.use(cors());

const subjectsRouter = require('./routes/subjects');
app.use('/subjects', subjectsRouter);


app.listen(3000, () => {
 
});