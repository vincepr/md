// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'vincepr-markdown-docs',
  tagline: 'Just storing whatever is recent',
  url: 'https://vincepr.github.io',
  baseUrl: '/md/',
  staticDirectories: ['static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vincepr', // Usually your GitHub org/user name.
  projectName: 'md', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    localeConfigs: {
      de: {
        label: "Deutsch",
        htmlLang: "de",
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vincepr/md/blob/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vincepr/md/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark"
      },
      navbar: {
        title: 'md docs',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/playground', label: 'Js-Playground', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          
          {
            href: 'https://github.com/vincepr/md',
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
                label: 'Mitschriften & Co.',
                to: '/',
              },
            ],
          },
          {
            title: 'JavaScript',
            items: [
              {
                label: 'Aufgaben',
                to: '/blog/tags/js-hero',
              },
              {
                label: 'Playground',
                to: '/playground',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: 'Recent',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vincepr/md',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} vincepr.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages:["rust"],
      },
    }),

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,                         // remove Blogs from the search
        language: ["en", "de"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/"                    // because we are in Docs-Only-Mode we need to overwrite the default
      }),
    ],
  ],

};

module.exports = config;
