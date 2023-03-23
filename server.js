import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import Cards from './dbCards.js'

// App Config
const app = express();

// Middlewares
app.use(express.json()); 
app.use(Cors());

// DB config

// API Endpoints
app.get('/',(req, res) => res.status(200).send('HELLO WORLD!!!!'));

app.post('/tinder/cards', async (req, res) => {
  try {
    const dbCard = req.body;
    const newCard = await Cards.create(dbCard);
    res.status(201).send(newCard);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/tinder/cards', async (req, res) => {
  try {
    const cards = await Cards.find({});
    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://admin:hello@vigneshapi.23n6pow.mongodb.net/node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log(`Tinder App is running on port 3000`);
    });
}).catch(() => {
    console.log(error)
})
