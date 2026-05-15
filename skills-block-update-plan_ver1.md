# Skills Block, Site Structure & Navigation — Updated Plan (v1)

**Portfolio:** michael-malis.github.io  
**Status:** Analysis only — no code changed.  
**Date:** May 2026  
**Based on:** Previous plan + CV review + 3 new questions

---

## New CV Data Used in This Analysis

Before recommendations: key facts from the CV not previously reflected in the plan.

| Fact | Relevance |
|---|---|
| **Teaching Assistant, Linear Regression** (Mar 2026–Present) | Directly validates the regression demo. TA role = deep understanding, not just tooling. Creates coherent narrative: "I teach this concept AND visualized it interactively." |
| **Moshal Program Scholar** | Competitive, prestigious credential. Not currently shown on portfolio site. |
| **GPA: 92.79 in major courses** | Strong academic signal for RA and research positions. Not shown on portfolio site. |
| **Regression & Statistical Models: 97** | Highest-signal individual grade for the current portfolio focus. Validates regression demo + TA role. |
| **Statistical Analysis: 99, Big Data Mining: 99, Python: 100** | Establishes top-decile academic performance. |
| **Mathematical foundation:** calculus, probability, linear algebra, statistics | Currently absent from Skills block. Supports the regression demo and TA credibility. |
| **4 languages:** Hebrew, English, Russian, Ukrainian | Not directly a Skills concern but relevant for international research roles. |

> **Note on TA position:** This is the most underutilized fact in the current portfolio structure. Being a TA for Linear Regression while also having an interactive regression geometry demo on the site is a uniquely coherent signal. It proves the candidate does not just use regression — they explain it to others. This connection should inform where the demo is placed.

---

## 1. Updated Verdict — Section Order

### Previous Plan

> Hero → About → Skills → Projects → Awards → FancyVisualisationSection → Education → Contact

### Problem With Previous Plan

The regression demo was placed at position 6 — after Awards — on the reasoning that it rewards persistent technical readers. This was reasonable before the CV provided context.

**The TA role changes the calculus.** The regression demo is no longer just a "technical differentiator" for persistent readers. It is now:
- Direct proof of domain expertise at the level of teaching
- A visual proof of skills declared in the Skills block (Regression Analysis, Linear Algebra, Statistical Inference)
- A signature piece that connects to the TA work experience

Placing it after Awards weakens this connection. By position 6, most HR screeners are already gone. Technical reviewers and hiring managers — who would appreciate it most — have already formed their impression.

**Updated recommendation:** Move the demo to position 4, directly after Skills.

Flow rationale: "Here's who I am → here's my story → here are my methods → here's the deepest one, live and interactive → here are my projects applying them → here's an award validating the work."

---

## 2. Regression Demo Placement — Options Table

| Option | Section Order | Pros | Cons | Verdict |
|---|---|---|---|---|
| **A** | Hero → About → **Demo** → Skills → Projects | Demo very high — maximum visibility for all visitors | No context yet: HR sees draggable vectors before understanding the toolkit. Jarring for non-technical screeners. Skills that validate the demo appear *after* it. | Not recommended |
| **B** | Hero → About → Skills → **Demo** → Projects | Skills frames what the demo proves. Demo immediately validates the declared skills. TA + Demo connection is visible early. Technical depth appears before projects, framing their context. | Linear readers encounter the math demo before seeing project reports — slight risk of engagement drop for fast HR. | **Recommended** |
| **C** | Hero → About → Skills → Projects → **Demo** → Awards | Projects as primary evidence. Demo appears as "bonus" for readers who made it through projects. | TA-regression connection is weakened. Demo is buried after all project evidence. Most HR will not scroll this far. | Acceptable fallback if user prefers Projects before Demo |
| **D** | Hero → About → Skills → Projects → Awards → **Demo** | Demo rewards the most persistent readers only. | Too late for most visitors. Undermines the TA + demo narrative. Previous plan position. | Not recommended |

### Final Recommendation: Option B

**Hero → About → Skills → Regression Demo → Projects → Awards → Education → Contact**

**Why this order works:**

1. **Skills frames the demo.** After seeing the Skills block (Regression Analysis, Statistical Inference, Linear Algebra), the visitor immediately sees one of those skills visualized — not described, but *demonstrated live*. This is rare in student portfolios.

2. **Demo validates the TA claim.** If work experience is added to the site (see Section 9 — implementation notes), the connection becomes explicit: "I TA a Linear Regression course. Here is how I think about it geometrically." Even without work experience shown, the demo's sophistication speaks for itself.

3. **Demo differentiates before Projects.** Projects prove the candidate can execute a full analysis. The demo proves conceptual depth at a level most interns and junior candidates do not have. Showing depth *before* breadth is a stronger hiring signal order.

4. **Technical reviewers reach it early enough to matter.** A hiring manager or RA supervisor who scrolls after reading Skills will hit the demo at position 4 — still early in the page. They will spend time on it, drag the vectors, and form a strong positive impression before ever reaching the projects.

5. **HR screeners who click nav links bypass it entirely.** This is fine. HR screeners use "Projects" or "Skills" in the navbar; they don't scroll linearly. The demo's position does not interrupt their workflow.

---

## 3. Updated Navbar Recommendation

### Question: Remove "Profile"?

**Recommendation: Yes — remove "Profile" from nav buttons.**

**Rationale:**

| Consideration | Assessment |
|---|---|
| Does Profile serve a navigation need? | No. The logo (`michael.malis_`) already links to `#about` (Hero). Two routes to the top is redundant. |
| What does a shorter navbar gain? | The first nav item becomes the first content nav link, not a home button. This pushes "evidence" items earlier in the nav. |
| What is lost? | Nothing visible to the user. First-time visitors will not know "logo = home" immediately, but this is a universal web convention. |
| Mobile impact? | 4 items vs 5 in the dropdown. Cleaner. |

### Navbar Order Must Match Section Order

Per the user's constraint: nav button order should correspond to the order sections appear on the page.

**New section order (position of nav-linked sections only):**
- Skills → position 3
- Projects → position 5
- Awards → position 6
- Contact → position 8

**Nav order aligned with page order:** `Skills | Projects | Awards | Contact`

### Comparison: Skills-First vs Projects-First in Navbar

| Option | Nav Order | Assessment |
|---|---|---|
| Match page order | Skills → Projects → Awards → Contact | Natural. Visitors who click "Skills" arrive at position 3, then scroll into Demo, then Projects. Logical journey. |
| Projects-first regardless | Projects → Skills → Awards → Contact | Slightly mismatched with page order. But "Projects" as first link maximizes click-through for HR who wants evidence immediately. |

**Recommended: match page order.** Skills first in nav, because:
- It matches the page order (user's stated constraint)
- "Skills" first signals "I know my domain" — confident positioning
- HR who wants projects immediately scrolls past Skills fast — no friction

### Final Desktop Navbar

```
michael.malis_    [Skills]  [Projects]  [Awards]  [Contact]
```

Logo = home link (already implemented). No "Profile" button.

### Final Mobile Navbar

Same order. 4 items in the dropdown. Cleaner than 5.

```
michael.malis_ [☰]
  ↳ Skills
  ↳ Projects
  ↳ Awards
  ↳ Contact
```

### Navbar Changes Summary

| Current Item | Action | Reason |
|---|---|---|
| Profile | **Remove** | Logo already covers home link. Redundant. Shorter nav = stronger. |
| Projects | **Keep, reorder to position 2** | Primary evidence, strong signal. |
| Skills | **Keep, move to position 1** | Matches new page order (Skills is at position 3, before Projects at position 5). |
| Contact | **Keep, stays last** | CTA. Always last. |
| Awards (proposed) | **Add, position 3** | Concrete differentiator. Previously missing from nav. |

---

## 4. Mathematical Skills in Skills Block

### The Problem

Current Skills block has no explicit mathematical signals. CV states:
> "Strong foundation in calculus, probability, linear algebra, and statistics; Machine Learning fundamentals (regression, classification, evaluation)"

The regression demo also visually demonstrates linear algebra (vector projection, column space). The TA role requires teaching linear algebra concepts embedded in regression. This mathematical foundation is currently invisible in the Skills block.

### Options Analysis

| Option | Approach | Pros | Cons | Verdict |
|---|---|---|---|---|
| **A** | New category "Mathematical Foundations" | Maximum visibility. Separate signal for RA roles. | 7 categories = overloaded block. Looks like coursework list. | Not recommended |
| **B** | Add math tags to Category 2 (Statistics & ML) | Natural home for math skills. No extra category. | Category 2 could get crowded (6 → 8 tags). | Recommended (with pruning) |
| **C** | Math in description only, no pills | Clean tags, description carries narrative. | ATS doesn't parse descriptions. No visual pill signal. | Acceptable minimum |
| **D** | Add "Probability Theory" only | Focused, defensible, highest signal of the math tags. | Leaves Linear Algebra invisible despite demo connection. | Good if Category 2 is already full |
| **E** | Add "Probability Theory" + "Linear Algebra", drop "Predictive Modeling" | Replaces category-level label with specific math foundation tags. Net 0 growth. | Loses "Predictive Modeling" ATS term. | Recommended (see below) |

### Tag-by-Tag Assessment

| Math Tag | In CV? | Defensible in Interview? | Hiring Signal | Recommendation |
|---|---|---|---|---|
| Probability Theory | Yes ("probability") | Yes — foundation of statistical inference, ML theory | High for RA, research, DS roles | **Add** |
| Linear Algebra | Yes ("linear algebra") | Yes — directly demonstrated by regression demo; TA teaches it implicitly | Medium-High; strong for technical reviewers | **Add** (optional) |
| Calculus | Yes ("calculus") | Yes as prereq, but expected from any quantitative student | Low — everyone claims it; no differentiation | **Do not add** |
| Statistical Theory | Not explicitly | Borderline — overlaps with Statistical Inference | Low additional signal | **Do not add** |

### Final Recommendation for Category 2

**Drop "Predictive Modeling" (category-level label, not a specific method) and add "Probability Theory" + "Linear Algebra".**

Net change: 6 tags → 7 tags (swap 1 out, add 2).

"Predictive Modeling" is the weakest tag in Category 2:
- It describes what regression/classification *does*, not a specific skill or method
- Already implied by "Regression Analysis" + "Classification" + "Scikit-learn"
- Adding "Probability Theory" + "Linear Algebra" gives far more specific signal

**Resulting Category 2:**

```
Statistical Inference · Hypothesis Testing · Regression Analysis ·
Probability Theory · Classification · Scikit-learn · Linear Algebra
```

7 tags. All defensible in interview. All backed by coursework, CV, and for regression: TA role and demo.

### Risk Assessment

| Tag | Risk | Mitigation |
|---|---|---|
| Linear Algebra | Medium — may trigger advanced question on matrix decompositions | Demo + TA role provide strong cover. Candidate can point to both. |
| Probability Theory | Low | Backed by Statistics 99 grade, all inference coursework |
| Dropping Predictive Modeling | Low — minor ATS signal loss | Regression Analysis + Classification + Scikit-learn cover the same ATS space more specifically |

### Keep Calculus in Description, Not Pills

If a description update is desired for Category 2, consider:

> "Statistical foundations and core ML methods — built on probability theory, linear algebra, and formal inference. Applied to real-world datasets in academic and project contexts."

Do NOT add this as the live description unless approved separately.

---

## 5. Final Recommended Section Order

| Position | Section | Section ID | Nav Link |
|---|---|---|---|
| 1 | Hero | `#about` | — (logo = home) |
| 2 | About | `#about-me` | — |
| 3 | Skills | `#skills` | Skills |
| 4 | FancyVisualisationSection | `#fancy-visualisation` | — (discoverable by scrolling) |
| 5 | Projects | `#projects` | Projects |
| 6 | HonorsAwards | `#awards` | Awards |
| 7 | Education | `#education` | — |
| 8 | Contact | `#contact` | Contact |

### Reading Flow This Creates

> "Here is who I am (Hero) → here is my story — Aliyah, IDF, academic drive (About) → here is my technical toolkit (Skills) → here is the deepest method in that toolkit, made interactive (Regression Demo) → here is where I applied the toolkit across real datasets (Projects) → here is external validation of my work (Awards) → here is my academic credential (Education) → reach out (Contact)."

This is a persuasive hiring narrative, not a résumé. Each section earns the right to the next.

---

## 6. Final Recommended Navbar

```js
const navLinks = [
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#awards',   label: 'Awards'   },
  { href: '#contact',  label: 'Contact'  },
];
```

Logo `michael.malis_` continues to link to `#about` (Hero). No "Profile" button.

**Nav order matches section order:** Skills (pos 3) → Projects (pos 5) → Awards (pos 6) → Contact (pos 8).

---

## 7. Final Skills Block Categories and Tags

Full updated Skills block. Changes from previous plan are marked with `[NEW]` or `[CHANGED]`.

---

### Category 1: Programming & Querying
**Icon:** 💻  
**Description:** Languages I use for data analysis, statistical computing, querying, and automation.  
**Tags:** `Python` · `R` · `SQL` · `VBA` · `Bash`

*No change from previous plan.*

---

### Category 2: Statistics & Machine Learning `[CHANGED]`
**Icon:** 🤖  
**Description:** Core methods: statistical inference, regression analysis, probability theory, classification, and model evaluation — built on a mathematical foundation in probability and linear algebra.  
**Tags:** `Statistical Inference` · `Hypothesis Testing` · `Regression Analysis` · `Probability Theory` · `Classification` · `Scikit-learn` · `Linear Algebra`

**Changes from previous plan:**
- `Predictive Modeling` **removed** — category-level label, already implied by Regression Analysis + Classification + Scikit-learn
- `Probability Theory` **added** `[NEW]` — backed by coursework, CV, foundational to all statistical work
- `Linear Algebra` **added** `[NEW]` — backed by CV, demonstrated by regression demo, implicit in TA role

---

### Category 3: Data Wrangling & Analysis
**Icon:** ⚙️  
**Description:** Tools and methods I use to clean, reshape, filter, and prepare data for analysis and modeling.  
**Tags:** `Pandas` · `NumPy` · `Excel / VBA` · `SQL` · `Data Cleaning`

*No change from previous plan.*

---

### Category 4: Visualization & Reporting
**Icon:** 📊  
**Description:** Tools I use to create clear charts, dashboards, and reports that make data findings legible.  
**Tags:** `Matplotlib` · `ggplot2` · `Plotly` · `Tableau` · `Power BI`

> **Pending decision:** Replace `Seaborn` with `ggplot2` (backed by R experience; differentiates from Python-only candidates) OR keep `Seaborn`. Both defensible. User to confirm.

---

### Category 5: Interactive & Technical Tools
**Icon:** 🌐  
**Description:** Tools I use to build interactive explanations, portfolio demos, and data-oriented web projects.  
**Tags:** `React` · `JavaScript` · `HTML/CSS` · `Git` · `Interactive Visualization`

*No change from previous plan.*

---

### Category 6: Professional Strengths
**Icon:** ⭐  
**Description:** Professional strengths that support fast learning, teamwork, problem solving, and project execution.  
**Tags:** `Clear Communication` · `Analytical Thinking` · `Ownership` · `Team Collaboration` · `Fast Learning`

*No change from previous plan.*

---

### Skills Block Change Summary (vs. Current Site)

| Current | Action | Final | Reason |
|---|---|---|---|
| Category "Data Science & ML" | Rename | "Statistics & Machine Learning" | Stronger statistical positioning |
| Category "Visualization & Tools" | Rename | "Visualization & Reporting" | Clarifies purpose |
| Category "Data Engineering & Wrangling" | Rename | "Data Wrangling & Analysis" | Removes "engineering" overclaim |
| Category "Web Development" | Rename | "Interactive & Technical Tools" | Removes frontend developer framing |
| Category "Core Competencies" | Rename | "Professional Strengths" | More professional wording |
| "PowerBI" | Rename | "Power BI" | Correct branding |
| Tag "PySpark" | Remove | — | High interview trap risk |
| Tag "Polars" | Remove | — | Niche, low signal |
| Tag "Tailwind CSS" | Remove | — | No data hiring signal |
| Tag "Vite" | Remove | — | No data hiring signal |
| Tag "Optimization" | Remove | — | Ambiguous as soft skill |
| Tag "Machine Learning Fundamentals" | Remove | — | Category-level label |
| Tag "Statistical Modeling" | Remove | — | Redundant |
| Tag "Data Wrangling & Analysis" (as tag) | Remove | — | Redundant inside its own category |
| Tag "Predictive Modeling" | Remove | — | Category-level label; implied by other tags |
| Tag "Teamwork" | Rename | "Team Collaboration" | More specific, professional |
| Tag "Git" | Add | Git | Expected baseline |
| Tag "Data Cleaning" | Add | Data Cleaning | Common ATS keyword |
| Tag "Regression Analysis" | Add | Regression Analysis | High signal; backed by TA + projects |
| Tag "Classification" | Add | Classification | Backed by coursework |
| Tag "Analytical Thinking" | Add | Analytical Thinking | Replaces Optimization |
| Tag "Excel / VBA" | Add | Excel / VBA | Analyst-track signal |
| Tag "SQL" | Move + keep | SQL in both Category 1 and 3 | ATS coverage; analyst track signal |
| Tag "Probability Theory" | Add `[NEW]` | Probability Theory | CV-backed; mathematical foundation |
| Tag "Linear Algebra" | Add `[NEW]` | Linear Algebra | CV-backed; demonstrated by regression demo; TA role |

---

## 8. What NOT to Change

| Item | Status |
|---|---|
| Hero content, CTAs, contact links | Do not change |
| Hero CTA buttons ("View Projects" / "Explore Skills") | Correct as-is |
| About.jsx content, bio paragraphs, right-side cards | Do not change |
| Projects.jsx content, project descriptions, links | Do not change |
| HonorsAwards.jsx content | Do not change |
| Education.jsx content and tags | Do not change |
| Contact.jsx content | Do not change |
| FancyVisualisationSection.jsx — any code, math, visuals | Do not change (only reposition in App.jsx) |
| Footer.jsx | Do not change |
| Any CSS, Tailwind, or design files | Do not change |
| awards.js, projects.js | Do not change |
| AI-assisted Development tag | Do not add (disputed) |
| ArcGIS tag | Do not add (not in current Skills) |
| Separate Mathematical Foundations category | Do not create |
| Calculus tag | Do not add |

---

## 9. Implementation Notes — Files That Will Need Editing

No code changes in this document. The following files will need editing after plan approval.

| File | What Changes |
|---|---|
| `src/App.jsx` | Reorder component rendering: Hero → About → Skills → FancyVisualisationSection → Projects → HonorsAwards → Education → Contact |
| `src/components/Navbar.jsx` | Remove "Profile" entry from `navLinks`. Add "Awards" (`#awards`). Reorder: Skills → Projects → Awards → Contact. Confirm `nav-link-awards` CSS class exists. |
| `src/data/skills.js` | Full rewrite of `skillCategories` array: renamed categories, removed tags, added tags (including Probability Theory and Linear Algebra) |
| `src/components/Skills.jsx` | Update `skillDescriptions` object: rename all keys to match new category names. Update Category 5 (Interactive & Technical Tools) description. **Also fix:** the conditional `category.category === "Data Science & ML"` → `"Statistics & Machine Learning"` in the card render logic (otherwise the special card style never applies) |

### Additional Flags — Beyond Skills/Nav Scope

These are not part of the current implementation task but are worth addressing in a separate pass:

| Gap | Why It Matters | Suggested Action |
|---|---|---|
| **TA for Linear Regression not shown on site** | Strongest credential for connecting skills to teaching ability. Directly validates regression demo. | Add Work Experience section, or mention in About section, or add a note near the regression demo |
| **Moshal Program Scholar not shown on site** | Competitive international scholarship — signals merit-based selection | Consider adding to HonorsAwards section or a separate credential badge |
| **GPA not shown on site** | 92.79 in major courses is a strong signal for RA and academic research roles | Consider adding to Education card as a data point |
| **Regression demo has no visible connection to TA role** | The two strongest assets (demo + TA) are disconnected on the site | A one-line caption near the demo could bridge this: "Built as part of teaching Linear Regression as a TA." |

---

## 10. Pending Decisions Before Implementation

Confirm these before editing files:

| Decision | Options | Default If Not Confirmed |
|---|---|---|
| Seaborn vs ggplot2 in Category 4 | Keep Seaborn, OR replace with ggplot2 | Keep Seaborn (safer, more widely recognized) |
| Excel / VBA as one tag or two separate tags | One combined "Excel / VBA", OR two separate "Excel" + "VBA" | One combined "Excel / VBA" |
| Linear Algebra in Skills — include or not | Add as recommended, OR skip | Add (per this analysis recommendation) |
| `nav-link-awards` CSS class — exists or needs adding | Check `src/index.css` | Need to verify before editing Navbar.jsx |
| TA role and Moshal Scholar — add to site in this pass | Yes or no | Not in scope for this pass; flag for future |

---

*End of updated analysis. No code was changed.*
