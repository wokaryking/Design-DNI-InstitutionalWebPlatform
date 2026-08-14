Continue working on the existing DNI República Dominicana website project.

IMPORTANT:
Do not redesign the visual identity of the existing website.
Maintain the current design system, including:
- Dark navy / deep blue background
- Steel gray
- White
- Institutional gold accents
- Existing typography
- Existing spacing system
- Existing header and footer
- Existing buttons
- Existing visual language
- Existing responsive behavior

This task is to CREATE THE INDIVIDUAL DESTINATION PAGES for every item inside the "Institución" navigation category.

The pages must be structured as real website routes/pages, not as visual mockup cards.

--------------------------------------------------
INSTITUCIÓN NAVIGATION
--------------------------------------------------

The "Institución" dropdown contains:

1. Sobre Nosotros
2. Nuestra Historia
3. Misión · Visión · Valores
4. Marco Legal

Additionally, the following institutional content must have its own dedicated space/page:

5. El Rol de la DNI
6. ¿Qué es la Inteligencia?

Create an individual destination page for EACH item.

When a user selects an item from the "Institución" dropdown, the website must navigate to its corresponding page.

Suggested routes:

/sobre-nosotros
/historia
/mision-vision-valores
/marco-legal
/rol-de-la-dni
/que-es-la-inteligencia

Use clean semantic route names.

--------------------------------------------------
1. SOBRE NOSOTROS
--------------------------------------------------

Create a dedicated "Sobre Nosotros" page.

Purpose:
Introduce the Dirección Nacional de Inteligencia (DNI), its institutional purpose, role, and relationship with national security and democratic institutions.

Include:

- Hero section
- Institutional introduction
- What is the DNI?
- Institutional role
- What the DNI does
- What the DNI does NOT do
- Relationship with national security
- Relationship with democratic institutions
- Section explaining the role of intelligence in protecting the Dominican Republic
- Optional institutional video section

VIDEO REQUIREMENT:

Do NOT use an image as a placeholder for video.

Create a real HTML5 video component using:

<video controls>
    <source src="VIDEO_URL_HERE" type="video/mp4">
</video>

The video URL must be clearly editable so developers can replace it later without redesigning the component.

Include a poster attribute placeholder if appropriate:

poster="VIDEO_POSTER_URL_HERE"

Do not generate a fake video thumbnail.

--------------------------------------------------
2. NUESTRA HISTORIA
--------------------------------------------------

Create a dedicated "Nuestra Historia" page.

The page should communicate the historical development of the institution through a modern visual timeline.

Include:

- Hero section
- Introduction
- Institutional timeline
- Important dates
- Major institutional milestones
- Evolution of the intelligence system
- Current institutional stage
- Closing section

Use a vertical or horizontal interactive timeline depending on the available screen size.

Each historical milestone should have:
- Date
- Title
- Short description
- Optional supporting media

IMPORTANT:

Do not invent historical dates, events, names, or institutional milestones.

Use clearly marked editable content placeholders where the official DNI information is not yet available.

Example:

DATE_PLACEHOLDER
HISTORICAL_EVENT_TITLE
OFFICIAL_DESCRIPTION_PLACEHOLDER

VIDEO:

If an institutional historical video is available, include a real HTML5 video element instead of an image:

<video controls>
    <source src="VIDEO_URL_HERE" type="video/mp4">
</video>

--------------------------------------------------
3. MISIÓN · VISIÓN · VALORES
--------------------------------------------------

Create a dedicated page specifically for:

- Misión
- Visión
- Valores

Do not simply place the three texts in three generic cards.

Create a sophisticated institutional composition.

Suggested structure:

Hero
↓
Misión
↓
Visión
↓
Valores
↓
Principios institucionales
↓
Closing institutional statement

For "Valores", create a visually organized system that allows several principles to be presented clearly.

Use the official institutional wording provided by the DNI.

Do not rewrite or alter official statements without authorization.

Use typography and spacing to make long institutional text easy to read.

--------------------------------------------------
4. MARCO LEGAL
--------------------------------------------------

Create a dedicated "Marco Legal" page.

This page must feel authoritative, organized and highly trustworthy.

Include:

- Hero section
- Introduction to the legal framework
- Constitution of the Dominican Republic
- Laws governing intelligence activities
- Institutional legal framework
- Fundamental rights and safeguards
- Institutional responsibilities
- Legal documents / resources
- Downloadable documents section

Create a document library interface.

Each document should include:

- Document title
- Document type
- Short description
- Publication/update date if available
- "Consultar" or "Descargar" action

Do NOT invent laws or legal information.

Use editable placeholders until the official DNI content is provided.

If a PDF/document URL is available, the button must be structured so the developer can replace the URL directly.

Example:

href="DOCUMENT_URL_HERE"

--------------------------------------------------
5. EL ROL DE LA DNI
--------------------------------------------------

Create a dedicated page explaining the role of the DNI.

This page should clearly communicate:

- What the DNI is
- Its role in national intelligence
- Its preventive function
- Its contribution to national security
- Its relationship with democratic institutions
- Its institutional limits
- The importance of legality and fundamental rights

IMPORTANT:

The page should help ordinary citizens understand the institution.

Avoid excessive technical language.

Use clear information hierarchy.

Include a visual section explaining:

INTELLIGENCE
↓
ANALYSIS
↓
PREVENTION
↓
DECISION SUPPORT
↓
NATIONAL SECURITY

Do not present operational or classified information.

If the DNI provides an institutional explanatory video, include a real HTML5 video component:

<video controls>
    <source src="VIDEO_URL_HERE" type="video/mp4">
</video>

--------------------------------------------------
6. ¿QUÉ ES LA INTELIGENCIA?
--------------------------------------------------

Create a dedicated educational page.

The purpose is to explain intelligence in a simple and accessible way.

Include sections such as:

- Definition of intelligence
- Intelligence vs. information
- Intelligence cycle
- Collection
- Processing
- Analysis
- Production
- Dissemination
- Decision support
- Strategic importance
- Intelligence and national security
- Intelligence and democratic safeguards

Create an educational visual representation of the intelligence cycle.

Use diagrams, cards, numbered steps, or interactive sections.

Avoid militaristic imagery.

The objective is EDUCATION, not operational disclosure.

Include an optional educational video section using a real HTML5 video element:

<video controls>
    <source src="VIDEO_URL_HERE" type="video/mp4">
</video>

--------------------------------------------------
PAGE NAVIGATION
--------------------------------------------------

Every page must maintain the existing global header.

The "Institución" dropdown must remain accessible from every page.

The active section should be visually indicated.

Example:

Institución ▾

When the user is inside:

"Sobre Nosotros"

the navigation should visually indicate that the user is currently inside the Institución section.

--------------------------------------------------
BREADCRUMBS
--------------------------------------------------

Add breadcrumbs to all institutional subpages.

Example:

Inicio
/
Institución
/
Sobre Nosotros

For:

Inicio
/
Institución
/
Marco Legal

etc.

Make breadcrumbs subtle and consistent with the existing visual identity.

--------------------------------------------------
PAGE FOOTER
--------------------------------------------------

Use the existing global footer.

Do not create a different footer for each page.

Maintain consistent institutional navigation and contact information.

--------------------------------------------------
VIDEO IMPLEMENTATION
--------------------------------------------------

VERY IMPORTANT:

Do NOT create image placeholders pretending to be videos.

Whenever a page requires a video, create a real editable HTML5 video structure:

<video
    controls
    preload="metadata"
    poster="VIDEO_POSTER_URL_HERE"
>
    <source
        src="VIDEO_URL_HERE"
        type="video/mp4"
    >
    Your browser does not support the video element.
</video>

The developer must only need to replace:

VIDEO_URL_HERE

and optionally:

VIDEO_POSTER_URL_HERE

Do not embed a fake video image.

Do not use generated thumbnails as video replacements.

--------------------------------------------------
CONTENT MANAGEMENT
--------------------------------------------------

All content areas must be designed so that official DNI content can easily replace placeholder text later.

Use clear labels for content that still needs to be supplied by the DNI.

Examples:

[OFFICIAL HISTORY CONTENT]

[OFFICIAL LEGAL DOCUMENT]

[OFFICIAL INSTITUTIONAL VIDEO]

[OFFICIAL DESCRIPTION]

Do not fabricate institutional facts.

--------------------------------------------------
DESIGN SYSTEM
--------------------------------------------------

All pages must look like parts of the same website.

Maintain:

- Same header
- Same footer
- Same typography
- Same buttons
- Same colors
- Same spacing
- Same border radius
- Same icon style
- Same animation language
- Same accessibility principles

Each page can have its own composition, but the visual identity must remain consistent.

Do not make every page look identical.

Use different layouts where appropriate:

- Editorial layouts
- Timeline
- Document library
- Educational diagrams
- Institutional statements
- Video sections
- Information cards
- Data visualization where appropriate

--------------------------------------------------
RESPONSIVE DESIGN
--------------------------------------------------

Create responsive layouts for:

- Desktop
- Tablet
- Mobile

Long institutional texts must remain readable on mobile.

Timelines must transform appropriately on smaller screens.

Document libraries must become vertically stacked.

Navigation must use the existing mobile hamburger menu.

--------------------------------------------------
FINAL REQUIREMENT
--------------------------------------------------

Create ALL SIX individual pages:

1. Sobre Nosotros
2. Nuestra Historia
3. Misión · Visión · Valores
4. Marco Legal
5. El Rol de la DNI
6. ¿Qué es la Inteligencia?

They must be represented as real destination pages in the website architecture and linked from the "Institución" navigation.

Do not merely create six sections on one long page.

Each item must lead to its own dedicated page/route.

Preserve the existing DNI website design language throughout the entire experience.