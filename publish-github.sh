#!/bin/sh
# Run after creating the repo on https://github.com/new?name=portfolio-website
# Usage: GITHUB_USER=yourusername ./publish-github.sh
# Or: ./publish-github.sh yourusername

USER="${GITHUB_USER:-$1}"
REPO="portfolio-website"

if [ -z "$USER" ]; then
  echo "Usage: GITHUB_USER=yourusername ./publish-github.sh"
  echo "   Or: ./publish-github.sh yourusername"
  echo ""
  echo "First create the repo: https://github.com/new?name=portfolio-website"
  echo "Do NOT add README, .gitignore, or license. Then run this script."
  exit 1
fi

set -e
REMOTE="https://github.com/${USER}/${REPO}.git"
if git remote get-url origin 2>/dev/null; then
  git remote set-url origin "$REMOTE"
else
  git remote add origin "$REMOTE"
fi
git push -u origin main
echo "Done. Repo: https://github.com/${USER}/${REPO}"
