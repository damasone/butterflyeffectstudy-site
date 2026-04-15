# Butterfly Effect — Institutional Variable Shortlist

Date: 2026-03-26

## Purpose

This shortlist is the field-level version of the institutional data requirements pack.

Use it after a first positive reply, when a partner asks what should actually be delivered first. The goal is not to request every possible variable. The goal is to request the smallest defensible package that can answer the current scientific bottlenecks in the Butterfly Effect stack.

## Sending rule

Send variables in this order:
- Tier 1 first: enough to run nightly routes and held-out validation
- Tier 2 next: enough to improve transport, subgroup analysis, and interpretation quality
- Tier 3 only if available: physiology-rich sidecars and PSG subset

## Table-by-table shortlist

### 1. participant

Tier 1 must-have:
- `participant_uid`
- `source_dataset`
- `source_subject_id`
- `sex_at_birth`
- `age_at_baseline_years`

Tier 2 strongly recommended:
- `cohort_type`
- `timezone_name`
- `device_family`
- `shift_work_flag`
- `baseline_sleep_disorder_flag`
- `baseline_psych_history_flag`

Why this matters:
- The current stack needs stable pseudonymized linkage, basic subgroup auditing, and enough demographic context to detect false transport or subgroup drift.

### 2. night_sleep

Tier 1 must-have:
- `night_uid`
- `participant_uid`
- `sleep_date_local`
- `total_sleep_time_min`
- `sleep_onset_ts` or `sleep_midpoint_local`
- `sleep_offset_ts`
- one continuity metric: `sleep_efficiency_pct` or `wake_after_sleep_onset_min` or `awakening_count`
- one cardiovascular metric: `heart_rate_mean_bpm` or `hrv_rmssd_ms`
- one movement metric: `movement_index` or `fragmentation_index`
- `device_modality`

Tier 2 strongly recommended:
- `time_in_bed_min`
- `sleep_latency_min`
- `rem_min`
- `n3_min` or `deep_min`
- `sleep_regularity_index_7d` if precomputed
- `spo2_mean_pct`
- `resp_rate_mean_bpm`
- `signal_quality_score_0_1`

Tier 3 if available:
- `night_physio_epoch.csv`
- `night_hr_epoch.csv`
- `night_ibi.csv`
- `raw_hr_epoch.csv`
- `raw_ibi_epoch.csv`
- `night_motion_epoch.csv`
- `night_resp_epoch.csv`
- `psg_manifest.csv`

Why this matters:
- This table is the core of the entire stack. If only one table can be made richer, make `night_sleep` richer.

### 3. day_emotion

Tier 1 must-have:
- `emotion_uid`
- `participant_uid`
- `report_date_local`
- at least one repeated burden field:
  - `stress_0_10`
  - or `anxiety_score`
  - or `depression_score`

Tier 2 strongly recommended:
- `gad7_total`
- `phq9_total`
- `mood_valence_0_10`
- `positive_affect_0_10`
- `negative_affect_0_10`
- `major_stressor_flag`

Why this matters:
- The current nightly portable bottleneck is mainly in stress transport. Repeated stress is therefore the highest-value next-day outcome.

### 4. day_symptoms

Tier 1 must-have:
- `symptom_uid`
- `participant_uid`
- `report_date_local`
- at least one repeated symptom burden field when relevant:
  - `fatigue_0_10`
  - `pain_0_10`
  - `muscle_tension_0_10`
  - `perceived_rest_quality_0_10`

Tier 2 strongly recommended:
- `migraine_flag`
- `somatic_burden_score`
- `sleepiness_0_10`

Why this matters:
- These variables support within-cohort routes and non-stress exploratory families, but they are secondary to repeated stress if the institutional dataset is limited.

### 5. day_confounders

Tier 1 must-have if available:
- `confounder_uid`
- `participant_uid`
- `report_date_local`
- `caffeine_mg`
- `alcohol_units`
- `exercise_minutes`
- `nap_minutes`

Tier 2 strongly recommended:
- `acute_illness_flag`
- `medication_change_flag`
- `menstrual_cycle_phase`
- `travel_flag`
- `major_schedule_disruption_flag`

Why this matters:
- A sparse confounder table is still valuable. It is one of the cheapest ways to reduce false interpretation of nightly variance.

## Accepted substitutes and normalization rules

- Local dates are acceptable if exact timestamps cannot be shared, but night-to-next-day linkage must still be explicit.
- `sleep_midpoint_local` can substitute for missing `sleep_onset_ts` in a first pilot, but only if `sleep_offset_ts` or `total_sleep_time_min` are also present.
- `heart_rate_mean_bpm` is acceptable when raw IBI is not shareable.
- `fragmentation_index` or actigraphy-derived restlessness is acceptable when raw accelerometry is not shareable.
- `gad7_total` and `phq9_total` are preferred over free-text questionnaire dumps.
- If repeated burden is captured in a single mixed wellbeing instrument, share the total score and the item-level mapping document.

## Practical delivery order

If the institution cannot send everything at once, ask for:
1. `participant.csv`
2. `night_sleep.csv`
3. one repeated outcome table with stress or symptom burden
4. `day_confounders.csv` if available
5. raw sidecars after the core join has been validated

## Templates

Header-only templates are included in `templates/` for:
- `participant.csv`
- `night_sleep.csv`
- `day_emotion.csv`
- `day_symptoms.csv`
- `day_confounders.csv`
- `night_physio_epoch.csv`
- `raw_hr_epoch.csv`
- `raw_ibi_epoch.csv`

Mapping templates are also included for:
- `raw_physio_mapping_combined.json`
- `raw_physio_mapping_split.json`

## Current recommendation

Use this shortlist together with:
- the institutional one-pager
- the full data requirements pack
- the outreach template that matches the target institution type
