#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

NORMALIZER="$(yarn bin)/json-schema-ref-parser-cli"
SCHEMA2DTS="$(yarn bin)/json-schema-to-typescript-cli"

# Leave .d.ts file in "./types/<contract-name>" directory, relative to the current dir
TYPES_DIR=./types
TYPE_FILE=$(basename "$SOURCE_DIR").d.ts
mkdir -p "$TYPES_DIR"
OUT_FILE="$TYPES_DIR/$TYPE_FILE"

{
  echo "/*"
  echo " * This file is an attempt to generate type definitions from a JSON schema."
  echo " * The result is often far from ideal but it should help you getting started."
  echo " * Feel free to adapt this to your needs."
  echo " *"
  echo " * Type generation powered by json-schema-to-typescript."
  echo " */"
  echo ""
} > "$OUT_FILE"

for SCHEMA in "$SOURCE_DIR"/schema/*.json; do
  NORMALIZED_SCHEMA=$(basename "$SCHEMA")
  echo "Processing $SCHEMA ..." >&2
  "$NORMALIZER" "$SCHEMA" > "$NORMALIZED_SCHEMA"
  (
    "$SCHEMA2DTS" "$NORMALIZED_SCHEMA" >> "$OUT_FILE"
    echo "" >> "$OUT_FILE"
    rm "$NORMALIZED_SCHEMA"
  )
done
