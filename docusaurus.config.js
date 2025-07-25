// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs Lab',
  tagline: 'Docs Lab is cool',
  favicon: 'img/tw_favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ais-dune.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-lab/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ais-dune', // Usually your GitHub org/user name.
  projectName: 'docs-lab', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
    // locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
      // en: {
      //   label: 'English',
      //   direction: 'ltr',
      //   htmlLang: 'en-US',
      // },
    },
  },

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contrabass-current',
        path: 'docs/contrabass/current',
        routeBasePath: 'contrabass/current',
        sidebarPath: require.resolve('./sidebars/sidebar-contrabass-current.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contrabass-3_0_4',
        path: 'docs/contrabass/version-3.0.4',
        routeBasePath: 'contrabass/3.0.4',
        sidebarPath: require.resolve('./sidebars/sidebar-contrabass-3.0.4.js'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // docs 플러그인은 plugins에서 개별로 정의함
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ais-dune/docs-lab/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Technical Writer Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'cbSidebar',
          docId: 'introduction',
          label: 'CONTRABASS',
          position: 'left',
          docsPluginId: 'contrabass-current',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cbSidebar',
          docId: 'introduction',
          label: 'CONTRABASS 3.0.4',
          position: 'left',
          docsPluginId: 'contrabass-3_0_4',
        },
      ],
    },
  },

  // themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // ({
      // Replace with your project's social card
    //   image: 'img/docusaurus-social-card.jpg',
    //   navbar: {
    //     title: '',
    //     logo: {
    //       alt: 'Docs Lab Logo',
    //       src: 'img/tw_logo_l2.png',
    //       srcDark: 'img/tw_logo_d2.png',
    //     },
    //     items: [
    //       {
    //         type: 'docSidebar',
    //         sidebarId: 'cbSidebar',
    //         docsPluginId: 'contrabass-current', 
    //         position: 'left',
    //         label: 'CONTRABASS',
    //       },
    //       {to: '/blog', label: 'Blog', position: 'left'},
    //       {
    //         href: 'https://github.com/facebook/docusaurus',
    //         label: 'GitHub',
    //         position: 'right',
    //       },
    //     ],
    //   },
    //   footer: {
    //     style: 'dark',
    //     links: [
    //       {
    //         title: 'Docs',
    //         items: [
    //           {
    //             label: 'Tutorial',
    //             to: '/docs/intro',
    //           },
    //         ],
    //       },
    //       {
    //         title: 'Community',
    //         items: [
    //           {
    //             label: 'Stack Overflow',
    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //           },
    //           {
    //             label: 'Discord',
    //             href: 'https://discordapp.com/invite/docusaurus',
    //           },
    //           {
    //             label: 'X',
    //             href: 'https://x.com/docusaurus',
    //           },
    //         ],
    //       },
    //       {
    //         title: 'More',
    //         items: [
    //           {
    //             label: 'Blog',
    //             to: '/blog',
    //           },
    //           {
    //             label: 'GitHub',
    //             href: 'https://github.com/facebook/docusaurus',
    //           },
    //         ],
    //       },
    //     ],
    //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    //   },
    //   prism: {
    //     theme: prismThemes.github,
    //     darkTheme: prismThemes.dracula,
    //   },
    // }),
};

export default config;
