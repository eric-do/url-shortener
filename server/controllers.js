const { generateKey } = require('./keygen/keygen.js');
const Model = require('./models.js');

const hashUrlAndInsertKey = async (req, res) => {
  const key = generateKey(req.body.url);
  const hash = await insertKey(req.body, key)
  res.send(hash)
}

const insertKey = async (data, key) => {
  try {
    await Model.createUrl({ ...data, key });
    return key;
  } catch (err) {  
    const newKey = generateKey(key);
    return await insertKey(data, newKey);
  }
}

const handleUrlRedirect = async ( req, res ) => {
  const { key } = req.params;

  try {
    const data = await Model.getUrl(key);
    res.status(301).redirect(`http://${data.url}`);
  } catch (err) {
    res.status(400).send('Could not find key');
  }
}

const updateUrl = (req, res) => {
  const properties = req.body;
  
  Model.updateUrl(properties, (err, url) => {
    if (err) {
      res.status(400).send('Could not edit URL');
    } else {
      res.send(url);
    }
  });
}

module.exports = {
  hashUrlAndInsertKey,
  handleUrlRedirect,
  updateUrl
}