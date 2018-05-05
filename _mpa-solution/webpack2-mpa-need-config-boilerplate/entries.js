module.exports = [
    // Vue页示例
    {
        filename: 'page0.html',
        entry: './views/page0',
        template: './views/page0/tpl.html',
        chunks: ['vendor0']
    },

    // React页示例
    {
        filename: 'page1.html',
        entry: './views/page1',
        chunks: ['vendor1'],
        // inject:'head||body',
        title: 'React'
    },

    // 普通页示例
    {
        filename: 'page2.html',
        entry: './views/page2',
        template: './views/page2/tpl.html'
    },
];