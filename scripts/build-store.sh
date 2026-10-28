#!/usr/bin/env bash
# Builds the package for the Chrome Web Store dashboard:
#   dist/no-shorts-store-v<version>.zip  (manifest.json at the root of the zip)
set -euo pipefail

cd "$(dirname "$0")/.."

VERSION=$(python3 -c "import json; print(json.load(open('manifest.json'))['version'])")
OUT="dist/no-shorts-store-v${VERSION}.zip"

mkdir -p dist
rm -f "${OUT}"
zip -r -q "${OUT}" manifest.json content.css content.js icons

echo "Built ${OUT}"
unzip -l "${OUT}"
