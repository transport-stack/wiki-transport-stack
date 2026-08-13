---
title: Documentation Maturity Benchmarks
sidebar_label: Maturity Benchmarks
---

# Documentation Maturity Benchmarks

How Transport Stack's documentation compares with reference open-source platforms — and where each gap closes. Reviewed quarterly (Q-checks at Newsletter cadence).

> **Legend:** ✅ Present & maintained &nbsp;|&nbsp; 🔶 Partial / draft &nbsp;|&nbsp; ⬜ Not started

## Transport Stack vs. reference platforms

| Capability | MOSIP | OpenTripPlanner | OneBusAway | Transport Stack | Next check |
|------------|:-----:|:---------------:|:----------:|:--------------:|:----------:|
| Public versioned docs site | ✅ (docs.mosip.io, versioned per release) | ✅ (site + docs.otp.org) | ✅ (github docs site) | ✅ (this wiki on Docusaurus) | — |
| Platform architecture diagrams | ✅ | ✅ | 🔶 | ✅ [overview](/docs/architecture/overview) | — |
| Consolidated tech stack reference | ✅ | 🔶 | ⬜ | ✅ [tech stack](/docs/architecture/tech-stack) | — |
| Security & privacy architecture page | ✅ (published Privacy & Security hub) | ⬜ | ⬜ | ✅ [security-privacy](/docs/architecture/security-privacy) | Aug 2026 |
| Per-module UI/UX specs (flows + screens + JSON) | ✅ (mosip module pages) | 🔶 | ⬜ | 🔶 [ui-specs](/docs/ui-specs/web-portal) — flagship Web Portal complete; ETA + JP in progress | Sep 2026 |
| Public sandbox (fake data) | ✅ | 🔶 (hosted demo) | 🔶 | ⬜ planned 2026 | Q3 2026 |
| Version-tagged doc releases | ✅ | ✅ | ⬜ | ✅ v1.0 scheme (Aug 2026) | quarterly |
| Contributor onboarding docs | ✅ | ✅ | ✅ | ✅ (CONTRIBUTING.md + wiki) | — |
| Public API reference per module | ✅ | ✅ | 🔶 | ✅ (Swagger on `/docs` per service) | quarterly |

## What we copy from MOSIP

- **Governing-principles → features → cryptography → key mgmt** shape on the security page (done)
- **Per-module spec template** (roles → screens → flows → JSON) — applied to Web Portal; extends to other modules
- **Partner taxonomy with onboarding checklists** for "Become a Partner" (glob: custodianship plan)
- Versioned doc release per major release (v1.0 shipped Aug 2026; next tag with Q3 workplan)

## Quarterly review items

1. Close the per-module UI spec gap (ETA Calculator, Journey Planner in Phase C window)
2. Ship a public sandbox instance riding synthetic GTFS
3. Publish a changelog diff between tagged doc releases
4. Move **all** repos to at least "partial" on Swagger/OpenAPI reference docs

---

*Benchmark v1.0 · First review: Sep 2026*
