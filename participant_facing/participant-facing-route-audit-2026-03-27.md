# Participant-Facing Route Audit — 2026-03-27

## Scope

Audit of route-card eligibility for the participant-facing research-return layer.

Current approval rule:

- accepted route tier
- stress target only (`stress_d0` / `stress_d1`)
- supported intended use
- auto-promotion eligible
- blocking and review gates both pass
- non-negative open transport
- no robustness flags
- deployment recommendation starts with `deploy_within_cohort`

## Counts

- route cards scanned: `12`
- approved now: `2`
- audited but not policy-approved: `0`
- withheld: `10`

## Approved now

### lifesnaps_stress_d1_contextual

- label: `LifeSnaps D+1 contextual forecasting`
- focus: `next-day stress burden`
- policy status: `phase_1_primary`
- transport: `weak_open_transport`

### pmdata_stress_d0_contextual

- label: `PMData D0 contextual interpretation`
- focus: `same-day stress burden`
- policy status: `phase_1_secondary`
- transport: `weak_open_transport`


## Withheld

### anxiety_family_portable_experimental

- label: `Portable family anxiety experimental route`
- reasons: route tier is not accepted, target is outside the current stress/burden participant-return scope, intended use is outside the current participant-return frame, route is not auto-promotion eligible under current governance, blocking promotion gates do not all pass, deployment recommendation is not deploy_within_cohort

### ecsmp_fatigue_d0_contextual

- label: `ECSMP D0 exploratory interpretation`
- reasons: route tier is not accepted, target is outside the current stress/burden participant-return scope, route is not auto-promotion eligible under current governance, blocking promotion gates do not all pass, review gates do not all pass, open transport status is negative or unsupported, deployment recommendation is not deploy_within_cohort

### lifesnaps_stress_d0_contextual

- label: `LifeSnaps D0 contextual interpretation`
- reasons: route tier is not accepted, route is not auto-promotion eligible under current governance, blocking promotion gates do not all pass, review gates do not all pass, open transport status is negative or unsupported, route still carries robustness flags, deployment recommendation is not deploy_within_cohort

### novartis_fatigue_d0_contextual

- label: `Novartis D0 fatigue contextual interpretation`
- reasons: target is outside the current stress/burden participant-return scope, route is not auto-promotion eligible under current governance, review gates do not all pass, open transport status is negative or unsupported, deployment recommendation is not deploy_within_cohort

### novartis_pain_d0_contextual

- label: `Novartis D0 pain contextual interpretation`
- reasons: target is outside the current stress/burden participant-return scope, route is not auto-promotion eligible under current governance, review gates do not all pass, open transport status is negative or unsupported

### pmdata_fatigue_d0_contextual

- label: `PMData D0 contextual interpretation`
- reasons: route tier is not accepted, target is outside the current stress/burden participant-return scope, route is not auto-promotion eligible under current governance, blocking promotion gates do not all pass, review gates do not all pass, open transport status is negative or unsupported, deployment recommendation is not deploy_within_cohort

### pmdata_fatigue_d1_sleep_forward

- label: `PMData D+1 sleep-forward forecasting`
- reasons: route tier is not accepted, target is outside the current stress/burden participant-return scope, route is not auto-promotion eligible under current governance, blocking promotion gates do not all pass, review gates do not all pass, open transport status is negative or unsupported, deployment recommendation is not deploy_within_cohort

### pmdata_stress_d1_sleep_forward

- label: `PMData D+1 sleep-forward forecasting`
- reasons: route tier is not accepted, route is not auto-promotion eligible under current governance, blocking promotion gates do not all pass, deployment recommendation is not deploy_within_cohort

### stress_d0_family_portable_experimental

- label: `Portable family stress D0 experimental route`
- reasons: route tier is not accepted, target is outside the current stress/burden participant-return scope, intended use is outside the current participant-return frame, route is not auto-promotion eligible under current governance, blocking promotion gates do not all pass, deployment recommendation is not deploy_within_cohort

### stress_d1_family_portable_experimental

- label: `Portable family stress D+1 experimental route`
- reasons: route tier is not accepted, target is outside the current stress/burden participant-return scope, intended use is outside the current participant-return frame, route is not auto-promotion eligible under current governance, blocking promotion gates do not all pass, deployment recommendation is not deploy_within_cohort

