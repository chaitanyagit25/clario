// ─── Clario Backend — Server Entry Point ────────────────────────────────
//
// This file starts the Express server.
// It reads the port from the PORT environment variable (useful for
// deployment), falling back to 5000 for local development.
//
// dotenv is loaded FIRST so that all environment variables from the
// .env file are available before any other module reads process.env.
// ────────────────────────────────────────────────────────────────────────

import 'dotenv/config'; // ← loads .env into process.env
import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✓ Clario backend running → http://localhost:${PORT}`);
});
