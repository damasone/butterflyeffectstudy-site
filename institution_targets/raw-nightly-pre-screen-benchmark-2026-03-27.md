# Raw Nightly Pre-Screen Benchmark — 2026-03-27

Updated: 2026-03-28

## Purpose

This benchmark sits before any file transfer.

It is the correct gate after a positive institutional reply and before:

- data requirements exchange
- linkage review
- governance handoff
- or raw bundle transfer

The goal is simple:

- stop spending time on cohorts that are close in theme but structurally wrong for the `raw nightly stress` lane

## What counts as a true fit

A candidate should be treated as a real fit only if it plausibly satisfies all of these:

- true `participant-night` sleep rows
- repeated stress or comparable day-level burden
- aligned burden rate estimate `> 0.30`
- `raw_night_fraction > 0.50`
- mean raw coverage estimate is known
- raw signal at `epoch` or `beat-to-beat` level
- linkage by `sleep_date_local` or defensible timestamp overlap
- roughly `>= 40` participants
- median `>= 20` nights per participant

## Minimum floor

If a candidate does not clear the preferred bar, it can still be discussed only if it clears this minimum floor:

- true `participant-night` structure
- repeated burden exists
- aligned burden rate estimate `>= 0.15`
- `raw_night_fraction >= 0.30`
- at least `20` participants
- median `>= 10` nights
- usable raw signal, even if it is only a nightly-summary sidecar

## Hard rejects

Reject immediately for the current lane if any of these are true:

- no `participant-night` structure
- no repeated burden endpoint
- event/session-only physiology
- linkage cannot be reconstructed at night level
- participant count below `20`
- median nightly depth below `10`
- aligned burden rate below `0.15`

## First reply fields to request

After a positive reply, ask the counterpart for these exact fields:

1. candidate cohort name
2. whether true `participant-night` rows exist
3. burden endpoint name and frequency
4. estimated aligned burden rate
5. participant count
6. median nights per participant
7. raw signal granularity:
   - `beat_to_beat`
   - `epoch`
   - `nightly_summary`
   - `session_only`
   - `none`
8. estimated raw night fraction
9. estimated mean raw coverage
10. linkage mode:
   - `sleep_date_local`
   - `timestamp_overlap`
   - `session_only`
   - `unknown`
11. whether a PSG or richer physiology subset exists

## Template and script

- template: `reports/institution_targets/templates/raw_nightly_candidate_pre_screen_template.json`
- script: `training/pre_screen_raw_nightly_candidate.py`

Example:

```bash
cd /Users/damasomengodperez/neural-echo-planning
./.venv/bin/python training/pre_screen_raw_nightly_candidate.py \
  --input reports/institution_targets/templates/raw_nightly_candidate_pre_screen_template.json
```

## Decision ladder

- `direct_fit_for_raw_nightly_stress`
  - proceed to exact bundle contract and linkage review
- `fit_with_limits`
  - proceed only if the scientific tradeoff is acceptable
- `hold_needs_clarification`
  - ask the missing factual questions before discussing transfer
- `hold_below_benchmark`
  - keep in reserve
- `reject_for_current_scope`
  - stop spending time on this candidate for the nightly raw lane

## Current internal benchmark

The benchmark is no longer a single bundle.

It is now a dual frontier:

- `IFH Affect rawnight bundle`
  - best current anchor for aligned repeated burden density
- `HRV Sleep Diary 2025 rawnight bundle`
  - best current anchor for true raw nocturnal physiology support

That means the next external cohort should not beat only one side.

It should combine both:

- clear the operating floor:
  - aligned burden rate `>= 0.30`
  - participant count `>= 40`
  - median nights `>= 20`
  - raw night fraction `>= 0.50`
- beat `IFH` on raw support:
  - raw night fraction `> 0.435`
  - mean raw coverage `> 0.505`
- move toward `HRV Sleep Diary 2025` on raw quality:
  - raw night fraction near `0.791`
  - mean raw coverage near `0.831`
- preserve much stronger repeated burden density than `HRV Sleep Diary 2025`

Operational reading:

- `IFH-like` is still `fit_with_limits`
- `HRV-like` is still `reject_for_current_scope`
- `direct_fit_for_raw_nightly_stress` now means both:
  - dense repeated burden that clears the preferred floor
  - and raw nightly support that beats the current `IFH` raw anchor

Reference:

- `reports/raw-nightly-real-bundle-frontier-2026-03-28.md`
