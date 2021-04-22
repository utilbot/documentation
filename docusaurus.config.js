/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Utilbot Docs',
  tagline: '',
  url: 'https://docs.utilbot.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'herrtxbias', // Usually your GitHub org/user name.
  projectName: 'utilbot-docs', // Usually your repo name.
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
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/herrtxbias/utilbot-docs',
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
              to: '/docs/intro',
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
              href: 'https://github.com/herrtxbias/utilbot-docs',
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
          editUrl: 'https://github.com/HerrTxbias/utilbot-docs/edit/master/',
        },
        /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/HerrTxbias/utilbot-docs/edit/master/blog/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
