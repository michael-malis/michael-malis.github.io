# Skills Block, Site Structure & Navigation Update Plan

**Portfolio:** michael-malis.github.io  
**Profile:** Statistics & Data Science student, Hebrew University of Jerusalem  
**Target roles:** Data Science Intern · Data Analyst Intern · ML Intern · Research Assistant  
**Status:** Plan only — no code changed.  
**Date:** May 2026

---

## 1. Executive Summary

### Overall Verdict

The site is well-built and visually strong. The main problems are structural, not cosmetic. Three issues undercut interview conversion:

1. **Section order is not optimized for the HR journey.** The interactive regression geometry demo appears immediately after the Hero — second on the page — before HR has seen any evidence of skills or projects. It's a technical differentiator, not an opener. An HR screener who doesn't immediately recognize "linear regression as orthogonal projection" may disengage before reaching the strongest sections.

2. **About Me is buried in position 5.** After Hero, visitors see: math demo → award → projects → then finally the personal narrative. The story comes too late. Personal context should follow immediately after the opening identity card.

3. **Skills is in position 7 out of 8.** Most HR screeners who click "Skills" in the navbar jump there directly. But for linear readers — mobile, first-time visitors who scroll — Skills is the last thing before Contact. This reduces its framing effect: seeing Skills before Projects helps a recruiter understand what the projects prove.

### Main Skills Block Problem

Four high-risk tags (`PySpark`, `Polars`, `Tailwind CSS`, `Vite`) carry interview trap risk with no meaningful hiring signal for student data roles. Several approved renames and additions are not yet applied. Category names don't fully reflect statistical positioning.

### Main Navigation Problem

The navbar links to four sections: Profile, Projects, Skills, Contact. The **About Me** section and **Awards** section have no navbar entries. Awards in particular is a strong differentiator that HR cannot navigate to directly unless they scroll.

### Main Recommendation

Reorder sections: Hero → About → Skills → Projects → Awards → FancyVisualisationSection → Education → Contact.  
Add "Awards" to the navbar. Update Skills block per approved decisions.

### How This Improves Interview Conversion

- HR reads your story immediately after seeing your name → emotional connection before technical assessment.
- Skills appear before Projects → recruiter understands your toolkit before evaluating the evidence.
- Awards appears after Projects → the award has earned its credibility.
- The regression demo rewards technical reviewers who read far — it's not wasted on HR screeners who drop off early.
- Skills block becomes honest, legible, and interview-defensible.

---

## 2. Current State

### Files Involved

| File | Role |
|---|---|
| `src/App.jsx` | Defines section order and lazy-loads FancyVisualisationSection |
| `src/components/Navbar.jsx` | Defines `navLinks` array: labels, hrefs, order |
| `src/components/Hero.jsx` | Hero section: identity, meta rows, contact links, CTA buttons |
| `src/components/About.jsx` | About Me: bio paragraphs + specialization/education/approach cards |
| `src/components/Skills.jsx` | Renders skill cards; contains `skillDescriptions` object at module scope |
| `src/data/skills.js` | `skillCategories` array: category names, icons, skills arrays |
| `src/components/Projects.jsx` | Projects section with two sub-sections |
| `src/components/RegressionProjection/FancyVisualisationSection.jsx` | 3D interactive regression demo |
| `src/components/HonorsAwards.jsx` | Renders awards from `src/data/awards.js` |
| `src/components/Education.jsx` | Education card with tags |
| `src/components/Contact.jsx` | Contact links |
| `src/components/Footer.jsx` | Footer |
| `src/data/projects.js` | Project data |
| `src/data/awards.js` | Award data |

### Current Section Order (App.jsx)

| Position | Component | Section ID | Navbar Link |
|---|---|---|---|
| 1 | `Hero` | `#about` | "Profile" |
| 2 | `FancyVisualisationSection` | `#fancy-visualisation` | — (none) |
| 3 | `HonorsAwards` | `#awards` | — (none) |
| 4 | `Projects` | `#projects` | "Projects" |
| 5 | `About` | `#about-me` | — (none) |
| 6 | `Education` | `#education` | — (none) |
| 7 | `Skills` | `#skills` | "Skills" |
| 8 | `Contact` | `#contact` | "Contact" |
| — | `Footer` | — | — |

### Current Skills Block (src/data/skills.js + src/components/Skills.jsx)

| # | Category | Icon | Tags | Description (Skills.jsx) |
|---|---|---|---|---|
| 1 | Programming Languages | 💻 | Python, R, VBA, Bash | "Languages I use for data analysis, automation, academic programming, and web-based projects." |
| 2 | Data Science & ML | 🤖 | Statistical Inference, Predictive Modeling, Hypothesis Testing, Machine Learning Fundamentals, Scikit-learn, Statistical Modeling | "Core methods: statistical inference, regression analysis, probability models, simulation, classification, clustering, and model evaluation." |
| 3 | Data Engineering & Wrangling | ⚙️ | Data Wrangling & Analysis, Pandas, NumPy, Polars, PySpark, SQL | "Tools and methods I use to clean, transform, organize, and prepare data for analysis and modeling." |
| 4 | Visualization & Tools | 📊 | Matplotlib, Seaborn, Plotly, Tableau, PowerBI | "Tools I use to create clear charts, dashboards, and reports that make data easier to understand." |
| 5 | Web Development | 🌐 | React, JavaScript, HTML/CSS, Tailwind CSS, Vite | "Frontend technologies I use to build portfolio pages, project interfaces, and interactive learning tools." |
| 6 | Core Competencies | ⭐ | Optimization, Teamwork, Fast Learning, Ownership, Clear Communication | "Professional strengths that support fast learning, teamwork, problem solving, and project execution." |

### Current Navbar (src/components/Navbar.jsx)

```js
const navLinks = [
  { href: '#about',    label: 'Profile'  },
  { href: '#projects', label: 'Projects' },
  { href: '#skills',   label: 'Skills'   },
  { href: '#contact',  label: 'Contact'  },
];
```

### Current CTA Buttons (src/components/Hero.jsx)

```jsx
<a href="#projects" className="btn-primary">View Projects</a>
<a href="#skills"   className="btn-secondary">Explore Skills</a>
```

---

## 3. Current Section Order Audit

### Position 1 — Hero (`#about`)
- **What it gives HR:** Name, role, institution, meta rows (focus / status / location), email, LinkedIn, two CTA buttons. Strong opening.
- **Timing:** Correct position.
- **Action:** Keep at position 1. No changes to content.
- **Hiring signal:** High — clear identity, professional presentation.
- **Interview conversion effect:** Strong positive. Sets expectations correctly.

---

### Position 2 — FancyVisualisationSection (`#fancy-visualisation`)
- **What it gives HR:** Interactive 3D math demo — linear regression as orthogonal projection. No section label in the navbar. No description visible at a glance without reading carefully.
- **Timing:** **Too early.** This is the most technically demanding section on the site. An HR screener who arrived by scrolling encounters it as the very first piece of evidence — before seeing projects, before seeing personal narrative, before understanding context. For a non-technical HR person, seeing draggable vectors and OLS derivation formulas as the first impression after the name card is disorienting.
- **Action:** Move to position 6 (after HonorsAwards, after Projects). Reward technical reviewers who read deeply.
- **Hiring signal for HR:** Low to medium at position 2 (no context yet). High at position 6 (contextualized by projects and awards).
- **Interview conversion effect:** Negative at position 2 for linear readers. Positive at position 6 for technical reviewers.

---

### Position 3 — HonorsAwards (`#awards`)
- **What it gives HR:** 1st Place Hackathon Award. Team work under pressure. Cross-disciplinary collaboration. React + API + hardware integration. Strong achievement signal.
- **Timing:** Good that it appears before the middle. But currently no navbar link — HR cannot navigate here directly.
- **Action:** Move to position 5 (after Projects). Add "Awards" to navbar.
- **Reason:** Seeing Projects first makes the Award more meaningful — the award validates skills already demonstrated by projects. An award that appears before Projects can seem isolated.
- **Risk if placed too early:** Award before Projects feels like front-loading without evidence.
- **Hiring signal:** Very high. "1st Place" is a concrete achievement, not a claim.
- **Interview conversion effect:** High, especially for roles that value initiative and delivery.

---

### Position 4 — Projects (`#projects`)
- **What it gives HR:** Concrete evidence — two data analysis sub-sections, multiple projects, links to full reports.
- **Timing:** Position 4 is reasonable but comes after the math demo and award. Framing could be better if Skills appeared before Projects (so HR understands the toolkit before seeing its application).
- **Action:** Move to position 4 (keep approximately). Adjust surrounding sections.
- **Risk if placed too low:** If Projects appears after position 5, HR may leave before seeing the strongest evidence.
- **Hiring signal:** Very high. Projects are the primary proof of ability.
- **Interview conversion effect:** Highest of any section.

---

### Position 5 — About (`#about-me`)
- **What it gives HR:** Personal narrative — Aliyah/IDF background, academic focus, analytical approach, methodology. Bio paragraphs + specialization / education / approach cards.
- **Timing:** **Too late.** The personal story appears fifth, after technical content and achievements. An HR reader who wanted the human context has already scrolled past the math demo and two evidence sections. The story feels disconnected from the opening Hero card because it's separated by three sections.
- **Action:** Move to position 2 (immediately after Hero).
- **Reason:** The About section extends and deepens the Hero identity card. Moving it directly after Hero creates a continuous narrative: "Here's who I am → here's my story → here's what I can do." This is how portfolios convince human readers.
- **Hiring signal:** Medium direct, high indirect. It differentiates from other statistics students by establishing character and motivation.
- **Interview conversion effect:** Strong — especially for RA and analyst roles where cultural fit and communication matter.

---

### Position 6 — Education (`#education`)
- **What it gives HR:** Institution (Hebrew University), degree (B.Sc. Data Science & Statistics), In Progress badge, coursework tags.
- **Timing:** Acceptable. Education is a qualifying criterion for many roles but not the primary selling point for a student portfolio.
- **Action:** Move to position 7 (after FancyVisualisationSection). No content changes.
- **Risk if placed too high:** Leads with credentials before evidence — résumé pattern, not portfolio pattern.
- **Risk if placed too low:** Some HR ATS reviewers look for education first; those people use the navbar or Ctrl+F, not linear scrolling.
- **Hiring signal:** Medium. Required checkbox for most roles, not a differentiator.
- **Interview conversion effect:** Neutral if properly positioned; negative if leading.

---

### Position 7 — Skills (`#skills`)
- **What it gives HR:** Full technical toolkit — six category cards with tags.
- **Timing:** **Too late for linear readers.** Position 7 out of 8 means HR who is linearly scrolling sees the skill declaration only after seeing all evidence. This inverts the logical flow: "You've already seen everything — now here's what I know." Skills should frame Projects, not follow them.
- **Action:** Move to position 3 (after About, before Projects). Skills establishes the technical vocabulary; Projects then demonstrates it in practice.
- **Hiring signal:** High, especially after the Skills block is cleaned up per approved decisions.
- **Interview conversion effect:** Positive when seen before Projects. Weak when seen after (too late to influence context).

---

### Position 8 — Contact (`#contact`)
- **What it gives HR:** Email + LinkedIn. Simple.
- **Timing:** Correct. Always last — the call to action after being convinced.
- **Action:** Keep at final position.
- **Hiring signal:** Low alone, but essential — easy access to reach out.
- **Interview conversion effect:** Crucial. If HR scrolls to here, they've made a decision. Friction here = lost interview.

---

## 4. Recommended Section Order

| New Position | Section | Reason | Hiring Signal | Risk if Too Low | Risk if Too High |
|---|---|---|---|---|---|
| 1 | Hero | Opening identity, CTAs | High | — | — |
| 2 | About | Personal story immediately after identity → continuous narrative | Medium-High | Connection with candidate lost | Leads with bio not skills (OK for portfolio) |
| 3 | Skills | Frame technical vocabulary before showing project evidence | High | Appears after evidence, loses framing | Appears before personal story → too clinical |
| 4 | Projects | Main evidence — proves skills declared in position 3 | Very High | HR may miss primary evidence | Appears before context → less convincing |
| 5 | HonorsAwards | Achievement validates projects and reinforces skills | High | Lost below the fold for many readers | Award before evidence = unsubstantiated |
| 6 | FancyVisualisationSection | Deep technical differentiator — rewards patient technical readers | High (for technical) | Completely missed by fast readers | Confuses non-technical HR before evidence |
| 7 | Education | Credential checkpoint — qualifying, not differentiating | Medium | ATS risk (some look for education early, use navbar) | Leads with credentials not skills |
| 8 | Contact | CTA — final invitation to reach out | Essential | Conversion lost | No risk except information order |

---

## 5. Navbar Audit

| Current Label | Action | Recommended Label | Why | Priority | Interview Conversion Effect |
|---|---|---|---|---|---|
| Profile | Keep | Profile | Links to Hero (`#about`). "Profile" is clearer than "Home" and more portfolio-appropriate than "Hero". | High | Positive — clear anchor for returning visitors |
| Projects | Keep | Projects | Most important nav item for HR. Clear, direct. | Very High | Highest — directs to primary evidence |
| Skills | Keep | Skills | Second most important nav item. Clear. | High | High — helps HR who want to scan toolkit quickly |
| Contact | Keep | Contact | Essential. Keep last. | High | Essential for conversion |
| — | **Add** | **Awards** | HonorsAwards section has no navbar entry. "1st Place" is a strong differentiator. HR who lands from LinkedIn and wants to see achievements cannot navigate there. | Medium-High | Positive — adds direct access to a key differentiator |

### Notes on Navbar Additions

- **Awards** should be added between Projects and Skills, or between Skills and Contact — depending on where HonorsAwards appears in the new section order.
- If Awards appears at position 5 (after Projects), recommended navbar order: Profile → Projects → Skills → Awards → Contact
- The About section (`#about-me`) does NOT need a navbar link — it flows directly after Hero in the new order. Visitors who want more personal information scroll naturally; a nav link would be redundant.
- Education does NOT need a navbar link — it is a qualifying section, not a selling point.

---

## 6. Recommended Navbar

### Desktop Navbar

```
michael.malis_    [Profile]  [Projects]  [Skills]  [Awards]  [Contact]
```

Five items. Readable, not crowded on desktop.

### Mobile Navbar

Same order as desktop. All five items visible in the dropdown. Mobile hamburger menu already exists and auto-renders `navLinks` — adding one item is a data change only.

### Must Be Visible

- Profile
- Projects
- Skills
- Contact

### Can Be Added (Strong Recommendation)

- Awards — direct access to `#awards` (a concrete differentiator)

### Can Stay Off Navbar

- About (`#about-me`) — flows naturally after Hero; no need for navigation
- Education (`#education`) — qualifying section; no nav needed
- FancyVisualisationSection (`#fancy-visualisation`) — intentionally discoverable only by scrolling

---

## 7. CTA Audit

### Current Hero CTAs

| Button | Label | Target | Type | Assessment |
|---|---|---|---|---|
| Primary | "View Projects" | `#projects` | btn-primary | Keep. Projects is primary evidence. "View" is direct. |
| Secondary | "Explore Skills" | `#skills` | btn-secondary | Keep. Second strongest section for HR. |

### Assessment

- **Two CTAs in Hero is correct.** More than two creates choice paralysis; fewer than two leaves the visitor with one path.
- **Primary = Projects** is the right priority. Projects is the strongest evidence section.
- **Secondary = Skills** is the right secondary. HR who wants toolkit overview before evidence clicks here.
- Labels are clean. "View" and "Explore" are distinct in tone (direct vs. browsing) — keep the distinction.
- No CTA needed for Contact in Hero. Contact appears naturally at the end of the journey. Email and LinkedIn are already linked in the Hero body — that's enough for mobile-first screeners.
- No CTA needed for Awards. The section flows naturally in the new order.
- **Note:** Section IDs (#projects, #skills) are anchor targets and do not change with visual reordering. CTAs will still work correctly after section order is changed.

---

## 8. Skills Block Required Changes

### Mandatory Changes

| Current Item | Action | Final Item | Reason | Risk Level | Hiring Signal |
|---|---|---|---|---|---|
| Category: "Data Science & ML" | Rename | "Statistics & Machine Learning" | Puts Statistics first — stronger signal for RA and analyst roles. "ML" alone reads as pure ML engineering. | Low | High |
| Category: "Visualization & Tools" | Rename | "Visualization & Reporting" | "Reporting" clarifies the purpose: readable outputs, not just technical charts. | Low | High |
| Tag: "PowerBI" | Rename | "Power BI" | Correct brand capitalization. Reduces ATS mismatch risk. | Low | Medium |
| Tag: "PySpark" (in Data Engineering & Wrangling) | Remove | — | Triggers distributed systems and cluster infrastructure questions. No project evidence. High interview trap risk for student-level candidate. | High risk if kept | None gained |
| Tag: "Polars" (in Data Engineering & Wrangling) | Remove | — | Niche library; low hiring signal for junior/student roles. Most hiring managers will not recognize it. | Medium risk if kept | Very low |
| Tag: "Tailwind CSS" (in Web Development) | Remove | — | No data hiring signal. Consumes space in a skills block optimized for data roles. | Low risk | None for data roles |
| Tag: "Vite" (in Web Development) | Remove | — | Build tooling. Zero relevance to data science, analyst, or RA hiring. | Low risk | None |
| Tag: "Optimization" (in Core Competencies) | Remove | — | Ambiguous — reads as operations research/math term, not a soft skill. Confuses recruiters. | Medium (ambiguity risk) | Confusing |
| Tag: "Git" | Add (to Web/Technical Tools) | Git | Expected baseline for any technical role. Its absence can read as an oversight. | Low | Medium-High |
| Tag: "Data Cleaning" | Add (to Data Wrangling & Analysis) | Data Cleaning | Common ATS keyword. Every project involves it. Honest, broad, useful signal. | Low | Medium-High |
| Tag: "Regression Analysis" | Add (to Statistics & Machine Learning) | Regression Analysis | Explicitly backed by coursework and projects. Core method for Statistics students. High ATS frequency. | Low | High |
| Tag: "Classification" | Add (to Statistics & Machine Learning) | Classification | Supported by ML fundamentals coursework and scikit-learn use. Honest, specific, common. | Low | Medium |
| Tag: "Analytical Thinking" | Add (to Professional Strengths) | Analytical Thinking | Appears in JDs as near-mandatory language. Backed by CV. Replaces the vague "Optimization" slot. | Low | Medium-High |

### Desirable Changes

| Item | Action | Final Item | Reason | Risk Level |
|---|---|---|---|---|
| SQL visibility | Move + keep | SQL stays in Data Wrangling AND add to Programming Languages | SQL is the top-scanned ATS keyword for analyst roles. Currently it only appears in the third category. Duplicate presence in Programming Languages increases ATS coverage. | Low |
| VBA / Excel | Rename tag | "Excel / VBA" (combined in Data Wrangling) or separate "Excel" + keep "VBA" in Programming Languages | Excel is a strong analyst-track signal not currently visible. VBA is already shown. Combined form in Data Wrangling is clean. | Low |
| Web skills description | Update description | "Tools I use to build interactive explanations, portfolio demos, and data-oriented web projects." | Removes "frontend" framing. Prevents the profile reading as a web developer. Ties web skills to data communication purpose. | Low |
| Category: "Data Engineering & Wrangling" | Rename | "Data Wrangling & Analysis" | "Engineering" implies data pipeline and infrastructure work — overclaim for student level. "Wrangling & Analysis" is honest and maps to real intern tasks. | Low |
| Tag: "Data Wrangling & Analysis" (redundant tag inside its own category) | Remove | — | A tag named identically to its own category adds nothing. | Low |
| Tag: "Machine Learning Fundamentals" | Remove | — | Category-level label, not a specific skill. Replaced by Regression Analysis + Classification + Scikit-learn. | Low |
| Tag: "Statistical Modeling" | Remove | — | Redundant. Already covered by Statistical Inference + Predictive Modeling + Regression Analysis. | Low |
| Tag: "Seaborn" | Consider replacing with "ggplot2" | ggplot2 | ggplot2 is the primary R visualization library. If the candidate uses R (which is listed), ggplot2 is a natural and highly legible addition. Seaborn is Python-only and less differentiated. This swap is optional — both are defensible. | Low |
| ArcGIS | Do not add | — | Not currently in Skills block. Per approved constraints, do not add unless already present. | N/A |

---

## 9. Final Proposed Skills Block

This is the exact structure to implement after approval.

---

### Category 1: Programming & Querying
**Icon:** 💻  
**Description:** Languages I use for data analysis, statistical computing, querying, and automation.  
**Tags:** `Python` · `R` · `SQL` · `VBA` · `Bash`

**Notes:** SQL moved here from category 3 for ATS visibility. VBA stays — honest, analyst-track signal.

---

### Category 2: Statistics & Machine Learning
**Icon:** 🤖  
**Description:** Core methods: statistical inference, regression analysis, probability models, simulation, classification, clustering, and model evaluation.  
**Tags:** `Statistical Inference` · `Hypothesis Testing` · `Regression Analysis` · `Predictive Modeling` · `Classification` · `Scikit-learn`

**Notes:** Renamed from "Data Science & ML". Removed Machine Learning Fundamentals (category label, not a skill tag) and Statistical Modeling (redundant). Added Regression Analysis and Classification.

---

### Category 3: Data Wrangling & Analysis
**Icon:** ⚙️  
**Description:** Tools and methods I use to clean, reshape, filter, and prepare data for analysis and modeling.  
**Tags:** `Pandas` · `NumPy` · `Excel / VBA` · `SQL` · `Data Cleaning`

**Notes:** Renamed from "Data Engineering & Wrangling". Removed: Data Wrangling & Analysis (redundant tag), PySpark (overclaim), Polars (niche). Added: Excel / VBA (analyst-track signal), Data Cleaning (ATS keyword). SQL appears here and in Category 1 — intentional duplication for ATS coverage.

---

### Category 4: Visualization & Reporting
**Icon:** 📊  
**Description:** Tools I use to create clear charts, dashboards, and reports that make data findings legible.  
**Tags:** `Matplotlib` · `ggplot2` · `Plotly` · `Tableau` · `Power BI`

**Notes:** Renamed from "Visualization & Tools". Renamed PowerBI → Power BI. Optional: replace Seaborn with ggplot2 (backed by R experience; differentiates from Python-only candidates). Both Tableau and Power BI are kept — both are already present in the current block.

---

### Category 5: Interactive & Technical Tools
**Icon:** 🌐  
**Description:** Tools I use to build interactive explanations, portfolio demos, and data-oriented web projects.  
**Tags:** `React` · `JavaScript` · `HTML/CSS` · `Git` · `Interactive Visualization`

**Notes:** Renamed from "Web Development". Removed: Tailwind CSS, Vite (no data hiring signal). Added: Git (expected baseline), Interactive Visualization (ties to the regression demo). Description reframed: no longer reads as frontend developer.

---

### Category 6: Professional Strengths
**Icon:** ⭐  
**Description:** Professional strengths that support fast learning, teamwork, problem solving, and project execution.  
**Tags:** `Clear Communication` · `Analytical Thinking` · `Ownership` · `Team Collaboration` · `Fast Learning`

**Notes:** Renamed from "Core Competencies". Renamed Teamwork → Team Collaboration (more specific, more professional). Removed Optimization (ambiguous). Added Analytical Thinking (replaces Optimization slot). Description unchanged — already correct.

---

## 10. Files That Will Be Changed Later

| File | What Changes | Scope |
|---|---|---|
| `src/App.jsx` | Reorder component rendering in `App()` function. New order: Hero → About → Skills → Projects → HonorsAwards → FancyVisualisationSection → Education → Contact. | 8 lines reordered; logic untouched |
| `src/components/Navbar.jsx` | Add `{ href: '#awards', label: 'Awards', className: 'nav-link nav-link-awards' }` to `navLinks` array. Confirm correct position in array (after Skills, before Contact). | 1 item added to array |
| `src/data/skills.js` | Apply all tag changes: renames, removals, additions. Category name updates. Full `skillCategories` array rewrite. | Data-only; no component logic touched |
| `src/components/Skills.jsx` | Update `skillDescriptions` object: rename category keys to match new names in skills.js; update Web Development description to new framing. | 3-4 string value updates; structure unchanged |

**Do not edit these files during the planning phase. Edit only after explicit approval.**

---

## 11. Commands To Run Later

Run these during implementation and verification. In order.

### Before Starting

```powershell
# Confirm working directory and current git state
git status
git diff
```

### Locating Skills Data (if needed)

```powershell
# Find Skills component and data
Select-String -Path "src\components\Skills.jsx" -Pattern "skillDescriptions|skillCategories" | Select-Object LineNumber, Line
Select-String -Path "src\data\skills.js" -Pattern "category|skills" | Select-Object LineNumber, Line
```

### Locating Section Order (if needed)

```powershell
# Confirm section order in App.jsx
Get-Content "src\App.jsx"
```

### Locating Navbar Data (if needed)

```powershell
# Confirm navLinks array
Select-String -Path "src\components\Navbar.jsx" -Pattern "navLinks|href|label" | Select-Object LineNumber, Line
```

### After Making Changes

```powershell
# Review all changed files in diff
git diff src/App.jsx src/components/Navbar.jsx src/data/skills.js src/components/Skills.jsx

# Run linter
npm run lint

# Run build — confirms no broken imports or syntax errors
npm run build

# Confirm no unintended files touched
git status
```

### Optional — After Approving Changes

```powershell
# Stage only the four intended files
git add src/App.jsx src/components/Navbar.jsx src/data/skills.js src/components/Skills.jsx

# Review staged diff before committing
git diff --staged
```

---

## 12. Changes Explicitly Not Applied

The following will NOT be applied during implementation. They were reviewed and rejected or disputed.

| Item | Status | Reason |
|---|---|---|
| `AI-assisted Development` tag | **Not applied** | Disputed. Per approved constraints, not to be added. |
| `AI-assisted coding workflows` tag | **Not applied** | Disputed. Per approved constraints, not to be added. |
| Adding both Tableau AND Power BI when not already present | **Not applicable** | Both are already present in current block. Both kept. |
| ATS-stuffed keyword expansion | **Not applied** | All added tags are backed by CV, coursework, or projects only. |
| Visual or CSS redesign | **Not applied** | Plan covers text and structure only. |
| Unrelated component changes | **Not applied** | Only four files modified. |
| `ArcGIS` or `ArcGIS coursework` tag | **Not applied** | Not currently present in Skills block. Per constraint: do not add unless already present. |
| Turning portfolio into a resume | **Not applied** | Section character and personal narrative preserved. |
| Removing FancyVisualisationSection | **Not applied** | Section is preserved; only repositioned. |
| Changing Hero CTAs | **Not applied** | Current CTAs are correct and require no changes. |

---

## 13. Risks and Things To Confirm Before Implementation

### Confirmed

- Tableau AND Power BI are both already present in current Skills block (`Tableau`, `PowerBI`). Both can stay; PowerBI renamed to Power BI.
- ArcGIS is NOT currently in the Skills block. Do not add.
- `skillDescriptions` is already at module scope in `Skills.jsx` (moved in a previous session). No re-move needed.
- Section order is controlled in `App.jsx` component rendering order — changing order = reordering JSX lines.
- Navbar links are in a `navLinks` array at the top of `Navbar.jsx` — adding/reordering is a data-only change.
- CTA buttons in Hero use anchor IDs (`#projects`, `#skills`). IDs are defined in each section component and do not change when visual order changes. CTAs remain correct after reorder.

### Needs Confirmation Before Implementation

| Question | Where to Check | Why It Matters |
|---|---|---|
| Does `nav-link-awards` CSS class exist, or does a new class need to be added for the Awards nav link? | `src/index.css` or Tailwind config | Navbar renders `className={link.className}` per link — a missing class causes style inconsistency, not a crash |
| Should `Seaborn` be replaced by `ggplot2` or kept alongside it? | User decision | ggplot2 is more differentiated; Seaborn is more commonly known. Either is defensible. |
| Should `EDA` be added to Data Wrangling & Analysis as a tag? | User decision | EDA (Exploratory Data Analysis) is a common ATS term; backed by projects. Not included in final draft above but could replace one slot. |
| Should `Interactive Visualization` be the tag wording, or prefer `D3.js` / `Three.js` / `WebGL` if any are actually used in the regression demo? | Check FancyVisualisationSection dependencies | More specific tag is better if defensible in interview. "Interactive Visualization" is safe but generic. |
| Is `Excel / VBA` cleaner as one combined tag or two separate tags (`Excel`, `VBA`)? | User preference | Combined reads as one skill; separate allows ATS to match each independently. |

---

## 14. Final Implementation Plan

### Section Order Changes

**File:** `src/App.jsx`

**Change:** Reorder component rendering in `App()`.

**New order:**
1. `<Navbar />`
2. `<Hero />`
3. `<About />`
4. `<Skills />`
5. `<Projects />`
6. `<HonorsAwards />`
7. `<Suspense fallback={...}><FancyVisualisationSection /></Suspense>`
8. `<Education />`
9. `<Contact />`
10. `<Footer />`

**What does not change:** All imports, lazy loading logic, `RegressionFallback`, and `Suspense` wrapping remain identical. Only the render order changes.

---

### Navbar Changes

**File:** `src/components/Navbar.jsx`

**Change:** Add one entry to `navLinks` array.

**New navLinks array:**
```js
const navLinks = [
  { href: '#about',    label: 'Profile',  className: 'nav-link nav-link-about'    },
  { href: '#projects', label: 'Projects', className: 'nav-link nav-link-projects' },
  { href: '#skills',   label: 'Skills',   className: 'nav-link nav-link-skills'   },
  { href: '#awards',   label: 'Awards',   className: 'nav-link nav-link-awards'   },
  { href: '#contact',  label: 'Contact',  className: 'nav-link nav-link-contact'  },
];
```

**Confirm before applying:** Check whether `nav-link-awards` CSS class exists. If not, decide whether to reuse an existing class or add a new one.

---

### Skills Block Changes

**File:** `src/data/skills.js`

**Change:** Replace `skillCategories` array with the following:

```js
export const skillCategories = [
  {
    category: "Programming & Querying",
    icon: "💻",
    skills: ["Python", "R", "SQL", "VBA", "Bash"]
  },
  {
    category: "Statistics & Machine Learning",
    icon: "🤖",
    skills: ["Statistical Inference", "Hypothesis Testing", "Regression Analysis", "Predictive Modeling", "Classification", "Scikit-learn"]
  },
  {
    category: "Data Wrangling & Analysis",
    icon: "⚙️",
    skills: ["Pandas", "NumPy", "Excel / VBA", "SQL", "Data Cleaning"]
  },
  {
    category: "Visualization & Reporting",
    icon: "📊",
    skills: ["Matplotlib", "ggplot2", "Plotly", "Tableau", "Power BI"]
  },
  {
    category: "Interactive & Technical Tools",
    icon: "🌐",
    skills: ["React", "JavaScript", "HTML/CSS", "Git", "Interactive Visualization"]
  },
  {
    category: "Professional Strengths",
    icon: "⭐",
    skills: ["Clear Communication", "Analytical Thinking", "Ownership", "Team Collaboration", "Fast Learning"]
  }
];
```

**Note on Seaborn → ggplot2:** The draft above replaces Seaborn with ggplot2. If the preference is to keep Seaborn, replace `"ggplot2"` with `"Seaborn"` in Category 4.

---

### Skills Descriptions Changes

**File:** `src/components/Skills.jsx`

**Change:** Update `skillDescriptions` object — rename keys to match new category names, update one description.

```js
const skillDescriptions = {
  "Programming & Querying": "Languages I use for data analysis, statistical computing, querying, and automation.",
  "Statistics & Machine Learning": "Core methods: statistical inference, regression analysis, probability models, simulation, classification, clustering, and model evaluation.",
  "Data Wrangling & Analysis": "Tools and methods I use to clean, reshape, filter, and prepare data for analysis and modeling.",
  "Visualization & Reporting": "Tools I use to create clear charts, dashboards, and reports that make data findings legible.",
  "Interactive & Technical Tools": "Tools I use to build interactive explanations, portfolio demos, and data-oriented web projects.",
  "Professional Strengths": "Professional strengths that support fast learning, teamwork, problem solving, and project execution.",
};
```

**Also check:** Any hardcoded reference to `"Data Science & ML"` in the `Skills.jsx` render logic:

```jsx
category.category === "Data Science & ML" ? "skill-card-data-science" : ""
```

This conditional will break (always false) after the rename. Update to:

```jsx
category.category === "Statistics & Machine Learning" ? "skill-card-data-science" : ""
```

---

### What NOT To Change

- Hero content, layout, or CTAs
- About.jsx content or layout
- Projects.jsx content or layout
- HonorsAwards.jsx content or layout
- Education.jsx content or layout
- Contact.jsx content or layout
- FancyVisualisationSection.jsx (any file under RegressionProjection/)
- Footer.jsx
- Any CSS, Tailwind, or design files
- Any data files other than skills.js (awards.js, projects.js untouched)
- All import statements in App.jsx
- Lazy loading and Suspense logic in App.jsx

---

## 15. Implementation Checklist

Complete in order, only after this plan is approved.

- [ ] **Inspect git status** — confirm clean working tree before starting (`git status`)
- [ ] **Confirm `nav-link-awards` CSS class** — check `src/index.css` for existing nav-link classes; add or reuse as needed
- [ ] **Confirm Seaborn vs ggplot2 decision** — user decision before editing skills.js
- [ ] **Confirm `Excel / VBA` vs separate `Excel` + `VBA` decision** — user decision
- [ ] **Apply section order changes** — edit `src/App.jsx`, reorder component rendering
- [ ] **Apply navbar changes** — edit `src/components/Navbar.jsx`, add Awards link
- [ ] **Apply skills.js changes** — edit `src/data/skills.js`, replace `skillCategories` array
- [ ] **Apply skillDescriptions changes** — edit `src/components/Skills.jsx`, rename keys + update descriptions
- [ ] **Fix conditional class check** — update `"Data Science & ML"` → `"Statistics & Machine Learning"` in Skills.jsx render
- [ ] **Run lint** — `npm run lint` — fix any warnings before proceeding
- [ ] **Run build** — `npm run build` — confirm no errors
- [ ] **Review git diff** — `git diff` — confirm only four files changed
- [ ] **Confirm disputed changes were NOT applied** — verify no AI-assisted tags, no ArcGIS, no ATS stuffing, no CSS changes
- [ ] **Visual check** — open dev server (`npm run dev`), scroll through full page in browser, confirm section order, navbar, and Skills block are correct
- [ ] **Mobile check** — open mobile view, confirm hamburger menu shows all five nav items correctly

---

*End of plan. No code was changed. All changes above are pending approval.*
