import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'Utilbot Docs',
		social: {
			github: 'https://github.com/withastro/starlight'
		},
		sidebar: [{
			label: 'General',
			items: [{
				label: 'API Reference',
				link: '/main/api-reference'
			}, {
				label: 'Intro',
				link: '/main/intro'
			}, {
				label: 'Bot Versions',
				link: '/main/bot-versions'
			}, {
				label: 'Branding',
				link: '/main/branding'
			}, {
				label: 'Important Notes',
				link: '/main/important-notes'
			}, {
				label: 'Changelogs',
				collapsed: true,
				autogenerate: {
					directory: 'main/changelogs'
				}
			}, {
				label: 'Topics',
				collapsed: true,
				autogenerate: {
					directory: 'main/topics'
				}
			}, {
				label: 'Types',
				collapsed: true,
				autogenerate: {
					directory: 'main/types'
				}
			}]
		}, {
			label: 'Commands and Interactions',
			items: [{
				label: 'Command Overview',
				link: '/commands/command-overview'
			}, {
				label: 'General',
				collapsed: true,
				autogenerate: {
					directory: 'commands/general'
				}
			}, {
				label: 'Music',
				collapsed: true,
				autogenerate: {
					directory: 'commands/music'
				}
			}, {
				label: 'Poll',
				collapsed: true,
				autogenerate: {
					directory: 'commands/poll'
				}
			}, {
				label: 'Rank',
				collapsed: true,
				autogenerate: {
					directory: 'commands/rank'
				}
			}, {
				label: 'Moderators',
				collapsed: true,
				autogenerate: {
					directory: 'commands/moderators'
				}
			}, {
				label: 'Admins',
				collapsed: true,
				autogenerate: {
					directory: 'commands/admins'
				}
			}]
		}]
	})],
	output: "server",
	adapter: cloudflare(),
});