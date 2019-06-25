'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

const os = require('os')
const getIpV4 = () => {
  var ifaces = os.networkInterfaces()
  var ipArr = [{
    dev: 'local',
    ip: '127.0.0.1'
  }]
  for(var dev in ifaces) {
    ifaces[dev].forEach(function(details) {
      if(details.family === 'IPv4' && !details.internal) {
        ipArr.push({
            dev: dev,
            ip: details.address
        })
        return;
      }
    })
  }
  var idx = ipArr.findIndex((item) => {
    return item.dev === 'WLAN'
  })
  if(idx == -1) {
    idx = ipArr.length - 1
  }
  return ipArr[idx].ip
}

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

const env = require('./dev.env')
let base = env.BASE_URL.replace(/"/g, '')

module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: base,
        proxyTable: {},

        // Various Dev Server settings

        // kone point : localhost能访问而ip不能访问的解决方法： host 设置为 '0.0.0.0' 或者 本地ipv4（会导致无法通过localhost访问）
        host: getIpV4(),//'localhost', // can be overwritten by process.env.HOST

        port: 2019, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

        autoOpenBrowser: false, // 成功运行后自动用浏览器打开网页
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

        // kone point: 这里我可以把打包目录加上了时间戳
        // index: path.resolve(__dirname, '../dist/' + getTimestampForamt() + '/index.html'),

        // 将 __dirname 项目根目录下的index.html 作为 打包的index.html模板
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
