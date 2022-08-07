#!/usr/bin/env node
const { run } = require("./exec");
const { parseArgs } = require("./utils");
const { testconf } = require("./testconf")

/** allowed args (all are optional): conf, browser, test, playbook */

const args = parseArgs(process.argv.slice(2));
const cmd = testconf("run", args)
console.log(`npx ${cmd.join(" ")}`)
run("npx", cmd)

