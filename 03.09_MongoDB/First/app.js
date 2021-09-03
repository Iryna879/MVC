// PzFeiLEU4triOUbF


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Iryna:PzFeiLEU4triOUbF@cluster0.l28g9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
