const express = require('express');
const Controllers = require('./controllers.js')
const router = express.Router();

router.post('/api/urls', (req, res) => {
  Controllers.hashUrlAndInsertKey(req, res);
})

router.get('/api/urls/:key', (req, res) => {
  Controllers.handleUrlRedirect(req, res);
})

router.patch('/api/urls', (req, res) => {
  Controllers.updateUrl(req, res);
})

module.exports = router;
