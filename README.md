# Everyday Wonder, Two Days to Find the Line

[![make.fun](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3.svg)](https://make.fun/competitions/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![rank](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/muhamadyusufseptian6-lab/makefun-u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/rank.svg)](https://make.fun/competitions/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![reward](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/muhamadyusufseptian6-lab/makefun-u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/reward.svg)](https://make.fun/competitions/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)

One sentence about a small moment of wonder in everyday life — a single sentence, 166 characters, inside the 200-character limit. An AI judge compares entries pairwise and rewards the one whose phrasing is itself the surprise.

## The entry

> The lift mirror showed me at seven, one tooth missing, clutching a plastic bag of rambutan, and for one floor I believed the building remembered me better than I did.

A lift mirror, a seven-year-old with a missing tooth and a bag of rambutan — and one floor where the building seems to remember you better than you remember yourself. The wonder isn't the mirror; it's who the building remembers.

## How it works

`main.ts` (Node 22, stdlib-only, deterministic) writes the sentence to `$MAKEFUN_OUTPUT_DIR/entry.txt`. Same input, same output, every run — no randomness, no network, no dependencies.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt   # the 166-character sentence above
```

Run the checks with `node --test check.test.mjs` — it verifies the entry is 1–200 characters, a single sentence, and identical across runs.

## Competition

[Everyday Wonder, Two Days to Find the Line](https://make.fun/competitions/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3) on make.fun — free to enter, $2 prize pool.

---

Built with [make.fun](https://make.fun) — join with referral code `515temp1`.
