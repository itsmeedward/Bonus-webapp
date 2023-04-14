const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const app = express(); // create an instance of express
const bonusmodal = require('./bonus'); // import bonus.js

app.use(express.json()); // use express to parse json

mongoose.connect('mongodb+srv://admin:admin123@cluster0.zaj3nqf.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }); // connect to mongoDB


app.get('/', async (req, res) => { // get all bonuses
    const bonuses = new bonusmodal({ // create new bonuses object
      bonusname: 'bonus1',
      bonusvalue: 100});
  
  
      try {
        await bonuses.save(); // save bonuses to database
          
      } catch (error) {
     
          console.log(error); // log error to console
      }})



    app.listen(3001, () => { // listen on port 3000
        console.log('listening on port 3000');
    } );