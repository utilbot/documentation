/**
 * Author directory for changelog entries. Keyed by the id used in an
 * entry's `authors` frontmatter (src/content/changelog/*.mdx).
 */
export interface Author {
	name: string;
	title?: string;
	picture: string;
	url: string;
}

export const AUTHORS: Record<string, Author> = {
	herrtxbias: {
		name: "HerrTxbias",
		title: "Project Lead & Developer",
		picture: "https://avatars.githubusercontent.com/u/16502676?s=200",
		url: "https://herrtxbias.dev",
	},
	team: {
		name: "Utilbot Team",
		picture: "https://avatars.githubusercontent.com/in/331286?s=200",
		url: "https://utilbot.co/",
	},
};
