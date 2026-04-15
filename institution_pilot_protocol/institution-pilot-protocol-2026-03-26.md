# Butterfly Effect — Institution Pilot Protocol

Date: 2026-03-26

## Purpose

This protocol defines the default structure for a first institutional Butterfly Effect pilot.

It is designed to convert a generic collaboration conversation into a narrow, testable, and operational pilot with:
- one cohort
- one endpoint family
- one data handoff path
- one feasibility decision

## Recommended first pilot frame

Default recommendation:
- one institution
- one cohort
- one primary endpoint family
- retrospective harmonization first
- optional prospective continuation only if the retrospective feasibility review is positive

The default first endpoint family should be:
- `stress`

Reason:
- the current stack is strongest in stress within cohort
- nightly transport for stress is the main remaining scientific bottleneck
- stress also gives the clearest bridge between nightly interpretation and repeated daily burden

## Primary scientific questions

### Primary
- Can this institutional cohort be harmonized into the Butterfly Effect canonical schema without breaking participant-night linkage?
- Does the cohort support valid nightly within-cohort interpretation for the selected endpoint family?
- Does the cohort improve the current transport question or only confirm within-cohort signal?

### Secondary
- Does the cohort materially improve subgroup robustness analysis?
- Does it support event or daily extensions?
- Does it contain a physiology-rich subset that can strengthen interpretation claims?

## Default cohort fit criteria

Recommended minimum:
- `>= 40` participants
- median `>= 20` nights per participant
- repeated outcome available on `>= 30%` of nights or `>= 3` times per week
- participant-night linkage is explicit and stable

Preferred:
- `>= 75` participants
- median `>= 45` nights
- repeated burden available nightly or near-daily
- HR / HRV or IBI-derived physiology available
- at least one raw or semi-raw sidecar

## Pilot phases

### Phase 0 — Pre-screen

Goal:
- determine if the cohort is even worth formal intake

Outputs:
- fit / no-fit memo
- first field map
- risk notes

Checks:
- participant-night rows exist
- repeated endpoint exists
- date linkage is defensible
- device and unit lineage are explainable

### Phase 1 — Intake and harmonization

Goal:
- map the cohort into the canonical schema without inventing joins or losing time logic

Outputs:
- schema mapping
- field audit
- join audit
- canonicalized draft tables

Checks:
- stable pseudonymized IDs
- one row per participant-night in `night_sleep`
- local date or timestamp logic documented
- unit normalization resolved

### Phase 2 — Feasibility benchmark

Goal:
- determine whether the cohort adds signal, transport value, or both

Outputs:
- within-cohort benchmark
- subgroup robustness review
- calibration summary where applicable
- route or family feasibility memo

Checks:
- held-out signal above trivial baseline
- subgroup failures clearly identified
- interpretation layer and claim boundary kept explicit

### Phase 3 — Decision gate

Goal:
- decide whether to stop, continue, or redesign

Outputs:
- stop / continue / redesign decision
- recommendation for route-level work, family-level work, or protocol revision

## Suggested timeline

For a first retrospective pilot:
- Week 1: pre-screen and field audit
- Week 2: schema mapping and canonicalization
- Week 3: benchmark and subgroup audit
- Week 4: feasibility readout and decision gate

If the dataset is cleaner than expected, this can compress.
If date logic, units, or joins are unstable, this should not be rushed.

## Deliverables back to the institution

Minimum return package:
- schema harmonization map
- benchmark summary
- subgroup robustness summary
- feasibility classification
- recommendation for continuation or redesign

If the cohort is strong enough:
- nightly route feasibility assessment
- portable family feasibility note
- candidate prospective continuation plan

## Success criteria

A first pilot is a success if it achieves all of the following:
- clean harmonization into the canonical schema
- a defensible benchmark for at least one endpoint family
- explicit subgroup and quality review
- a clear decision on whether the cohort strengthens the current research program

A first pilot does not need to prove universal generalization.
It does need to reduce uncertainty in a meaningful way.

## Stop criteria

Stop or downgrade the pilot if any of the following holds:
- no stable participant-night linkage
- repeated endpoint too sparse to be meaningful
- units or device lineage cannot be reconstructed
- quality is too poor to interpret subgroup or held-out results honestly
- the cohort only supports a weak aggregate analysis with no nightly structure

## Recommended continuation paths

If the first pilot succeeds, continue down one of these paths:
1. nightly stress route development
2. nightly transport contribution to the portable stress family
3. event or daily support layer if timestamps are richer than expected
4. prospective extension with cleaner burden collection or richer physiology

## Current recommendation

Use this protocol to keep institutional work narrow, falsifiable, and operational.
The first goal is not to prove everything. It is to learn whether one real institutional cohort can strengthen the current stack in a defendable way.
