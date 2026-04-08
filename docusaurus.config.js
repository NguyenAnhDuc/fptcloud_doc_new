// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

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
  trailingSlash: true,

  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
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
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ja',
        path: 'docs-ja',
        routeBasePath: 'docs/ja',
        sidebarPath: './sidebars.js',
      },
    ],
    // Custom plugin: build URL mapping across languages for language switcher
    './src/docusaurus/langMappingPlugin.js',
    // Custom plugin: scope search to active language only
    function customSearchScopePlugin() {
      return {
        name: 'custom-search-scope',
        configureWebpack(_config, isServer) {
          if (isServer) return {};
          return {
            resolve: {
              alias: {
                '@docusaurus/plugin-content-docs/client': require.resolve(
                  './src/docusaurus/customDocsClient.js'
                ),
              },
            },
          };
        },
      };
    },
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
            type: 'custom-LanguageSwitcher',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'English', to: '/docs/en/intro/' },
              { label: 'Tiếng Việt', to: '/docs/vi/intro/' },
              { label: '日本語', to: '/docs/ja/intro/' },
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
