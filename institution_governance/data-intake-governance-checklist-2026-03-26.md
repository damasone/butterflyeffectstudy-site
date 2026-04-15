# Butterfly Effect — Data Intake + Governance Checklist

Date: 2026-03-26

## Purpose

This checklist defines what must be checked before, during, and after institutional data intake.

It is not a legal policy document by itself. It is the operational checklist that keeps the first institutional pilot technically defensible and governance-safe.

## Core principle

The project does not need direct identifiers or a broad health-system integration to begin.

It does need:
- stable pseudonymized linkage
- explicit date logic
- unit and device lineage
- a clear data-use basis
- a narrow scope for the first pilot

## Stage 0 — Before transfer

Checklist:
- named counterpart and data owner identified
- intended research scope documented
- cohort description supplied
- expected tables and sidecars listed
- transfer path defined
- legal basis, DUA, or institutional approval path identified

Blockers:
- no identifiable data owner
- no explanation of what can actually be shared
- no date linkage policy
- no realistic transfer route

## Stage 1 — File receipt

Checklist:
- files received match declared file list
- checksums or delivery integrity check completed
- filenames and file counts recorded
- source system and export date logged
- raw delivery preserved read-only

Blockers:
- partial delivery without manifest
- files overwritten without versioning
- source lineage missing

## Stage 2 — Identity and linkage audit

Checklist:
- `participant_uid` stable across tables
- participant-night linkage is explicit
- no fabricated joins required
- local date logic documented
- report date logic is compatible with next-day mapping

Blockers:
- multiple incompatible subject identifiers
- no participant-night key
- impossible next-day linkage
- row-order or positional joins would be required

## Stage 3 — Schema and unit audit

Checklist:
- field names mapped to canonical schema
- units documented and normalized
- device modality documented
- questionnaire or score definitions documented
- missingness conventions documented

Blockers:
- unclear units
- unclear score semantics
- multiple incompatible scales with no mapping document
- timestamps without timezone logic

## Stage 4 — Quality and feasibility audit

Checklist:
- participant count and median nights quantified
- repeated endpoint density quantified
- major missingness patterns summarized
- confounder coverage summarized
- signal quality field or proxy documented if available

Blockers:
- endpoint too sparse for meaningful benchmark
- extremely short follow-up
- severe missingness with no quality trace
- only aggregate weekly or monthly rows with no nightly structure

## Stage 5 — Governance handling

Checklist:
- data stored in project-approved path
- direct identifiers excluded
- access scope limited to project need
- retention expectation documented
- provenance and transformation steps logged
- canonicalized outputs separated from raw intake

Blockers:
- direct identifiers present without approved need
- no access boundary
- no provenance trail
- transformed files overwrite raw delivery

## Stage 6 — Decision gate

Possible outcomes:
- `accept_for_pilot`
- `accept_with_limits`
- `hold_pending_clarification`
- `reject_for_current_scope`

Decision should consider:
- scientific fit
- linkage quality
- governance safety
- realistic benchmark value

## Required minimal governance posture

For a first institutional pilot, the project expects:
- pseudonymized subject IDs
- no direct identifiers in analytical tables
- narrow, documented research scope
- file-level provenance
- explicit statement of what can and cannot be reused

## Recommended intake bundle to request after first interest

Send together:
- one-pager
- variable shortlist
- pilot protocol
- this checklist
- target-specific outreach note

## Red flags that should stop the workflow

- request to infer joins from row order
- direct identifiers in analysis tables without justification
- no explanation of how report dates relate to sleep dates
- missing unit definitions for core physiology
- claim that the cohort is longitudinal but only aggregate exports are available

## Current recommendation

Use this checklist as an operational gate, not as a passive document.
A dataset should not enter modeling just because transfer succeeded. It should enter only after linkage, units, scope, and governance all pass an explicit review.

For raw nightly stress candidates, the practical next step after this checklist is:
- `training/normalize_raw_nightly_physio_epochs.py` when HR and IBI arrive in institution-specific epoch exports
- `training/validate_raw_nightly_stress_bundle.py`
- then, only if it passes, `training/run_raw_nightly_stress_experiment.py`
