// const path = require('path');

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai', 'esm'],
        files: [

            
            { pattern: './tests/**/*.js', type: 'module' },
            // { pattern: './src/**/*.js', type: 'module' },
        ],
        reporters: ['progress', 'coverage'],
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeDebugging'],
        customLaunchers: {
            ChromeDebugging: {
              base: 'Chrome',
              flags: [ '--remote-debugging-port=9876' ]
            }
          },
        autoWatch: false,
        concurrency: Infinity,
        esm: {
            nodeResolve: true,
            coverage: true,
        },
        'module': 'es6',
        'moduleResolution': 'node',
        // customLaunchers: {
        //     FirefoxHeadless: {
        //         base: 'Firefox',
        //         flags: ['-headless'],
        //     },
        // },

        plugins: [
            // load plugin
            require.resolve('@open-wc/karma-esm'),

            // fallback: resolve any karma- plugins
            'karma-*',
        ],


        preprocessors: {
            './src/**/*.js': ['karma-coverage-istanbul-instrumenter'],

        },
        coverageIstanbulInstrumenter: {
            esModules: true,
            reporters: [
                { type: 'text', subdir: '.', file: 'text.txt' }
            ],

            dir: 'coverage/',
            plugins: [
                'asyncGenerators',
                'dynamicImport',
                'objectRestSpread',
                'optionalCatchBinding',
                'flow',
                'jsx',


            ]
        },

        proxies:{
            // '/node_modules/':'/base/node_modules/',
            // '@polymer/' : '/base/node_modules/@polymer'
        }   



    });


};