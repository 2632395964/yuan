module.exports = {
  title: "yuan",
  description: '基于Vue的UI组件',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      { title:'介绍',
        collapsable: false,
        sidebarDepth: 2,
        children:[
          '/introduce/',
        ]
      },
      {
        title: '入门',
        collapsable: false,
        sidebarDepth: 2,
        children: [ 
        '/install/',
        '/get-started/', ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
            './components/button',
            './components/input',
            './components/grid',
            './components/popover',
            './components/tabs',
            './components/toast',
            './components/collapse',
          ]
      }
    ]
  }
}