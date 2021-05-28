/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Utilbot Docs',
  tagline: '',
  url: 'https://docs.utilbot.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'utilbot', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Utilbot Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/utilbot.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'main/intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'commands/command-overview',
          position: 'left',
          label: 'Commands',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/utilbot/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/main/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Main Site',
              href: 'https://utilbot.co',
            },
            {
              label: 'Discord',
              href: 'https://utilbot.co/discord',
            },
            {
              label: 'Bot Invite',
              href: 'https://utilbot.co/invite',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/utilbot/documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Utilbot. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/utilbot/documentation/edit/master/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/utilbot/documentation/edit/master/blog/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
