# Utilbot Documentation

Built with [Nimbus](https://github.com/cloudflare/nimbus), Cloudflare's Astro-based docs framework, and deployed to Cloudflare Workers.

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── docs/           # main + commands documentation
│   │   ├── changelog/      # changelog / announcement entries
│   │   └── config.ts
│   ├── layouts/
│   ├── lib/
│   └── pages/
├── astro.config.ts
├── nimbus.json
├── package.json
└── wrangler.jsonc
```

Docs pages live in `src/content/docs/` as `.md`/`.mdx` files; the sidebar structure is defined in `astro.config.ts`. Changelog entries live in `src/content/changelog/` and render as a reverse-chronological feed at `/changelog`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                                       |
| :-------------------------- | :------------------------------------------------------------ |
| `pnpm install`              | Installs dependencies                                        |
| `pnpm run dev`               | Starts local Astro dev server at `localhost:4321`            |
| `pnpm run build`            | Type-checks and builds the production site to `./dist/`      |
| `pnpm run preview`          | Preview your build locally, before deploying                 |
| `pnpm run lint:docs`        | Lint content frontmatter and internal links                  |
| `pnpm run worker:dev`       | Run Cloudflare Workers local dev for the configured assets    |
| `pnpm run deploy:dry-run`   | Validate Workers deployment configuration without deploying   |
| `pnpm run deploy`           | Build and deploy to Cloudflare Workers                        |

## Want to learn more?

Check out [Nimbus's docs](https://nimbus-docs.com) or the [Astro documentation](https://docs.astro.build).
