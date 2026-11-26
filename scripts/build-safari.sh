#!/usr/bin/env bash
# Builds a package for testing in Safari on macOS (see docs/safari-test.md):
#   dist/no-shorts-safari-v<version>.zip
#     no-shorts-safari/   (load this folder as a temporary extension)
set -euo pipefail

cd "$(dirname "$0")/.."

# Apple rejects uploads when the manifest description is longer than 112 characters
python3 - <<'PY'
import json, sys
length = len(json.load(open("manifest.json", encoding="utf-8"))["description"])
if length > 112:
    sys.exit(f"manifest.json description has {length} characters, Safari allows 112")
PY

VERSION=$(python3 -c "import json; print(json.load(open('manifest.json'))['version'])")
STAGE="dist/stage-safari"
OUT="dist/no-shorts-safari-v${VERSION}.zip"

rm -rf "${STAGE}" "${OUT}"
mkdir -p "${STAGE}/no-shorts-safari"

cp manifest.json content.css content.js LICENSE "${STAGE}/no-shorts-safari/"
cp -r icons "${STAGE}/no-shorts-safari/icons"

(cd "${STAGE}" && zip -r -q "../no-shorts-safari-v${VERSION}.zip" .)
rm -rf "${STAGE}"

echo "Built ${OUT}"
unzip -l "${OUT}"
