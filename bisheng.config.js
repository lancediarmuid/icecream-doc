const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    source: {
        components: './components',
        docs: './docs',
    },
    output: './dist',
    theme: './theme',
    htmlTemplate: path.join(__dirname, './theme/static/template.html'),
    // 主题配置
    themeConfig: {
        categoryOrder: {
            前言: 2,
            文档: 100,
        },
        typeOrder: {
            通用: 2,
            数据展示: 3,
        }
    },
    lessConfig: {
        javascriptEnabled: true,
    },
    baseConfig: {
        logo: "https://test-1253763202.cos.ap-shanghai.myqcloud.com/applications/icecream.png",
        projectName: 'Icecream Design',
        homeUrl: '/docs/react/getting-started.html'
    }
};