import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(`${chalk.bgRed("ERROR:")} ${error}`);
};

const printSuccess = (message) => {
  console.log(`${chalk.bgGreen("SUCCESS:")} ${message}`);
};

const printHelp = () => {
  console.log(
    dedent(`${chalk. bgCyan("HELP")}
    Without paraemetrs - displayed the weather 
    -s [CITY] for set the city
    -t [API_KEY] for save the token
    `
  ));
};

const printWeather = (res) => {
  console.log(
    dedent(`${chalk. bgYellow("Weather")} in ${res.name}
    ${res.weather[0].description} 
    Temp: ${res.main.temp} (feels like): ${res.main.feels_like}
    Humidity: ${res.main.humidity}%
    Wind speed: ${res.wind.speed};
    `
  ));
};

export { printWeather, printError, printSuccess, printHelp };