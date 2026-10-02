// ─── Clario Backend — Express Application ──────────────────────────────
//
// This file sets up the Express app: middleware, routes, and error handlers.
// It does NOT start listening — that happens in server.js.
// Keeping them separate makes the app easier to test later.
// ────────────────────────────────────────────────────────────────────────

import express from 'express';
import healthRouter from './routes/health.js';

const app = express();

// ── Middleware ──────────────────────────────────────────────────────────

// Parse incoming JSON request bodies (e.g. POST /api/leads in the future).
// If a request has a Content-Type of application/json, Express will
// automatically parse the body and attach it to req.body.
app.use(express.json());

// ── Routes ─────────────────────────────────────────────────────────────

// Health-check endpoint: GET /api/health
app.use('/api', healthRouter);

// ── Not-Found Handler ──────────────────────────────────────────────────
// If no route matched the request, respond with a clear 404 JSON message.
// This runs AFTER all routes, so it only fires for unknown paths.

app.use((_req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'The requested endpoint does not exist.',
  });
});

export default app;
