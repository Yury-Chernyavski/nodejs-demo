
import { printError } from "./log.service.js";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";

const getData = async (city) => {
  const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    printError('API key not specified. Set it via command -t [API_KEY]');
  } else {
    return await getWeather(city, token);
  };
};

const getWeather = async (city, token) => {
  const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      appid: token
    }
  });
  return data;
}

export { getData };