const sidebars = {
  // Sidebar for models
  modelsSidebar: [
    {
      type: 'category',
      label: 'Data Models',
      items: [
        {
          type: 'category',
          label: 'Open Transit Data (OTD)',
          items: [
            { type: 'doc', id: 'models/otd', label: 'Overview' },
{ type: 'doc', id: 'models/web-portal', label: 'Web Portal' },
'models/bus',
'models/metro-tabular',
'models/data-exchange',
'models/accessibility',
'models/shared-mobility',
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
  ],

  useCasesSidebar: [
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/journey-planner',
        'use-cases/eta-calculator',
        'use-cases/park-and-ride',
        'use-cases/bus-ticketing-ondc',
        'use-cases/bus-auto-outshedding',
        'use-cases/bus-schedule-adherence',
        'use-cases/bus-bunching-detection',
      ],
      collapsed: false,
    },
  ],

  // Default tutorial sidebar
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Transport Stack Wiki',
    },
    {
      type: 'doc',
      id: 'about-us',
      label: 'About Transport Stack',
    },
    {
      type: 'doc',
      id: 'delhi-transport-stack',
      label: 'Delhi Transport Stack',
    },
  ],

  // New sidebar configuration
  // docsSidebar: [
  //   {
  //     type: 'doc',
  //     id: 'intro',
  //     label: 'Transport Stack Wiki',
  //   },
  //   {
  //     type: 'doc',
  //     id: 'about-us',
  //     label: 'About Transport Stack',
  //   },
  //   // {
  //   //   type: 'category',
  //   //   label: 'Data Models',
  //   //   items: [
  //   //     'models/bus',
  //   //     'models/metro-tabular',
  //   //     'models/data-exchange',
  //   //   ],
  //   // },
  //   // {
  //   //   type: 'category',
  //   //   label: 'Use Cases',
  //   //   items: [
  //   //     'use-cases/journey-planner',
  //   //     'use-cases/eta-calculator',
  //   //     'use-cases/park-and-ride',
  //   //     'use-cases/bus-ticketing-open-platform',
  //   //     'use-cases/bus-ticketing-ondc',
  //   //     'use-cases/bus-auto-outshedding',
  //   //     'use-cases/bus-schedule-adherence',
  //   //     'use-cases/bus-bunching-detection',
  //   //   ],
  //   // },
  //   // {
  //   //   type: 'doc',
  //   //   id: 'knowledge-hub',
  //   //   label: 'Knowledge Hub',
  //   // },
  // ],
};

module.exports = sidebars;
