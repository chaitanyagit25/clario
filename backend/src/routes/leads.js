// ─── Lead Capture Route ─────────────────────────────────────────────────
//
// POST /api/leads
//
// Accepts a JSON body with { name, email, service }, validates the input,
// and forwards the lead to an n8n webhook for further automation
// (e.g. sending a notification email, adding to a CRM).
//
// The webhook URL is read from the N8N_LEAD_WEBHOOK_URL environment
// variable. This keeps the URL out of the source code.
// ────────────────────────────────────────────────────────────────────────

import { Router } from 'express';

const router = Router();

router.post('/leads', async (req, res) => {
  // ── 1. Extract fields from the request body ─────────────────────────

  const { name, email, service } = req.body;

  // ── 2. Validate — all three fields must be present and non-empty ────

  if (!name || !email || !service) {
    return res.status(400).json({
      error: 'Validation failed',
      message: 'All fields (name, email, service) are required.',
    });
  }

  // ── 3. Check that the webhook URL is configured ─────────────────────

  const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    // Log the problem for the developer but don't expose internals to the client.
    console.error('N8N_LEAD_WEBHOOK_URL is not set in the environment.');
    return res.status(503).json({
      error: 'Service unavailable',
      message: 'Lead processing is temporarily unavailable. Please try again later.',
    });
  }

  // ── 4. Forward the lead data to the n8n webhook ─────────────────────

  try {
    const n8nResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, service }),
    });

    // If n8n responded with an error status (4xx, 5xx), let the client
    // know something went wrong without leaking the webhook URL or
    // internal details.
    if (!n8nResponse.ok) {
      console.error(`n8n webhook returned status ${n8nResponse.status}`);
      return res.status(502).json({
        error: 'Upstream error',
        message: 'Lead was received but could not be processed. Please try again later.',
      });
    }

    // ── 5. Success — the lead was accepted by n8n ───────────────────

    return res.status(200).json({
      success: true,
      message: 'Lead received successfully.',
    });
  } catch (err) {
    // Network errors (n8n is down, DNS failure, timeout, etc.)
    console.error('Failed to reach n8n webhook:', err.message);
    return res.status(502).json({
      error: 'Connection failed',
      message: 'Could not reach the lead processing service. Please try again later.',
    });
  }
});

export default router;
