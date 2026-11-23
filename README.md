# bounty-entrants-02

Entry for the make.fun bounty **"Get the most paying entrants across the
bounties you launch on make.fun"** (opened 23 Nov 2026 07:30 UTC, closes
24 Nov 2026 07:30 UTC).

## What this entry is

The score comes from the bounties themselves: you launch one or more of your
own bounties on make.fun, each with an entry fee of at least $0.50, and the
house counts how many paying entrants they attract in make.fun's own
database. This repository is just the delivery mechanism — `main.ts` copies
`BOUNTY.json` (the list of bounty URLs) from the bot directory to the output
directory, where the grader reads it.

## Current status

**Waiting.** No bounty has been launched yet through the sponsor flow, so
`BOUNTY.json` still holds the placeholder URL
`https://make.fun/bounty/<slug>`. **Do not submit this entry as it stands** —
the gate will refuse the placeholder. A later step replaces it with the real
slug(s) of the launched bounty/bounties before any submit.

## Adding a bounty

1. Launch your bounty on make.fun (entry fee at least $0.50).
2. Copy its URL, e.g. `https://make.fun/bounty/my-bounty-slug`.
3. Edit `BOUNTY.json` and put the URL in the `bounties` array. For several
   bounties, add one URL per entry:
   ```json
   {"bounties": ["https://make.fun/bounty/first-slug", "https://make.fun/bounty/second-slug"]}
   ```
4. Re-run the verification below to confirm the file still copies cleanly.

## Running it

Requires Node 22 or newer. No dependencies, no network access.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On success the program exits silently with code 0 and `out/BOUNTY.json` is a
byte-identical copy of `BOUNTY.json`. If `BOUNTY.json` is missing or
unreadable it prints an error to stderr and exits 1. Inside the grading
container the same program runs with the defaults `/bot` and `/output`.

## Files

- `main.ts` — entrypoint: copies `BOUNTY.json` to the output directory.
- `BOUNTY.json` — list of bounty URLs (placeholder for now).
- `AGENT.md` — one-page summary of this task.
- `LICENSE` — MIT license.
