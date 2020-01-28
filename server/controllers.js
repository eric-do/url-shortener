const { generateKey } = require('./keygen/keygen.js');
const Model = require('./models.js');

const createUrl = async (req, res) => {
  const key = generateKey(req.body.url);

  try {
    await Model.createUrl({ ...req.body, key });
    res.send(key);
  } catch (err) {  
    res.status(400).send('Could not add url');
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

module.exports = {
  createUrl,
  handleUrlRedirect
}