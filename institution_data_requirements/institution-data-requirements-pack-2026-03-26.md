# Butterfly Effect — Institutional Data Requirements Pack

Date: 2026-03-26

## Purpose

This pack defines the minimum and high-value data needed to run a serious institutional pilot on the current Butterfly Effect stack.

It is aligned with:
- `common-schema.yaml`
- the current nightly, daily, and event interpretation layers
- the current governance posture: research-first, non-diagnostic, explicit promotion gates

## Executive reading

The current stack does not need full PSG on every subject to be useful.

The minimum useful package is:
- longitudinal nightly sleep summaries
- nocturnal cardiovascular signal or HRV surrogate
- movement / fragmentation signal
- repeated symptom or burden outcomes
- basic participant and day-level context

The highest-value extension is not simply more modalities. It is:
- longer follow-up
- cleaner repeated outcomes
- raw or semi-raw cardiovascular and movement signals
- a small PSG-anchored subset for physiological validation

## Minimum required entities

### 1. participant

Required fields:
- `participant_uid`
- `source_dataset`
- `source_subject_id`

Strongly recommended:
- `sex_at_birth`
- `age_at_baseline_years`
- `cohort_type`
- participant timezone in source metadata

### 2. night_sleep

Required fields:
- `night_uid`
- `participant_uid`
- `sleep_date_local`

Minimum useful nightly signal:
- `total_sleep_time_min`
- at least one continuity metric: `sleep_efficiency_pct` or `wake_after_sleep_onset_min` or `awakening_count`
- at least one nocturnal cardiovascular metric: `heart_rate_mean_bpm` or `hrv_rmssd_ms`
- at least one movement signal: `movement_index` or actigraphy-derived fragmentation

High-value nightly signal:
- `sleep_onset_ts`
- `sleep_offset_ts`
- `time_in_bed_min`
- `rem_min`, `n1_min`, `n2_min`, `n3_min`, `rem_pct`, `deep_sleep_onset_min`
- `ahi_events_per_hour`, `apnea_index_per_hour`
- `spo2_mean_pct`, `spo2_min_pct`
- `resp_rate_mean_bpm`
- `signal_quality_score_0_1`
- `device_modality`

### 3. day_emotion

Required fields:
- `emotion_uid`
- `participant_uid`
- `report_date_local`

At least one repeated outcome should exist here:
- `stress_0_10`
- `anxiety_score`
- `depression_score`

High-value optional fields:
- `mood_valence_0_10`
- `positive_affect_0_10`
- `negative_affect_0_10`
- `major_stressor_flag`

### 4. day_symptoms

Required fields:
- `symptom_uid`
- `participant_uid`
- `report_date_local`

Use at least one repeated symptom burden field when relevant:
- `fatigue_0_10`
- `pain_0_10`
- `muscle_tension_0_10`
- `perceived_rest_quality_0_10`

Optional:
- `migraine_flag`

### 5. day_confounders

This table is strongly recommended even when sparse.

Required fields if present:
- `confounder_uid`
- `participant_uid`
- `report_date_local`

High-value fields:
- `caffeine_mg`
- `alcohol_units`
- `exercise_minutes`
- `nap_minutes`
- `acute_illness_flag`
- `medication_change_flag`
- `menstrual_cycle_phase`

## Supplementary raw or sidecar data

These are not required to start the pilot, but materially increase scientific value.

### Tier 2: highly valuable
- beat-to-beat intervals or IBI sidecar
- raw or minute-level PPG / HR time series
- raw accelerometry or epoch movement
- respiration or SpO2 time series
- temperature
- per-night signal quality traces

### Tier 3: gold-standard subset
- PSG subset with EEG, EOG, EMG
- respiration belts or airflow if available
- scorer-generated sleep staging or respiratory event labels
- clinician-anchored outcomes if available

## Preferred file contract for a first pilot

Core files:
- `participant.csv`
- `night_sleep.csv`
- `day_emotion.csv`
- `day_symptoms.csv`
- `day_confounders.csv`

Optional sidecars:
- `night_hr_epoch.csv`
- `night_physio_epoch.csv`
- `night_ibi.csv`
- `night_motion_epoch.csv`
- `night_resp_epoch.csv`
- `psg_manifest.csv`

Minimum operational requirements:
- stable pseudonymized participant IDs
- local dates or timestamps with timezone logic explained
- one row per participant-night in `night_sleep`
- repeated outcomes tied to local report date
- documentation of device, source system, and units

Recommended raw-nightly sidecar when available:
- `night_physio_epoch.csv` with either:
  - `participant_uid + sleep_date_local`, or
  - `participant_uid + epoch_start_utc + epoch_end_utc` so epochs can be aligned back to `sleep_onset_ts / sleep_offset_ts`
- if the institution exports split epoch tables instead:
  - `raw_hr_epoch.csv`
  - `raw_ibi_epoch.csv`
  - then normalize them with `training/normalize_raw_nightly_physio_epochs.py`
- mapping templates are already prepared in:
  - `reports/institution_data_requirements/templates/raw_physio_mapping_combined.json`
  - `reports/institution_data_requirements/templates/raw_physio_mapping_split.json`

## Pilot readiness thresholds

These are not absolute exclusion rules, but they are a practical bar for a useful first pilot.

Recommended minimum:
- `>= 40` participants
- median `>= 20` nights per participant
- repeated outcomes on at least `30%` of observed nights or at least `3` times per week
- stable date linkage between night and next-day outcome

Preferred:
- `>= 75` participants
- median `>= 45` nights per participant
- nightly or near-daily repeated outcomes
- at least one raw cardiovascular or movement sidecar
- a small PSG subset

## What the current stack can use immediately

Strong immediate use:
- nightly within-cohort route training and held-out validation
- route governance and subgroup robustness auditing
- event-level and daily challenge benchmarking if timestamps are available
- harmonized reporting through the canonical schema

What still needs richer data:
- cross-cohort nightly transport
- cleaner anxiety and depression portability
- physiological anchoring of interpretation claims

## Governance and handling expectations

For first institutional pilots, the stack expects:
- pseudonymized identifiers
- date-linked, not directly identifying, longitudinal records
- explicit data-use basis or DUA coverage
- schema/units documentation
- source lineage preserved at file and field level

The stack does not require:
- direct identifiers
- full EHR ingestion to begin
- full PSG on the whole cohort

## Deliverables for the institution

With a dataset that meets this pack, the project can return:
- a harmonization map into the canonical schema
- route and family feasibility assessment
- held-out benchmarking against the current open stack
- subgroup robustness and calibration analysis
- a recommendation for prospective continuation, enrichment, or protocol redesign
