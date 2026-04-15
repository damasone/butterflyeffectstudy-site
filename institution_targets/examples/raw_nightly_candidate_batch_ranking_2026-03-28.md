# Raw Nightly Candidate Batch Ranking

This ranking applies the same hardened pre-screen used for single-candidate review,
then orders candidates so outreach follow-up does not depend on manual judgement.

- candidates ranked: `3`
- decision counts: `direct_fit_for_raw_nightly_stress` = 1, `fit_with_limits` = 1, `reject_for_current_scope` = 1

| Rank | Candidate | Decision | Best join | Raw night fraction | Mean raw coverage | Beats IFH raw support | Main note |
| --- | --- | --- | ---: | ---: | ---: | --- | --- |
| 1 | `direct_fit_example` | `direct_fit_for_raw_nightly_stress` | 0.3800 | 0.6800 | 0.7400 | `yes` | none |
| 2 | `ifh_affect_2024_rawnight_bundle` | `fit_with_limits` | 0.6439 | 0.4347 | 0.5054 | `no` | participant count is below the preferred threshold |
| 3 | `hrv_sleep_diary_2025_rawnight_bundle` | `reject_for_current_scope` | 0.1071 | 0.7908 | 0.8313 | `yes` | aligned repeated burden rate is below the minimum practical threshold |
