const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require("fs-extra");
const path = require("path");

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  const enviroment = config.env.configFile;
  const configForEnviroment = getConfigurationByFile(enviroment);

  return configForEnviroment ? configForEnviroment : config;
};

function getConfigurationByFile(file) {
  const pathToConfigFile = `config/${file}.json`;
  return fs.readJson(path.join(__dirname, "../../", pathToConfigFile));
}
