// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import dotenv from 'dotenv';

// Load environment variables from a .env file (if it exists)
dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Wiki Transport Stack',
    tagline: 'Powering innovation and impact with Digital Public Infrastructure & Goods',
    favicon: 'img/favicon.png',

    // Set the production URL of your site
    url: process.env.SITE_URL || 'https://your-docusaurus-site.example.com',
    baseUrl: '/',

    organizationName: 'transport-stack', // GitHub org/user name
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
                    editUrl: 'https://gitlab.com/transport-stack/wiki-transport-stack/-/blob/main/',
                    remarkPlugins: [
                        [require('mdx-mermaid'), {}],
                    ],
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://gitlab.com/transport-stack/wiki-transport-stack/-/blob/main/',
                    remarkPlugins: [
                        [require('mdx-mermaid'), {}],
                    ],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        image: 'img/ts-preview.png',
        navbar: {
            title: 'Transport Stack Wiki',
            logo: {
                alt: 'Transport Stack Logo',
                src: 'img/DTS_Option_Light.png',
            },
            items: [
                {
                    to: '/docs/about-us',
                    label: 'About Us',
                    position: 'left'
                },
                {
                    type: 'dropdown',
                    label: 'Data Models',
                    position: 'left',
                    items: [
                        {to: '/docs/models/otd', label: 'Open Transit Data (OTD)'},
                        {to: '/docs/models/bus', label: 'Bus'},
                        {to: '/docs/models/metro-tabular', label: 'Metro'},
                        {to: '/docs/models/data-exchange', label: 'Data Exchange'},
                        {to: '/docs/models/accessibility', label: 'Accessibility'},
                        {to: '/docs/models/shared-mobility', label: 'Shared Mobility'},
                    ],
                },
                {
                    type: 'dropdown',
                    label: 'Use Cases',
                    position: 'left',
                    items: [
                        {
                            label: 'Journey Planner',
                            to: '/docs/use-cases/journey-planner',
                        },
                        {
                            label: 'ETA Calculator',
                            to: '/docs/use-cases/eta-calculator',
                        },
                        {
                            label: 'Park & Ride',
                            to: '/docs/use-cases/park-and-ride',
                        },
                        {
                            label: 'Bus Ticketing - ONDC Seller',
                            to: '/docs/use-cases/bus-ticketing-ondc',
                        },
                        {
                            label: 'Bus - Auto Outshedding',
                            to: '/docs/use-cases/bus-auto-outshedding',
                        },
                        {
                            label: 'Bus - Schedule Adherence',
                            to: '/docs/use-cases/bus-schedule-adherence',
                        },
                        {
                            label: 'Bus - Bunching Detection',
                            to: '/docs/use-cases/bus-bunching-detection',
                        }
                    ],
                },
                {to: '/docs/knowledge-hub', label: 'Knowledge Hub', position: 'left'},
                {href: 'https://gitlab.com/transport-stack/wiki-transport-stack', label: 'GitLab', position: 'right'},
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Links',
                    items: [
                        {
                            label: 'About Us',
                            to: '/docs/about-us',
                        },
                        {
                            label: 'About TS WIKI',
                            to: '/docs/intro',
                        },
                        {
                            label: 'Contribute',
                            href: 'https://gitlab.com/transport-stack/wiki-transport-stack',
                        },
                        {
                            label: 'Feedback',
                            href: 'https://delhi.transportstack.in/help-support',
                        },
                        {
                            label: 'Contact Us',
                            href: 'mailto:info@transportstack.in',
                        },
                    ],
                },
                {
                    title: 'Legal',
                    items: [
                        {
                            label: 'Policy Documents',
                            href: 'https://delhi.transportstack.in/privacypolicy',
                        },
                    ],
                },
            ],
            copyright: `Copyright ${new Date().getFullYear()} Transport Stack. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        algolia: {
          appId: 'O1J9RIKZA7',
          apiKey: 'e6a227b2c05ffa4b689d3cb3614db73c',
          indexName: 'staging-transportstack',
          contextualSearch: true,
          insights: true,
          searchPagePath: 'search',
          searchParameters: {},
        },
        colorMode: {
            disableSwitch: true, // Disable the toggle switch
            defaultMode: 'light', // Set the default mode to light
            respectPrefersColorScheme: false, // Ignore user's system color scheme
        },
    },
};

export default config;
