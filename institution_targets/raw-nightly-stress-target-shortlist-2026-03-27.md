# Butterfly Effect — Raw Nightly Stress Target Shortlist

Date: 2026-03-27
Updated: 2026-03-28

## Purpose

This shortlist is narrower than the general institutional target list.

It is the execution list for the current project bottleneck:
- a cohort or pilot that can directly feed the `raw nightly stress` intake validator and first useful experiment
- participant-night longitudinal sleep
- repeated stress outcome
- cardiovascular raw or epoch physiology with defensible linkage

## Current acceptance gate

A target is a true fit for the current raw-nightly lane only if it can plausibly satisfy this bundle:

- `participant.csv`
- `night_sleep.csv`
- `day_emotion.csv`
- `night_physio_epoch.csv` or equivalent raw/epoch sidecar

Preferred pilot bar:
- `>= 40` participants
- median `>= 20` nights per participant
- aligned repeated burden rate `>= 0.30`
- raw physiology on `>= 50%` of nights
- mean raw coverage estimate is known
- `epoch` or `beat_to_beat` signal is preferred over nightly summary sidecars
- stable linkage by `sleep_date_local` or by `epoch_start_utc / epoch_end_utc` against sleep windows

Direct-fit bar:
- beats the current `IFH` raw-support anchor:
  - raw night fraction `> 0.435`
  - mean raw coverage `> 0.505`
- moves toward the `HRV Sleep Diary 2025` raw-support anchor:
  - raw night fraction near `0.791`
  - mean raw coverage near `0.831`
- preserves materially denser repeated burden than `HRV Sleep Diary 2025`

Operational gate:
- `training/validate_raw_nightly_stress_bundle.py`
- then, only if it passes, `training/run_raw_nightly_stress_experiment.py`

Pre-transfer gate:
- `training/pre_screen_raw_nightly_candidate.py`
- benchmark note: `reports/institution_targets/raw-nightly-pre-screen-benchmark-2026-03-27.md`
- template: `reports/institution_targets/templates/raw_nightly_candidate_pre_screen_template.json`

Current internal benchmark to beat:
- dual frontier, not a single bundle:
  - `IFH Affect rawnight bundle`
    - best current anchor for aligned repeated burden density
  - `HRV Sleep Diary 2025 rawnight bundle`
    - best current anchor for true raw nocturnal physiology support
- the next cohort must combine both sides, not beat only one of them

## Priority order

### P1 — direct-fit retrospective or embedded cohort access

#### 1. Brigham and Women's Hospital — Division of Sleep and Circadian Disorders
- Lane: `A`
- Why now: explicit sleep testing and research function inside a major sleep and circadian program.
- Best fit: physiology-rich participant-night sleep cohort with repeated burden, or hospital cohort with a physiology subset.
- Exact ask: one cohort with participant-night rows, repeated stress or closely related burden, raw or epoch cardiovascular sidecars, and enough cohort metadata to estimate raw night fraction plus mean raw coverage before transfer.
- Official source: <https://www.brighamandwomens.org/neurology/sleep-and-circadian-rhythm-disorders>

#### 2. Stanford Medicine — Center for Sleep and Circadian Sciences
- Lane: `A`
- Why now: sleep and circadian science program spanning technology, clinical research, and translational work.
- Best fit: wearable-linked nightly cohort with participant-night linkage and repeated next-day burden.
- Exact ask: longitudinal nightly sleep plus HR/HRV or wearable physiology with stress-style endpoints and a credible estimate of raw-night support before any bundle request.
- Official source: <https://med.stanford.edu/cscs.html>

#### 3. Northwestern Medicine / Feinberg — Center for Circadian & Sleep Medicine
- Lane: `A`
- Why now: explicit multidisciplinary research program with active studies and participation routes.
- Best fit: clinical or observational sleep cohort with repeated outcomes and linked physiology.
- Exact ask: one cohort that can clear the current dual-frontier pre-screen, not a general collaboration.
- Official sources:
  - <https://cscb.northwestern.edu/>
  - <https://www.feinberg.northwestern.edu/sites/sleep/index.html>

#### 4. Hospital Clínic Barcelona — Unit of Sleep Research
- Lane: `A`
- Why now: multidisciplinary sleep research across psychiatry, psychology, pulmonology, neurology, biomarkers, and new diagnostic tools.
- Best fit: European hospital cohort with sleep disorder phenotyping, repeated burden, and at least a small physiology-rich subset.
- Exact ask: participant-night export plus repeated stress, mood, or symptom burden, a credible raw-support estimate, and an optional PSG or biomarker subset.
- Official source: <https://www.clinicbarcelona.org/en/unit/sleep/research>

#### 5. Scripps Research — Digital Trials Center
- Lane: `B`
- Why now: site-less research model already oriented around digital technology, remote outcomes, and direct operational contact.
- Best fit: wearable-native cohort with repeated stress or wellbeing and sufficient night-level linkage.
- Exact ask: one export from a remote cohort with nightly sleep, HR/activity, repeated burden, timestamps that can survive harmonization, and enough facts to estimate raw night fraction plus mean raw coverage.
- Contact route: `dtc@scripps.edu`
- Official sources:
  - <https://digitaltrials.scripps.edu/>
  - <https://www.scripps.edu/science-and-medicine/translational-institute/translational-research/digital-medicine/index.html>

#### 6. Duke University Population Research Institute — RAISE / mobile stress study line
- Lane: `B`
- Why now: explicit combination of daily stressors, EMA, and commercial wearable physiology.
- Best fit: bridge cohort between repeated stress and wearable physiology, especially if nights can be reconstructed defensibly.
- Exact ask: repeated stress-linked wearable cohort preserving participant-day or participant-night linkage, with heart rate, sleep quality, movement, timestamps, and enough detail to complete the dual-frontier pre-screen.
- Contact route: `contactdupri@duke.edu`
- Official source: <https://dupri.duke.edu/research/assessing-stress-well-being-connectedness-across-three-generations-using-mobile>

### P2 — prospective, instrumentation-controlled path if retrospective access stalls

#### 7. Oura for Research
- Lane: `C`
- Why now: explicit research collaboration path with strong sleep and HRV coverage.
- Best fit: prospective pilot with nightly summaries and repeated stress collection through an academic partner.
- Exact ask: one prospective pilot with nightly sleep timing, HR/HRV, repeated burden, and planned reporting dense enough to clear the preferred outcome floor.
- Official source: <https://organizations.ouraring.com/solutions/research>

#### 8. Empatica — Research / platform route
- Lane: `C`
- Why now: strong fit when raw physiology matters and a controlled prospective study is acceptable.
- Best fit: physiology-heavy remote pilot where raw or epoch cardiovascular exports are central.
- Exact ask: prospective bundle with raw or epoch HR/IBI, repeated stress, stable sleep-window linkage, and a design that should clear both raw-support benchmarks.
- Official source: <https://www.empatica.com/platform/home>

#### 9. Withings Health Solutions
- Lane: `C`
- Why now: direct research request path and a home sleep hardware route for clinical partners.
- Best fit: hospital-partnered prospective pilot with nightly sleep summaries and repeated burden reporting.
- Exact ask: one pilot with nightly sleep summaries, timestamps, repeated stress or symptom burden, and a route to richer cardiovascular exports if retrospective access stalls.
- Official source: <https://www.withings.com/us/en/health-solutions/research-request>

## How to use this list

Use it in this order:
1. Lane `A` first for true participant-night cohorts that could directly improve `night transport`.
2. Lane `B` next for digital cohorts where repeated stress is already central.
3. Lane `C` only if retrospective access stalls and the project needs a controlled prospective pilot.

## Exact first ask

Do not open with broad partnership language.

Open with one narrow question:
- do you hold a longitudinal cohort with participant-night sleep rows, repeated stress, and either raw or epoch cardiovascular signal that can be linked to the same nights strongly enough to estimate raw night fraction and mean raw coverage before transfer?

Attach:
- institutional one-pager first
- after interest, ask for the pre-screen fields before sending the full pack:
  - participant count
  - median nights
  - best aligned burden rate
  - raw signal granularity
  - raw night fraction estimate
  - mean raw coverage estimate
  - linkage mode

## Current recommendation

The correct next move is not a wider outreach wave.
It is a short `P1` pass aimed at one of these two outcomes:
- one direct-fit retrospective cohort
- or one prospective pilot with raw cardiovascular signal and repeated stress
