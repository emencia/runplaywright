const fs = require('fs');
const { parseArgs } = require("./utils");
const { config } = require("./conf/playwright.config");
const { desktopConfig } = require("./conf/playwright.desktop.config");
const { devConfig } = require("./conf/playwright.dev.config");
const { mobileConfig } = require("./conf/playwright.mobile.config");

function buildConf(conf, baseUrl) {
  const header = `const { devices } = require('@playwright/test');/** @type {import('@playwright/test').PlaywrightTestConfig} */`;
  const data = conf.replace("http://localhost:8080/", baseUrl);
  const content = `${header}\nconst config = ${data}\n\nmodule.exports = { config };`;
  return content
}

function writeConfs(path, baseUrl) {
  let filepath = path + "/playwright.config.js";
  let content = buildConf(config, baseUrl)
  fs.writeFileSync(filepath, content);
  console.log("Writen file", filepath);
  // desktop
  filepath = path + "/playwright.desktop.config.js";
  content = buildConf(desktopConfig, baseUrl)
  fs.writeFileSync(filepath, content);
  console.log("Writen file", filepath);
  // dev
  filepath = path + "/playwright.dev.config.js";
  content = buildConf(devConfig, baseUrl)
  fs.writeFileSync(filepath, content);
  console.log("Writen file", filepath);
  // mobile
  filepath = path + "/playwright.mobile.config.js";
  content = buildConf(mobileConfig, baseUrl)
  fs.writeFileSync(filepath, content);
  console.log("Writen file", filepath);
}

(async () => {
  const baseDir = process.cwd();
  const args = parseArgs(process.argv.slice(2));
  let base = "http://localhost:5000";
  if ("base" in args) {
    base = args.base
  }
  console.log("BASE", base);
  console.log("DIR", baseDir);
  writeConfs(baseDir, base)
})();
