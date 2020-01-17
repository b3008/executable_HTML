// const path = require('path');

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [

            { pattern: './src/aa-sequence/*.js', type: "module" },
            { pattern: './src/**/*.js', type: "module" },
            { pattern: './tests/**/*.js', type: "module" }
        ],
        reporters: ['progress', 'coverage'],
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        concurrency: Infinity,

        // customLaunchers: {
        //     FirefoxHeadless: {
        //         base: 'Firefox',
        //         flags: ['-headless'],
        //     },
        // },

        
        preprocessors: {
            './src/**/*.js': ["karma-coverage-istanbul-instrumenter"],

        },
        coverageIstanbulInstrumenter: {
            esModules: true,
            reporters:[
                {type:"text", subdir: '.', file:"text.txt"}
            ],
        
            dir: 'coverage/',
            plugins: [
                'asyncGenerators',
                'dynamicImport',
                'objectRestSpread',
                'optionalCatchBinding',
                'flow',
                'jsx'
            ]
        },
        
    })


}