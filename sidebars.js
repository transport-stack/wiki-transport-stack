const sidebars = {
  // Sidebar for models
  modelsSidebar: [
    {
      type: 'category',
      label: 'Models',
      items: [
        'models/bus',
        'models/metro',
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
      label: 'About Us',
    },
  ],
};

export default sidebars;
