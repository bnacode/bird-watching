import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import birdRouter from './routes/bird.routes';




const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



mongoose.connect('mongodb://127.0.0.1:27017/diplomski');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('db connected');
});


const router = express.Router();

router.use('/birds', birdRouter);



const path = require("path");
router.use('/uploads', express.static(path.join('./src/uploads')))



const axios = require('axios');
const cheerio = require('cheerio');

app.get('/proxy', async (req, res) => {
  try {
    const audioUrl = req.query.audioUrl;

    const response = await axios.get(audioUrl);
    
    const $ = cheerio.load(response.data);

    const mp3Link = $('meta[itemprop="contentURL"]').attr('content');

    if (mp3Link) {
      res.status(200).json({ mp3Link });
    } else {
      res.status(404).json({ error: 'MP3 link not found' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Error proxying audio');
  }
});




app.use('/', router);
router.use('/', (req, res) => {
  res.send('Hello, this is the root path!');
});


// Start the server and listen on port 4000
const port = 4000;
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

