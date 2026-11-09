# 2026 multilevel search-season snapshot

The rejection page renders `_includes/search-season.html` from `_data/search_season_2026.json`. The static SVG uses that aggregate source. Its accessible description and ribbon titles expose the counts; explanatory captions and the expandable details/table are omitted from the public page at the user’s request. No private tracker rows, archive links, contact details, or position titles are published.

## Sources and scope

The 2026-11-09 snapshot combines 125 applications from the application tracker (`Sheet1`, rows 1–345) with seven additional 2026 decisions in `_data/rejections.yml`. Tracker records require an exact valid 2026 application date through the snapshot date and a submitted/outcome status. Exclude profiles, saved leads, and all eight withdrawn records. The displayed scope is 123 non-withdrawn tracker applications plus seven additional achievement decisions, totaling 130. A role submitted alongside another role in one form remains a separate tracked opportunity. Repeat applications on different dates remain separate.

The seven additional achievement IDs are stored as `additional_achievement_ids`: Avito (the undated tracker rejection observed 2026-10-08), IT University of Copenhagen, BostonGene, Deep Origin, University of Copenhagen, Principles of Intelligence, and METR. They have 2026 decisions, not necessarily known 2026 submission dates. The Copenhagen and Principles saved leads are different opportunities and are not submissions to count. All remaining 2026 achievements overlap the dated tracker rejections; the tracker also has two additional Yandex rejections absent from the wall. Do not join by company alone or add all badge counts to tracker counts.

## Recorded paths

- 27 achievements explicitly record zero completed post-application selection rounds. Four other rejections have unknown histories. These 31 now branch from Applied to Rejected, meaning no recorded interview path, not a claim that every one had zero rounds.
- BostonGene: one screening interview, then rejection.
- Deep Origin: screening, then technical interview, then rejection.
- IT University of Copenhagen: offline screening, then two interviews, then rejection.
- University of Vienna: pre-screening followed by a technical-interview invitation; current tracker status interview. Elastic Loop: proposed meeting, not yet scheduled; current tracker status interview. The diagram counts stages reached/invited, not only completed meetings.
- User clarification in this chat on 2026-11-09: both program acceptances followed interviews; ML School also had an online assessment before its interview. Thus the two acceptance records flow through screening/interview, and ML School additionally flows through the separate OA node. OA is not included in the screening/interview counts.

There are 7 opportunities that reached screening/interview (3 later rejected, 2 in interview, 2 accepted). Repeated rounds are combined per opportunity, while the display separates Interview jobs (3), Interview PhD (2), and Interview other (2). ML School goes from Applied other to Online assessment other to Interview other. One Other acceptance follows Interview other; one follows online assessment directly without an interview, per the latest user correction. Both join the combined Accepted outcome.

The other 98 opportunities have unknown round history: 80 applied, 12 no response, 4 rejected, 2 withdrawn. Unknown is not zero. Do not infer a missing round count from a rejection or a company-wide maximum. Known zero and positive counts come from per-attempt achievement records; invitations and program histories use the tracker and the user clarification above. Earlier-year achievements are excluded even when the organization appears again in 2026.

## Categories, endpoints and percentages

The user requested removing withdrawals entirely. The diagram and percentage denominator now exclude all eight withdrawn records, including two historically submitted applications. The source remains unchanged. The included total is 130: 123 dated non-withdrawn tracker applications plus seven additional achievement decisions. Historical submitted total was 132, of which two were later withdrawn; six other withdrawn/closed leads had no valid submission date.

The redundant Jobs/PhD/Other source column was removed at the user’s request. The diagram starts at Applied jobs 118, Applied PhDs 6, and Applied other 6. Assessment and interview stages remain separate for each category. Recorded online assessments are Jobs 1, PhD 0, Other 2; zero means none recorded, not evidence none occurred. Zero-count nodes remain in the data but are omitted from the SVG, at the user’s request. Accepted is positioned below Rejected. Interviews are Jobs 3, PhD 2, Other 1. Two interviewed jobs and one interviewed PhD join 31 direct rejections for 34 Rejected. One interviewed program application and one accepted directly after online assessment join the combined Accepted outcome.

Awaiting-update, no-response and interview-in-progress branches remain hidden at the user’s request. Their records end at the correct parent nodes: Applied jobs 86, Applied PhDs 2, Applied other 4, Interview jobs 1, Interview PhD 1. There are no hidden or transparent ribbons. The `ends_here` fields preserve these endpoints without shrinking parent counts.

Every node/ribbon percentage uses the 130 included opportunities as denominator, rounded to one decimal place. Public explanatory captions and details remain removed. SVG descriptions/tooltips preserve scope, zero-node semantics and endpoint counts.

## Updating and validation

All graph heights/ribbon widths use the single `flow_scale` value (currently 2.2 SVG units per opportunity). Links reference zero-based node indexes. Liquid renders curves and offsets without JavaScript/network dependencies.

Validate the three Applied source nodes sum to 130. Incoming flow equals every non-source node’s value; outgoing flow plus endpoints equals every nonterminal node’s value. Rejected 34 + accepted 2 + Applied endpoints 92 + Interview endpoints 2 = 130. Verify no withdrawn node/link/label appears, assessment and interview remain separate by category, zero assessment nodes have no links and are not rendered, and acceptance/rejection are shared outcomes. Check desktop and phone previews.

User clarification on 2026-11-09: reroute one existing interviewed Job through Online assessment jobs, and one additional Other through Online assessment other (the latter category was explicitly confirmed in the clarification reply). Assessments are now Jobs 1, Other 2, PhD 0. Jobs have two direct-to-interview paths and one via assessment; both Other interview paths now pass through assessment. Interview/outcome/category totals do not change. No particular Job employer was specified, so this is an aggregate path correction rather than an employer-specific stage assertion.

Latest correction, 2026-11-09: one Other acceptance did not pass through interview. Preserve the two confirmed Other assessment routes, but branch one from Online assessment other directly to Accepted; only the remaining one passes through Interview other. Interview Other decreases to 1 and all-category interview count to 6; accepted remains 2 and total remains 130. This supersedes the earlier claim that both acceptances followed interviews.

Layout refinement: compact viewBox height 545, down from 880, with closer PhD/Other rows and labels enlarged from 16 to 18 SVG units (counts 18→20; percentages 14→16). Job assessment stays aligned with Applied jobs. All counts, percentages and paths are unchanged; all ribbons and node heights use the same scale.

Wispr Flow outcome update, 2026-11-09: the existing scientist application changed from applied to rejected. Rejected increases from 34 to 35, direct job rejections from 29 to 30, and Applied jobs endpoints decrease from 86 to 85. Total included opportunities remains 130. No completed selection-round count was provided.
