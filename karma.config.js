module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [

            { pattern: './src/aa-sequence/*.js', type: "module" },
            { pattern: './src/**/*.js', type: "module" },
            { pattern: './tests/**/*.js', type: "module" }
        ],
        reporters: ['progress'],
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
    })
}