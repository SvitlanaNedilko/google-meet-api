const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const api = require('./routes');
const app = express();

const mongoose = require('mongoose');
const dev_db_url =
  'mongodb+srv://admin:admin123@cluster0.p9i74.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

const dbOptions = {useUnifiedTopology: true, useNewUrlParser: true};

mongoose.set('useCreateIndex', true);
mongoose.connect(mongoDB, dbOptions);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', api);

require('./config/error-handler')(app);

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});
