# Open Raw-Nightly Scout — 2026-03-28

## Purpose

The project's main bottleneck is now precise:

- one cohort that combines
  - true `participant-night` structure,
  - dense repeated burden,
  - and strong nightly raw physiology.

This note answers a narrower question:

- does an **open** dataset currently visible from public sources plausibly clear that bar, or at least come close enough to reduce dependence on institutional acquisition?

## Current reading

No open dataset identified in this scout currently closes the bottleneck.

The best practical reading is:

- **open direct-fit candidate:** none
- **restricted but structurally promising:** `TILES-2018`, `Predicting chronic stress among healthy females...`
- **restricted and off-lane:** `mcPHASES`
- **open but off-lane:** `MMASH`, `Wearable Device Dataset from Induced Stress and Structured Exercise Sessions`

## Candidates

### 1) TILES-2018

Status:
- `near-fit but access-restricted`

Why it matters:
- `n = 212` over `10` weeks
- wearable sensors plus repeated well-being / behavioral surveys
- explicit sleep and heart-rate coverage

Why it does not close the bottleneck today:
- it is not open-only in the current workflow
- it remains an access/DUA path, not a plug-in public cohort

Source:
- <https://tiles-data.isi.edu/dataset2018_details>
- <https://tiles-data.isi.edu/media/user_akanesano/tiles_dataset_dua_SANO.pdf>

### 2) Predicting chronic stress among healthy females using daily-life physiological and lifestyle features from wearable sensors

Status:
- `near-fit but restricted`

Why it matters:
- `129` participants
- `7` consecutive days
- minute-level rows with heart rate, sleep status, and lifestyle features
- chronic stress framing is structurally relevant

Why it does not close the bottleneck today:
- files are restricted
- follow-up depth is short
- current access still depends on request approval

Source:
- <https://zenodo.org/records/6874961>

### 3) mcPHASES

Status:
- `restricted and off the primary stress lane`

Why it matters:
- recent PhysioNet release with very rich wearable and diary structure
- daily diary plus many Fitbit-derived tables
- includes sleep, heart rate, temperature, respiratory rate, and stress scores
- participant timelines are explicit

Why it does not close the bottleneck today:
- restricted health-data access
- the primary burden family is menstrual health / symptoms, not the current repeated stress lane
- it may become useful for future raw-nightly non-stress or somatic work, but not as the clean stress closure

Source:
- <https://physionet.org/content/mcphases/1.0.0/>
- <https://physionet.org/content/mcphases/view-dua/1.0.0/>

### 4) MMASH

Status:
- `open but too small`

Why it matters:
- beat-to-beat and actigraphy are real
- stress inventory and multiple psychological measures exist

Why it does not close the bottleneck today:
- only `22` participants
- effectively `~1` night per participant in the usable nightly adaptation
- useful as support or component validation only

Source:
- <https://physionet.org/content/mmash/1.0.0/>

### 5) Wearable Device Dataset from Induced Stress and Structured Exercise Sessions

Status:
- `open but event/session-only`

Why it matters:
- open
- Empatica-derived physiology
- explicit stress induction protocol

Why it does not close the bottleneck today:
- induced acute stress sessions, not participant-night longitudinal sleep
- useful for event physiology or challenge work, not the nightly transport bottleneck

Source:
- <https://physionet.org/content/wearable-device-dataset/1.0.1/>

## Decision

The open-only path is not currently enough to close the main raw-nightly bottleneck.

The correct interpretation is:

1. the internal repo is exhausted for this lane
2. the open web scout does not surface a clean direct-fit cohort
3. the shortest path to closure is still:
   - restricted/credentialed access to a strong cohort
   - or institutional acquisition

## Correct next move

Do not spend another cycle trying to rescue:

- tiny support cohorts,
- acute session datasets,
- or symptom-rich but off-lane datasets

into the current `raw nightly stress` lane.

Keep the bar where it is:

- dense repeated burden
- strong raw nightly support
- participant-night linkage

and treat `TILES-2018` plus institution-grade acquisition as the primary closure paths.
