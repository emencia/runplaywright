function parseArgs(args) {
  const argsMap = {}
  args.forEach((arg) => {
    const l = arg.split("=");
    argsMap[l[0]] = l[1];
  })
  return argsMap
}

module.exports = { parseArgs }