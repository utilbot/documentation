import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	site: 'https://utilbot.info',
	integrations: [starlight({
		plugins: [starlightLinksValidator()],
		title: 'Utilbot Docs',
		editLink: {
			baseUrl: 'https://github.com/utilbot/documentation/edit/main/',
		},
		social: [
			{ icon: 'github', label: 'GitHub', href: 'https://github.com/utilbot/documentation' },
			{ icon: 'discord', label: 'Discord', href: 'https://utilbot.co/discord' },
		],
		favicon: '/favicon.ico',
		logo: {
			src: './src/assets/utilbot.png',
			replacesTitle: false,
		},
		sidebar: [
			{
				label: 'General',
				items: [
					{
						label: 'Intro',
						link: '/main/intro',
					},
					{
						label: 'Bot Versions',
						link: '/main/bot-versions',
					},
					{
						label: 'Branding',
						link: '/main/branding',
					},
					{
						label: 'Important Notes',
						link: '/main/important-notes',
					},
					{
						label: 'Changelog',
						link: '/main/changelog',
					},
				]
			},
			{
				label: 'Commands and Interactions',
				items: [
					{
						label: 'Command Overview',
						link: '/commands/command-overview',
					},
					{
						label: 'General',
						collapsed: true,
						autogenerate: {
							directory: 'commands/general',
						},
					},
					{
						label: 'Poll',
						collapsed: true,
						autogenerate: {
							directory: 'commands/poll',
						},
					},
					{
						label: 'Rank',
						collapsed: true,
						autogenerate: {
							directory: 'commands/rank',
						},
					},
					{
						label: 'Moderators',
						collapsed: true,
						autogenerate: {
							directory: 'commands/moderators',
						},
					},
					{
						label: 'Admins',
						collapsed: true,
						autogenerate: {
							directory: 'commands/admins',
						},
					},
				],
			},
		],
	})],
});