# Participant Audience Contracts — 2026-03-27

## Scope

Formal output contracts for the participant-facing research-return surface and the professional companion built on the same weekly payload.

## participant_research_return

- version: `participant_return_v1`
- reader: `participant`
- cadence: `weekly`
- scope: `longitudinal weekly stress or next-day burden interpretation on top of approved nightly routes`

Allowed claims:

- baseline-relative shifts across repeated nights
- dominant night domains inside the weekly window
- observed links with next-day burden inside the same weekly window
- explicit confidence and limit framing

Disallowed claims:

- diagnosis
- disease risk prediction
- causal statements about a single week
- single-night truth claims
- medical advice

Escalation guidance:

- use a professional review surface when the weekly pattern needs interpretation in care or research context
- do not treat the participant layer as a substitute for clinical assessment

## professional_companion

- version: `professional_companion_v1`
- reader: `professional`
- cadence: `weekly`
- scope: `companion review of the same participant-facing weekly payload with more explicit operational structure`

Allowed claims:

- weekly operational readout
- dominant night domains and baseline shifts
- review-night selection
- confidence and caveat framing tied to the same governed payload

Disallowed claims:

- diagnosis from the companion surface alone
- clinical decision without external assessment
- claim expansion beyond the approved route and weekly burden frame

Escalation guidance:

- escalate to institutional workflow for cohort-level validation or pilot work
- keep route governance and route-card audit visible when using the companion in professional settings
