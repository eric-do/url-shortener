const express = require('express');
const Controllers = require('./controllers.js')
const router = express.Router();

router.post('/api/urls', (req, res) => {
  Controllers.hashUrlAndInsertKey(req, res);
})

router.get('/:key', (req, res) => {
  Controllers.handleUrlRedirect(req, res);
})

router.patch('/:key', (req, res) => {
  Controllers.updateUrl(req, res);
})

module.exports = router;
