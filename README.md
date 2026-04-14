# JourneyOps AI

Production-oriented SaaS scaffold for friction detection, journey analytics, AI recommendations, and Jira/Figma delivery workflows.

## Stack
- Next.js 14 + TypeScript + Tailwind CSS
- PostgreSQL + Prisma ORM
- NextAuth credential auth
- BullMQ background workers
- REST API ingestion and integration endpoints

## Modules implemented
1. Workspace & Settings
2. Websites & Journey Mapping
3. AI Layer SDK ingestion endpoint
4. Microsoft Clarity connection/job ingestion primitives
5. Rule-based friction detection service
6. Recommendation engine with required recommendation fields
7. Jira link endpoint/sync center
8. Figma node mapping endpoint/center
9. Dashboard shell + module pages
10. Job and audit-capable data model

## Quick start
```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed
npm run dev
```

## API surface (selected)
- `POST /api/ingest/sdk`
- `POST /api/ingest/clarity`
- `POST /api/friction`
- `POST /api/recommendations`
- `POST /api/integrations/jira`
- `POST /api/integrations/figma`
- CRUD list/create routes:
  - `/api/workspaces`
  - `/api/websites`
  - `/api/pages`
  - `/api/journeys`
  - `/api/components`

## Background worker
```bash
npm run worker
```
Processes queue `integration-jobs` for clarity import and recommendation generation tasks.

## Notes
- Encryption placeholder fields are modeled (`apiTokenEncrypted`, etc.); wire your KMS/Vault strategy in production.
- Auth is credentials-based for scaffold speed; can be swapped to SSO providers.
- Prisma schema contains all requested entities and relations.
