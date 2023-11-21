#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printWeather, printHelp, printSuccess, printError } from "./services/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getData } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("The token was not passed!");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("The token saved");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) return printError("THe city was not passed!")
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("The city saved!");
  } catch (e) {
    printError(e.message);
  }
}

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
    const weather = await getData(city);
    printWeather(weather);

  } catch (e) {
    if (e.response.status === 404) {
      printError("Invalid city specified!")
    } else if (e.response.status === 401) {
      printError("Invalide token specified!")
    } else {
      printError(e.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForecast();
};

initCLI();