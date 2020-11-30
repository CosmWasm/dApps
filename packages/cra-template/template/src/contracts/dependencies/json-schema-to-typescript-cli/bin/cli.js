#!/usr/bin/env node

const { compileFromFile } = require("json-schema-to-typescript");

function printUsage() {
  console.info("Usage: json-schema-to-typescript-cli FILE")
}

async function main(args) {
  if (args.length !== 1) {
    printUsage();
    return 2;
  }

  let ts = await compileFromFile(args[0], {
    bannerComment: ""
  });
  process.stdout.write(ts);
  return 0
}

main(process.argv.slice(2)).then(
  code => process.exit(code),
  error => {
    console.error(error);
    process.exit(1);
  },
);

