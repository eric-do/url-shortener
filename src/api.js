const createURL = (url, cb) => {  
  console.log('Create URL code');
  cb();
}

const isValidUrl = url => {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
  return url.search(regex) !== -1;
}

export { createURL, isValidUrl };