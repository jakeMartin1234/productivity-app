const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
const port = process.env.PORT || 8000;
const corsOpts = {
    origin: '*',
};

app.use(cors(corsOpts));
app.use(bodyParser.json());
const uri = process.env.MONGO_DB_URI;

app.post('/addTodo', async (req, res) => {

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    try {
        const database = client.db("productivity-app-database");
        const data = database.collection("data");

        const filter = { email: req.body.user.email };
        // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: true };
        // create a document that sets the plot of the movie
        const updateDoc = {
            $set: {
                toDoData: req.body.toDoData
            },
        };
        const result = await data.updateOne(filter, updateDoc, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
    } finally {
        await client.close();
    }
    res.send("Success");

});

app.post('/getTodo', async (req, res) => {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    let result = [];
    try {
        const database = client.db("productivity-app-database");
        const data = database.collection("data");
        const query = { email: req.body.user.email };
        const options = {};
        let response = await data.findOne(query, options);
        if (response) {
            if (response.toDoData) {
                result = response.toDoData;
            }
        }
        console.log(`Retrieved data for ${req.body.user.email}`);

    } finally {
        await client.close();
    }
    res.send(result);
});

app.get('/keys', (req, res) => {
    console.log("request here");
    res.send(process.env.REACT_APP_AUTH0_CLIENT_ID);
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
