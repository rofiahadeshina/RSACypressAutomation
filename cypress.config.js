const { defineConfig } = require("cypress");
const {addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const {preprocessor,} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));

  on('task', {
    excelToJsonConverter(filePath){
      const result = excelToJson({
      source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });
      return result
    }

  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "848p4c",
  defaultCommandTimeout: 8000,
  env: {
    url:"https://rahulshettyacademy.com/"
  },
  e2e: {
    setupNodeEvents,
    retries: {
        runMode: 1 //runs failed test cases 1 more time
        },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
