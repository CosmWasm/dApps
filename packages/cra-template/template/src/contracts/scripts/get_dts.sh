#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

NORMALIZER="$(yarn bin)/json-schema-ref-parser-cli"
SCHEMA2DTS="$(yarn bin)/json-schema-to-typescript-cli"

SOURCE_DIR="$1"
# Leave .d.ts file in "types/<contract-name>" directory, sibling of $SOURCE_DIR
TYPES_DIR=$(echo "$SOURCE_DIR" | cut -f 1 -d '/')/types
TYPE_FILE=$(basename "$SOURCE_DIR").d.ts

{
  echo "/*"
  echo " * This file is an attempt to generate type definitions from a JSON schema."
  echo " * The result is often far from ideal but it should help you getting started."
  echo " * Feel free to adapt this to your needs."
  echo " *"
  echo " * Type generation powered by json-schema-to-typescript."
  echo " */"
  echo ""
}

for SCHEMA in "$SOURCE_DIR"/schema/*.json; do
  NORMALIZED_SCHEMA=$(basename "$SCHEMA")
  echo "Processing $SCHEMA ..." >&2
  "$NORMALIZER" "$SCHEMA" > "$NORMALIZED_SCHEMA"
  (
    "$SCHEMA2DTS" "$NORMALIZED_SCHEMA" >> "$TYPES_DIR"/"$TYPE_FILE"
    echo "" >> "$TYPES_DIR"/"$TYPE_FILE"
    rm "$NORMALIZED_SCHEMA"
  )
done
