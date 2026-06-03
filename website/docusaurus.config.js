// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Arduino Mega 2560 R3: Учебник',
  tagline: 'От первого Blink до сложных проектов',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://maksimkh34.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/arduino/',

  // GitHub pages deployment config.
  organizationName: 'maksimkh34',
  projectName: 'arduino',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'md',
  },

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
          path: '../chapters',
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/maksimkh34/arduino/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Arduino Mega 2560 R3',
        logo: {
          alt: 'Arduino Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/maksimkh34/arduino',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Контент',
            items: [
              {
                label: 'Учебник',
                to: '/',
              },
            ],
          },
          {
            title: 'Ссылки',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/maksimkh34/arduino',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arduino Textbook. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
