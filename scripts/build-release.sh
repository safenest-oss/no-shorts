#!/usr/bin/env bash
# Builds a ready-to-install package for non-technical users:
#   dist/no-shorts-v<version>.zip
#     START-TUTAJ.html   (installation guide in Polish)
#     no-shorts/         (the extension itself)
set -euo pipefail

cd "$(dirname "$0")/.."

VERSION=$(python3 -c "import json; print(json.load(open('manifest.json'))['version'])")
STAGE="dist/stage"
OUT="dist/no-shorts-v${VERSION}.zip"

rm -rf dist
mkdir -p "${STAGE}/no-shorts"

cp manifest.json content.css content.js LICENSE "${STAGE}/no-shorts/"
cp installer/START-TUTAJ.html "${STAGE}/"

(cd "${STAGE}" && zip -r -q "../no-shorts-v${VERSION}.zip" .)
rm -rf "${STAGE}"

echo "Built ${OUT}"
