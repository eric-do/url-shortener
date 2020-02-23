const { Url } = require("./db-mongoose");
const Cassandra = require("./db-cassandra");

const createUrl = async (data, cb) => {
  const defaultUrl = {
    key: '',
    alias: '',
    expiration_date: '2024-12-31',
    title: '',
    url: '',
    visits: '0',
  }

  const url = { ...defaultUrl, ...data };

  const values = [
    url.key,
    url.alias,
    url.expiration_date,
    url.title,
    url.url,
    url.visits
  ] 

  const query = `INSERT INTO bitly.urls (key, alias, creation_date, expiration_date, title, url, visits) 
                 VALUES (?, ?, toTimeStamp(now()), ?, ?, ?, ?);`;
 
  await Cassandra.execute(query, values, { prepare: true });

};

const getUrl = async key => {
  const query = "SELECT * FROM urls WHERE key = ?";
  const urls = await Cassandra.execute(query, [key], { prepare: true });
  return urls.rows[0];
};

const updateUrl = async (properties, cb) => {
  try {
    const url = await Url.findOneAndUpdate(
      { key: properties.key },
      properties,
      {
        new: true
      }
    );
    console.log(url);
    cb(null, url);
  } catch (e) {
    cb(e);
  }
};

module.exports = {
  createUrl,
  getUrl,
  updateUrl
};
