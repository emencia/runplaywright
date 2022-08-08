#!/usr/bin/env node
const { execute } = require("./exec");

(async () => {
  const baseTestDir = process.cwd() + "/tests/src";
  const data = await execute("ls", [baseTestDir + "/playbooks"]);
  const playbooks = new Set();
  data.forEach((item) => {
    if (item.length > 0) {
      playbooks.add(item)
    }
  });
  const sep = "***********************"
  for (const playbook of playbooks) {
    console.log(sep);
    console.log(" Playbook " + playbook);
    console.log(sep);
    const items = await execute("ls", [baseTestDir + "/playbooks/" + playbook]);
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