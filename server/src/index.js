require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3001, () => console.log('🔥 Server started at localhost:3001'));
