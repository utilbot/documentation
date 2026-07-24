import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import nimbus, { defineConfig as defineNimbusConfig } from "@cloudflare/nimbus-docs";
import { tableScroll } from "@cloudflare/nimbus-docs/markdown";

const nimbusConfig = defineNimbusConfig({
	site: "https://docs.utilbot.co",
	title: "Utilbot Docs",
	description: "Documentation, commands, and changelog for the Utilbot Discord bot.",
	locale: "en",
	github: "https://github.com/utilbot/documentation",
	editPattern: "https://github.com/utilbot/documentation/edit/main/{path}",
	socialImageAlt: "Utilbot documentation preview",
	sidebar: {
		items: [
			{
				label: "General",
				items: [
					{ label: "Intro", link: "/general/intro" },
					{ label: "Bot Versions", link: "/general/bot-versions" },
					{ label: "Branding", link: "/general/branding" },
					{ label: "Important Notes", link: "/general/important-notes" },
				],
			},
			{
				label: "Commands and Interactions",
				items: [
					{ label: "Command Overview", link: "/commands/command-overview" },
					{
						label: "General",
						collapsed: true,
						autogenerate: { directory: "commands/general" },
					},
					{
						label: "Poll",
						collapsed: true,
						autogenerate: { directory: "commands/poll" },
					},
					{
						label: "Rank",
						collapsed: true,
						autogenerate: { directory: "commands/rank" },
					},
					{
						label: "Giveaways",
						collapsed: true,
						autogenerate: { directory: "commands/giveaways" },
					},
					{
						label: "Fun",
						collapsed: true,
						autogenerate: { directory: "commands/fun" },
					},
					{
						label: "Misc",
						collapsed: true,
						autogenerate: { directory: "commands/misc" },
					},
					{
						label: "Moderators",
						collapsed: true,
						autogenerate: { directory: "commands/moderators" },
					},
					{
						label: "Admins",
						collapsed: true,
						autogenerate: { directory: "commands/admins" },
					},
				],
			},
			{ label: "Changelog", link: "/changelog" },
		],
	},
});

export default defineConfig({
	site: "https://docs.utilbot.co",
	output: "static",
	vite: {
		plugins: [tailwindcss()],
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "hover",
	},
	integrations: [
		icon(),
		nimbus(nimbusConfig, {
			rules: {
				"nimbus/frontmatter-shape": "error",
				"nimbus/internal-link": "error",
			},
			markdown: {
				hastPlugins: [tableScroll()],
			},
		}),
	],
});
