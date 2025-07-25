/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cbSidebar: [
    {
      type: 'category',
      label: '소개',
      collapsible: false,
      collapsed: false,
      items: [
        'introduction',
      ],
    },
    {
      type: 'category',
      label: '사용 가이드',
      collapsible: true,
      collapsed: false,
      items: [
        // 예시 문서들
        // 'current/usage/install',
        // 'current/usage/configuration',
        // 'current/usage/deployment',
        'usage/configuration',
      ],
    },
  ],
};

module.exports = sidebars;
