import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AgeLapse',
  tagline: 'Auto-stabilize your photos to create a smooth "photo-a-day" project.',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://agelapse.com',
  baseUrl: '/',
  organizationName: 'hugocornellier',
  projectName: 'hugocornellier.github.io',

  trailingSlash: true,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [{ src: '/force-dark.js', async: false }],

  plugins: [
    require.resolve('./src/plugins/tailwind'),
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/tailwind.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AgeLapse',
      logo: { alt: 'AgeLapse Logo', src: 'img/docusaurus.png' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Download', to: '/' },
            { label: 'Documentation', to: 'docs/intro' },
          ],
        },
        {
          title: 'Community',
          items: [{ label: 'Discord (Coming Soon)', href: 'https://agelapse.com/' }],
        },
        {
          title: 'More',
          items: [{ label: 'Source Code - GitHub', href: 'https://github.com/hugocornellier/agelapse' }],
        },
      ],
      copyright: ` `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;