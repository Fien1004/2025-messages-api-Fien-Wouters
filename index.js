const express = require('express')
const logger = require('./middleware/logger');
const app = express();
const cors = require('cors');
const port = 3000;
const messagesRouter = require('./routes/v1/messages');
const mongoose = require('mongoose');
const config = require('config');

// Configuration: use config package with an environment variable fallback.
// Provide a MONGODB_URI in production; otherwise use the config/default.json value.
const mongoUri = process.env.MONGODB_URI || config.get('mongo.uri');

mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err.message));

app.use(cors());//cors niet kunnen niet
app.use(express.json());//word op alles gebruikt. gebruikt om tussen backend en frontend te praten in Json en gaat json zo activeren. op elke route moet json werken
app.use("/api/v1/messages/", messagesRouter);//word alleen op /api/v1/messages gebruikt, maakt niet echt uit wat er staat kan ook Seren staan ofzo


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})