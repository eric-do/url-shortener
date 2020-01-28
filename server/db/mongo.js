const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bitly', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose connected!'));


const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Url is required"]
  },
  alias: {
    type: String,
    unique: true,
  },
  key: {
    type: String,
    required: [true, "Key is required"],
    unique: true
  },
  username: {
    required: false
  },
  visits: {
    required: false,
    default: 0
  }
});

var Url = mongoose.model('Url', urlSchema);

module.exports = { 
  Url
};