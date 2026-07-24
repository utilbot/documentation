import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsCollection } from "@cloudflare/nimbus-docs/content";

export const collections = {
	docs: defineCollection(docsCollection()),
	changelog: defineCollection(
		docsCollection({
			base: "changelog",
			schemaFields: {
				// Drives the reverse-chron sort + timeline marker.
				date: z.coerce.date({
					error: (iss) =>
						iss.input === undefined
							? 'Missing required "date" in changelog frontmatter (e.g. 2026-06-16).'
							: '"date" must be a valid date (e.g. 2026-06-16).',
				}),
				// Opaque strings — the feed's filter derives its options from them.
				tags: z.array(z.string()).default([]),
				// Author ids, keyed against AUTHORS in src/lib/authors.ts.
				authors: z.array(z.string()).default([]),
			},
		}),
	),
};
