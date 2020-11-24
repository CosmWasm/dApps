#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

SCRIPT_DIR="$(realpath "$(dirname "$0")")"

SOURCE_DIR="$1"
OUT_DIR="$2"

PRETTIER="yarn run prettier"

mkdir -p "$OUT_DIR"
(
  cd "$OUT_DIR"
  TYPES="schema.d.ts"

  if "$SCRIPT_DIR/get_dts.sh" "$SOURCE_DIR" > "$TYPES" ; then
    $PRETTIER --write "$(realpath "$TYPES")"
  else
    rm "$TYPES"
    echo ".d.ts generation failed. Shit happens. Let's continue ..."
  fi
)
