import axios from "axios";

const createURL = async (url, cb) => {
  const options = { url };
  try {
    const { data } = await axios.post("/api/urls", options);
    cb(null, data);
  } catch (e) {
    cb(e)
  }
};

const updateUrl = async (properties, cb) => {
  try {
    const { data } = await axios.patch("/api/urls", properties);
    cb(null, data);
  } catch (e) {
    cb(e);
  }
};

const isValidUrl = url => {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
  return url.search(regex) !== -1;
};

export { createURL, isValidUrl, updateUrl };
