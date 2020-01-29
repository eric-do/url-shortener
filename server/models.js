const { Url } = require('./db-mongoose');

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