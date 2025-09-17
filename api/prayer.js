export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  try {
    const r = await fetch(process.env.N8N_PRAYER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Token': process.env.N8N_WEBHOOK_TOKEN,
      },
      body: JSON.stringify(req.body || {}),
    });

    const text = await r.text();
    res
      .status(r.ok ? 200 : 500)
      .setHeader('Content-Type', 'application/json')
      .send(text || '{"ok":false}');
  } catch {
    res.status(500).json({ ok: false });
  }
}
