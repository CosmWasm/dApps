#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck > /dev/null && shellcheck "$0"

SCRIPT_DIR="$(realpath "$(dirname "$0")")"

function sha256() {
  FILE="$1"

  if command -v sha256sum > /dev/null ; then
    sha256sum "$FILE" | head -c 64
    echo # linebreak
    return
  fi

  if command -v shasum > /dev/null ; then
    shasum -a 256 "$FILE" | head -c 64
    echo # linebreak
    return
  fi

  echo "No SHA-256 implementation found"
  return 6
}

SOURCE_URL="$1"
DEST_DIR="${DEST_DIR:-.}"

TMP_DIR=$(mktemp -d "${TMPDIR:-/tmp}/schema_from_url.XXXXXXXXX")
SOURCE_DIR="$TMP_DIR/source"
mkdir "$SOURCE_DIR"

DOWNLOAD_FILE="$TMP_DIR/download.tar"

(
  # echo "Navigating into working directory $TMP_DIR ..."
  cd "$SOURCE_DIR"

  echo "Downloading $SOURCE_URL ..."
  wget --quiet -O "$DOWNLOAD_FILE" "$SOURCE_URL"
  tar -x --strip-components 1 -f "$DOWNLOAD_FILE"
)

SOURCE_CHECKSUM=$(sha256 "$DOWNLOAD_FILE")
echo "Source code checksum $SOURCE_CHECKSUM"

SCHEMA_DIR="$DEST_DIR/$SOURCE_CHECKSUM/schema"

"$SCRIPT_DIR/schema_from_dir.sh" "$SOURCE_DIR" "$SCHEMA_DIR"
