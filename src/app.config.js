export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/about/about',
    'pages/info/info'
  ],
  lazyCodeLoading: 'requiredComponents',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#1B15F7',
    borderStyle: 'white',
    backgroundColor: '#fafafa',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/home.png',
        selectedIconPath: './assets/images/home_active.png'
      },
      {
        pagePath: 'pages/about/about',
        text: '关于',
        iconPath: './assets/images/about.png',
        selectedIconPath: './assets/images/about_active.png'
      }
    ]
  }
})
