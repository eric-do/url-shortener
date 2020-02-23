const { Url } = require('./db-mongoose');
const Cassandra = require('./db-cassandra');

const createUrl =  (data, cb) => {
  const { url, key } = data;
  return Url.create({ url, key }); 
}

const getUrl = key => {
  return Url.findOne({key});
}

const updateUrl = async (properties, cb) => {
  try {
    const url = await Url.findOneAndUpdate({ key: properties.key }, properties, {
      new: true
    });
    console.log(url)
    cb(null, url)
  } catch (e) {
    cb(e)
  }
}

module.exports = {
  createUrl,
  getUrl,
  updateUrl
}