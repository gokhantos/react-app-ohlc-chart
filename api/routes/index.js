var express = require('express');
var router = express.Router();
var myData = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  const MongoClient = require('mongodb').MongoClient;
  const uri = "MONGODB_URI";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  var myData = [];
  client.connect(err => {
    if(err) throw err;
    console.log('Database connected');
    const collection = client.db("crypto").collection("ethusdt");
    collection.find().forEach(data =>{
      myData.push(data);
    }).then(err =>{
      if(err) throw err;
      res.json(myData);
    });
  });

});

module.exports = router;
