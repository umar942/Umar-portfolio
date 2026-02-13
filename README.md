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
- Form submission opens the visitor's email app using a `mailto:` link.
- Target email is configured with `VITE_CONTACT_EMAIL`.

Set these values in `.env`:

- `VITE_CONTACT_EMAIL=umarali40451@gmail.com`

## Production build

1. Build:
   `npm run build`
2. Preview:
   `npm run preview`
