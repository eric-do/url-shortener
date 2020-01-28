const md5 = require('md5');

const generateKey = string => {
  const hash = md5(string);
  return hash.slice(0, 6);
}

module.exports = {
  generateKey
}