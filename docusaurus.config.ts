import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  title: 'SC Docs',
  tagline: 'Transforming ordinary teams into industry champions.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.salesconnection.my',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'salesconnection', // Usually your GitHub org/user name.
  projectName: 'sc-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        pages: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        docs: {
          path: 'docs',
          lastVersion: 'current',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
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

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'SC Docs',
      logo: {
        alt: 'SalesConnection Logo',
        src: 'https://cdn.salesconnection.my/pages/image/graphic/sales-conn-logo.webp',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'features',
        //   position: 'left',
        //   label: 'Features',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorial',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'restApi',
          position: 'left',
          label: 'APIs',
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'left'
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Legal',
              href: 'https://salesconnection.my/legal',
            },
            {
              label: 'FAQ',
              href: 'https://salesconnection.my/frequently-asked-questions',
            },
            {
              label: 'Security',
              href: 'https://salesconnection.my/security',
            },
          ],
        },
      ],
      copyright: `Copyright © 2010-${new Date().getFullYear()} Good Works Technology Sdn Bhd (Reg No 900920T)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
