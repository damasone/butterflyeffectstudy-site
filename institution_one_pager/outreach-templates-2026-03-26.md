# Outreach Templates — 2026-03-26

## 1. Hospital / Sleep Unit

### Subject
Research collaboration on longitudinal sleep interpretation and symptom trajectories

### Email
Hello [Name],

I am reaching out because we are building Butterfly Effect, a research-grade longitudinal sleep interpretation system focused on detecting subtle sleep and physiological patterns that may precede changes in stress, symptoms, and health burden.

The platform is already strong within cohort and has a structured validation and governance layer. The main scientific bottleneck now is cross-cohort nightly generalization, which makes clinically anchored longitudinal datasets especially valuable.

I believe your group could be a strong fit if you have:
- longitudinal sleep data,
- repeated symptom or burden measures,
- and ideally cardiovascular or PSG-linked physiology.

I am attaching a one-pager that explains the current state of the system, the kind of data that would be most useful, and a practical first pilot model.

If this is relevant, I would welcome a short conversation to explore whether there is a sensible research collaboration path.

Best regards,
[Name]

### First positive reply

Do not ask for the full bundle immediately.

Ask first for these fields:
- candidate cohort name
- whether true `participant-night` rows exist
- burden endpoint name and frequency
- estimated aligned burden rate
- participant count
- median nights per participant
- raw signal granularity
- estimated raw night fraction
- estimated mean raw coverage
- linkage mode
- whether a PSG or richer physiology subset exists

## 2. University / Research Group

### Subject
Potential collaboration on longitudinal sleep modeling and cross-cohort transport

### Email
Hello [Name],

I am contacting you because we are developing Butterfly Effect, a research-grade system for longitudinal sleep interpretation built around nightly routes, event stress models, portable-family probes, and explicit validation gates.

The current platform is already usable within cohort and methodologically mature enough for collaboration. The main open research problem is transport across cohorts, especially for nightly interpretation and non-stress families.

I think there may be a strong methodological fit if your group has a longitudinal cohort with repeated outcomes and sleep-linked physiology. I have attached a short one-pager summarizing:
- what is already validated,
- what data would be most valuable,
- and what a first pilot study could look like.

If useful, I would be glad to discuss a narrowly scoped first collaboration around one cohort and one outcome family.

Best regards,
[Name]

## 3. Wearable / Digital Health Company

### Subject
Research collaboration on longitudinal sleep interpretation and wearable signal validation

### Email
Hello [Name],

I am reaching out because we are building Butterfly Effect, a research-grade longitudinal sleep interpretation system focused on detecting subtle sleep and physiological patterns that may precede changes in stress, symptoms, and health burden.

The current stack is already strong for within-cohort nightly interpretation and portable event-level stress. The most important next step is validating how well wearable-derived sleep and cardiovascular signals support interpretable burden tracking across cohorts.

If your team has longitudinal sleep and cardiovascular device data linked to repeated user-reported outcomes, I believe there could be a strong research collaboration fit.

I am attaching a brief one-pager with:
- the current state of the platform,
- the minimum and ideal data package,
- and a practical pilot model.

If of interest, I would welcome a short discussion about whether there is a useful validation or pilot path.

Best regards,
[Name]

## 4. Short follow-up

### Subject
Following up on Butterfly Effect collaboration note

### Email
Hello [Name],

Following up on the note I sent about Butterfly Effect.

The short version is that we already have a structured research platform for longitudinal sleep interpretation, but the main remaining scientific gap is cross-cohort nightly generalization. That is exactly where a well-designed institutional dataset could add real value.

If useful, I can send a shorter technical summary tailored to your setting or propose a narrow pilot framing.

Best regards,
[Name]

## 5. Targeted nightly stress cohort ask

### Subject
Request for longitudinal nightly sleep + repeated stress dataset collaboration

### Email
Hello [Name],

I am reaching out because we are now at a specific scientific bottleneck in Butterfly Effect.

The platform is already strong for:
- within-cohort nightly interpretation,
- portable event-level stress,
- and governed research reporting.

The remaining gap is not general infrastructure. It is cross-cohort nightly transport.

For that reason, we are looking specifically for a cohort with:
- participant-night longitudinal sleep data,
- repeated stress measurements linked to those nights,
- nightly cardiovascular or wearable physiology,
- and basic confounders such as age, sex, medication, shift-work, alcohol/caffeine, and activity.

The most valuable package would include:
- nightly sleep summaries,
- HR / HRV or IBI-derived nightly physiology,
- movement / actigraphy,
- repeated stress outcomes at least weekly and ideally more often,
- and a small physiology-rich subset if available.

We already have a working research stack and explicit data requirements, so the discussion can stay concrete from the start. If helpful, I can send:
- a one-page technical summary,
- the exact field matrix,
- and a narrow pilot framing built around one cohort and one stress endpoint.

If this is relevant for your group, I would welcome a short conversation.

Best regards,
[Name]

## 6. Screening checklist for first calls

Use this checklist before committing to a pilot conversation.

### Minimum fit

- participant-night rows exist
- repeated stress outcome exists
- nightly wearable or cardiovascular signal exists
- at least `40` participants or a plausible path to that scale
- median follow-up is not trivially short

### Strong fit

- nightly sleep summaries plus HR/HRV or IBI
- repeated stress at least weekly
- confounders are available
- raw or semi-raw physiology can be shared
- a subset has richer physiology or gold-standard validation
- raw-night support is strong enough to estimate both raw-night fraction and mean raw coverage

### Weak fit

- only weekly aggregates
- no night-level linkage
- no repeated stress endpoint
- no physiology beyond a single summary label
- no realistic data-sharing path

## 7. Raw nightly pre-screen benchmark

Preferred bar:
- `participant-night` rows
- repeated burden
- aligned burden rate `> 0.30`
- `>= 40` participants
- median `>= 20` nights
- raw night fraction `> 0.50`
- mean raw coverage estimate is known
- `epoch` or `beat-to-beat` raw physiology

Minimum floor:
- aligned burden rate `>= 0.15`
- `>= 20` participants
- median `>= 10` nights
- raw night fraction `>= 0.30`
- nightly-summary sidecar only if nothing stronger exists

If the candidate does not clear the floor, keep it out of the raw-nightly lane.

Direct fit now means more than clearing the floor:
- it should beat `IFH Affect` on raw support
- it should move toward `HRV Sleep Diary 2025` on raw support quality
- and it should preserve materially denser repeated burden than `HRV Sleep Diary 2025`

## 8. Attachment bundle after interest is confirmed

Do not send the whole pack in the very first cold email unless there is a reason.

Recommended sequence:
1. One-pager first
2. Raw nightly pre-screen benchmark second
3. Candidate pre-screen template third
4. Variable shortlist fourth
5. Pilot protocol fifth
6. Data intake + governance checklist sixth
7. Full data requirements pack seventh
8. Raw nightly stress shortlist if the conversation is explicitly about participant-night physiology
9. Header-only CSV templates if the counterpart asks for exact file shape
10. Target-specific narrow ask before the first call

Links inside the repo:
- one-pager: `reports/institution_one_pager/index.html`
- raw nightly pre-screen benchmark: `reports/institution_targets/raw-nightly-pre-screen-benchmark-2026-03-27.md`
- pre-screen template: `reports/institution_targets/templates/raw_nightly_candidate_pre_screen_template.json`
- variable shortlist: `reports/institution_data_requirements/variable-shortlist.html`
- pilot protocol: `reports/institution_pilot_protocol/index.html`
- intake + governance checklist: `reports/institution_governance/index.html`
- data pack: `reports/institution_data_requirements/index.html`
- target shortlist: `reports/institution_targets/index.html`
- raw nightly stress shortlist: `reports/institution_targets/raw-nightly-stress-target-shortlist-2026-03-27.md`
- raw nightly stress contact pack: `reports/institution_targets/raw-nightly-stress-contact-pack-2026-03-27.md`
- raw physio templates:
  - `reports/institution_data_requirements/templates/night_physio_epoch.csv`
  - `reports/institution_data_requirements/templates/raw_hr_epoch.csv`
  - `reports/institution_data_requirements/templates/raw_ibi_epoch.csv`
