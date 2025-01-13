// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import dotenv from 'dotenv';

// Load environment variables from a .env file (if it exists)
dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Wiki Transport Stack',
    tagline: 'Your one-stop transit data hub',
    favicon: 'img/favicon.png',

    // Set the production URL of your site
    url: process.env.SITE_URL || 'https://your-docusaurus-site.example.com',
    baseUrl: '/',

    organizationName: 'transportstack', // GitHub org/user name
    projectName: 'wiki.transportstack', // Repo name

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://gitlab.com/dts3943729/wiki-transport-stack/-/blob/main/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://gitlab.com/dts3943729/wiki-transport-stack/-/blob/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Transport Stack Wiki',
            logo: {
                alt: 'Transport Stack Logo',
                src: 'img/DTS_Option_Light.png',
            },
            items: [
                {to: '/docs/about-us', label: 'About Us', position: 'left'},
                {
                    label: 'Models',
                    position: 'left',
                    items: [
                        {to: '/docs/models/bus', label: 'Bus'},
                        {to: '/docs/models/metro-tabular', label: 'Metro'},
                        {to: '/docs/models/data-exchange', label: 'Data Exchange'},
                    ],
                },
                {href: 'https://gitlab.com/dts3943729/wiki-transport-stack/', label: 'GitLab', position: 'right'},
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {label: 'Models', to: '/docs/models/bus'},
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {label: 'GitLab', href: 'https://gitlab.com/dts3943729/wiki-transport-stack/'},
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {label: 'About Us', to: '/docs/about-us'},
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Transport Stack. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        colorMode: {
            disableSwitch: true, // Disable the toggle switch
            defaultMode: 'light', // Set the default mode to light
            respectPrefersColorScheme: false, // Ignore user's system color scheme
        },
    },
};

export default config;
