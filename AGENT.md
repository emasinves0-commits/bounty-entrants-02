# AGENT.md — bounty-entrants-02

## Task

Build a skeleton entry for the make.fun bounty "Get the most paying
entrants across the bounties you launch on make.fun" (23–24 Nov 2026).

## What the entry does

`main.ts` (Node 22+, standard library only, no network) copies `BOUNTY.json`
from the bot directory (`MAKEFUN_BOT_DIR`, default `/bot`) to the output
directory (`MAKEFUN_OUTPUT_DIR`, default `/output`). Success is silent,
exit 0; a missing or unreadable file prints an error to stderr and exits 1.
The copy is byte-identical, so repeated runs are deterministic.

## What scores

Not this code — the bounties listed in `BOUNTY.json`. Each bounty launched
on make.fun needs an entry fee of at least $0.50; the house counts paying
entrants in its own database.

## Current state

`BOUNTY.json` is still the placeholder
`{"bounties": ["https://make.fun/bounty/<slug>"]}`. No bounty has been
launched yet. **Submit is forbidden until the placeholder is replaced with
the real slug(s) of launched bounties.**

## Rules for this session

- Write everything in your own words; do not copy the kit starter verbatim.
- Revise `main.ts` at least once after testing it.
- Do not push to GitHub, do not read any credentials or keypair files, do
  not submit, bundle, or claim anything — those steps belong to the parent
  agent and Mhmd.

## Verify

```sh
node --version   # >= 22
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cmp out/BOUNTY.json BOUNTY.json   # must be identical
```

Report results in `BUILD-REPORT.md` with sha256 of every file written.
