# Integration Centre - Front End Assessment

This is a standalone Vite + React + Tailwind project implementing a mocked "Integration Centre" screen for the BraveGen assessment.

Features implemented:
- Vite + React scaffold
- Tailwind CSS (configuration files included)
- Router with path `/Settings/Integrations`
- Sidebar navigation and Header with Tenant switcher and User dropdown
- Integrations table wired to mock data with search and pagination
- Edit and Delete modals on row actions

Quick start:

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

Open http://localhost:5173/ and the app will redirect to `/Settings/Integrations`.

Notes:
- FontAwesome free is included via CDN in `index.html` for icons.
- This is a static/mock implementation — no external APIs are called.
# exam