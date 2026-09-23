#!/bin/bash
# Shared scanner used by pre-commit and pre-push hooks.
# Reads a NUL-separated list of file paths on stdin and checks each one
# for signatures seen in a real incident on this repo: an obfuscated
# Node.js dropper was appended, hidden behind ~500 trailing spaces, to
# postcss.config.js on 2026-09-07. Exits non-zero and prints details if
# anything matches, blocking the commit/push.

found=0

while IFS= read -r -d '' file; do
  [ -f "$file" ] || continue

  case "$file" in
    *.png|*.jpg|*.jpeg|*.gif|*.svg|*.ico|*.pdf|*.woff|*.woff2|*.ttf|package-lock.json|.githooks/*)
      continue
      ;;
  esac

  # javascript-obfuscator's signature variable naming (_0x1a2b3c...).
  # Essentially never appears in legitimate hand-written or bundled code.
  if grep -I -q -E '_0x[0-9a-fA-F]{4,}' -- "$file" 2>/dev/null; then
    echo "  [obfuscated-code] $file matches javascript-obfuscator variable pattern (_0x...)"
    found=1
  fi

  # A run of 40+ spaces followed by more content on the same line -- the
  # exact technique used to hide the payload off-screen in the incident.
  if grep -I -q -E ' {40,}[^ ]' -- "$file" 2>/dev/null; then
    echo "  [hidden-payload] $file has a line with 40+ trailing spaces before more code"
    found=1
  fi

  # Detached, hidden background process spawning -- how the payload
  # persisted after the parent process exited.
  if grep -I -q "windowsHide" -- "$file" 2>/dev/null && grep -I -q "detached" -- "$file" 2>/dev/null; then
    echo "  [persistence] $file spawns a detached, window-hidden child process"
    found=1
  fi
done

exit "$found"
