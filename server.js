var Express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
var cors = require("cors");
const multer = require("multer");
require('dotenv').config()

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

var app = Express();

app.use(cors());

const subjectsRouter = require('./routes/subjects');
app.use('/subjects', subjectsRouter);


app.listen(3000, () => {
 
});