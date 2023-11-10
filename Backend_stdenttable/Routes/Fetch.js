const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors"); // Add this line to include the cors middleware

const app = express();
const port = 5000;

const url =
  "mongodb+srv://suryaeidiko:surya123@cluster0.2iorhia.mongodb.net/MDB?retryWrites=true&w=majority";

// Use cors middleware
app.use(cors());

app.get("/getAll", async (req, res) => {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log("Connected to MongoDB");
    const db = client.db("MDB");
    const collection = db.collection("students");

    const documents = await collection.find({}).toArray();
    console.log('....');
    res.json(documents);
    console.log(documents);

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  } finally {
    // Close the MongoDB connection in the finally block to ensure it always happens
    if (client) {
      await client.close();
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
