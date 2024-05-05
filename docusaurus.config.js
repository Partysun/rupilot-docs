// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rupilot',
  tagline: 'Ассистент который поможет',
  favicon: 'img/favicon.ico',

  url: process.env.URL || "http://localhost",
  baseUrl: process.env.BASE_URL || "/",

  organizationName: 'Zatsepin.dev',
  projectName: 'rupilot-docs',

  //onBrokenLinks: 'throw',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      navbar: {
        title: 'Rupilot',
        logo: {
          alt: 'Rupilot',
          src: 'img/logo.svg',
          href: 'https://rupilot.ru',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
          {to: '/blog', label: 'Блог', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Как начать',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/62BAQuZGqg'
              }
            ],
          },
          {
            title: '...',
            items: [
              {
                label: 'Блог',
                to: '/blog',
              }
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Rupilot от zatsepin.dev.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
