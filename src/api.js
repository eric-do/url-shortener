import axios from 'axios';

const createURL = async (url, cb) => {  
  console.log('Create URL code');
  const options = { url }
  console.log(options)
  const key = await axios.post('/urls', options);
  cb(key);
}

const isValidUrl = url => {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
  return url.search(regex) !== -1;
}

export { createURL, isValidUrl };