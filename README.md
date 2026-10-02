# Showstopper-AI

An AI workforce platform: one Central AI Manager coordinates six specialist agents (Sales & Lead, Marketing, Customer Support, Web Development, Research, Follow-up). The owner stays in control through permissions and an approval center.

**Status: Level 1 (demo mode).** Runs with no credentials. No real WhatsApp, Gmail, Instagram, website or LLM calls are made; channel connections and AI replies come from mock providers and are always labelled "demo".

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm test           # 23 unit tests
npm run build && npm start
```
Optional: copy `.env.example` to `.env.local`. Never commit a real `.env`.

## What to try
1. First-time users land on onboarding (8 screens). "Skip setup" opens the demo workspace.
2. Dashboard: route "Prepare a quotation for a clinic website". It reaches Sales, drafts, and waits in the Approval Center.
3. Approval Center: approve it. WhatsApp is not connected, so delivery is reported as **not delivered**, never faked. Connect and test WhatsApp in Connections, then repeat.
4. Switch "Viewing as" to Viewer or Admin to see server-side permission checks (only Owner can approve).

## Layout
- `src/lib/`: `manager.ts` (routing + execution), `permissions.ts` (single tool gate), `knowledge.ts` (retrieval), `audit.ts`, `store.ts` (repository), `providers/` (AI + channel adapters)
- `src/app/api/`: validated, role-guarded, rate-limited routes
- `src/app/(app)/` control-room pages; `src/app/onboarding/` setup flow
- `db/schema.sql`: Postgres schema with indexes and row-level security
- `docs/`: architecture, agents, integrations, security, database, deployment, testing, roadmap

## Deploy on Vercel
1. Push the **project root** (the folder containing `package.json`, `next.config.mjs` and `src/`) to Git. `src/app/` must be committed.
2. Vercel > Add New Project > import the repo. Framework Preset: **Next.js**. If the repo has the project in a subfolder, set **Root Directory** to that subfolder.
3. Build Command `next build`, Output Directory left empty (default), Node.js 18.x or newer.
4. Environment variables (Settings > Environment Variables):
   - Demo mode (Level 1): none are required. Optionally `APP_MODE=demo` and `APP_BASE_URL=https://<your-domain>`.
   - Live mode: see `.env.example`. Mark secrets as Sensitive; never prefix server secrets with `NEXT_PUBLIC_`.
5. After deploy, `GET /api/health` should return `{"ok":true,...}`.

## Common deploy error
`Couldn't find any pages or app directory` means Next.js found no `src/app` or `app` folder in the build root. Check that the folder is committed and the Root Directory is correct. Config files must keep their dotted names (`next.config.mjs`, `postcss.config.js`, `tailwind.config.ts`, `.env.example`, `.gitignore`).
