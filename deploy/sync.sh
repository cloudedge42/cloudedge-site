#!/usr/bin/env bash
set -euo pipefail

BUCKET="${1:?Bucket name required}"
DIST_ID="${2:?CloudFront distribution id required}"

aws s3 sync site/ "s3://${BUCKET}" --delete
aws cloudfront create-invalidation --distribution-id "${DIST_ID}" --paths "/*"
