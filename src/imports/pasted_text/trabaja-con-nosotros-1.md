Continue the existing DNI (Dirección Nacional de Inteligencia) website project and maintain EXACTLY the same visual identity, design system, typography, spacing, colors, navigation, components, and overall visual language already established throughout the website.

Do NOT redesign the website from scratch.
Do NOT change the existing header, navigation, footer, branding, or visual identity.

We need to improve the "Áreas de Trabajo" section by adding a clear recruitment/application pathway.

The website currently contains these 8 areas of work:

1. Ciberseguridad
2. Criptografía
3. Ciberdelitos
4. Estratégica
5. Internacional
6. Delictiva
7. Prospectiva
8. Contrainteligencia

--------------------------------------------------
1. APPLICATION ACCESS ON EVERY AREA PAGE
--------------------------------------------------

Each of the 8 individual area pages must contain a prominent but elegant CTA near the top of the page, preferably inside the hero section or immediately below the hero content.

The CTA should communicate that the user can apply to work with the DNI.

Use a clear label such as:

"Trabaja con Nosotros"
or
"Formulario de Aplicación"

The button must link to ONE centralized application page.

Do NOT create eight different application forms.

All eight areas must redirect to the same application page.

If possible, preserve the context of the area from which the user arrived.

For example:

Ciberseguridad → Trabaja con Nosotros → Application Form
Criptografía → Trabaja con Nosotros → Application Form
Ciberdelitos → Trabaja con Nosotros → Application Form
Estratégica → Trabaja con Nosotros → Application Form
Internacional → Trabaja con Nosotros → Application Form
Delictiva → Trabaja con Nosotros → Application Form
Prospectiva → Trabaja con Nosotros → Application Form
Contrainteligencia → Trabaja con Nosotros → Application Form

The application page may optionally display a field or hidden value indicating the area from which the applicant came.

--------------------------------------------------
2. APPLICATION PAGE
--------------------------------------------------

Create a dedicated page called:

"Trabaja con Nosotros"

or

"Formulario de Aplicación"

This page must remain consistent with the DNI website's existing design system.

The purpose of this page is to allow users to begin an application process to become part of the Dirección Nacional de Inteligencia.

Create a professional hero/header section with:

TRABAJA CON NOSOTROS

Then introduce the application requirements.

Use the following content from the existing DNI material. Preserve the meaning and wording; do not invent additional requirements.

Introductory text:

"Para iniciar un proceso de aplicación para formar parte de la DNI es necesario cumplir con los siguientes requisitos."

Requirements:

Nacionalidad
"Debe ser dominicano de nacimiento u origen."

Mayor de edad
"Ser mayor de edad y contar con su cédula de identidad."

Condiciones Físicas
"Poseer las condiciones físicas necesarias para el puesto al cual esté aplicando."

Ética
"Cumplir con las condiciones éticas y morales que rigen el accionar de la institución."

Integridad
"Pasar las pruebas de integridad de la institución."

Aptitudes
"Poseer las aptitudes y méritos académicos según la posición a la cual aplica."

--------------------------------------------------
3. REQUIREMENTS DESIGN
--------------------------------------------------

Present the requirements in a modern, structured layout.

Do not simply reproduce the old design shown in the reference image.

Create a new design consistent with the current DNI website.

Possible structure:

- Six visual requirement cards
- Clear icons
- Short title
- Supporting description
- Clean spacing
- Strong visual hierarchy
- Responsive grid

The section should feel institutional, professional and trustworthy.

Avoid excessive decorative elements.

The purpose is clarity and credibility.

--------------------------------------------------
4. APPLICATION FORM
--------------------------------------------------

Below the requirements, create the actual application form.

The form must contain the same fields shown in the reference material:

1. Nombres *
2. Apellidos *
3. Cédula de identidad *
4. Fecha de nacimiento *
5. Correo electrónico *
6. Número de teléfono *
7. Foto 2x2 *
8. Currículum vitae *
9. Confirmation checkbox *

The confirmation checkbox should communicate that the applicant confirms that they meet the minimum requirements shown above.

Use a clear confirmation statement such as:

"Confirmo que cumplo con los requisitos mínimos establecidos."

Do not add unnecessary personal-information fields that are not present in the provided material.

--------------------------------------------------
5. FILE UPLOADS
--------------------------------------------------

The form must include functional file-upload components for:

- Foto 2x2
- Currículum vitae

The interface must clearly show:

- Accepted file type
- Maximum file size
- Selected file name
- Upload state
- Error state
- Remove/replace file option

The design must be prepared for real file storage.

Do NOT represent the upload fields as simple visual placeholders.

They must be structured so they can later be connected directly to Supabase Storage.

--------------------------------------------------
6. FORM VALIDATION
--------------------------------------------------

The form must include proper validation.

Show clear error messages when:

- A required field is empty
- The email format is invalid
- The phone number is invalid
- The identification number is invalid
- The date of birth does not satisfy the required age condition
- A required file has not been uploaded
- The uploaded file type is not accepted
- The uploaded file exceeds the maximum allowed size
- The confirmation checkbox has not been selected

Do not use generic browser-style alerts as the primary UX.

Use clear inline validation and visual error states.

--------------------------------------------------
7. SUBMISSION STATES
--------------------------------------------------

Create complete form states:

A. Default state
B. Field focus state
C. Validation error state
D. Uploading state
E. Submitting state
F. Successful submission state
G. Submission failure state

After successful submission, display a professional confirmation message such as:

"Solicitud enviada correctamente."

Include a secondary message explaining that the information was received successfully.

Provide a clear button to return to the DNI website.

If submission fails, clearly explain that the application could not be submitted and allow the user to try again.

--------------------------------------------------
8. SUPABASE / BACKEND-READY STRUCTURE
--------------------------------------------------

The website is already connected to Supabase.

Design and structure the form so it can be implemented with a real Supabase backend.

The final implementation must be prepared so that:

- Every form field is stored correctly in the database.
- The uploaded 2x2 photograph is stored in Supabase Storage.
- The uploaded CV is stored in Supabase Storage.
- The database stores the corresponding file paths/URLs.
- Each application receives a unique identifier.
- The application date/time is recorded.
- The selected area of work can be associated with the application when applicable.

Do NOT create fake submission behavior.

Do NOT use static dummy data as the final implementation.

The UI should be code-ready for real Supabase integration.

--------------------------------------------------
9. SECURITY AND PRIVACY UX
--------------------------------------------------

Because this is an application form for the Dirección Nacional de Inteligencia, the interface must communicate confidentiality, professionalism and responsible handling of information.

Include a concise privacy/confidentiality notice near the submission area.

Do not expose applicant information publicly.

Do not display submitted applications on the website.

Do not create any public listing of applicants.

--------------------------------------------------
10. RESPONSIVE DESIGN
--------------------------------------------------

The entire application experience must be responsive.

Desktop:
- Two-column or structured layout where appropriate.
- Requirements clearly visible.
- Form comfortably readable.

Tablet:
- Adapt the grid and form width.

Mobile:
- Single-column layout.
- Large touch-friendly controls.
- File upload controls must remain easy to use.
- CTA buttons must be clearly visible.
- No horizontal scrolling.

--------------------------------------------------
11. VISUAL DIRECTION
--------------------------------------------------

Maintain the existing DNI visual identity:

- Institutional
- Modern
- Secure
- Professional
- Minimal
- Technological
- Dominican national identity
- Strong navy/blue visual foundation
- White/light sections where appropriate
- Existing gold accent color
- Existing typography
- Existing logo
- Existing header and footer

Do not introduce unrelated colors or visual styles.

Avoid excessive gradients, glassmorphism, futuristic decorations or generic cybersecurity imagery.

The design should feel like an official government intelligence institution, not a commercial technology company.

--------------------------------------------------
12. NAVIGATION
--------------------------------------------------

The page must be properly connected to the existing website navigation.

The CTA from all eight areas of work must lead to the same application page.

The application page must maintain the existing header and footer.

The user must be able to navigate back to:

- Áreas de Trabajo
- Inicio
- Sobre Nosotros
- Sistema Nacional de Inteligencia
- Contacto
- Base Legal

--------------------------------------------------
13. IMPORTANT IMPLEMENTATION RULE
--------------------------------------------------

Do not create this as a static visual mockup only.

Use real semantic HTML elements and code-ready components.

The application form must be structured using real:

<form>
<input>
<select>
<textarea>
<input type="file">
<button>

elements where appropriate.

Do not place screenshots or flattened images where functional form components should exist.

The video/content sections of the website must use real HTML video elements when applicable, not image placeholders.

The final result should be visually polished but also structured for actual development and Supabase integration.

--------------------------------------------------
FINAL OBJECTIVE
--------------------------------------------------

Create:

1. A "Trabaja con Nosotros" CTA on each of the 8 individual Áreas de Trabajo pages.

2. One centralized "Trabaja con Nosotros / Formulario de Aplicación" page.

3. A requirements section containing the six official requirements provided above.

4. A fully structured application form containing the same fields from the existing DNI application form.

5. Real file-upload components for the photograph and CV.

6. Complete validation, loading, success and error states.

7. A structure ready for real Supabase database and Storage integration.

8. Responsive desktop, tablet and mobile layouts.

Everything must remain visually consistent with the existing DNI website.