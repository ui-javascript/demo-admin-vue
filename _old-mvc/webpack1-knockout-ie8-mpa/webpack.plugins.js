/**inject <script> to <head> */
function MyPlugin(options) {
    console.log(options)
}
MyPlugin.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function (compilation) {
        console.log('The compiler is starting a new compilation...');

        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
            htmlPluginData.html = htmlPluginData.html.replace('</head>', 
            `<!--[if lt IE 9]>
            <script src="/assets/vendors/4.5.7/es5-shim-4.5.7.min.js"></script>
            <script src="/assets/vendors/4.5.7/es5-sham-4.5.7.min.js"></script>
            <script src="/assets/vendors/3.3.2/json3-3.3.2.min.js"></script>
            <script src="/assets/vendors/3.7.3/html5shiv-3.7.3.min.js"></script>
            <script src="/assets/vendors/addEventListener-polyfill-1.0.0.js"></script>
            <script src="/assets/vendors/respond.js"></script>
            <![endif]-->
            <script>
                if (!String.prototype.trim) {
                    String.prototype.trim = function () {
                        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                    };
                }
                if (!Array.prototype.indexOf) {
                    Array.prototype.indexOf = function(item){
                        var i = 0;
                        for (i = this.length - 1; i >= 0; i--) {
                            if (this[i] === item) {
                                break;
                            }
                        }
                        return i;
                    }
                }
            </script>
            <script src="/assets/vendors/knockout-3.4.2.js"></script>
            <script src="/assets/vendors/knockout.mapping-2.4.1.js"></script>
            <script src="/assets/vendors/moment.min.js"></script>
            </head>`);

            return callback(null, htmlPluginData);
        });
    });
};

module.exports = MyPlugin;