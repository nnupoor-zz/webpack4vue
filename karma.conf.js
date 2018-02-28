// Karma configuration
// Generated on Tue Aug 22 2017 17:57:58 GMT+0530 (IST)
var grep = require('karma-webpack-grep');
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    webpackConfig.plugins = (webpackConfig.plugins || []).concat(grep({
        grep: config.grep,
        basePath: '.',
        testContext: '../src/'
    }))
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon'],


        // list of files / patterns to load in the browser
        files: [
          './src/tests/**/*.spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "./src/tests/**/*.spec.js": ["webpack"],
        },

        //webpack config
        //taken from: https://cafedev.org/article/2016/12/testing-with-wepack-2-inject-loader-karma-mocha-chai-and-sinon/
        webpack: require("./webpack.config.js"),
        webpackMiddleware: {
            stats: "errors-only"
        },

        plugins: [
          // Karma will require() these plugins
          "karma-requirejs",
          "karma-mocha",
          "karma-chai",
          "karma-sinon",
          "karma-webpack",
          "karma-chrome-launcher"
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable` / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        customLaunchers: {
            ChromeWithoutSecurity: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        },
        browserNoActivityTimeout: 100000,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
