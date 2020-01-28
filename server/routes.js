const express = require('express');
const Controllers = require('./controllers.js')
const router = express.Router();

router.post('/api/urls', (req, res) => {
  Controllers.createUrl(req, res);
})

router.get('/api/urls/:key', (req, res) => {
  Controllers.handleUrlRedirect(req, res);
})

module.exports = router;
