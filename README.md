# Umar Ali Portfolio

Frontend-only portfolio app using Vite + React.

## Local setup

1. Install dependencies:
   `npm install`
2. Copy environment values:
   `copy .env.example .env`
3. Start development server:
   `npm run dev`

The app runs on `http://localhost:5173` by default.

## Contact setup

- No backend or database setup is required.
- Form submissions are sent through FormSubmit's AJAX endpoint.
- Target email is configured with `VITE_CONTACT_EMAIL`.
- On the first live submission, FormSubmit may send an activation email to the target inbox. Open that email and confirm the form so future messages are delivered.

Set these values in `.env`:

- `VITE_CONTACT_EMAIL=umarali40451@gmail.com`
- Optional: `VITE_CONTACT_FORM_ENDPOINT=https://formsubmit.co/ajax/your-random-string`

## Production build

1. Build:
   `npm run build`
2. Preview:
   `npm run preview`
