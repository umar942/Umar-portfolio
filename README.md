# Umar Ali Portfolio

Full-stack portfolio app using Vite + React (client) and Express (server).

## Local setup

1. Install dependencies:
   `npm install`
2. Copy environment values:
   `copy .env.example .env`
3. Start development server:
   `npm run dev`

The app runs on `http://localhost:5000` by default.

## Contact email setup

- No database setup is required.
- Contact messages are stored in memory and reset whenever the server restarts.
- Form submissions are emailed to `CONTACT_TO` using SMTP.

Set these values in `.env`:

- `CONTACT_TO=umarali40451@gmail.com`
- `CONTACT_FROM=Portfolio Contact <your-email@gmail.com>`
- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_SECURE=false`
- `SMTP_USER=your-email@gmail.com`
- `SMTP_PASS=your-app-password`

For Gmail, use a Google App Password as `SMTP_PASS` (not your regular Gmail password).

## Production build

1. Build:
   `npm run build`
2. Run:
   `npm start`
