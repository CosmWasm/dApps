#!/usr/bin/env node

const $RefParser = require("@apidevtools/json-schema-ref-parser");

function printUsage() {
  console.info("Usage: json-schema-ref-parser-cli FILE")
}

async function main(args) {
  if (args.length !== 1) {
    printUsage();
    return 2;
  }
  let normalized = await $RefParser.dereference(args[0]);
  process.stdout.write(JSON.stringify(normalized, null, 2) + "\n");
  return 0
}

main(process.argv.slice(2)).then(
  code => process.exit(code),
  error => {
    console.error(error);
    process.exit(1);
  },
);

