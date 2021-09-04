module.exports = {
    title: 'ErGo',
    description: '二狗智能 QQ bot',
    // base: '/vuepress/',
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@alias': './assets/'
    //         }
    //     }
    // },
    dest: './dist',
    themeConfig: {
        lastUpdated: 'Last Updated',
        collapsable: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '博客', link: '/blog/' },
            { text: 'Github', link: 'https://github.com/corgiclub/ErGo' }
        ],
        sidebar: {
            '/blog/': [
                '',
                '设计模式'
            ]
        },
        sidebarDepth: 3
    }
};