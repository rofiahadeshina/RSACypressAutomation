const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "./cypress/cucumberReports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "119.0.6045.160 ",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "22H2",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "RSA Cypress project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});