import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://utilbot.info',
	integrations: [starlight({
		plugins: [
			starlightLinksValidator(),
			starlightBlog({
				title: 'Blog and Changelog',
				authors: {
					herrtxbias: {
						name: 'HerrTxbias',
						title: 'Project Lead & Developer',
						picture: 'https://avatars.githubusercontent.com/u/16502676?s=200',
						url: 'https://herrtxbias.dev',
					},
					team: {
						name: 'Utilbot Team',
						picture: 'https://avatars.githubusercontent.com/in/331286?s=200',
						url: 'https://utilbot.co/',
					},
				},
			}),
		],
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
						link: '/blog/tags/changelog',
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