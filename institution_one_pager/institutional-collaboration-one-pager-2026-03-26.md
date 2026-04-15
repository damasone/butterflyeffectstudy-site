# Butterfly Effect — Institutional Collaboration One-Pager

## Positioning

Butterfly Effect is a research-grade longitudinal sleep interpretation system.
It is designed to detect subtle sleep and physiological patterns that may precede changes in stress, symptoms, and health burden.

This is not being positioned as a diagnostic product.
It is a structured research platform with explicit governance, held-out validation, calibrated reporting, and clear claim boundaries.

## Current project state

### Strong today
- Nightly within-cohort routes with held-out validation, including two routes that now clear auto-promotion gates
- Event-level portable stress models across open cohorts
- Governance, route cards, calibration, PostgreSQL materialization, and evidence-linked reporting

### Improving
- Nightly stress transport across cohorts, now positive in the open stack but still below deployment signal floor
- Daily temporal layers for anxiety and depression
- Research-only portable subtracks such as `PHQ-9 only` depression

### Still weak
- Portable anxiety as a deployable nightly family
- Portable depression across mixed instruments
- Portable physical pain beyond somatic-burden proxies

## Why this is the right stage for institutional collaboration

The platform is already mature enough to justify serious research collaboration.
The remaining bottleneck is not infrastructure.
It is generalization across cohorts and alignment against richer longitudinal physiology.
Within matched cohorts, the platform is already producing routes strong enough to make promotion decisions under explicit governance.

That makes institutional data highly valuable now.

## Minimum useful dataset for the interpretation stack

### Required nightly core
- Sleep timing
- Sleep duration
- Sleep continuity / efficiency / awakenings
- Nocturnal HR or HRV
- Movement / actigraphy / fragmentation

### Required repeated outcomes
- Stress, fatigue, anxiety, depression, pain, or symptom burden
- Ideally daily or several times per week

### Required context variables
- Age
- Sex
- Medication
- Alcohol / caffeine
- Exercise
- Shift work
- Relevant diagnoses / acute events

## High-value extensions

### Tier 2
- PPG or IBI
- Minute-level heart rate
- Raw accelerometry
- Temperature
- Respiration
- SpO2

### Tier 3
- PSG subset with EEG, EOG, EMG
- Matched symptom outcomes for gold-standard validation

## What an institution would get back
- Data harmonization specification
- Benchmarking against the current open stack
- Route-level and family-level interpretation outputs
- Feasibility assessment for transport, calibration, and subgroup robustness
- A concrete pilot study path rather than an open-ended data grab

## Recommended first pilot
- One institution
- One longitudinal dataset
- One primary outcome family
- Retrospective harmonization first
- Prospective extension second, if justified
- Optional PSG subset for physiological anchoring

## Collaboration posture
- Research-only unless a route is explicitly accepted
- Pseudonymized ingestion and DUA-compatible handling
- No diagnostic inflation
- Clear separation between accepted, experimental, and support-only outputs

## Best current institutional fit
A group with longitudinal wearable sleep, nocturnal cardiovascular signals, and repeated symptom outcomes.

The highest-value contribution would be a dataset that helps test nightly transport across cohorts, not just another single-cohort benchmark.
