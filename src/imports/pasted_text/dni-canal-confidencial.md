# Prompt para Figma AI — Canal Confidencial de la DNI

```text
Continue the existing official website redesign for the Dirección Nacional de Inteligencia (DNI) of the Dominican Republic.

Create the complete "Canal Confidencial" section and its associated user experience.

IMPORTANT:
Do NOT redesign the existing DNI website.

Maintain the exact visual identity, design system, typography, navigation, header, footer, spacing, components, colors and responsive behavior already established in the project.

This page must feel like a natural part of the existing DNI website.

========================================================
1. PURPOSE OF THE CANAL
========================================================

The DNI project brief explicitly defines the Canal Confidencial as:

"Portal de Denuncias y Colaboración - Canal Confidencial"

The most important communication requirement is:

THIS IS NOT A GENERAL COMPLAINT FORM.

It is:

"Un canal seguro de aportación de información para la seguridad nacional."

This distinction must be immediately clear to the user.

The interface must prevent users from confusing this service with:

- General complaints
- Common police reports
- Customer service
- General contact
- Emergency services

The page must communicate that the purpose is to provide information that may be relevant to national security.

========================================================
2. PRIMARY MESSAGE
========================================================

Use the official project message prominently:

"Tu información puede salvar vidas."

This should be one of the strongest elements of the page.

Use a supporting explanation such as:

"Canal seguro para aportar información relevante para la seguridad nacional."

Keep the tone:

- Serious
- Institutional
- Trustworthy
- Calm
- Accessible
- Professional

Do NOT use sensationalist language.

Do NOT make the page look like a crime-reporting website.

Do NOT use images of weapons, masked agents, surveillance cameras or stereotypical spy imagery.

========================================================
3. HERO SECTION
========================================================

Create a dedicated hero for the Canal Confidencial.

Title:

"Canal Confidencial"

Primary message:

"Tu información puede salvar vidas."

Supporting explanation:

"Este canal permite aportar información que pueda contribuir a la seguridad nacional."

Include a strong CTA:

"Reportar información"

This button must begin the secure reporting process.

Also provide a secondary action:

"¿Qué información puedo reportar?"

which scrolls to the guidance section.

The hero should communicate security without creating fear.

========================================================
4. IMPORTANT NOTICE
========================================================

Immediately after the hero, create a highly visible informational notice explaining:

"Este no es un sistema de querellas comunes."

Explain that common crimes and ordinary complaints should be directed to the appropriate authorities.

The DNI project brief specifically requires users to understand:

WHAT TO REPORT
and
WHAT NOT TO REPORT.

This distinction must be visible before the user begins the form.

========================================================
5. WHAT TO REPORT
========================================================

Create a section:

"¿Qué puedes reportar?"

Use the categories explicitly identified in the DNI project brief:

- Espionaje
- Sabotaje a infraestructuras críticas
- Amenazas terroristas
- Ciberataques
- Delito cibernético

The design should make these categories easy to understand.

Use cards or a structured list.

Each category can include a short public-facing explanation.

Do not reveal operational intelligence procedures.

Do not explain how intelligence investigations are conducted.

The objective is to help citizens recognize information that may be relevant to the DNI.

========================================================
6. WHAT NOT TO REPORT
========================================================

Create a visually differentiated section:

"¿Qué NO debes reportar?"

The DNI project brief explicitly states:

"Delitos comunes; derivar y presentar canales al 911 o Policía Nacional."

Clearly explain that common crimes and ordinary emergencies should not be submitted through this channel.

Provide clear redirection toward the appropriate emergency/public-security channels.

Do not invent additional emergency information.

If an official link or number is not available in the provided content, create an editable placeholder.

The user must understand the distinction between:

Canal Confidencial
vs.
911
vs.
Policía Nacional
vs.
Contacto general.

========================================================
7. CONFIDENTIALITY AND ANONYMITY
========================================================

Create a dedicated section explaining the confidentiality model.

The project brief requires:

"Anonimato garantizado"

and specifically:

"opción de anonimato completo con número de seguimiento generado."

Design an easy-to-understand choice before the reporting form begins.

The user should be able to choose:

OPTION A:
"Reportar de forma anónima"

OPTION B:
"Proporcionar mis datos de contacto"

Do not force the user to identify themselves if the official requirement allows anonymous reporting.

Clearly explain the difference.

The anonymous option must communicate:

- No unnecessary personal identification
- Secure submission
- Tracking number generated after submission

Do NOT promise absolute anonymity beyond what the actual technical implementation can guarantee.

The final implementation must match the real security architecture.

========================================================
8. SECURITY INFORMATION
========================================================

Create a compact but visible security section.

Communicate that the channel is designed as a secure communication mechanism.

The project technical requirements specify:

- HTTPS / SSL
- Valid SSL/TLS certificate
- HSTS
- Forced HTTP → HTTPS redirection
- DDoS protection
- Strict server-side validation
- CSRF tokens
- Rate limiting
- CAPTCHA
- End-to-end encryption for the Canal Confidencial

The interface should communicate security to the user without displaying technical jargon unnecessarily.

For example, visually communicate:

"Canal protegido"
"Información tratada de forma confidencial"
"Protección de la comunicación"

Technical details can be placed inside an expandable:

"Información sobre seguridad"

section.

Do NOT claim a security mechanism exists in production unless it is actually implemented.

The Figma design must be prepared for these technical requirements.

========================================================
9. SECURE REPORTING PROCESS
========================================================

Create the reporting experience as a multi-step process instead of placing a huge form on one page.

Recommended structure:

STEP 1
Choose reporting mode

Anonymous
or
Identified

STEP 2
Information about the report

STEP 3
Relevant details

STEP 4
Attachments, if applicable

STEP 5
Review and confirmation

STEP 6
Secure submission

STEP 7
Tracking number

Use a clear progress indicator.

Example:

01 Información
02 Detalles
03 Archivos
04 Revisión
05 Enviado

Keep the process simple.

Do not ask for unnecessary personal information.

========================================================
10. REPORTING FORM
========================================================

Create a professional secure-reporting form.

The exact final fields must be configured according to the approved DNI backend specification.

At minimum, prepare the interface for:

- Type/category of information
- Description of the information
- Date or approximate time
- Location, when relevant
- Additional relevant information
- File attachments, if enabled by the final technical implementation

If the anonymous option is selected:

Do not display mandatory personal-identification fields.

If the identified option is selected:

Show only the approved contact information fields.

Do not invent sensitive-data fields.

========================================================
11. FILE ATTACHMENTS
========================================================

Create a secure attachment component.

Allow the interface to support evidence or relevant files if the final DNI implementation enables them.

The component must show:

- Accepted file types
- Maximum file size
- Upload progress
- Uploaded file name
- Remove file
- Replace file
- Upload error
- Upload success

Do not make attachments look like ordinary cloud-storage uploads.

They are part of a confidential reporting process.

========================================================
12. CAPTCHA
========================================================

Include a CAPTCHA component in the final submission stage.

The technical requirements explicitly require CAPTCHA for the Canal Confidencial.

Design the interface for:

- CAPTCHA loading
- CAPTCHA completed
- CAPTCHA error

Do not use a fake visual CAPTCHA.

Create a real component placeholder ready for implementation.

========================================================
13. VALIDATION
========================================================

Create complete validation states.

Required states:

- Default
- Focus
- Filled
- Validation error
- Invalid attachment
- Uploading
- Upload failed
- CAPTCHA error
- Rate-limit error
- Server error
- Secure submission/loading

Errors must be understandable to normal citizens.

Do not expose technical security details in error messages.

Example:

Instead of:

"CSRF token validation failed"

Use:

"No fue posible procesar la información. Intenta nuevamente."

Technical errors should be logged internally.

========================================================
14. REVIEW BEFORE SUBMISSION
========================================================

Before the final submission, create a review screen.

The user should be able to verify:

- Category
- Description
- Date/time
- Location
- Attachments
- Identification mode

Provide:

"Editar información"

and

"Enviar información"

buttons.

This reduces accidental submissions.

========================================================
15. FINAL SUBMISSION
========================================================

Create a secure submission state.

Button:

"Enviar información"

While submitting:

"Enviando de forma segura..."

Do not allow repeated submissions while the request is processing.

Implement the visual state for rate limiting and duplicate submission prevention.

========================================================
16. SUCCESS SCREEN
========================================================

After successful submission, display a dedicated confirmation screen.

Title:

"Información recibida"

Supporting message:

"Tu información ha sido recibida de forma segura."

Then display the generated:

"Número de seguimiento"

The tracking number must be visually prominent.

Provide:

"Guardar número de seguimiento"

and

"Copiar número"

actions.

Explain:

"Conserva este número para consultar el estado de tu reporte."

Do not expose the content of the report publicly.

If the final system supports secure follow-up, prepare a CTA:

"Consultar seguimiento"

Otherwise do not invent the functionality.

========================================================
17. ANONYMOUS TRACKING
========================================================

The project explicitly requires:

"número de seguimiento generado"

for anonymous reports.

Therefore create a clear post-submission experience where the anonymous user receives a unique tracking identifier.

The tracking number should not reveal:

- Identity
- Category
- Location
- Report content

It should simply function as a secure reference.

========================================================
18. SECURITY DISCLAIMER
========================================================

Create a concise security/privacy notice near the final submission button.

The language should be understandable to citizens.

Do not create an enormous legal block.

Provide an expandable section:

"Información sobre privacidad y seguridad"

for additional details.

========================================================
19. MOBILE EXPERIENCE
========================================================

The Canal Confidencial must be mobile-first.

On mobile:

- Single-column layout
- Large touch targets
- Simple step navigation
- Clear progress indicator
- Easy file upload
- Clear validation messages
- Strong hierarchy
- No horizontal scrolling

The secure-reporting process must be comfortable on smartphones.

========================================================
20. ACCESSIBILITY
========================================================

Follow WCAG 2.1 AA.

Include:

- Keyboard navigation
- Visible focus states
- Accessible form labels
- Accessible error messages
- Screen-reader-friendly progress indicator
- Adequate contrast
- Accessible buttons
- Text alternatives for relevant icons

Security must never come at the expense of accessibility.

========================================================
21. VISUAL IDENTITY
========================================================

Maintain the existing DNI design system.

Use:

- Navy blue
- Steel gray
- White
- Gold accents
- Existing DNI typography
- Existing logo
- Official Dominican identity

The visual language should communicate:

Security
Trust
Confidentiality
Professionalism
National service

Avoid:

- Neon cybersecurity aesthetics
- Excessive dark interfaces
- Hacker imagery
- Generic stock photos
- Futuristic spy interfaces
- Excessive animations
- Fear-based design

The page must feel like a serious official Dominican government institution.

========================================================
22. DOMINICAN IDENTITY
========================================================

Follow the project's identity requirements.

If imagery is used, it must represent:

- Dominican territory
- Dominican people
- Dominican nature

Do NOT use generic stock images.

Do NOT use AI-generated photographic imagery.

Do NOT use stereotypical intelligence-agent imagery.

The page should communicate that national security concerns the Dominican people and territory.

========================================================
23. NAVIGATION
========================================================

The Canal Confidencial must be accessible from the main website navigation.

Navigation:

MENU
→ Canal Confidencial

The page must maintain the existing:

- Header
- Footer
- Main navigation
- Logo
- Institutional links

However, once the user enters the reporting process, minimize unnecessary navigation so the user can concentrate on completing the secure report.

Do not place distracting promotional elements inside the secure-reporting flow.

========================================================
24. IMPORTANT FUNCTIONAL REQUIREMENT
========================================================

This must NOT be designed as a static visual mockup only.

Create code-ready components.

The implementation must eventually support:

- Secure HTTPS connection
- TLS 1.3 minimum
- End-to-end encryption
- Server-side validation
- CSRF protection
- Rate limiting
- CAPTCHA
- Secure file handling
- Anonymous submission
- Tracking-number generation
- Secure database handling
- Error handling
- Audit/security logging where appropriate

Do not simulate these mechanisms with animations.

The Figma design should clearly distinguish between:

UI/UX design
and
backend security implementation.

========================================================
25. IMPORTANT SECURITY PRINCIPLE
========================================================

Do NOT collect more information than is necessary.

Do NOT create fields for:

- Unnecessary identity information
- Sensitive personal information
- Passwords
- Security questions
- Internal intelligence information

unless explicitly required by the approved DNI technical specification.

The goal is:

minimum necessary information
+
maximum appropriate security.

========================================================
26. COMPLETE SCREEN SET
========================================================

Create the complete set of screens/states required for the experience:

SCREEN 01
Canal Confidencial landing page

SCREEN 02
What to report / What not to report

SCREEN 03
Choose anonymous or identified report

SCREEN 04
Reporting form — step 1

SCREEN 05
Reporting form — step 2

SCREEN 06
File upload

SCREEN 07
Review report

SCREEN 08
CAPTCHA / final security verification

SCREEN 09
Submitting

SCREEN 10
Successful submission

SCREEN 11
Tracking number

SCREEN 12
Submission error

SCREEN 13
Rate-limit / temporary blocking state

SCREEN 14
Mobile versions of the critical screens

All screens must use the existing DNI design system.

========================================================
FINAL OBJECTIVE
========================================================

Create a complete, professional and trustworthy Canal Confidencial experience for the Dirección Nacional de Inteligencia.

The user must immediately understand:

1. This is NOT a general complaints form.
2. It is a secure channel for information relevant to national security.
3. The user can report specific types of information.
4. Common crimes should be directed to the appropriate authorities.
5. Anonymous reporting is available.
6. A tracking number is generated.
7. The communication is designed around confidentiality and security.
8. The process is simple enough for an ordinary citizen to understand.

The final design must balance:

SECURITY
+
CONFIDENTIALITY
+
ACCESSIBILITY
+
TRUST
+
CITIZEN EDUCATION

while maintaining the established visual identity of the DNI website.
```
