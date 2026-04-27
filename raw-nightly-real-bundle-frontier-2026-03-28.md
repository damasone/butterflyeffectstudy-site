# Raw-Nightly Real Bundle Frontier — 2026-03-28

## Scope

Empirical frontier built from the first two real raw-nightly bundles already run inside the repo.

This replaces vague acquisition language with a concrete reading:

- `IFH Affect` is the best current anchor for dense repeated burden
- `HRV Sleep Diary 2025` is the best current anchor for true raw nocturnal physiology
- the next useful cohort must combine both

## Bundle anchors

### ifh_affect_2024_rawnight_bundle

- decision: `ready_with_limits`
- target base: `stress`
- participants: `21`
- nights: `3968`
- median nights / participant: `172.0`
- best join rate: `0.644`
- raw night fraction: `0.435`
- mean raw coverage: `0.505`

### hrv_sleep_diary_2025_rawnight_bundle

- decision: `hold_fix_linkage_or_density`
- target base: `anxiety`
- participants: `49`
- nights: `1372`
- median nights / participant: `28.0`
- best join rate: `0.107`
- raw night fraction: `0.791`
- mean raw coverage: `0.831`

## What each bundle proves

- `IFH Affect` proves that dense repeated burden can survive intake: best aligned join `0.644`. Raw night support is still weak compared with the stronger raw bundles.
- `HRV Sleep Diary 2025` proves that strong epoch-level raw physiology is possible inside a real nightly bundle: `raw_night_fraction 0.791`, mean raw coverage `0.831`.

## Direct raw probe on HRV Sleep Diary

### anxiety_d0

- decision: `raw_signal_present_but_not_additive`
- baseline best `R2`: `-0.1549`
- raw augmented best `R2`: `-0.1454`
- raw-dynamics augmented best `R2`: `-0.1441`
- raw-only best `R2`: `0.0560`

### anxiety_d1

- decision: `no_material_raw_uplift`
- baseline best `R2`: `-0.0242`
- raw-only best `R2`: `-0.0050`

## Frontier reading

- best outcome-density anchor: `ifh_affect_2024_rawnight_bundle` with join `0.644`
- best raw-night anchor: `hrv_sleep_diary_2025_rawnight_bundle` with raw-night fraction `0.791`
- best raw-coverage anchor: `hrv_sleep_diary_2025_rawnight_bundle` with mean raw coverage `0.831`

No real bundle in the repo currently combines both sides at once.

## Practical consequence

The next cohort should not enter because it is only better than IFH on raw support or only better than HRV on physiology quality.

It should satisfy both:

- clear the operating floor: join `>= 0.30`, `>= 40` participants, median `>= 20` nights, raw-night fraction `>= 0.50`
- beat IFH on raw support: raw-night fraction `> 0.435`, mean raw coverage `> 0.505`
- move toward HRV-quality physiology: raw-night fraction around `0.791`, mean raw coverage around `0.831`
- preserve high repeated outcome density, ideally closer to IFH `0.644` than to HRV `0.107`

## Decision

the next truly useful cohort must combine strong raw-night coverage with dense repeated burden; beating only one side of the frontier is no longer enough
