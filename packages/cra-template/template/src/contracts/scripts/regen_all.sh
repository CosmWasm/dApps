#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

SCRIPT_DIR="$(realpath "$(dirname "$0")")"

export DEST_DIR="$SCRIPT_DIR/../public/sources"

crates=(
  "cw-erc20/0.2.0"
  "cw-erc20/0.3.0"
  "cw-erc20/0.3.1"
  "cw-erc20/0.4.0"
  "cw-escrow/0.5.0"
  "cw-escrow/0.5.2"
  "cw-mask/0.1.0"
  "cw-mask/0.1.1"
  "cw-nameservice/0.2.0"
  "cw-nameservice/0.4.0"
)
for crate in "${crates[@]}"
do
  url="https://crates.io/api/v1/crates/$crate/download"
  ./scripts/schema_from_url.sh "$url"
done
