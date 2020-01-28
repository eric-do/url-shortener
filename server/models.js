const { Url } = require('./db/mongo.js');

const createUrl =  (data, cb) => {
  const { url, key } = data;
  return Url.create({ url, key }); 
}

const getUrl = key => {
  return Url.findOne({key});
}

module.exports = {
  createUrl,
  getUrl
}