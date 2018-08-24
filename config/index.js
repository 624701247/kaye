'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

var curTimestamp = null
var getTimestampForamt = function() {
    if(curTimestamp) {
        return curTimestamp
    }

    var date = new Date();
    var seperator1 = "-";
    // var year = date.getFullYear();
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    // var sec = date.getSeconds()


    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    // var currentdate = year + seperator1 + month + seperator1 + strDate;
    var currentdate = month + '-' + strDate + '--' + hour + '-' + minutes
    curTimestamp = currentdate
    return currentdate;
}

module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},

        // Various Dev Server settings
        //   kone point : 这里修改开发运行的url
        host: 'localhost', // can be overwritten by process.env.HOST
        // host: '172.18.11.116',
        port: 8088, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: false, //  kone point 是否开启 eslint 规范
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        // 将 __dirname 项目根目录下的index.html 作为 打包的index.html模板
        // kone point: 这里我可以把打包目录加上了时间戳
        // index: path.resolve(__dirname, '../dist/' + getTimestampForamt() + '/index.html'), 
        index: path.resolve(__dirname, '../dist/index.html'), 


        // Paths
        // assetsRoot: path.resolve(__dirname, '../dist' + getTimestampForamt()),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',

        // kone point: 打包出来的index.html文件内的引入的 css, js 的路径前缀
        // assetsPublicPath: '/',  //  根路径        例如： src=/static/js/manifest.3ad1d5771e9b13dbdad2.js
        assetsPublicPath: './', //  当前路径   例如： src=./static/js/manifest.3ad1d5771e9b13dbdad2.js

        /**
         * Source Maps
         */
        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}

// 项目配置的知识点在这里


/*
// kone point ： 将vue两个单位的缩进改成宽度为4的 tab

本来项目根目录下有如下配置文件  .editorconfig。 实在搞不懂怎么设置，我直接删除了，搞定！tab设置变回按照ide的设置为准了。
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

*/