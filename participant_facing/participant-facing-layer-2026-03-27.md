# Participant-Facing Layer

Updated: 2026-03-27

## Purpose

Butterfly Effect should not become a generic sleep app.

The participant-facing layer is not a consumer wellness surface and not a diagnostic product. It is a **research-return interpretation layer** that translates longitudinal sleep findings into a form that a participant can understand and use without losing methodological discipline.

The role of this layer is to:

- return value to participants in studies or pilots,
- make the system legible beyond institutional dashboards,
- preserve the same evidence hierarchy and caveats as the research core,
- keep the project useful for people without collapsing into generic sleep scoring.

## Positioning

The participant-facing layer should be framed as:

- **longitudinal personal insight**,
- **participant research return**,
- **pattern-based interpretation over time**.

It should not be framed as:

- daily sleep coaching,
- diagnosis,
- disease prediction for the public,
- a generic "how did I sleep" app.

## Primary Use Case

The first participant-facing use case should be:

- **stress / next-day burden**

Reason:

- this is where the project is strongest,
- nightly stress routes are the most operational part of the stack,
- the interpretation logic is already defensible,
- it is easier to explain longitudinally than anxiety, depression, or pain-like burden.

## User Promise

The promise to a participant should be limited and precise:

- identify repeated night patterns,
- show which domains are shifting relative to the participant's own baseline,
- show which patterns tend to precede higher next-day burden,
- show confidence and limits clearly.

The system should **not** promise:

- medical diagnosis,
- certainty about future illness,
- single-night truth,
- treatment advice.

## Delivery Model

The first delivery mode should be a **weekly longitudinal report**.

Why weekly:

- a single night is too noisy,
- the system already reasons well over rolling windows and baselines,
- weekly cadence is understandable for participants,
- weekly reports fit research studies and future pilots.

Recommended cadence:

- primary: weekly
- secondary: monthly summary
- optional: end-of-study research return report

## Eligibility Thresholds

A participant-facing report should only be generated when minimum evidence conditions are met.

Initial thresholds:

- at least `14` nights of usable sleep history,
- at least `4` matched day reports in the current weekly window,
- missing feature fraction below route quality fail threshold,
- a route or family that is explicitly allowed for participant-facing use.

If these thresholds are not met, the system should not improvise. It should return a constrained report saying that the current window is not strong enough for interpretation.

## Tone

The tone should be:

- clear,
- calm,
- serious,
- non-clinical but not casual,
- non-prescriptive.

The wording should be:

- plain language first,
- mechanism second,
- caveat always visible,
- no hype,
- no generic wellness language.

Avoid:

- "your sleep score"
- "you are at risk"
- "the model knows"
- "you should"

Prefer:

- "this week, your pattern shifted"
- "the clearest changes appeared in"
- "in your recent data, these nights tended to precede"
- "this signal is still weak / moderate / stronger"

## Output Types

The participant-facing layer should eventually expose three surfaces.

### 1. Weekly Participant Report

Primary surface.

Audience:

- participant

Purpose:

- readable weekly interpretation of repeated night patterns and next-day burden links.

### 2. Monthly Trajectory Summary

Secondary surface.

Audience:

- participant
- study coordinator

Purpose:

- broader change over a month,
- more stable patterns,
- less sensitivity to single noisy weeks.

### 3. Professional Companion Summary

Tertiary surface.

Audience:

- psychologist
- clinician
- researcher

Purpose:

- concise summary of the same participant-facing material,
- more technical than the participant report,
- less raw than the institutional route/family dashboards.

## First Report: Weekly Longitudinal Personal Report

The first implementable report should have this structure.

### Section 1. Report Header

Contains:

- participant alias or pseudonym,
- reporting window,
- active focus: `stress / next-day burden`,
- route used,
- quality status for the window.

Example framing:

- `Weekly longitudinal report`
- `Window: 2026-03-01 to 2026-03-07`
- `Focus: next-day stress burden`

### Section 2. This Week At A Glance

Short summary block with:

- number of usable nights,
- number of matched day reports,
- strongest dominant domain,
- confidence level,
- whether the week looks broadly stable or shifted.

This is not a score. It is a compact orientation block.

### Section 3. What Shifted Relative To Baseline

Shows the strongest deviations from the participant's own recent reference.

Format:

- `higher than usual`
- `lower than usual`
- `more variable than usual`
- `more fragmented than usual`

This section should map directly to existing baseline and driver logic.

### Section 4. Dominant Night Domains

This is the central interpretation block.

Candidate domains:

- sleep continuity,
- sleep timing / regularity,
- autonomic activation,
- sleep architecture,
- sleep duration / restoration.

Each domain should include:

- plain-language summary,
- why it was highlighted,
- whether it appears stable across the week or driven by a few nights.

### Section 5. Observed Links With Next-Day Burden

This is the most important participant-facing section.

It should answer:

- which recurring night patterns were most associated with worse next-day stress in the recent window,
- whether that link is weak, moderate, or clearer,
- whether it is based on enough matched nights to be taken seriously.

This section must use cautious wording.

Good example:

- `In your recent data, nights with higher fragmentation tended to be followed by higher next-day stress.`

Bad example:

- `Fragmentation causes your stress.`

### Section 6. Nights Worth Reviewing

A small set of notable nights:

- most shifted night,
- most stable night,
- night most aligned with next-day burden,
- night with insufficient signal.

This makes the report concrete without pretending that every night is fully interpretable.

### Section 7. Confidence And Limits

Mandatory section.

Must show:

- signal quality,
- how much usable history exists,
- whether the window is dense enough,
- whether the interpretation is mostly participant-relative or mostly cohort-relative,
- whether important caveats apply.

Possible labels:

- `usable but early`
- `moderate confidence`
- `stronger weekly signal`
- `limited by sparse self-report`

### Section 8. What This Does Not Mean

Short explicit anti-overclaim section.

Examples:

- this is not a diagnosis,
- this does not establish disease risk,
- this week alone does not define a long-term pattern,
- absent signal is not evidence of absence.

This is important both ethically and strategically.

### Section 9. What To Keep Tracking

A restrained tracking recommendation block.

Not treatment advice.

Only:

- which dimensions are worth continuing to monitor,
- which self-report fields are especially informative,
- whether more nights are needed before interpretation becomes stronger.

### Section 10. Research Footnote

Small footer that explains:

- route family used,
- whether the report comes from an operational route or research-only family,
- provenance timestamp,
- optional sharing note for study teams.

## What A Person Receives

For the first version, the participant should receive:

- one weekly report,
- one clear focus area,
- one main interpretation window,
- one confidence framing,
- one set of explicit limits.

Not:

- multiple unrelated targets at once,
- route cards,
- calibration jargon,
- institution-facing tables.

## Recommended UI / Delivery Form

The right first form is:

- web report,
- or exportable PDF,
- optionally accompanied by a clinician/professional summary.

The wrong first form is:

- real-time app feed,
- daily push notifications,
- generic dashboard overload.

## Relationship To The Current Engine

This layer is compatible with the current system. It should reuse existing structured outputs rather than invent a parallel stack.

Direct mappings already available:

- `quality` -> signal quality and confidence gate,
- `prediction` -> burden estimate and interval context,
- `top_drivers` -> participant-facing reasons,
- `domain_findings` -> dominant domains,
- `feature_baselines` -> baseline-relative shifts,
- `caveats` -> explicit limits,
- `narrative_summary` -> internal narrative substrate,
- `provenance` -> audit trail.

The participant-facing layer is therefore mainly a new **reporting surface**, not a new modeling stack.

## What Should Be Built Next

Priority order:

1. implement a `weekly participant stress report` using an already deployed nightly stress route,
2. define route eligibility for participant-facing use,
3. create a participant-safe rendering layer from existing report JSON,
4. only then consider monthly summaries and professional companion outputs.

## Decision

Butterfly Effect should remain:

- a research-grade interpretation system,
- with institutional and methodological depth.

It should become more accessible by adding:

- a participant-facing research-return layer,
- not by collapsing into a generic sleep app.
