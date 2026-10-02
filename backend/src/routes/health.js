// ─── Health Check Route ─────────────────────────────────────────────────
//
// GET /api/health
//
// Returns a simple JSON object confirming the server is running.
// This is useful for monitoring tools, deployment checks, and to
// verify the backend is reachable during development.
// ────────────────────────────────────────────────────────────────────────

import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'clario-backend',
  });
});

export default router;
