#!/usr/bin/env node
const { execute } = require("./exec");

(async () => {
  const args = process.argv.slice(2);
  if (args.length == 0) {
    console.log("Please provide a path for the tests directory");
    return
  }
  const baseTestDir = process.cwd() + "/" + args[0];
  const data = await execute("ls", [baseTestDir]);
  const playbooks = new Set();
  data.forEach((item) => {
    if (item.length > 0) {
      if (!item.endsWith(".ts") && !item.endsWith(".js")) {
        playbooks.add(item)
      }
    }
  });
  const sep = "***********************"
  for (const playbook of playbooks) {
    console.log(sep);
    console.log(" Playbook " + playbook);
    console.log(sep);
    const items = await execute("ls", [baseTestDir + "/" + playbook]);
    for (const item of items) {
      if (item.endsWith(".spec.ts")) {
        const itemName = item.replace(".spec.ts", "");
        if (itemName != "index") {
          console.log("  -", itemName)
        }
      }
    }
    console.log("")
  }
})();