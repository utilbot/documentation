const math = require('remark-math');
const katex = require('rehype-katex');

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
          label: 'Commands and Interactions',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
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
    announcementBar: {
      id: 'old_v5',
      content:
        '🛠 You can still access the v5 Documentation of the Utilbot <a target="_blank" rel="noopener noreferrer" href="http://v5.utilbot.info">here</a>!<br />',
      backgroundColor: '#eba300',
      textColor: '#000000',
      isCloseable: true,
    },
    algolia: {
      apiKey: '0f674592087ad3e8adfe30874656e1d6',
      indexName: 'docs_master',
      appId: 'DX3S4XTWVM',
      contextualSearch: true,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: function ({
            locale,
            version,
            versionDocsDirPath,
            docPath,
            permalink,
          }) {
            return `https://github.com/utilbot/documentation/edit/master/${versionDocsDirPath}/${docPath}`;
          },
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          /* admonitions: {
            customTypes: {
              primary: {
                keyword: 'primary',
                ifmClass: 'primary',
              },
              dark: {
                keyword: 'dark',
                ifmClass: 'dark',
              },
              secondary: 'note',
              success: 'tip',
              danger: {
                keyword: 'danger',
                ifmClass: 'danger',
              },
              warning: 'caution',
              'info': 'info',
            },
            icons: "none",
          }, */
          versions: {
            current: {
              label: '🚧 Canary 🚧',
              path: 'next',
            },
          },
        },
        /* blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/utilbot/documentation/edit/master/blog/',
        }, */
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/alerts.css'), require.resolve('./src/css/tables.css')],
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};
