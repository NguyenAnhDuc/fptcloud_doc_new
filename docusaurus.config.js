// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FPT Cloud Documentation',
  tagline: 'FPT Cloud Infrastructure Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://fptcloud-docs.ducna.xyz',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownImages: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'en',
          path: 'docs',
          routeBasePath: 'docs/en',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        language: ['en', 'vi', 'ja'],
        indexBlog: false,
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vi',
        path: 'docs-vi',
        routeBasePath: 'docs/vi',
        sidebarPath: './sidebars-vi.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ja',
        path: 'docs-ja',
        routeBasePath: 'docs/ja',
        sidebarPath: './sidebars-ja.js',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'FPT Cloud Docs',
        logo: {
          alt: 'FPT Cloud Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Language',
            position: 'right',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'tutorialSidebar',
                docsPluginId: 'en',
                label: 'English',
              },
              {
                type: 'docSidebar',
                sidebarId: 'tutorialSidebar',
                docsPluginId: 'vi',
                label: 'Tiếng Việt',
              },
              {
                type: 'docSidebar',
                sidebarId: 'tutorialSidebar',
                docsPluginId: 'ja',
                label: '日本語',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'English', to: '/docs/en/' },
              { label: 'Tiếng Việt', to: '/docs/vi/' },
              { label: '日本語', to: '/docs/ja/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FPT Cloud. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
