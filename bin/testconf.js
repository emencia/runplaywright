function testconf(mode, args) {
  const cmdArgs = [];
  switch (mode) {
    case "play":
      cmdArgs.push(`--config=tests/playwright.dev.config.js`)
      break
    case "run":
      if ("conf" in args) {
        cmdArgs.push(`--config=tests/playwright.${args.conf}.config.js`)
      } else {
        // no conf, run everything
        cmdArgs.push(`--config=tests/playwright.config.js`)
      }
  }
  if ("browser" in args) {
    cmdArgs.push(`--project=${args.browser}`)
  }
  const baseTestDir = process.cwd() + "/tests/src";
  if ("playbook" in args) {
    cmdArgs.push(`${baseTestDir}/${args.playbook}`)
  } else if ("test" in args) {
    cmdArgs.push(`${baseTestDir}/${args.test}.spec.ts`)
  } else {
    // run everything
    cmdArgs.push(`${baseTestDir}`)
  }
  const cmd = ["playwright", "test", ...cmdArgs]
  return cmd
}

module.exports = { testconf }